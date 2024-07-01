import Image from 'next/image';
import Link from 'next/link';
const AppStoreLink = ({ img, href }: { img: string; href: string }) => {
  return (
    <Link href={href} className="relative aspect-[22/7] w-full sm:w-44">
      <Image alt="app store link" src={img} fill />
    </Link>
  );
};

export default AppStoreLink;
