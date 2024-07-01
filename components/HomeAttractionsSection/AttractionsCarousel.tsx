'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import AttractionCard from '@/components/AttractionCard';
import { Attraction } from '@/types';

type TAttractionsCarouselProps = {
  attractions: Attraction[];
  cardWidths: number[];
};
const AttractionsCarousel = ({
  attractions,
  cardWidths,
}: TAttractionsCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {attractions.map((x, index) => (
          <CarouselItem
            className="max-sm:basis-[60%!important] sm:pr-6"
            key={index}
            style={{ flexBasis: `${cardWidths[index]}%` }}
          >
            <AttractionCard {...x} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AttractionsCarousel;
