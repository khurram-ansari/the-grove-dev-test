import { cn } from '@/lib/utils';
import Image from 'next/image';

const BrandLogo = ({ priority, size }: { priority?: boolean; size?: 'lg' }) => {
  return (
    <div
      className={cn(
        'logo_container relative h-[43px] w-[189px] sm:h-[50px] sm:w-[220px]',
        {
          'h-[43px] w-[189px] sm:h-[65px] sm:w-[286px]': size === 'lg',
        },
      )}
    >
      <Image
        priority={!!priority}
        src="/the_groves_logo.png"
        alt="the groves logo"
        fill
      />
    </div>
  );
};

export default BrandLogo;
