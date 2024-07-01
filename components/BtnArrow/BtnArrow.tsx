import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BtnArrow = ({ href, size }: { href: string; size?: number }) => {
  return (
    <Button variant={'ghost'} size={'icon'} asChild>
      <Link href={href}>
        <ArrowRight size={size ?? 40} />
      </Link>
    </Button>
  );
};

export default BtnArrow;
