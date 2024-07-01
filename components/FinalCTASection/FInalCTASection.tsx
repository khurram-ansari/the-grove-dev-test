import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import BtnCTA from '../BtnCTA';

const FinalCTASection = () => {
  return (
    <section className="pt-16">
      <div className="container flex flex-col-reverse items-center sm:flex-row">
        <div className="relative aspect-square w-full">
          <Image src={'/img/map.png'} alt="" fill />
        </div>

        <div className="space-y-8">
          <div className="caption">Experience the groves</div>
          <div className="space-y-12">
            <SectionTitle
              className="text-left"
              title="Find your place"
              description="Our interactive map will show you the way to the shops and restaurants that you want to see."
            />
            <BtnCTA href="#" title="Open the Map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
