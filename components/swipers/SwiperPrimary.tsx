"use client";

import { type FC, JSX, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Ul, Li } from "@/components";

type SwiperPrimaryProps = {
  children: JSX.Element[]
};
const SwiperPrimary: FC<SwiperPrimaryProps> = ({ children }) => {
  //Hooks
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    const updateProgress = () => {
      const index = emblaApi.selectedScrollSnap();
      const total = emblaApi.scrollSnapList().length;
      const progress = total > 1 ? index / (total - 1) : 1;
      setScrollProgress(progress);
    };
    emblaApi.on("select", updateProgress);
    emblaApi.on("reInit", updateProgress);
    updateProgress();
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 10000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", updateProgress);
      emblaApi.off("reInit", updateProgress);
    };
  }, [emblaApi]);
  return (
    <div className="relative mx-auto w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <Ul className="flex gap-6 items-start">
          {children.map((child, index) => (
          <Li key={index} className={`shrink-0 basis-full tablet:basis-[48.25%] transition-all ease-in-out duration-750 list-none`}>
            {child}
          </Li>
        ))}
        </Ul>
      </div>
      <div className="absolute right-0 mt-10 w-full max-w-50 h-1.5 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-full bg-light-blue transition-transform duration-250" style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "left" }}></div>
      </div>
      <div className="absolute flex gap-4 mt-15 right-0">
        <button onClick={scrollPrev}><GoChevronLeft className="text-light-blue hover:text-blue active:text-blue transition-all duration-250 w-10 h-10 border-2 rounded-[5px] cursor-pointer"/></button>
        <button onClick={scrollNext}><GoChevronRight className="text-light-blue hover:text-blue active:text-blue transition-all duration-250 w-10 h-10 border-2 rounded-[5px] cursor-pointer"/></button>
      </div>
    </div>
  )
}
export default SwiperPrimary;