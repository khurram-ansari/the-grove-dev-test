import PaginationDot from './PaginationDot';

const HeroPagination = ({
  noOfSlides,
  activeIndex,
}: {
  noOfSlides: number;
  activeIndex: number;
}) => {
  return (
    <div className="absolute bottom-10 right-7 flex gap-1">
      {Array(noOfSlides)
        .fill(null)
        .map((x, i) => (
          <PaginationDot isActive={activeIndex === i} key={i} />
        ))}
    </div>
  );
};

export default HeroPagination;
