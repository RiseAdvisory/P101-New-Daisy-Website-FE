'use client';
import {
  acceptanceOfPolicy,
  collectionOfDataList,
  collectionOfDataListAlpha,
  consentAndOptingOut,
  cookiesList,
  disseminationoSecondfData,
  disseminationoSecondfDataAlpha,
  disseminationofDataAlpha,
  disseminationofDataList,
  disseminationofDataRoman,
  subUseAndHandlingofData,
  useAndHandlingofData,
  useAndHandlingofDataAlpha,
} from '@/lib/constants/privacyPolicyList';
import { aplication, privacyPolicy } from '@/lib/constants/privacyPolicyText';
import { comunicationText } from '@/lib/constants/tutorials/tutorialsPages';
import { ArrowUp } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const PrivacyPoliceList = ({
  setScroll,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
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
    if (blockRef.current) {
      const { top } = blockRef.current.getBoundingClientRect();
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
    <div className="py-20 px-4 md:px-16" ref={blockRef}>
      <div>
        <h2 className="capitalize font-bold text-2xl mb-10 text-primary pt-10">
          Welcome to The Daisy
        </h2>
        <p className="font-montserrat text-[#455150] mb-4">
          Daisy Software Technologies, Inc. and/or its associates, related
          parties, successors and assigns (collectively hereinafter referred to
          as &quot;Provider&quot;, &quot;us&quot;, &quot;we&quot; or
          &quot;our&quot;) have created this document (hereinafter referred to
          as &quot;Privacy Policy&quot;) in order to demonstrate our firm
          commitment to User’s and your (collectively hereinafter referred to as
          &quot;User&quot;, &quot;you&quot; and &quot;your&quot;) privacy of
          your personal information, comments, blogs, articles, pictures,
          documents, photographs, videos, audio messages (hereinafter referred
          to as &quot;Personal Information&quot;).
        </p>

        <p className="font-montserrat mb-4 text-[#455150]">
          The provisions set out in this Privacy Policy prescribe our policies
          regarding the collection, use, processing and dissemination of
          personal information submitted by you to us. This Privacy Policy has
          been prepared regarding our commitment towards the protection of the
          Personal Information, submitted by the User in context of the use of
          our Application.
        </p>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
          Acceptance of policy
        </h2>
        <ol className="list-decimal px-4 ml-4">
          {acceptanceOfPolicy.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>

        <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8 pt-10">
          Collection of data{' '}
        </h2>
        <ol className="list-decimal px-4 ml-4 ">
          {collectionOfDataList.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {collectionOfDataListAlpha.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8 pt-10">
          Use and handling of data
        </h2>
        <ol className=" px-4 ml-4  list-decimal">
          {useAndHandlingofData.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {useAndHandlingofDataAlpha.map((item, index) => {
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
          {subUseAndHandlingofData.map((item, index) => {
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
        <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
          Dissemination of data
        </h2>
        <p className="font-montserrat text-[#455150] mb-4">{privacyPolicy}</p>
        <ol className=" px-4 ml-4  list-decimal">
          {disseminationofDataList.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
          {disseminationofDataAlpha.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
        <ol className=" px-4 ml-16 " style={{ listStyle: 'lower-roman' }}>
          {disseminationofDataRoman.map((item, index) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
      <ol className=" px-4 ml-4  list-decimal">
        {disseminationoSecondfData.map((item, index) => {
          return (
            <li className="font-montserrat text-[#455150] mb-4" key={index}>
              {item}
            </li>
          );
        })}
      </ol>
      <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
        {disseminationoSecondfDataAlpha.map((item, index) => {
          return (
            <li className="font-montserrat text-[#455150] mb-4" key={index}>
              {item}
            </li>
          );
        })}
      </ol>
      <p className="font-montserrat text-[#455150] mb-4">
        Accordingly, your Data will be disclosed where we are obliged or
        permitted by law to do so. If you post or send offensive or
        objectionable content to us or otherwise engage in any disruptive
        behavior in respect of Application, we can use whatever Data that is
        available to us about you to stop such behavior. This may involve
        informing relevant third parties such as your employer and law
        enforcement agencies about the content and your behavior.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        Consent and opting-out
      </h2>
      <p className="font-montserrat text-[#455150] mb-4">
        By submitting or providing your Data to us, you expressly acknowledge,
        consent and agree to:
      </p>
      <ol className=" px-4 ml-4  list-decimal">
        {consentAndOptingOut.map((item, index) => {
          return (
            <li className="font-montserrat text-[#455150] mb-4" key={index}>
              {item}
            </li>
          );
        })}
      </ol>
      <p className="font-montserrat text-[#455150] mb-4">
        We follow strict security procedures to ensure that your Data is
        protected and that it is not damaged or destroyed. All Data is kept in a
        secure place with restricted physical or electronic access, and with
        confidentially preserved. Only the senior management team of the
        Provider is permitted access to the Data. Notwithstanding the aforesaid,
        you expressly acknowledge and agree that the transmission of information
        via the internet is not completely secure.
      </p>
      <p className="font-montserrat text-[#455150] mb-4">
        We will do our best to protect your Data but we are unable to guarantee
        the security of your Data submitted or provided through or in connection
        with our Application, and accordingly, any submission or provision of
        Data is made at your own risk;
      </p>
      <p className="font-montserrat text-[#455150] mb-4">
        You may inform us by way of email sent to info@trythedaisy.com if you
        wish to exercise your right to opt out of receiving any Communications
        from us or Business Partner Communications from our business partners.
        If you do opt out, this may preclude you from receiving any of our
        special offers or promotion, whether offered by us or by any business
        partners in future.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        information requests
      </h2>
      <p className="font-montserrat text-[#455150] mb-4">
        Unless the Personal Information relates to an individual which you are
        legally responsible for (such as a minor) under 16 , you may not give us
        Personal Information about any other person. If you do so, you confirm
        that they have appointed you to act on behalf of them, to consent to the
        processing of their Personal Information, including sensitive personal
        data, to the transfer of their Personal Information abroad and to
        receive on their behalf any Communications from us or any Business
        Partner Communications from our business partners.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        cookies
      </h2>
      <p className="font-montserrat text-[#455150] mb-4">{aplication}</p>
      <ol className=" px-4 ml-4  list-decimal">
        {cookiesList.map((item, index) => {
          return (
            <li className="font-montserrat text-[#455150] mb-4" key={index}>
              {item}
            </li>
          );
        })}
      </ol>
      <p className="font-montserrat text-[#455150] mb-4">
        It is also possible that others may download cookies to your Application
        when you access, visit or use the Application. 
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        Modification of Privacy policy
      </h2>
      <p className="font-montserrat text-[#455150] mb-4">
        This Privacy Policy may be modified from time to time as a result of any
        changes in the law, best practice and/or in the Application without
        notice to you. The most current version of this Privacy Policy as posted
        on this page shall supersede all previous versions.
      </p>
      <p className="font-montserrat text-[#455150] mb-4">
        It is your responsibility to check regularly to determine whether a new
        version of the Privacy Policy has been uploaded.
      </p>
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
