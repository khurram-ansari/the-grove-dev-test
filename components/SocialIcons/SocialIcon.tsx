import { SocialLink } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type TSocialIconProps = SocialLink & {
  size?: 'lg' | 'sm';
};
const SocialIcon = ({ href, iconUrlPrefix, size }: TSocialIconProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative size-6',
        { 'size-7': size === 'lg' },
        { 'size-5': size === 'sm' },
      )}
    >
      <Image
        src={`/${iconUrlPrefix}_logo.svg`}
        alt={`the grove ${iconUrlPrefix} link`}
        fill
      />
    </Link>
  );
};

export default SocialIcon;
