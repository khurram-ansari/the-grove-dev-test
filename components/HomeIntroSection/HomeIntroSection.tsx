import Image from 'next/image';
import TicketCard from './TicketCard';
import SectionTitle from '@/components/SectionTitle';

const HomeHeroSection = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="container flex flex-col items-center justify-center gap-6 text-center sm:px-[7.25rem] ">
        <SectionTitle
          className="mb-11 sm:mb-14"
          title="Mall of: Endless Possibilities"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <div className="relative aspect-[452/251] w-full">
          <Image src={'/img/video_thumbnail.png'} alt="" fill />
        </div>
        <TicketCard
          price={25}
          title="Get your General Access Ticket"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text e"
        />
      </div>
    </section>
  );
};

export default HomeHeroSection;
