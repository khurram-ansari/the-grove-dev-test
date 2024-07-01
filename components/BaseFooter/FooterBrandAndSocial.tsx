import BrandLogo from '@/components/BrandLogo';
import SocialIcons from '@/components/SocialIcons';

const FooterBrandAndSocial = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* logo */}
      <div className="hidden sm:block">
        <BrandLogo size="lg" />
      </div>
      {/* social icons */}
      <SocialIcons size="lg" />
    </div>
  );
};

export default FooterBrandAndSocial;
