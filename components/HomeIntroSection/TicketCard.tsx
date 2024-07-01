import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BtnArrow from '../BtnArrow';

type TTicketCardProps = {
  price: number;
  title: string;
  description: string;
};
const TicketCard = ({ price, title, description }: TTicketCardProps) => {
  return (
    <div className="glass_effect flex w-full flex-col items-start gap-6 rounded-3xl  px-8 pb-14 pt-9 text-left ">
      <div className="caption">{price} SR/GUEST</div>
      <div className="flex flex-col items-end gap-8 sm:flex-row sm:items-start">
        <div className="space-y-4">
          <h3 className="font-serif">{title}</h3>
          <p>{description}</p>
        </div>
        <BtnArrow href="#" />
      </div>
    </div>
  );
};

export default TicketCard;
