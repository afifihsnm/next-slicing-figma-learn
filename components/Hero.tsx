import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mt-48 md:mt-20">
      <div className="text-xl font-bold text-yellow-400">
        UI/UX Designer
      </div>
      <div className="mt-4 font-bold text-6xl">
        Hello, my name <br />is Madelyn Torff
      </div>
      <div className="mt-6 font-light text-base text-[#828282]">
        Short text with details about you, what you <br />do or your professional career. You can add <br />more information on the about page.
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