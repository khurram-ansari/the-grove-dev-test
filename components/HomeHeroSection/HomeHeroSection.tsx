import BtnCTA from '@/components/BtnCTA';
import HeroPagination from './HeroPagination';

const HomeHeroSection = () => {
  return (
    <section className="flex min-h-screen flex-col bg-[url('/img/hero_image.png')] bg-cover bg-center sm:min-h-[768px]">
      {/* column */}
      <div className="relative flex flex-1 items-center bg-black/50 sm:w-[48%]">
        <div className="ml-[max(0px,_calc((100%_/_0.48_-1226px)_/_2))] w-full px-5 sm:px-8 sm:pt-32">
          <div className="flex flex-col items-start gap-7 px-3">
            <span className="caption">Khawaja Yanni</span>
            <h1 className="font-serif">
              The new <br /> era of luxury
            </h1>
            <p className="mb-9 max-w-[42ch]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>
            <BtnCTA title="Book reservation now" href="#" />
          </div>
        </div>

        <HeroPagination activeIndex={2} noOfSlides={4} />
      </div>
    </section>
  );
};

export default HomeHeroSection;
