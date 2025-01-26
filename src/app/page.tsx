import About from "./ui/about/about";
import Blog from "./ui/blog/blog";
import Contact from "./ui/contact/contact";
import FAQ from "./ui/faq/faq";
import Features from "./ui/features/features";
import Home from "./ui/home/home";
import Pricing from "./ui/pricing/pricing";

export default function page() {
  return (
    <main>
      <Home />
      <About />
      <Features />
      <Pricing />
      <FAQ />
      <Blog />
      <Contact />
    </main>
  );
}
