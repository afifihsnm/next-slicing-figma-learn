import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div>
      <div className="mx-16 sm:mx-48">
        <Navbar />
        {/* <img src="about-bg.svg" alt="" className="mx-auto md:ml-[66rem] mt-16" /> */}
        <section className="flex flex-col-reverse md:flex-row justify-between">
          <div className="mt-20 md:mt-40">
            <div className="mt-4 font-bold text-4xl sm:text-6xl">
              About me
            </div>
            <div className="mt-6 font-light text-sm sm:text-base text-[#828282]">
            Nisl arcu, scelerisque neque ut. Tincidunt amet, <br />tempor duis tortor neque auctor dis ipsum. Pretium <br />cras amet odio amet eleifend id sed cras sed. Aliquet <br />risus posuere aliquet imperdiet sit.
            </div>
            <div className="flex gap-2 mt-5">
              <Button className="px-5 font-semibold text-black bg-yellow-400 hover:bg-yellow-400/90">
                Resume
              </Button>
            </div>
          </div>
          <img src="about-bg.svg" alt="" className="mt-16" />
        </section>
        <Footer />
      </div>
      <div className="relative mt-96">
          <img src="./footer-bg.svg" alt="" className="absolute inset-x-0 bottom-0 w-full z-[-1]" />
      </div>
    </div>
  );
}
 
export default AboutPage;