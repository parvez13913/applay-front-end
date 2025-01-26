import { Play, Shield } from "lucide-react";
import Image from "next/image";
import { Counter } from "../components/counter";

export default function Features() {
  const metrics = [
    { number: 1000, label: "Happy Clients" },
    { number: 4400, label: "Wining Award" },
    { number: 5000, label: "Team Member" },
  ];
  return (
    <section className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/service-img1.svg"
              alt="Plan and Manage Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-primary">
              Desktop and Mobile App
            </span>

            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Plan and Manage
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an, insolens gubergren similique est cu. Et vel
              modus congue vituperata. Solum patrique no sea. Mea ex malis
              mollis oporteat. Eum an expetenda consequat.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm text-white transition-colors ">
                <Play className="h-4 w-4" />
                View video
              </button>

              <button className="rounded-md bg-gray-400 px-6 py-3 text-sm text-gray-600 transition-colors hover:bg-primary">
                See services
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-primary">
              Desktop and Mobile App
            </span>

            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Plan and Manage
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an, insolens gubergren similique est cu. Et vel
              modus congue vituperata. Solum patrique no sea. Mea ex malis
              mollis oporteat. Eum an expetenda consequat.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm text-white transition-colors ">
                <Play className="h-4 w-4" />
                View video
              </button>

              <button className="rounded-md bg-gray-400 px-6 py-3 text-sm text-gray-600 transition-colors hover:bg-primary">
                See services
              </button>
            </div>
          </div>

          {/*  Right Column- Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/service-img2.svg"
              alt="Plan and Manage Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 py-24">
        <div className="flex flex-col items-center justify-between gap-8 text-white md:flex-row">
          {/* Trusted By Section */}
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/10 p-3">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Trusted by 4000+</h2>
              <p className="text-blue-100">High performing team worldwide</p>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold sm:text-4xl">
                  <Counter end={metric.number} duration={2000} />
                </div>
                <div className="text-blue-100">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
