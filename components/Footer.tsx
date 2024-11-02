import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="mt-32 flex justify-center items-center">
      <footer>
        <section>
          <div className="flex justify-center items-center mb-12">
            <span className="font-bold text-4xl underline underline-offset-[16px] decoration-yellow-400">
              Projects
            </span>
          </div>
        </section>

        <section className="flex flex-col items-center w-96">
          <label htmlFor="name" className="mt-4 w-full">Name</label>
          <input id="name" type="text" className="mx-auto w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-yellow-500 focus:outline-none hover:border-yellow-500" placeholder="Enter your name" />
          
          <label htmlFor="email" className="mt-4 w-full">Email</label>
          <input id="email" type="text" className="mx-auto w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-yellow-500 focus:outline-none hover:border-yellow-500" placeholder="Enter your email" />
          
          <label htmlFor="message" className="mt-4 w-full">Message</label>
          <textarea id="message" className="mx-auto w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-yellow-500 focus:outline-none hover:border-yellow-500" placeholder="Enter your message" />
        </section>
        
        <Button className="flex justify-end items-center mt-4 px-5 font-semibold text-black bg-yellow-400 hover:bg-yellow-400/90">
          Send
        </Button>

        <div className="flex justify-center items-center gap-8 flex-row mt-16">
          <img src="./instagram.png" alt="" />
          <img src="./linkedin.png" alt="" />
          <img src="./email.png" alt="" />
        </div>
        <span className="flex justify-center items-center mt-8 text-[#828282]">©Afif Ihsan Maulana 2024</span>
      </footer>
    </div>
  );
}

export default Footer;
