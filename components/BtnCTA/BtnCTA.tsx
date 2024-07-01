import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type TBtnCTAProps = {
  href: string;
  title: string;
};
const BtnCTA = ({ href, title }: TBtnCTAProps) => {
  return (
    <Button asChild className="h-14 text-[1.0625rem]">
      <Link href={href} className="flex items-center justify-between gap-12 ">
        <span className="ml-2 font-medium">{title}</span>
        <ArrowRight />
      </Link>
    </Button>
  );
};

export default BtnCTA;
