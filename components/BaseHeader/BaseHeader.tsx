import { NavItem } from '@/types';
import HeaderSecondary from './HeaderSecondary';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import BrandLogo from '../BrandLogo';
import LangSelector from '../LangSelector';
import SocialIcons from '../SocialIcons';
import { Button } from '../ui/button';

const BaseHeader = () => {
  const menuItems: NavItem[] = [
    { href: '#', title: 'Dine with us' },
    { href: '#', title: 'Plan your visit' },
    { href: '#', title: 'Events' },
    { href: '#', title: 'View groves map' },
    { href: '#', title: 'Our story' },
    { href: '#', title: 'Contact us' },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-50 space-y-8 py-8">
      {/* {secondary menu} */}
      <div className="container flex items-center justify-between">
        <BrandLogo priority />

        <div className="hidden items-center gap-8 lg:flex">
          <SocialIcons />
          <Button className="header_cta text-[0.9375rem] font-medium">
            Log in
          </Button>
          <LangSelector />
        </div>

        <div className="lg:hidden">
          {/* {mobile menu} */}
          <MenuMobile navItems={menuItems} />
        </div>
      </div>

      {/* {desktop menu} */}
      <div className="hidden lg:block">
        <MenuDesktop navItems={menuItems} />
      </div>
    </header>
  );
};

export default BaseHeader;
