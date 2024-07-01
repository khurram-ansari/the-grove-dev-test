import { cn } from '@/lib/utils';

const PaginationDot = ({ isActive }: { isActive?: boolean }) => {
  return (
    <div
      className={cn('size-[11px] rounded-full bg-white/30', {
        'bg-white': isActive,
      })}
    ></div>
  );
};

export default PaginationDot;
