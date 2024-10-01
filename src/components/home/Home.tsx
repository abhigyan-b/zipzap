import { Hero } from "./components/Hero";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";

export const Home = () => (
  <div className="flex flex-col gap-16 md:gap-24 bg-black items-center justify-center font-inter">
    <Hero />
    <ComingSoon />
    <Footer />
  </div>
);
