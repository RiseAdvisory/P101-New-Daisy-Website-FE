'use client';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { ContactSupport } from '@/assets/icons/contactSupport/ContactSupport';
import { SelectTutorials } from './SelectTutorial';
import { Button } from '@/components/ui/button';
import Separator from '@/components/separator/Separator';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import ImageTutorialsTop from '../../../assets/images/ImageTutorials.png';
import ImageTutorialsSecond from '../../../assets/images/ImagesecondTutorials.png';
import {
  alphaListMiddle,
  alphaListPrimary,
  personalyInfoList,
  secondoryTheme,
  unlessList,
  userPrivacy,
} from '@/lib/constants/tutorials/tutorialsListTop';
import { tutorialsList } from '@/lib/constants/tutorialsList';
import {
  comunicationText,
  tutorialTextTop,
} from '@/lib/constants/tutorials/tutorialsPages';

export const TutorialSection = ({
  setScroll,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const withBlock = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    setScroll(blockRef);
  }, [setScroll]);

  const scrollToTopOfBlock = () => {
    if (blockRef.current) {
      blockRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (withBlock.current) {
      const { top } = withBlock.current.getBoundingClientRect();
      if (top < 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="bg-[#F8F5F3] px-4 pt-10 pb-28 md:flex" ref={blockRef}>
      <div className="hidden md:block" ref={withBlock}>
        <ul className="px-6 bg-white pb-6 mr-6 ml-16 rounded-xl">
          <p className=" font-semibold text-base text-[#A67F6B] pt-6 uppercase">
            Tutorials
          </p>
          {tutorialsList.map((item, index) => {
            return (
              <li
                key={index}
                className="w-full flex flex-col pl-3  hover:bg-[#E8E9E9] mt-[10px] rounded-lg cursor-pointer capitalize whitespace-nowrap py-3 hover:font-semibold"
              >
                {item}
              </li>
            );
          })}
          <Separator className="bg-[#E8E9E9] mt-4" />
          <Button
            type="button"
            className="hover:bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 bg-primary font-montserrat font-semibold text-white hover:text-primary md:py-4 md:h-auto"
          >
            Got a question? Contact us
          </Button>
        </ul>
      </div>
      <div className="flex items-center md:hidden" ref={withBlock}>
        <SelectTutorials />
        <Button className="px-[14px] py-[14px] ml-[11px]">
          <ContactSupport />
        </Button>
      </div>
      <Separator className="my-8 bg-[#E8E9E9] md:hidden" />

      <div>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
          Title goes here
        </h2>
        <p className="font-montserrat text-[#455150] mb-4">{tutorialTextTop}</p>
        <p className="font-montserrat mb-4 text-[#455150]">
          The provisions set out in this Privacy Policy prescribe our policies
          regarding the collection, use, processing and dissemination of
          personal information submitted by you to us. This Privacy Policy has
          been prepared regarding our commitment towards the protection of the
          Personal Information, submitted by the User in context of the use of
          our Application.
        </p>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
          Title goes here
        </h2>
        <ol className="list-decimal px-4 ml-4">
          {secondoryTheme.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <div className="flex flex-col justify-center">
          <Image
            src={ImageTutorialsTop}
            alt="image block"
            className="h-[205px] w-[343px] mx-auto md:w-full md:h-[400px]"
          />
          <span className="font-montserrat text-[#586968] mx-auto">
            Branded truck livery and T-shirt design
          </span>
        </div>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8">
          Title goes here
        </h2>
        <ol className="list-decimal px-4 ml-4 ">
          {userPrivacy.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {alphaListPrimary.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <div className="flex flex-col justify-center">
          <Image
            src={ImageTutorialsSecond}
            alt="image block"
            className="h-[205px] w-[343px] mx-auto  md:w-full md:h-[400px]"
          />
          <span className="font-montserrat text-[#586968] mx-auto">
            Branded truck livery and T-shirt design
          </span>
        </div>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8">
          Title goes here
        </h2>
        <ol className=" px-4 ml-4  list-decimal">
          {personalyInfoList.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {alphaListMiddle.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <p className="font-montserrat text-[#455150] mb-4">
          In case you upload your personal information to the part of the
          Application which is accessible to the public, then we may use that
          information in accordance with our terms and conditions of use and
          there is a possibility that this information can be accessed by the
          public. Thus we disclaim any responsibility for this.
        </p>
        <p className="font-montserrat mb-4 text-[#455150]">
          {comunicationText}
        </p>
        <ol className=" px-4 ml-4  list-decimal">
          {unlessList.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <p className="font-montserrat text-[#455150] mb-4">
          The app`s use and transfer to any other app of information received
          from Google APIs will adhere to Google API Services User Data Policy,
          including the Limited Use requirements.
        </p>
        <p className="font-montserrat mb-4 text-[#455150]">
          We will Handle all personal and sensitive user data securely,
          including transmitting it using modern cryptography methods. Use a
          runtime permissions request whenever available, prior to accessing
          data gated by Android permissions.
        </p>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
          Title goes here
        </h2>
        <p className="font-montserrat text-[#455150] mb-4">
          Unless the Personal Information relates to an individual which you are
          legally responsible for (such as a minor) under 16 , you may not give
          us Personal Information about any other person. If you do so, you
          confirm that they have appointed you to act on behalf of them, to
          consent to the processing of their Personal Information, including
          sensitive personal data, to the transfer of their Personal Information
          abroad and to receive on their behalf any Communications from us or
          any Business Partner Communications from our business partners.
        </p>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTopOfBlock}
          className="fixed bottom-4 right-4 p-4 text-primary bg-white rounded-full shadow-xl  shadow-[#101E1D1A]"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};
