import About from "./ui/about/about";
import Features from "./ui/features/features";
import Home from "./ui/home/home";

export default function page() {
  return (
    <main>
      <Home />
      <About />
      <Features />
    </main>
  );
}
