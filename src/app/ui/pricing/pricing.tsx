"use client";
import Button from "../components/button";
import Testimonials from "../components/testimonials";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "29",
      description: "for small business",
      features: ["3 Users", "Unlimited Projects", "Download Prototypes"],
    },
    {
      name: "Standard",
      price: "59",
      description: "for companies",
      features: ["3 Users", "Unlimited Projects", "Download Prototypes"],
    },
    {
      name: "Professional",
      price: "79",
      description: "for small business",
      isPopular: true,
      features: ["3 Users", "Unlimited Projects", "Download Prototypes"],
    },
    {
      name: "Most Popular",
      price: "99",
      description: "for small business",
      features: ["3 Users", "Unlimited Projects", "Download Prototypes"],
    },
  ];

  return (
    <section className="pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white pb-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Our Pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">
            Business consulting excepteur sint occaecat cupidatat consulting non
            proident, sunt in culpa qui officia deserunt laborum market.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              {plan.isPopular && (
                <div className="absolute -right-1 -top-1 z-10">
                  <div className="inline-block rounded-br-lg rounded-tl-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-sm">$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-gray-500">/mo</span>
                </div>
              </div>

              <ul className="mt-6 space-y-4 text-center">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <Button className="mt-8 w-1/2 rounded-sm bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
}
