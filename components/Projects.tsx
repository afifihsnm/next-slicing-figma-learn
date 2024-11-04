import { Button } from "./ui/button";

const Projects = () => {
  return (
    <div className="mt-72">
      <section id="projects">
        <div className="flex justify-center items-center">
          <span className="font-bold text-4xl underline underline-offset-[16px] decoration-yellow-400">
            Projects
          </span>
        </div>
      </section>

      <section className="mt-32">
        <article className="mx-auto flex max-w-md flex-col rounded-2xl bg-white shadow overflow-hidden md:max-w-5xl md:flex-row md:items-center">
          <div className="w-full h-1/2 md:w-1/2 md:h-96">
            <img
              className="object-cover w-full h-full"
              src="./admin-sadam.png"
              alt=""
            />
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold">Website Pengaduan Online Masyarakat (Admin Panel)</h2>
            <p>
              SADAM adalah sebuah platform berbasis website yang dirancang untuk mempermudah masyarakat melaporkan permasalahan/kejadian yang memerlukan perhatian dari pemerintah atau lembaga terkait. Panel Admin dibuat menggunakan Laravel dan Filament.
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/afifihsnm/backend-gama">
              <Button variant="outline" className="mt-4 border border-black rounded-full">
                <span className="font-semibold">View Project</span>
              </Button>
            </a>
          </div>
        </article>

        <article className="mt-24 mx-auto flex max-w-md flex-col rounded-2xl bg-white shadow overflow-hidden md:max-w-5xl md:flex-row md:items-center">
          <div className="w-full h-1/2 md:w-1/2 md:h-96">
            <img
              className="object-cover w-full h-full"
              src="attendance-backend.png"
              alt=""
            />
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold">Website Absensi</h2>
            <p>
              Website Absensi yang dibuat menggunakan Laravel dan Tablar Admin Dashboard.
            </p>
            <a href="https://github.com/afifihsnm/beetlehr-attendance-backend" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mt-4 border border-black rounded-full">
                <span className="font-semibold">View Project</span>
              </Button>
            </a>
          </div>
        </article>

        <article className="mt-24 mx-auto flex max-w-md flex-col rounded-2xl bg-white shadow overflow-hidden md:max-w-5xl md:flex-row md:items-center">
          <div className="w-full h-1/2 md:w-1/2 md:h-96">
            <img
              className="object-cover w-full h-full"
              src="./lms.png"
              alt=""
            />
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold">Website Learning Management System</h2>
            <p>
              Website LMS yang dibangun menggunakan Next.js dan Xendit sebagai Payment Gateway.
            </p>
            <a href="https://github.com/afifihsnm/lms-tutorial" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mt-4 border border-black rounded-full">
                <span className="font-semibold">View Project</span>
              </Button>
            </a>
          </div>
        </article>
      </section>

      {/* <section className="mt-32">
        <article className="mx-auto flex max-w-md flex-col rounded-2xl bg-white shadow md:max-w-5xl md:flex-row md:items-center">
          <div className="shrink-0 md:max-w-sm">
            <img
              className="object-cover"
              src="https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              alt=""
            />
          </div>
          <div className="py-4 sm:py-8">
            <a href="#" className="mb-6 block text-2xl font-medium text-gray-700">
              Long walks are helpful in decreasing stress levels
            </a>
            <p className="mb-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit illum consequatur quia doloremque! Similique eius
              enim nostrum totam.
            </p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                alt="Simon Lewis"
              />
              <p className="ml-4 w-56">
                <strong className="block font-medium text-gray-700">
                  Johanson Levinsiki
                </strong>
                <span className="text-sm text-gray-400">Jun 26, 2022</span>
              </p>
            </div>
          </div>
        </article>
      </section> */}
    </div>
  );
};

export default Projects;
