import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import AppStoreLink from './AppStoreLink';
import BrandLogo from '../BrandLogo';

const FooterUpper = () => {
  return (
    <>
      <div className="m-0 sm:hidden">
        <BrandLogo size="lg" />
      </div>
      <div className="flex flex-col justify-between gap-12 sm:flex-row sm:items-center">
        <div className="max-w-[60ch]">
          <SectionTitle
            className="text-left"
            title="Join us for an unforgettable experience"
          />
        </div>
        <div className="space-y-4">
          <div className="caption">DOWNLOAD THE GROVES APP</div>
          <div className="flex items-center gap-4 sm:gap-5 ">
            <AppStoreLink href="" img={'/appstore_badge.svg'} />
            <AppStoreLink href="" img={'/playstore_badge.svg'} />

            {/* <Image alt="" src="/playstore_badge.svg" width={170} height={50} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterUpper;
