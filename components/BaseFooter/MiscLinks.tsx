import { NavItem } from '@/types';
import Link from 'next/link';

const MiscLinks = () => {
  const miscLinks: NavItem[] = [
    { title: 'Terms & Conditions', href: '#' },
    { title: 'Privacy Policy', href: '#' },
  ];
  return (
    <div className="flex flex-col gap-7 sm:flex-row lg:gap-12">
      {/* misc links */}
      {miscLinks.map((link, index) => (
        <Link href={link.href} key={index}>
          {link.title}
        </Link>
      ))}
      <div>©2023 The Groves for Entertainment</div>
    </div>
  );
};

export default MiscLinks;
