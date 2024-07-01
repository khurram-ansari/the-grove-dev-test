import { PaymentProvidersLogo } from '@/types';
import Image from 'next/image';

const PaymentProvidersLogos = () => {
  const logos: PaymentProvidersLogo[] = [
    {
      path: '/visa_logo.svg',
      width: 43,
      height: 12,
    },
    {
      path: '/mastercard_logo.png',
      width: 31,
      height: 31,
    },
    {
      path: '/american_express_logo.png',
      width: 26,
      height: 26,
    },
  ];
  return (
    <div className="flex items-center gap-4">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative"
          style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
        >
          <Image src={logo.path} fill alt="" />
        </div>
      ))}
    </div>
  );
};

export default PaymentProvidersLogos;
