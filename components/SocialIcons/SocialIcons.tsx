import { SocialLink } from '@/types';
import SocialIcon from './SocialIcon';
import { cn } from '@/lib/utils';

const SocialIcons = ({ size }: { size?: 'lg' | 'sm' }) => {
  const socialLinks: SocialLink[] = [
    { iconUrlPrefix: 'tiktok', href: '#' },
    { iconUrlPrefix: 'insta', href: '#' },
    { iconUrlPrefix: 'x', href: '#' },
    { iconUrlPrefix: 'snapchat', href: '#' },
  ];
  return (
    <div
      className={cn(
        'flex items-center gap-8',
        { 'gap-10': size === 'lg' },
        { 'gap-6': size === 'sm' },
      )}
    >
      {socialLinks.map((social, index) => (
        <SocialIcon key={index} {...social} size={size} />
      ))}
    </div>
  );
};

export default SocialIcons;
