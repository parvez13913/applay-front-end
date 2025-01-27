"use client";

import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  options?: EmblaOptionsType;
}

export default function Carousel({ images, options = {} }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
  });
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (!isPaused) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi, isPaused]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_30%] pl-4" key={index}>
              <div className="bg-transparent">
                <Image
                  src={
                    src || "https://wpthemesgrid.com/themes/applay/img/02.png"
                  }
                  alt={`Slide ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-transparent p-2 shadow-md hover:bg-gray-100"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-transparent p-2 shadow-md hover:bg-gray-100"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <button
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 shadow-md hover:bg-gray-100"
        onClick={togglePause}
        aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
      >
        {isPaused ? (
          <Play className="h-5 w-5" />
        ) : (
          <Pause className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
