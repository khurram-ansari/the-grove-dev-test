import { Button } from '@/components/ui/button';
import { SocialLink } from '@/types';
import LangSelector from '../LangSelector';
import SocialIcons from '@/components/SocialIcons';
import BrandLogo from '@/components/BrandLogo';
import { Menu } from 'lucide-react';
// import MenuMobile from './MenuMobile';

const HeaderSecondary = () => {
  return (
    <div className="container flex items-center justify-between">
      <BrandLogo priority />

      {/* social icons */}
      <div className="hidden items-center gap-8 sm:flex">
        <SocialIcons />
        <Button className="w-36 font-medium">Log in</Button>
        <LangSelector />
      </div>

      <div>{/* <MenuMobile /> */}</div>
    </div>
  );
};

export default HeaderSecondary;
