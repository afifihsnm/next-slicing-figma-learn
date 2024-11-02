import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mt-[19rem] md:mt-20">
      <div className="text-lg sm:text-xl font-bold text-yellow-400">
        Fullstack Developer & DevOps Engineer
      </div>
      <div className="mt-4 font-bold text-4xl sm:text-6xl">
        Hello, my name <br />is Afif Ihsan Maulana
      </div>
      <div className="mt-6 font-light text-sm sm:text-base text-[#828282]">
        Saya adalah seorang DevOps Engineer dan BackEnd Developer serta siswa <br />
        aktif di SMK Negeri 8 Semarang, jurusan Pengembangan Perangkat Lunak <br />
        dan Gim.
      </div>
      <div className="flex gap-2 mt-5">
        <Button className="px-5 font-semibold text-black bg-yellow-400 hover:bg-yellow-400/90">
          Projects
        </Button>
        <Button variant="outline" className="px-5 font-semibold text-black border-2 border-black">
          LinkedIn
        </Button>
      </div>
    </section>
  );
}
 
export default Hero;