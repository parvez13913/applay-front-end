import useEmblaCarousel from "embla-carousel-react";
import { Circle } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
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

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="bg-gray-200 py-20">
      <div className="mx-auto px-8 sm:px-6 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            What Says People
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">
            Continuing network virtual strategic theme areas via vis ubiquitous
            potentialities. Proactively negotiate focused e-tailers without
            premium solutions.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative flex-[0_0_49.5%] px-4">
                  <div className="group rounded-md bg-white px-8 py-20 shadow-sm transition-all duration-400 ease-in-out hover:border-b-4 hover:border-primary">
                    <p className="text-gray-600">{testimonial.quote}</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.author}
                        </h3>
                        <p className="text-sm text-gray-500">
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
          <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex bg-white shadow-md px-1 rounded-md">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                onClick={() => scrollTo(index)}
                className="text-blue-600 transition-colors hover:text-blue-700"
                aria-label={`Go to slide ${index + 1}`}
              >
                <Circle className="h-4 w-4 fill-current" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
