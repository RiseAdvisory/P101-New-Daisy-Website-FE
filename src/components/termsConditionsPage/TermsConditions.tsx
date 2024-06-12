'use client';
import {
  termsConditionsEligibility,
  termsConditionsExclusion,
  termsConditionsProtectiongAbc,
  termsConditionsProtectiongNumber,
  termsConditionsSetBelow,
  termsConditionsSetBelowAbc,
  termsConditionsSetBelowDef,
} from '@/lib/constants/termsConditions';
import { ArrowUp } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const TermsConditionsSection = ({
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
    <div ref={blockRef} className="px-4 py-28 md:py-20 md:px-16 bg-[#F8F5F3]">
      <h2 className="capitalize font-bold text-2xl mb-4  text-primary ">
        Welcome to The Daisy
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        Please read the following general Terms and Conditions (“Terms and
        Conditions”) carefully as the provisions contained herein shall govern
        your access and use of our online platform hereinafter referred to as
        The Daisy. This online platform is owned by Daisy Software Technologies,
        Inc. The Daisy is an online application hereinafter referred to as
        “Application” or “The Daisy”.
      </p>
      <p className="font-montserrat mb-4 text-[#455150] text-sm">
        The Application is an online platform that provides the best Health and
        beauty offers and experiences. Through the Application you can check the
        kind of services available, price list, various offers and top vendor
        profiles in the industry. The Application facilitates bookings for the
        services, maintenance of record of reward points gained after each
        bookings/ appointments and provides reminders for the bookings.
      </p>
      <p className="font-montserrat mb-4 text-[#455150] text-sm">
        By downloading or otherwise accessing the Application you hereby agree
        to be bound by the following general Terms and Conditions. There may be
        additional features on the platform and those special features may have
        its own Terms and Conditions and those additional Terms and Conditions
        would also apply in context of use of Application along with these Terms
        and Conditions.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        General
      </h2>
      <p className="font-montserrat mb-4 text-[#455150] bg-white p-6 rounded-[8px] text-sm">
        By downloading or otherwise accessing the Application you hereby agree
        to be bound by the following general Terms and Conditions. There may be
        additional features on the platform and those special features may have
        its own Terms and Conditions and those additional Terms and Conditions
        would also apply in context of use of Application along with these Terms
        and Conditions.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary pt-10">
        The Terms and Conditions set below apply to:
      </h2>
      <ul className="list-disc mx-4 font-montserrat text-sm mt-4 space-y-[10px]">
        {termsConditionsSetBelow.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <ol
        className=" mx-4 mt-4 space-y-[10px] text-[#455150]"
        style={{ listStyle: 'lower-alpha' }}
      >
        {termsConditionsSetBelowAbc.map((item, index) => {
          return (
            <li key={index}>
              <span className="font-semibold">{item.title}</span>
              {item.description}
            </li>
          );
        })}
      </ol>
      <ol className="list-decimal mx-4 mt-4 font-montserrat text-sm space-y-[10px] text-[#455150]">
        {termsConditionsSetBelowDef.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
      <p className="font-montserrat mb-4 text-[#455150] mt-4 text-sm">
        By becoming a User, You hereby acknowledge and agree to be bound by the
        Terms and Conditions.
      </p>
      <p className="font-montserrat mb-4 text-[#455150]  text-sm">
        We may suspend or stop providing the Services if You do not comply with
        our Terms and Conditions.
      </p>
      <p className="font-montserrat mb-4 text-[#455150]  text-sm">
        Using our Application as well as various services provided by us through
        our Application does not grant You any Intellectual property rights in
        Application and Services except Your personal data or information
        uploaded on our Application.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Eligibility for registration and account safety
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        In consideration of You becoming a User, You represent and warrant that:
      </p>
      <ol className="list-decimal mx-4 mt-4 font-montserrat text-sm space-y-[10px] text-[#455150]">
        {termsConditionsEligibility.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Payments
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        The User can make payments online through credit card or debit card.
        They can also choose the option for payment in any other electronic
        payment form as provided by our Application. We use a third-party
        payment processor to process payments, and we do not store payment
        information on our servers.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Cancellation & Refunds
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        User is under obligation to cancel the appointments/bookings for Service
        Provider’s services well in advance i.e., at least one hour before the
        scheduled time for appointment. This would give an opportunity to the
        Service Provider to go for alternative bookings. Amount paid in advance
        by the User would either be refunded or maintained as credit in the
        account of the User for future appointments and services
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        In case, the User cancels the appointments/ bookings in urgency without
        giving Services Provider ample time to go for alternative bookings, then
        the User can be blacklisted from the Application or forgo the right to
        receiving a refund.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Cashback offers
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        &quot;The Daisy&quot; application may provide cashback offers from time
        to time that are time-based. To be eligible for a cashback offer, users
        must make a purchase during the offer period and meet any other
        requirements specified in the offer.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        Refund requests for cashback offers may be subject to a penalty. The
        penalty amount will be specified in the offer terms. &quot;The
        Daisy&quot; application reserves the right to modify or cancel any
        cashback offer at any time without prior notice.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Loyalty tiers & points
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        The Daisy segments Users to different loyalty tiers based on behaviors
        that add value to our Application. These behaviors are measured through
        the points collection and maintenance loyalty system. The higher the
        loyalty tier gained by the User, the greater benefits and more exclusive
        features the User will gain. These benefits and rewards are subject to
        change at any time without prior notice.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Opinions and comments
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        Users can share their views, opinions and comments on our Application.
        These opinions and comments are delivered directly to the management of
        the Service Providers to help them improve their services in the future.
        These comments and opinions are not shared with the public but may be
        used internally to take certain actions such as removing low quality
        Service Providers from our Application.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Protecting other user`s rights and other reasonable restrictions
      </h2>
      <ol className="list-decimal mx-4 mt-4 font-montserrat text-sm space-y-[10px] text-[#455150]">
        {termsConditionsProtectiongNumber.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
      <ol
        className=" mx-4 mt-4 font-montserrat text-sm space-y-[10px] text-[#455150]"
        style={{ listStyle: 'lower-alpha' }}
      >
        {termsConditionsProtectiongAbc.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Advertisements and other commersial content
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        For the benefit of the user and the advertisers, there may be
        advertising and other commercial or sponsored content attached to the
        Application and these would be placed on our Website.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Force majeure
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        Parties to the terms shall not be held responsible for a failure to
        perform or for improper performance caused by a Force Majeure event.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Privacy policy
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        All Users are requested to provide personal information to The Daisy
        such as first and last name, email address, phone number/mobile number,
        physical addresses all referred to collectively as Personal Information
        . All data is stored in encrypted form. We protect all Personal
        Information provided to us to help protect Your security and
        confidentiality.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        The User`s information will only be disclosed under the duty to comply
        with any legal obligation or court of law requesting to do so.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Exclusion of liability
      </h2>
      <ol className="list-decimal mx-4 mt-4 font-montserrat text-sm space-y-[10px] text-[#455150]">
        {termsConditionsExclusion.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Warranties and disclaimers
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        All Users are requested to provide personal information to The Daisy
        such as first and last name, email address, phone number/mobile number,
        physical addresses all referred to collectively as Personal Information
        . All data is stored in encrypted form. We protect all Personal
        Information provided to us to help protect Your security and
        confidentiality.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Indeminity
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        You agree to fully indemnify, defend and hold the Provider, and its
        subsidiaries or affiliates harmless from any and all claims or demands,
        liabilities, damages, losses, costs and expenses, including reasonable
        attorneys fees, made by any third party due to or arising out of Your:
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Offsite links
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        In order to offer increased value to our Users, the Provider may
        provide, or third parties may provide, links to other websites or
        resources, which You may access at Your sole discretion. Any reliance on
        the contents of a third party website is done at Your own risk and You
        assume all responsibilities and consequences resulting from such
        reliance.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        You understand and acknowledge that the Provider has no control over
        such sites and resources. You acknowledge and agree that we have no
        responsibility for the information, content, products, services,
        advertising which may or may not be provided by or through sites. In
        this respect.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        You also acknowledge and agree that the Provider is not responsible for
        the availability of such external sites or resources, and does not
        endorse and is not responsible or liable for any content, advertising,
        products, services or other materials on or available from such sites or
        resources.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        You further acknowledge and agree that the Provider shall not be
        responsible or liable, directly or indirectly, for any damage or loss
        caused or alleged to be caused by or in connection with use of or
        reliance on any such content, goods or services available on or through
        any such site or resource.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        No third party beneficiaries
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        You agree that, except as otherwise expressly provided in this Terms and
        Conditions, there shall be no third party beneficiaries to this Terms
        and Conditions, and that You may not assign Your profile or registration
        to any other persons.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Notices
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        If You choose to provide us with a nominated email address, unless You
        expressly inform us otherwise, the Provider may communicate with You by
        providing You with notices regarding updates, changes or additions to
        the Application or Services offered through or in connection with the
        Application.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Copyright
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        All copyright in all material contained on, in or available through
        Application are owned by the Provider or its proprietary holders, and
        You are required to abide by all copyright notices contained on the
        Application. The User is under obligation to abide by the copyrights
        notices and would be liable for any violation and The Daisy hereby
        disclaims any liability in this regard.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Modifications to the application, content and terms and conditions
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        The Provider reserves the right at any time and from time to time to
        modify or discontinue, temporarily or permanently, the Application or
        any part thereof, with or without notice to You. You agree that the
        Provider shall not be liable to You or to any third party for any such
        modification, suspension or discontinuance of the Application or any
        part thereof. The most current version of the Terms and Conditions as
        posted on this page shall supersede all previous versions.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        It is Your responsibility to check regularly to determine whether a new
        version of the Terms and Conditions has been uploaded. If You do not
        agree to any revisions pursuant to the upload of a new version of the
        Terms and Conditions, then You must immediately stop using the
        Application.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        You agree that the Provider shall not be liable to You or to any third
        party for any such modification, suspension or discontinuance of the
        Application, and/or amendments to the Terms and Conditions. Your
        continued use of the Application after such modifications or amendments
        shall constitute an acceptance of Your agreement to be bound by the
        Terms and Conditions, as amended.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Amendments
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        Amendments to the Terms and Conditions may be posted by Rise Company for
        Economic and Financial Advisory at any time for all users to access and
        will be binding on the date of publication.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Waiver and severability of terms
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        The failure of the Provider to exercise or enforce any right or
        provision of the Terms and Conditions shall not constitute a waiver of
        such right or provision.
      </p>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        If any provision of the Terms and Conditions is found by a Court of
        competent jurisdiction to be invalid, the parties nevertheless agree
        that the Court should endeavour to give effect to the parties intentions
        as reflected in the provision, and the other provisions of the Terms and
        Conditions will remain in full force and effect.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Violations and infringements
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        Any violations or infringement of the Terms and Conditions should
        promptly be reported by the User by emailing the Provider at
        info@trythedaisy.com
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Jurisdiction and governing law
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        The Terms and Conditions will be legally binding. Any dispute or claim
        arising out in connection with the Terms and Conditions will be
        addressed according to the laws of the State of Kuwait. You understand,
        agree and acknowledge that the Courts of the State of Kuwait have
        jurisdiction to settle any dispute arising in relation to the Terms and
        Conditions.
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-10">
        Entire agreement
      </h2>
      <p className="font-montserrat text-[#455150] mb-4 text-sm">
        The Terms and Conditions constitute the entire agreement between You and
        the Provider and govern Your access and use of, or purchase through or
        in connection with the Application, superseding any prior agreements
        between You and the Provider.
      </p>
      <p className="font-montserrat text-[#455150] text-sm">
        You may also be subject to additional terms and conditions that may
        apply when You use or purchase certain other services of the Provider,
        affiliated services, third-party content or third-party software.
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
