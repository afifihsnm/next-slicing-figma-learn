import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <div className="mx-16 sm:mx-48">
        <img src="./header-bg.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
        <Navbar />
        <Hero />
        <Projects />
      </div>
      <Footer />
      <div className="relative mt-96">
          <img src="./footer-bg.svg" alt="" className="absolute inset-x-0 bottom-0 w-full z-[-1]" />
      </div>
    </div>
  );
}
