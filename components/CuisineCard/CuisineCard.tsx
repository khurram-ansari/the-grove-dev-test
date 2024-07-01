import Image from 'next/image';
import BtnArrow from '@/components/BtnArrow';
import { CuisineItem } from '@/types';

type TCuisineCardProps = CuisineItem & {};
const CuisineCard = ({ img, price, name, href }: TCuisineCardProps) => {
  return (
    <div className="glass_effect rounded-[2.375rem] p-3">
      <div className="relative aspect-video overflow-hidden rounded-[2rem]">
        <Image src={img} fill alt="" />
      </div>
      <div className="flex w-full items-center justify-between px-4 pb-6 pt-2">
        <div className="space-y-4">
          <h3 className="font-serif">{name}</h3>
          <div className="caption rounded-full bg-primary px-4 py-1">
            {price} SR per guest
          </div>
        </div>
        <BtnArrow href={href} />
      </div>
    </div>
  );
};

export default CuisineCard;
