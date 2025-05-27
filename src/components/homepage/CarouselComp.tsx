import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import img1 from "/assets/carousel/1.jpg";
import img2 from "/assets/carousel/2.jpg";
import img3 from "/assets/carousel/3.jpg";
import img4 from "/assets/carousel/4.jpg";
import img5 from "/assets/carousel/5.jpg";

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
          <CarouselItem className={`${md} ${lg}`}>
            <img loading="lazy" src={img1} alt="img1" />
          </CarouselItem>
          <CarouselItem className={`${md} ${lg}`}>
            <img loading="lazy" src={img2} alt="img1" />
          </CarouselItem>
          <CarouselItem className={`${md} ${lg}`}>
            <img loading="lazy" src={img3} alt="img1" />
          </CarouselItem>
          <CarouselItem className={`${md} ${lg}`}>
            <img loading="lazy" src={img4} alt="img1" />
          </CarouselItem>
          <CarouselItem className={`${md} ${lg}`}>
            <img loading="lazy" src={img5} alt="img1" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}

export default CarouselComp;
