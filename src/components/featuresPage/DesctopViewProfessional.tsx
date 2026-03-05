import Image from 'next/image';
import { Separator } from '../ui/separator';
import { TabsFeaturesProfessional } from './TabsFeturesPagw';
import imageLeaf from '../../assets/images/features/business/LeafBusinessFeature.png';
import imageLeafRight from '../../assets/images/features/business/LeafBusinessRight.png';
import imageLeafLast from '../../assets/images/features/business/LeafBusinessBottom.png';

import {
  listManegamentFeatures,
  listMarketingFeatures,
  listPerfomanceFeatures,
} from '@/lib/constants/features/featuresProfessionalList';
import { ColumnTabsDesctop } from './ColumnTabsDesctop';
import { baseURLImage } from '@/helpers/axiosConfig';

export const DesctopViewProfessional = ({
  dataBusiness,
  dataListAi,
  dataListBooking,
  dataListCommunication,
  dataListManagm,
  dataListPayment,
  dataListGrowth,
  dataListControl,
  dataListReports,
}: {
  dataBusiness: any;
  dataListAi: any;
  dataListBooking: any;
  dataListCommunication: any;
  dataListManagm: any;
  dataListPayment: any;
  dataListGrowth: any;
  dataListControl: any;
  dataListReports: any;
}) => {
  const firstImage = new URL(
    dataBusiness?.firstImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const secondImage = new URL(
    dataBusiness?.secondImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const thirdImage = new URL(
    dataBusiness?.thirdImage.data[0].attributes.url,
    baseURLImage,
  ).href;

  return (
    <div className="mx-auto hidden md:block mb-[192px]">
      <ul className="flex space-x-5 rtl:space-x-reverse mx-auto justify-center mt-[66px] ">
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={firstImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.firstImageStyle}
            alt="item"
            width={1000}
            height={1000}
          />
        </li>
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={secondImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.secondImageStyle}
            alt="item"
            width={1000}
            height={1000}
          />
        </li>
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={thirdImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.thirdImageStyle}
            alt="item"
            width={1000}
            height={1000}
          />
        </li>
      </ul>
      {/* Section order: AI, Booking, Communication, Marketing, Payments, Growth, Control, Reports */}

      {/* 1. AI Powered (index 0) */}
      {dataListAi && dataListAi.length > 0 && (
        <>
          <div className="px-20">
            <Separator className="my-[164px] bg-[#586968]" />
          </div>
          <TabsFeaturesProfessional
            idFeatures={dataBusiness?.listBusinessOptions[0]?.path}
            title={dataBusiness?.aiPowered?.title}
            description={dataBusiness?.aiPowered?.description}
            bgImage={imageLeafRight}
            styleLeaf="absolute bottom-0 right-0 w-[500px]"
            itemsList={listMarketingFeatures}
            dataList={dataListAi}
          />
        </>
      )}

      {/* 2. Booking (index 1) */}
      {dataListBooking && dataListBooking.length > 0 && (
        <>
          <div className="px-20">
            <Separator className="my-[164px] bg-[#586968]" />
          </div>
          <TabsFeaturesProfessional
            idFeatures={dataBusiness?.listBusinessOptions[1]?.path}
            title={dataBusiness?.bookingManagement?.title}
            description={dataBusiness?.bookingManagement?.description}
            bgImage={imageLeaf}
            styleLeaf="absolute bottom-0 left-0 w-[500px]"
            itemsList={listMarketingFeatures}
            dataList={dataListBooking}
          />
        </>
      )}

      {/* 3. Communication (index 2) */}
      {dataListCommunication && dataListCommunication.length > 0 && (
        <>
          <div className="px-20">
            <Separator className="my-[164px] bg-[#586968]" />
          </div>
          <ColumnTabsDesctop
            idFeatures={dataBusiness?.listBusinessOptions[2]?.path}
            title={dataBusiness?.communication?.title}
            description={dataBusiness?.communication?.description}
            bgImage={imageLeafLast}
            styleLeaf="absolute top-0 left-0 h-[300px] w-[200px]"
            itemsList={listPerfomanceFeatures}
            dataList={dataListCommunication}
          />
        </>
      )}

      {/* 4. Marketing (index 3) */}
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <TabsFeaturesProfessional
        idFeatures={dataBusiness?.listBusinessOptions[3]?.path}
        title={dataBusiness?.marketingTools?.title}
        description={dataBusiness?.marketingTools?.description}
        bgImage={imageLeafRight}
        styleLeaf="absolute bottom-0 right-0 w-[500px]"
        itemsList={listManegamentFeatures}
        dataList={dataListManagm}
      />

      {/* 5. Payments (index 4) */}
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <TabsFeaturesProfessional
        idFeatures={dataBusiness?.listBusinessOptions[4]?.path}
        title={dataBusiness?.collectPayments?.title}
        description={dataBusiness?.collectPayments?.description}
        bgImage={imageLeaf}
        styleLeaf="absolute bottom-0 left-0 w-[500px]"
        itemsList={listMarketingFeatures}
        dataList={dataListPayment}
      />

      {/* 6. Growth (index 5) */}
      {dataListGrowth && dataListGrowth.length > 0 && (
        <>
          <div className="px-20">
            <Separator className="my-[164px] bg-[#586968]" />
          </div>
          <ColumnTabsDesctop
            idFeatures={dataBusiness?.listBusinessOptions[5]?.path}
            title={dataBusiness?.growth?.title}
            description={dataBusiness?.growth?.description}
            bgImage={imageLeafLast}
            styleLeaf="absolute top-0 left-0 h-[300px] w-[200px]"
            itemsList={listPerfomanceFeatures}
            dataList={dataListGrowth}
          />
        </>
      )}

      {/* 7. Control (index 6) */}
      {dataListControl && dataListControl.length > 0 && (
        <>
          <div className="px-20">
            <Separator className="my-[164px] bg-[#586968]" />
          </div>
          <TabsFeaturesProfessional
            idFeatures={dataBusiness?.listBusinessOptions[6]?.path}
            title={dataBusiness?.control?.title}
            description={dataBusiness?.control?.description}
            bgImage={imageLeafRight}
            styleLeaf="absolute bottom-0 right-0 w-[500px]"
            itemsList={listManegamentFeatures}
            dataList={dataListControl}
          />
        </>
      )}

      {/* 8. Reports (index 7) */}
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <ColumnTabsDesctop
        idFeatures={dataBusiness?.listBusinessOptions[7]?.path}
        title={dataBusiness?.performanceReports?.title}
        description={dataBusiness?.performanceReports?.description}
        bgImage={imageLeafLast}
        styleLeaf="absolute top-0 left-0 h-[300px] w-[200px]"
        itemsList={listPerfomanceFeatures}
        dataList={dataListReports}
      />
    </div>
  );
};
