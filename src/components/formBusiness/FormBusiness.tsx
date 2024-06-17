'use client';

import { useState } from 'react';
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
import { KuwaitIcon } from '@/assets/icons/kuwaitIcon/KuwaitIcon';
import { ToggleButtonForm } from './ToogleForm';

const formSchema = z.object({
  fullname: z.string().min(5, {
    message: 'Full Name must be at least 5 characters.',
  }),
  businessType: z.string().min(5, {
    message: 'Business Type must be at least 5 characters.',
  }),
  email: z
    .string()
    .min(5, {
      message: 'Email must be at least 5 characters.',
    })
    .email('This is not a valid email.'),
  url: z.string().url(),
  countryCode: z.string(),
  phonenumber: z.string(),
  numberoflocation: z.string(),
  businessname: z.string(),
});

export const ProfileForm = () => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState('+965');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [homeService, setHomeService] = useState(false);
  const [provideService, setProvideService] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    const completePhoneNumber = countryCode + phoneNumber;
    const updatedData = { ...data, phoneNumber: completePhoneNumber };
    console.log(updatedData);
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" bg-white p-6 rounded-xl mt-[48px] md:mx-auto md:w-[860px]"
      >
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'fullname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="Your name"
                    {...field}
                    onFocus={() => handleFocus('fullname')}
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
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'email' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Work Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="gmail@gmail.com"
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
        <div className="w-full mt-6">
          <p className="text-[#172524] font-montserrat font-semibold mb-2">
            Service Providor Type
          </p>
          <ToggleButtonForm
            firstValue="Business"
            secondValue="Freelances"
            homeService={provideService}
            setHomeService={setProvideService}
          />
        </div>
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="businessname"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6 ">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'businessname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Business Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="Spa Time"
                    {...field}
                    onFocus={() => handleFocus('businessname')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'businessType' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Business Type
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="Spa"
                    {...field}
                    onFocus={() => handleFocus('businessType')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'phonenumber' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Phone Number
                </FormLabel>
                <div className="flex gap-x-2">
                  <FormControl>
                    <Select
                      value={countryCode}
                      onValueChange={(value) => setCountryCode(value)}
                    >
                      <SelectTrigger className="w-32 flex">
                        <SelectValue placeholder="+965" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+965">
                          <span className="flex items-center justify-center">
                            <KuwaitIcon />
                            +965
                          </span>
                        </SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                        {/* Add other country codes as needed */}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <Input
                      className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      type="number"
                      placeholder="00000000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      onFocus={() => handleFocus('phoneNumber')}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'url' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Social Media Account
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="https:/www.youMediaAccount.com"
                    {...field}
                    onFocus={() => handleFocus('url')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="numberoflocation"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'numberoflocation' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Number of Locations
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB]">
                      <SelectValue className="flex" placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5" className="flex">
                        5
                      </SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      {/* Add other country codes as needed */}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberoflocationName"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4 ">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'numberoflocationName'
                      ? 'text-[#A67F6B]'
                      : ''
                  }`}
                >
                  Number of Locations
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB]">
                      <SelectValue className="flex " placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5" className="flex">
                        5
                      </SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      {/* Add other country codes as needed */}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full mt-6">
          <p className="text-[#172524] font-montserrat font-semibold mb-2">
            Do you provide home service visits?
          </p>
          <ToggleButtonForm
            firstValue="Yes"
            secondValue="No"
            homeService={homeService}
            setHomeService={setHomeService}
          />
        </div>

        <Separator className="bg-[#E8E9E9] mt-6" />
        <Button
          type="submit"
          className="bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary hover:text-white font-montserrat font-semibold md:h-auto"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};
