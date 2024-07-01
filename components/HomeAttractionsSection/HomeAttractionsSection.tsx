import { Attraction } from '@/types';
import BtnCTA from '../BtnCTA';
import SectionTitle from '../SectionTitle';
import AttractionsCarousel from './AttractionsCarousel';

const HomeAttractionsSection = () => {
  const attractionCardsWidths: number[] = [34, 23, 34, 18, 23];
  const attractions: Attraction[] = [
    {
      title: 'Little Krazy',
      // width: 34,
      img: '/img/attraction_1.png',
    },
    {
      title: 'Hawanim Groves City',
      // width: 23,
      img: '/img/attraction_2.png',
    },
    {
      title: 'Picnic Market',
      // width: 34,
      img: '/img/attraction_3.png',
    },
    {
      title: 'Lucaworld',
      // width: 18,
      img: '/img/attraction_4.png',
    },
    {
      title: 'Little Krazy',
      // width: 23,
      img: '/img/attraction_5.png',
    },
  ];
  return (
    <section>
      <div className="container ">
        <SectionTitle className="mb-10 text-left">
          <span className="block max-w-[26ch]">
            Book General Access ticket and enjoy the attractions for free
          </span>
        </SectionTitle>
        <BtnCTA href="#" title="Book General Access Ticket" />
      </div>

      <div className="contained-l mt-16">
        <AttractionsCarousel
          cardWidths={attractionCardsWidths}
          attractions={attractions}
        />
      </div>
    </section>
  );
};

export default HomeAttractionsSection;
