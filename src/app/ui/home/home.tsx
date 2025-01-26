import { Play } from "lucide-react";
import Image from "next/image";
import Button from "../components/button";
import Carousel from "../components/carousel";

export default function Home() {
  const images = ["/01.png", "/02.png", "/03.png", "/04.png", "/05.png"];
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-screen items-center gap-8 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="pt-20 text-white lg:pt-0">
              <p className="text-sm font-normal">Plan your life</p>
              <h1 className="mt-4 text-3xl sm:text-xl md:text-5xl">
                Increase your productivity
              </h1>
              <p className="mt-4 text-sm">
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                Usu atqui laudem an, insolens gubergren similique est cu. Et vel
                modus congue vituperata.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm text-primary">
                  View video
                  <Play className="h-4 w-4" />
                </Button>
                <Button className="rounded-sm  px-6 py-3 text-sm font-medium text-white border border-white hover:bg-white hover:text-primary">
                  Get Start
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:h-[600px]">
              <Image
                src="https://wpthemesgrid.com/themes/applay/img/hero-image.svg"
                alt="Productivity illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Carousel images={images} />
      </div>
    </main>
  );
}
