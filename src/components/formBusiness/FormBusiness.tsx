'use client';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import { Constants } from '@/helpers/oldApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import Separator from '../separator/Separator';
import { ToggleButtonForm } from './ToogleForm';
import { countries } from 'country-data';
import { staticCountryCodes } from '@/lib/constants/shared/countryCodes';
import { useLoadingStore } from '@/store/loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { t } from '@/lib/constants/i18n';
import { formBusinessData } from '@/lib/constants/shared/formBusinessData';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import { getCountryFromCookie, getDialCode } from '@/helpers/countryDialCodes';

interface ProfileFormProps {
  defaultType?: 'business' | 'professional';
  buttonText?: string;
  onSuccess?: () => void;
}

export const ProfileForm = ({ defaultType, buttonText, onSuccess }: ProfileFormProps) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const { handlecountryCodesArray, handleLoadingStatus } = useLoadingStore();
  const { countryCodesArray } = useLoadingStore();
  const [business_type, setBusinessType] = useState(defaultType === 'business');
  const [homeService, setHomeService] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [contentChange, setContentChange] = useState({
    serviceProvidorType: defaultType === 'business' ? 'Business' : 'Professional',
    homeVisits: 'No',
  });

  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const formContent = t(formBusinessData, locale);
  const textForm = formContent.formDescription;
  const descriptionForm = formContent.formPlaceholder;

  // Geo-based country code default
  const detectedCountry = getCountryFromCookie();
  const defaultDialCode = getDialCode(detectedCountry);

  const getFormSchema = (isBusiness: boolean) =>
    z
      .object({
        name: z.string().min(1, textForm?.errorRequired || 'Required'),
        business_type: z.string(),
        email: z.string().email(descriptionForm?.errorEmail),
        social_media: z.string(),
        country_code: z.string(),
        mobile: z.string().min(1, textForm?.errorRequired || 'Required'),
        location_count: z.string(),
        staff_count: z.string(),
        business_name: z.string(),
      })
      .superRefine((data, ctx) => {
        if (isBusiness) {
          if (!data.business_type) {
            ctx.addIssue({
              code: 'custom',
              path: ['business_type'],
              message: textForm?.errorRequired || 'Required',
            });
          }
          if (!data.business_name) {
            ctx.addIssue({
              code: 'custom',
              path: ['business_name'],
              message: textForm?.errorRequired || 'Required',
            });
          }
        }
      });

  const form = useForm({
    resolver: async (values, context, options) => {
      const schema = getFormSchema(business_type);
      return zodResolver(schema)(values, context, options);
    },
    defaultValues: {
      type: 'enquiry',
      name: '',
      business_type: '',
      email: '',
      social_media: '',
      mobile: '',
      location_count: '',
      staff_count: '',
      business_name: '',
      content: '',
      country_code: defaultDialCode,
    },
  });

  // Clear stale errors when business_type toggle changes
  useEffect(() => {
    form.clearErrors();
  }, [business_type, form]);

  // Memoize sorted and filtered country codes for better performance
  const sortedCountryCodes = useMemo(() => {
    const usedCountryCodes = new Set();
    return countryCodesArray
      .slice()
      .sort((a, b) => a.country_code.localeCompare(b.country_code))
      .filter((item) => {
        const country_code = item.country_code;
        if (
          !item.image ||
          !country_code ||
          usedCountryCodes.has(country_code)
        ) {
          return false;
        }
        usedCountryCodes.add(country_code);
        return true;
      });
  }, [countryCodesArray]);

  const onSubmit = async (data: any) => {
    const contentChangeString = JSON.stringify(contentChange);
    const formData = {
      ...data,
      content: contentChangeString,
      type: 'enquiry',
    };

    // Enrich payload for n8n with source tracking
    const enrichedData = {
      ...formData,
      source: typeof window !== 'undefined' ? window.location.pathname : '',
      locale: locale,
      detectedCountry: detectedCountry || '',
      submittedAt: new Date().toISOString(),
      utmSource: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || '' : '',
      utmMedium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') || '' : '',
      utmCampaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') || '' : '',
    };

    try {
      setIsSubmit(true);

      // Send to both endpoints in parallel
      const [response] = await Promise.all([
        fetch(`${Constants.BASE_URL}vendor/demo/enquiry`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }),
        // n8n webhook — fire and forget, don't block on failure
        fetch('https://ra7eme.app.n8n.cloud/webhook/lead-capture', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(enrichedData),
        }).catch(() => {}),
      ]);

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      await response.json();
      form.reset();
      onSuccess?.();
    } catch {
      setIsSubmit(false);
      toast.error(descriptionForm?.errorSubmit || 'Error!');
    } finally {
      setIsSubmit(false);
    }
  };
  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };
  const showToggle = !defaultType;

  useEffect(() => {
    handleLoadingStatus(true);
    handlecountryCodesArray(staticCountryCodes);
  }, [handlecountryCodesArray, handleLoadingStatus]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" bg-white p-6 rounded-xl mt-[48px] md:mx-auto md:w-[860px]"
      >
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'name' ? 'text-[#8B6554]' : ''
                  }`}
                >
                  {textForm?.name}
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#8B6554] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={descriptionForm?.name}
                    {...field}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'email' ? 'text-[#8B6554]' : ''
                  }`}
                >
                  {textForm?.email}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="focus:text-[#8B6554] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={descriptionForm?.email}
                    {...field}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {showToggle && (
          <div className="w-full mt-6">
            <p className="text-[#172524] ltr:font-montserrat font-semibold mb-2">
              {textForm?.serviceProvidor}
            </p>
            <ToggleButtonForm
              firstValue={textForm?.serviceProvidorValue[0]}
              secondValue={textForm?.serviceProvidorValue[1]}
              homeService={business_type}
              setHomeService={setBusinessType}
              setContent={setContentChange}
              name="serviceProvidorType"
            />
          </div>
        )}
        {business_type && (
          <div className="md:flex md:justify-between">
            <FormField
              control={form.control}
              name="business_name"
              render={({ field }) => (
                <FormItem className="md:w-full mt-6 ">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === ' business_name' ? 'text-[#8B6554]' : ''
                    }`}
                  >
                    {textForm?.businessName}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus:text-[#8B6554] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      placeholder={descriptionForm?.businessName}
                      {...field}
                      onFocus={() => handleFocus('business_name')}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="business_type"
              render={({ field }) => (
                <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === 'business_type' ? 'text-[#8B6554]' : ''
                    }`}
                  >
                    {textForm?.businessType}
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
                        <SelectValue placeholder={descriptionForm?.businessType} />
                      </SelectTrigger>
                      <SelectContent>
                        {descriptionForm?.businessTypeOptions?.map(
                          (option: string, index: number) => (
                            <SelectItem key={index} value={option}>
                              {option}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <div className="md:flex md:justify-between">
          <div className="w-[100%] flex flex-grow-2">
            <div className="w-1/3 md:w-1/4 flex-grow-1">
              <FormField
                control={form.control}
                name="country_code"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel
                      className={`ltr:font-montserrat font-semibold text-base ${
                        activeField === 'country_code' ? 'text-[#8B6554]' : ''
                      }`}
                    >
                      {textForm?.countryCode || 'Code'}
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value); // Update form's country_code field
                        }}
                      >
                        <SelectTrigger className="w-auto flex border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sortedCountryCodes.map((item) => {
                            const country_code = item.country_code;
                            return (
                              <SelectItem
                                key={`${country_code}-${item.name}`}
                                value={country_code}
                              >
                                <span className="flex items-center justify-center text-nowrap gap-1">
                                  <span className="text-base leading-none">{item.image}</span>
                                  {country_code}
                                </span>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-2/3 md:w-3/4">
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem className="md:w-full mt-6">
                    <FormLabel
                      className={`ltr:font-montserrat font-semibold text-base ${
                        activeField === 'mobile' ? 'text-[#8B6554]' : ''
                      }`}
                    >
                      {textForm?.phoneNumber}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus:text-[#8B6554] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                        type="number"
                        placeholder=""
                        {...field}
                        onFocus={() => handleFocus('mobile')}
                        onBlur={handleBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="w-[100%] flex-grow-4">
            <FormField
              control={form.control}
              name="social_media"
              render={({ field }) => (
                <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === 'social_media' ? 'text-[#8B6554]' : ''
                    }`}
                  >
                    {textForm?.socialMediaAccount}{' '}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus:text-[#8B6554] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      placeholder={descriptionForm?.socialMediaAccount}
                      {...field}
                      onFocus={() => handleFocus('social_media')}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {business_type && (
          <div className="md:flex md:justify-between">
            <FormField
              control={form.control}
              name="location_count"
              render={({ field }) => (
                <FormItem className="md:w-full mt-6">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === 'location_count' ? 'text-[#8B6554]' : ''
                    }`}
                  >
                    {textForm?.numberofLocations}{' '}
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
                        <SelectValue
                          className="flex flex-row-reverse"
                          placeholder="0"
                        />
                      </SelectTrigger>
                      <SelectContent className="overflow-y-auto max-h-[10rem] ">
                        {descriptionForm.numberofLocations.length &&
                          descriptionForm.numberofLocations.map(
                            (item: any, index: number) => {
                              return (
                                <SelectItem
                                  key={index}
                                  value={item}
                                  className="flex "
                                >
                                  {item}
                                </SelectItem>
                              );
                            },
                          )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="staff_count"
              render={({ field }) => (
                <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4 ">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === 'staff_count' ? 'text-[#8B6554]' : ''
                    }`}
                  >
                    {textForm?.numberofStaff}{' '}
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
                        <SelectValue className="flex " placeholder="0" />
                      </SelectTrigger>
                      <SelectContent className="overflow-y-auto max-h-[10rem] rtl:flex-row-reverse">
                        {descriptionForm.numberofStaff.length &&
                          descriptionForm.numberofStaff.map(
                            (item: any, index: number) => {
                              return (
                                <SelectItem
                                  key={index}
                                  value={item}
                                  className="flex"
                                >
                                  {item}
                                </SelectItem>
                              );
                            },
                          )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <div className="w-full mt-6">
          <p className="text-[#172524] ltr:font-montserrat font-semibold mb-2">
            {textForm?.homeServiceVisits}{' '}
            {textForm?.optionalLabel && (
              <span className="text-[#7A8786] font-normal">
                {textForm.optionalLabel}
              </span>
            )}
          </p>
          <ToggleButtonForm
            firstValue={textForm?.homeServiceVisitsList?.[0]}
            secondValue={textForm?.homeServiceVisitsList?.[1]}
            homeService={homeService}
            setHomeService={setHomeService}
            setContent={setContentChange}
            name="homeVisits"
          />
        </div>

        <Separator className="bg-[#E8E9E9] mt-6" />
        <Button
          type="submit"
          disabled={isSubmit}
          className="bg-primary text-white border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-white hover:text-primary ltr:font-montserrat font-semibold md:h-auto"
        >
          {isSubmit ? (textForm?.buttonLoading || 'Sending...') : buttonText || `${textForm?.buttonText}`}
        </Button>
      </form>
      <ToastContainer />
    </Form>
  );
};
