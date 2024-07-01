import FooterUpper from './FooterUpper';
import FooterContactSection from './FooterContactSection';
import FooterBrandAndSocial from './FooterBrandAndSocial';
import FooterMiscLinksAndPaymentProv from './FooterMiscLinksAndPaymentProv';
const BaseFooter = () => {
  return (
    <footer className="border-t py-20">
      <div className="container ">
        <div className="space-y-12 sm:space-y-16">
          <FooterUpper />
          <FooterContactSection />

          <FooterBrandAndSocial />
        </div>
        <div className="mt-12">
          <FooterMiscLinksAndPaymentProv />
        </div>
      </div>
    </footer>
  );
};

export default BaseFooter;
