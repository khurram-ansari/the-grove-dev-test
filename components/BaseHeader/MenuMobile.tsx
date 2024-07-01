'use client';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import LangSelector from '../LangSelector';
import SocialIcons from '../SocialIcons';
import { NavItem } from '@/types';
import BrandLogo from '../BrandLogo';

const MenuMobile = ({ navItems }: { navItems: NavItem[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer direction={'right'} open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="text-primary">
          <Menu size={40} strokeWidth={2} />
        </div>
      </DrawerTrigger>
      <DrawerContent
        className="h-full rounded-none border-0"
        style={{ background: 'inherit' }}
      >
        <DrawerHeader className="my-5 flex items-end justify-between px-6 py-2">
          <BrandLogo />

          <DrawerClose className="text-primary">
            <X size={36} strokeWidth={3} />
          </DrawerClose>
        </DrawerHeader>

        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className={`caption block border-t border-white/50 px-8 py-5 text-sm ${index === navItems.length - 1 && 'border-b'}`}
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="my-8 px-8">
          <LangSelector />
        </div>

        <div className="px-8">
          <Button className="header_cta">Log in</Button>
        </div>
        <DrawerFooter className="px-8 pt-2">
          <div className="py-8">
            <SocialIcons size={'sm'} />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuMobile;
