import { type NavItem } from '@/types';
import Link from 'next/link';
const MenuDesktop = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <nav className=" border-b border-t py-3 ">
      <div className="container">
        <ul className="flex items-center justify-between px-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link key={index} className="caption" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuDesktop;
