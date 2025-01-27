import useEmblaCarousel from "embla-carousel-react";
import { Circle } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Button from "./button";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I just brought it and i love it. Finally the best tool for mockups i have encountered ever and that's why this is the best for me.",
      author: "Keria Chol",
      position: "CEO - Appland",
      avatar: "/testi1.jpg",
    },
    {
      quote:
        "I just brought it and i love it. Finally the best tool for mockups i have encountered ever and that's why this is the best for me.",
      author: "Keria Chol",
      position: "CEO - Appland",
      avatar: "/testi2.jpg",
    },
    {
      quote:
        "I just brought it and i love it. Finally the best tool for mockups i have encountered ever and that's why this is the best for me.",
      author: "Keria Chol",
      position: "CEO - Appland",
      avatar: "/testi3.jpg",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setSelectedIndex(index);
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="bg-gray-200 py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            What Says People
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">
            Continuing network virtual strategic theme areas via vis ubiquitous
            potentialities. Proactively negotiate focused e-tailers without
            premium solutions.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <div className="overflow-hidden w-full sm:w-[90%]" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_90%] md:flex-[0_0_49.5%] px-4"
                >
                  <div className="rounded-md bg-white px-6 py-8 sm:px-8 sm:py-12 md:py-16 lg:py-20 shadow-sm transition-all duration-400 ease-in-out hover:border-b-4 hover:border-primary">
                    <p className="text-sm sm:text-base text-gray-600">
                      {testimonial.quote}
                    </p>
                    <div className="mt-4 sm:mt-6 flex items-center gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-full w-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex sm:flex-col justify-center sm:justify-start gap-2 mt-4 sm:mt-0 bg-white shadow-md px-2 py-1 sm:py-2 rounded-md">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                onClick={() => scrollTo(index)}
                className={`text-primary transition-colors hover:text-blue-700 ${
                  selectedIndex === index ? "text-blue-700" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <Circle className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
