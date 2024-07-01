import { Attraction } from '@/types';
import BtnCTA from '../BtnCTA';
import AttractionsCarousel from '../HomeAttractionsSection/AttractionsCarousel';
import SectionTitle from '../SectionTitle';

const HomeExperiencesSection = () => {
  const experiencesCardsWidths: number[] = [33, 44, 36];
  const experiences: Attraction[] = [
    {
      title: 'Restaurants',
      // width: 34,
      img: '/img/attraction_1.png',
    },
    {
      title: 'Experiences',
      // width: 23,
      img: '/img/attraction_2.png',
    },
    {
      title: 'Events',
      // width: 34,
      img: '/img/attraction_3.png',
    },
  ];
  return (
    <section>
      <div className="contained-l">
        <div className="flex flex-col gap-20 sm:flex-row sm:gap-14">
          <div className="w-full sm:w-[24%]">
            <SectionTitle
              className="mb-10 text-left"
              title="Curate your experience as you like"
            />
            <BtnCTA href="" title="Book Tickets" />
          </div>
          <div className="flex-1">
            <AttractionsCarousel
              cardWidths={experiencesCardsWidths}
              attractions={experiences}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExperiencesSection;
