import { CarouselBusinessMobile } from './CarouselBusinessMobile';
import { Separator } from '@/components/ui/separator';
import { FeatureProfessionalList } from './FeatureProfessionalList';

export const MobileViewProfessional = ({
  dataFeatures,
  dataListAi,
  dataListBooking,
  dataListCommunication,
  dataListManagm,
  dataListPayment,
  dataListGrowth,
  dataListControl,
  dataListReports,
}: {
  dataFeatures: any;
  dataListAi: any;
  dataListBooking: any;
  dataListCommunication: any;
  dataListManagm: any;
  dataListPayment: any;
  dataListGrowth: any;
  dataListControl: any;
  dataListReports: any;
}) => {
  return (
    <div className="md:hidden">
      <CarouselBusinessMobile dataBusiness={dataFeatures} />
      <Separator className="bg-[#586968] my-20" />
      {/* Section order: AI, Booking, Communication, Marketing, Payments, Growth, Control, Reports */}
      {dataListAi && dataListAi.length > 0 && (
        <FeatureProfessionalList
          title={dataFeatures?.aiPowered?.title}
          desription={dataFeatures?.aiPowered?.description}
          dataList={dataListAi}
        />
      )}
      {dataListBooking && dataListBooking.length > 0 && (
        <FeatureProfessionalList
          title={dataFeatures?.bookingManagement?.title}
          desription={dataFeatures?.bookingManagement?.description}
          dataList={dataListBooking}
        />
      )}
      {dataListCommunication && dataListCommunication.length > 0 && (
        <FeatureProfessionalList
          title={dataFeatures?.communication?.title}
          desription={dataFeatures?.communication?.description}
          dataList={dataListCommunication}
        />
      )}
      <FeatureProfessionalList
        title={dataFeatures?.marketingTools?.title}
        desription={dataFeatures?.marketingTools?.description}
        dataList={dataListManagm}
      />
      <FeatureProfessionalList
        title={dataFeatures?.collectPayments?.title}
        desription={dataFeatures?.collectPayments?.description}
        dataList={dataListPayment}
      />
      {dataListGrowth && dataListGrowth.length > 0 && (
        <FeatureProfessionalList
          title={dataFeatures?.growth?.title}
          desription={dataFeatures?.growth?.description}
          dataList={dataListGrowth}
        />
      )}
      {dataListControl && dataListControl.length > 0 && (
        <FeatureProfessionalList
          title={dataFeatures?.control?.title}
          desription={dataFeatures?.control?.description}
          dataList={dataListControl}
        />
      )}
      <FeatureProfessionalList
        title={dataFeatures?.performanceReports?.title}
        desription={dataFeatures?.performanceReports?.description}
        dataList={dataListReports}
      />
    </div>
  );
};
