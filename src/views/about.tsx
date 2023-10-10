import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";
import MaterialSymbolsArrowRightAltRounded from "~icons/material-symbols/arrow-right-alt-rounded";
import MdiFacebookBox from "~icons/mdi/facebook-box";
import MdiInstagram from "~icons/mdi/instagram";
import MdiYoutube from "~icons/mdi/youtube";
import MdiTwitter from "~icons/mdi/twitter";

const Aboutus = () => {
  return (
    <div className="container mx-auto">
      <section className="my-20 space-y-10 px-4">
        <div>
          <div className=" relative flex items-center justify-center text-center">
            <span className="z-10   mb-4 bg-gray-50 px-5  text-3xl font-bold text-red-400 md:text-4xl lg:text-5xl">
              OUR VISION 🧠
            </span>
            <hr className="absolute h-1 w-full rounded-full bg-red-400" />
          </div>
          <div className="mx-auto max-w-4xl rounded-xl p-4 text-center text-gray-800">
            <p>
              In our journey, We are going to build some massive projects that
              could elevate your skills in the tech stacks. Let’s fIN out what
              are the real-life projects that we are going to build? From
              beginner level to advanced level and it will slowly boost your
              experience to build things. Yes. <strong>BUILD THINGS.</strong>
            </p>
          </div>
        </div>
        <div>
          <div className=" relative flex items-center justify-center text-center">
            <span className=" z-10   mb-4 bg-gray-50 px-5  text-3xl font-bold text-red-400 md:text-4xl lg:text-5xl">
              OUR GOAL 🚀
            </span>
            <hr className="absolute h-1 w-full rounded-full bg-red-400" />
          </div>
          <div className="mx-auto max-w-4xl rounded-xl p-4 text-center text-gray-800">
            <p>
              Our goal is to make coding accessible to anyone, even if starting
              from scratch, by building a strong foundation in full-stack
              engineering .<strong>NOTHING IMPOSSIBLE.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Contactform = () => {
  return (
    <div className="bg-gray-800 px-8 py-12 text-gray-100 lg:px-48">
      <h1 className="text-center  text-3xl font-extrabold  dark:text-white md:text-5xl lg:text-6xl">
        Contact
      </h1>

      <form
        action="#"
        className="mx-auto mt-24 grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg bg-gray-100 px-8 py-16 text-gray-900 shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
      >
        <div className="flex flex-col-reverse justify-between">
          <div>
            <img
              src="https://shreethemes.in/giglink/landing/assets/images/contact.svg"
              alt=""
            />
          </div>
          {/* <div className="mt-8 text-center">
                        <img src={CyberDudeLogoBlack} alt="CyberDude logo" />
                    </div> */}
        </div>
        <div className="">
          <div className="mb-8">
            <h2 className="text-4xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <div className="mt-2 text-gray-700">
              Hate forms? Send us an
              <span className="mr-1 underline">
                <a href="#"> email</a>
              </span>
              instead.
            </div>
          </div>
          <div>
            <span className="text-sm font-bold uppercase text-gray-600">
              Full Name
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Email
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Message
            </span>
            <textarea
              className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="mt-8">
            <button className="focus:shadow-outline w-full rounded-lg bg-red-500 p-3 text-sm font-bold uppercase tracking-wide text-gray-100 hover:bg-red-800 focus:outline-none">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />

      <section className="relative bg-orange-50">
        <div className="container  mx-auto flex flex-col items-center  justify-between px-10 pb-0 pt-32 sm:pt-0 md:flex-row md:px-20 md:py-64 md:pb-10">
          <div className="max-w-xl">
            <h3 className="text-5xl font-bold">
              About
              <span className="ml-2 text-red-400">Cyberdude</span>
            </h3>
            <p className="mt-5 text-black">
              CyberDude Networks Pvt. Ltd. is creative product startup company
              that primary focuses on tech and product development. <br />
              <br />
              We stimulate the creativity in each and everything that appears to
              our eye. We love doing it.
            </p>

            <div className="mt-8 flex flex-col items-center space-x-10 space-y-2 text-sm md:flex-row md:space-y-0">
              <button className=" relative hidden w-full items-center justify-center rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 md:flex md:w-fit">
                <span>Reach Us</span>
                <span className="ml-2">
                  <MaterialSymbolsArrowRightAltRounded className="translate-x-0 transform text-lg transition-transform hover:translate-x-2" />
                </span>
              </button>

              <ul className="flex space-x-4">
                <li className="transform transition-transform hover:scale-125">
                  <a href="#">
                    <div className="rounded-full bg-blue-500 p-2 text-white shadow-2xl">
                      <MdiFacebookBox className="text-lg" />
                    </div>
                  </a>
                </li>
                <li className="transform transition-transform hover:scale-125">
                  <a href="#">
                    <div className="rounded-full bg-pink-600 p-2 text-white shadow-2xl">
                      <MdiInstagram className="text-lg" />
                    </div>
                  </a>
                </li>
                <li className="transform transition-transform hover:scale-125">
                  <a href="#">
                    <div className="rounded-full bg-red-500 p-2 text-white shadow-2xl">
                      <MdiYoutube className="text-lg" />
                    </div>
                  </a>
                </li>
                <li className="transform transition-transform hover:scale-125">
                  <a href="#">
                    <div className="rounded-full bg-blue-400 p-2 text-white shadow-2xl">
                      <MdiTwitter className="text-lg" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[url('/images/shape-1.svg')] bg-no-repeat ">
            <img
              src="https://github.com/anburocky3.png"
              alt="Anbuselvan Rocky"
              className="w-64 rounded-full"
            />
          </div>
        </div>
      </section>
      <Aboutus />
      <Contactform />

      <TheFooter />
    </div>
  );
}

export default About;
