import TheFooter from "@/components/TheFooter";
import TheNavbar from "@/components/TheNavbar";

interface ResourceCardData {
  id: number;
  title: string;
  img: string;
}

const resourceCardData: ResourceCardData[] = [
  { id: 1, title: "# 1 Programming Tamil Community Online", img: "" },
  {
    id: 2,
    title: "This page going to be your go-to search engine for your journey.",
    img: "",
  },
  { id: 3, title: "Got Stucked! Visit here and find the resolve.", img: "" },
  {
    id: 4,
    title: "Our Resources are Always up-to date with the stacks.",
    img: "",
  },
];

const ResourcesCard = ({ title }: ResourceCardData) => {
  return (
    <div className="flex  w-64 flex-col items-center  space-y-4 rounded-[18px] bg-gray-50 bg-opacity-20 px-4 py-6">
      <img
        className="w-20 rounded-full"
        src="https://github.com/anburocky3.png"
        alt="idea"
      />
      <p className="text-center font-bold"> {title}</p>
    </div>
  );
};

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

function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />

      <section className=" bg-gradient-to-r from-red-500 to-purple-500 bg-cover py-10 pt-40">
        <div className="font-inter flex flex-col items-center justify-center  py-8 text-white">
          <h1 className="text-4xl font-black">Our Ultimate Resources</h1>
          <p className="pt-2 text-center text-lg">
            All Cyberdude's Resources, In <strong className="">One</strong>{" "}
            Place.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 gap-10 text-white">
            {resourceCardData.map((resource) => (
              <ResourcesCard
                key={resource.id}
                id={resource.id}
                img={resource.img}
                title={resource.title}
              />
            ))}
          </div>
        </div>
      </section>

      <TheFooter />
    </div>
  );
}

export default Resources;
