import Button from "./button";

export default function ContactHeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm mb-4 opacity-90">Plan your life</p>
        <h1 className="text-3xl md:text-6xl mb-6">
          <span className="opacity-90">Get </span>
          <span className="opacity-100 font-bold">started</span>
          <span className="opacity-90"> now</span>
        </h1>
        <p className="text-sm mb-8 opacity-80 mx-auto">
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
          atqui laudem an, insolens gubergren similique est cu. Et vel modus
          congue vituperata.
        </p>
        <Button className="bg-white text-primary px-8 py-2 rounded-sm hover:bg-transparent hover:border-white hover:text-white transition-opacity font-normal">
          View Pricing
        </Button>
      </div>
    </div>
  );
}
