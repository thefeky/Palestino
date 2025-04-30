import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function CarouselComp({
  width,
  md,
  lg,
  autoplay = true,
}: {
  width: string;
  md: string;
  lg: string;
  autoplay?: boolean;
}) {
  const plugins = autoplay ? [Autoplay({ delay: 3000 })] : [];

  return (
    <>
      <Carousel plugins={plugins} className={width}>
        <CarouselContent className="h-70">
          <CarouselItem className={`${md} ${lg} bg-black`}>...</CarouselItem>
          <CarouselItem className={`${md} ${lg} bg-red-500`}>...</CarouselItem>
          <CarouselItem className={`${md} ${lg} bg-blue-500`}>...</CarouselItem>
          <CarouselItem className={`${md} ${lg} bg-orange-500`}>
            ...
          </CarouselItem>
          <CarouselItem className={`${md} ${lg} bg-pink-500`}>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}

export default CarouselComp;
