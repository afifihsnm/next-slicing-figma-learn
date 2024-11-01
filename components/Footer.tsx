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
          <input id="name" type="text" className="justify-center mx-auto mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500" placeholder="Enter your name" />
          <input id="name" type="text" className="justify-center mx-auto mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500" placeholder="Enter your name" />
          <textarea id="name" className="justify-center mx-auto mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500" placeholder="Enter your name" />
        </section>
        <Button className="flex justify-end items-center justify-items-end mt-4 px-5 font-semibold text-black bg-yellow-400 hover:bg-yellow-400/90">
            Send
        </Button>
      </footer>
    </div>
  );
}

export default Footer;
