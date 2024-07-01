import MiscLinks from './MiscLinks';
import PaymentProvidersLogos from './PaymentProvidersLogos';

const FooterMiscLinksAndPaymentProv = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <MiscLinks />
      {/* payment providers */}
      <PaymentProvidersLogos />
    </div>
  );
};

export default FooterMiscLinksAndPaymentProv;
