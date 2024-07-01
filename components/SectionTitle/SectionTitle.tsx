import { cn } from '@/lib/utils';
import { HTMLAttributes, PropsWithChildren } from 'react';

type TSectionTitleProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'> &
  PropsWithChildren & {
    title?: string;
    description?: string;
  };

const SectionTitle = ({
  title,
  description,
  className,
  children,
}: TSectionTitleProps) => {
  return (
    <div className={cn('space-y-6 text-center', className)}>
      <h2 className=" font-serif">{title ?? children}</h2>
      {description && <p className="max-w-[83ch]">{description}</p>}
    </div>
  );
};

export default SectionTitle;
