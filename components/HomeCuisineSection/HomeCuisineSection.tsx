import SectionTitle from '@/components/SectionTitle';
import CuisineCard from '@/components/CuisineCard';
import { type CuisineItem } from '@/types';

const HomeCuisineSection = () => {
  const cuisines: CuisineItem[] = [
    {
      name: 'Vida Vera',
      price: 100,
      img: '/img/video_thumbnail.png',
      href: '#',
    },
    {
      name: 'Vida Vera',
      price: 100,
      img: '/img/video_thumbnail.png',
      href: '#',
    },
    {
      name: 'Vida Vera',
      price: 100,
      img: '/img/video_thumbnail.png',
      href: '#',
    },
    {
      name: 'Vida Vera',
      price: 100,
      img: '/img/video_thumbnail.png',
      href: '#',
    },
  ];
  return (
    <section className="py-14 sm:py-32">
      <div className="container ">
        <div className="flex items-center justify-center">
          <SectionTitle
            className="mb-8 text-left  sm:mb-20 sm:px-32 sm:text-center"
            title="Experience the Finest Cuisine"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
          />
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-3 sm:grid-cols-2 sm:gap-y-8">
          {cuisines.map((cuisine, index) => (
            <CuisineCard key={index} {...cuisine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCuisineSection;
