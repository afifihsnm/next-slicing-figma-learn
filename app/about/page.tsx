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
              Saya adalah seorang DevOps Engineer dan BackEnd Developer serta siswa <br />
              aktif di SMK Negeri 8 Semarang, jurusan Pengembangan Perangkat Lunak <br />
              dan Gim. Saya mampu membangun RESTful API menggunakan Laravel, <br />
              membangun fullstack web menggunakan Next.js dan juga dapat <br />
              mengoperasikan AWS untuk kebutuhan site deployment dan Cloud <br />
              Computing. Dengan kemampuan komunikasi yang baik, saya mampu bekerja <br />
              sama dalam tim dengan baik. <br />
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