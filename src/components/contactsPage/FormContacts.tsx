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
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
  firstname: z.string().min(5, {
    message: 'Full Name must be at least 5 characters.',
  }),
  lastname: z.string().min(5, {
    message: 'Last Name must be at least 5 characters.',
  }),
  email: z
    .string()

    .email('This is not a valid email.'),
  message: z.string(),
  acceptconditions: z.boolean().default(false).optional(),
});

export const FormContacts = ({ style }: { style?: string }) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState('+965');
  const [phoneNumber, setPhoneNumber] = useState('');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      phonenumber: '',
      acceptconditions: false,
    },
  });

  const onSubmit = (data: any) => {
    const completePhoneNumber = countryCode + phoneNumber;
    const updatedData = { ...data, phoneNumber: completePhoneNumber };
    console.log(updatedData);
    form.reset();
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
        className={` bg-white p-6 rounded-xl md:mx-auto md:w-[860px] mx-4 border border-[#E8E9E9] ${style}`}
      >
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'firstname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="First name"
                    {...field}
                    onFocus={() => handleFocus('firstname')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'lastname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="Last name"
                    {...field}
                    onFocus={() => handleFocus('lastname')}
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
            name="email"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'email' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="name@example.com"
                    {...field}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base md:ml-[15px]${
                    activeField === 'phonenumber' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Phone Number
                </FormLabel>
                <div className="flex space-x-2 ">
                  <FormControl>
                    <Select
                      value={countryCode}
                      onValueChange={(value) => setCountryCode(value)}
                    >
                      <SelectTrigger className="w-32 md:ml-[15px] flex border-[#E8E9E9] bg-[#F9FBFB]">
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
                      onFocus={() => handleFocus('phonenumber')}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:w-full mt-6">
              <FormLabel
                className={`font-montserrat font-semibold text-base ${
                  activeField === 'message' ? 'text-[#A67F6B]' : ''
                }`}
              >
                Your Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="focus:text-[#A67F6B] border focus:border-[#A67F6B] h-[155px] resize-none border-[#E8E9E9] bg-[#F9FBFB]"
                  {...field}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  placeholder="Type your message here."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptconditions"
          render={({ field }) => (
            <FormItem className="flex items-center mt-8 space-x-2">
              <FormControl>
                <Checkbox
                  id="acceptconditions"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel
                htmlFor="acceptconditions"
                className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-6 text-[#455150]"
              >
                By submitting this form, you confirm that you have read and
                agree to The Daisy’s Terms of Service and Privacy Statement
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="bg-[#E8E9E9] mt-6 " />
        <Button
          type="submit"
          className="bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary font-montserrat font-semibold hover:text-white md:py-4 md:h-auto"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};
