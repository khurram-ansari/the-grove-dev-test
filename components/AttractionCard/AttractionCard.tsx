import { Attraction } from '@/types';
import Image from 'next/image';

type TAttractionCardProps = Attraction & {};
const AttractionCard = ({ title, img }: TAttractionCardProps) => {
  return (
    <>
      <div className="relative aspect-[114/161] ">
        <Image src={img} alt="" fill />
      </div>
      <h3 className="mt-6 text-center font-serif ">{title}</h3>
    </>
  );
};

export default AttractionCard;
