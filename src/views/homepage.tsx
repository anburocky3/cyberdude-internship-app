import TheNavbar from "@/components/TheNavbar";
import MaterialSymbolsVolumeUpRounded from "~icons/material-symbols/volume-up-rounded";
import MaterialSymbolsArrowRightAltRounded from "~icons/material-symbols/arrow-right-alt-rounded";
import MaterialSymbolsSlowMotionVideo from "~icons/material-symbols/slow-motion-video";
import MaterialSymbolsTrophyOutline from "~icons/material-symbols/trophy-outline";
import MaterialSymbolsArrowRightAlt from "~icons/material-symbols/arrow-right-alt";
import MaterialSymbolsArrowDownward from "~icons/material-symbols/arrow-downward";
import MdiFacebookBox from "~icons/mdi/facebook-box";
import MdiInstagram from "~icons/mdi/instagram";
import MdiYoutube from "~icons/mdi/youtube";
import MdiTwitter from "~icons/mdi/twitter";

const techSkills = [
  { id: 1, title: "HTML", type: "frontend" },
  { id: 2, title: "CSS", type: "frontend" },
  { id: 3, title: "CSS Flexbox", type: "frontend" },
  { id: 4, title: "CSS Grid", type: "frontend" },
  { id: 5, title: "SASS", type: "frontend" },
  { id: 6, title: "Bootstrap", type: "frontend" },
  { id: 7, title: "TailwINCSS", type: "frontend" },
  { id: 8, title: "Javascript", type: "frontend" },
  { id: 9, title: "Modern Javascript", type: "frontend" },
  { id: 10, title: "Javascript DOM", type: "frontend" },
  { id: 11, title: "ReactJS", type: "frontend" },
  { id: 12, title: "PHP", type: "backend" },
  { id: 13, title: "NodeJS", type: "backend" },
  { id: 14, title: "ExpressJS", type: "backend" },
  { id: 15, title: "MongoDB", type: "backend" },
  { id: 16, title: "Firebase", type: "backend" },
  { id: 17, title: "Authentications", type: "backend" },
  { id: 18, title: "MySQL", type: "backend" },
  { id: 19, title: "Adobe Photoshop", type: "creativity" },
  { id: 20, title: "Adobe Illustrator", type: "creativity" },
  { id: 21, title: "Figma Tool", type: "creativity" },
];

const beginnerProjects = [
  { id: 1, image: "", title: "Personal resume" },
  { id: 2, image: "", title: "Personal Portfolio" },
  { id: 3, image: "", title: "Bootstrap Landing Page" },
  { id: 4, image: "", title: "WhatsApp UI Clone" },
  { id: 5, image: "", title: "Photography Site" },
];

const advancedProjects = [
  { id: 1, image: "", title: "eCommerce Website" },
  { id: 2, image: "", title: "Authentication App" },
  { id: 3, image: "", title: "Bootstrap Landing Pages" },
  { id: 4, image: "", title: "React Landing Page Project" },
  { id: 5, image: "", title: "Clone UI Apps" },
];

const internPersons = [
  { id: 1, image: "", name: "Esakki M", country: "IN" },
  { id: 2, image: "", name: "Vasanth S", country: "IN" },
  { id: 3, image: "", name: "Surya K", country: "IN" },
  { id: 4, image: "", name: "Riyaz", country: "IN" },
  { id: 5, image: "", name: "Hema Venkat", country: "IN" },
  { id: 6, image: "", name: "Yogha Raj Dhayal N", country: "IN" },
  { id: 7, image: "", name: "Mohammed Mushkir", country: "LK" },
  { id: 8, image: "", name: "Bearcin Sweety", country: "MY" },
  { id: 9, image: "", name: "Rangammal", country: "IN" },
  { id: 10, image: "", name: "Dinesh S", country: "IN" },
  { id: 11, image: "", name: "Jeya Roshini", country: "IN" },
  { id: 12, image: "", name: "Swetha Ramesh", country: "IN" },
  { id: 13, image: "", name: "Shajid Shafee", country: "LK" },
  { id: 14, image: "", name: "Muthu Akalya", country: "IN" },
  { id: 15, image: "", name: "Vijayavedhasekaran", country: "IN" },
  { id: 16, image: "", name: "Sudharsan", country: "IN" },
  { id: 17, image: "", name: "Khaja Sharif", country: "IN" },
  { id: 18, image: "", name: "Gayathri H G", country: "IN" },
  { id: 19, image: "", name: "KishoreKumar K", country: "IN" },
  { id: 20, image: "", name: "Sathesh PC", country: "IN" },
  { id: 21, image: "", name: "Muthukumari M", country: "IN" },
];

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />
      <section className="flex flex-col items-center justify-center bg-orange-50 px-10 pb-0 pt-32 sm:pt-0 md:flex-row md:px-20 md:py-32">
        <div className="max-w-xl">
          <h3 className="text-5xl font-bold">
            Master <span className="text-red-400">Full Stack</span> <br />
            <span className="text-red-400">Engineering</span> from <br />
            Scratch
          </h3>
          <p className="mt-5 text-gray-500">
            From building stunning websites to creating dynamic user
            experiences, dive deep into HTML, CSS, and JavaScript to become a
            proficient web developer.
          </p>

          <div className="my-4 flex items-center">
            <div className="mr-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-600">
              <MaterialSymbolsVolumeUpRounded />
            </div>
            <div>
              <h5 className="font-semibold">Full Stack Engineer</h5>
              <em className="text-sm">/, Furusutakku, - enjinia</em>
            </div>
          </div>
          <p className="text-xs italic text-gray-600">
            an engineer who can handle the
            <abbr title="Frontend Developer">front-end</abbr> and
            <abbr title="Backend Developer">back-end</abbr> development workflow
          </p>
          <div className="my-5 flex flex-col items-center space-x-4 space-y-4 text-sm md:flex-row md:space-y-0">
            <span className="font-semibold text-green-600">Similar: </span>
            <a
              href="#"
              className="rounded-full border px-5 py-1 hover:bg-blue-600 hover:text-white"
            >
              Full Stack Developer
            </a>
            <a
              href="#"
              className="rounded-full border px-5 py-1 hover:bg-blue-600 hover:text-white"
            >
              Frontend / Backend Developer
            </a>
          </div>
          <div className="flex flex-col items-center space-x-10 space-y-2 text-sm md:flex-row md:space-y-0">
            <button className="flex w-full items-center justify-center rounded bg-red-400 px-4 py-2 font-medium text-white hover:bg-red-500 md:w-fit">
              <span>Start Here</span>
              <MaterialSymbolsArrowRightAltRounded className="ml-2 text-lg" />
            </button>
            <button className="flex items-center hover:text-orange-600">
              Watch Video <MaterialSymbolsSlowMotionVideo className="ml-2" />
            </button>
          </div>
        </div>
        <div>
          <img src="/images/developer_male.png" alt="Developer Male" />
        </div>
      </section>

      {/* What you will learn with us */}
      <section className="bg-red-500 py-20 text-white md:py-10">
        <div className="text-center">
          <h4 className="text-xl font-semibold">
            What Your Will Learn With Us?
          </h4>
        </div>
        <div className="mx-auto my-10 grid  grid-cols-1 gap-4 px-10 md:grid-cols-2 md:px-60">
          <div className="frontend-tech ">
            <div className="flex max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800 md:w-fit">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                1
              </div>
              <span>Frontend Technologies</span>
            </div>
            <div className="flex max-w-xl flex-col items-center space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex-row md:space-x-4 md:space-y-0">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
                  className="w-20"
                  alt=""
                />
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                className="w-20"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                className="w-20"
                alt=""
              />
              <img
                src="https://cdn1.iconfINer.com/data/icons/programing-development-8/24/react_logo-512.png"
                className="w-20"
                alt=""
              />
              <img
                src="https://plugins.jetbrains.com/files/15321/400460/icon/pluginIcon.png"
                className="w-20"
                alt=""
              />
            </div>
          </div>
          <div className="backend-tech   sm:py-0">
            <div className="flex max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800 md:w-fit">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                2
              </div>
              <span>Backend Technologies</span>
            </div>
            <div className="flex max-w-xl flex-col items-center space-x-4  space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex-row md:space-y-0">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                  className="w-20"
                  alt=""
                />
              </a>
              <img
                src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
                className="w-14"
                alt=""
              />
              <img
                src="https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png"
                className="w-11"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
                className="w-20 bg-white px-2 py-4"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png"
                className="w-20"
                alt=""
              />
            </div>
          </div>
          <div className="creativity ">
            <div className="flex max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800 md:w-fit">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                3
              </div>
              <span>Creativity</span>
            </div>
            <div className="flex max-w-xl flex-col items-center space-x-10 space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex-row  md:space-y-0">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
                  className="w-20"
                  alt=""
                />
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png"
                className="w-20"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                className="w-12"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png"
                className="w-20"
                alt=""
              />
            </div>
          </div>
          <div className="deployment-tech 0">
            <div className="flex max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800 md:w-fit">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                4
              </div>
              <span>Tooling, Deployment & Other experiences</span>
            </div>
            <div className="flex max-w-xl flex-col items-center space-x-10 space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex-row md:space-y-0">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                  className="w-20"
                  alt="Github Logo"
                />
              </a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/2560px-Netlify_logo.svg.png"
                className="w-36"
                alt="Netlify Logo"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-10 text-center md:px-0">
          <h4 className="text-xl font-semibold">Focused Curriculum</h4>
          <p className="my-3 justify-stretch text-sm text-gray-200">
            In This Journey, We covered almost everything you wanted to know as
            a Full Stack Engineer, If you’re a complete beginner, better read
            the below “Focus curriculum” topics that we are going to cover and
            had already covered. Let’ sail your journey with us.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2 space-x-2 px-10 text-center text-sm md:px-20">
          {techSkills.map((skill) => (
            <a
              key={`skills-${skill.id}`}
              href="#"
              className={
                "flex items-center rounded px-4 py-1 font-semibold text-white transition-all  " +
                (skill.type === "frontend"
                  ? "bg-blue-900  hover:bg-blue-950"
                  : skill.type === "backend"
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "bg-white !text-blue-600 hover:bg-gray-200")
              }
            >
              <MaterialSymbolsTrophyOutline className="mr-2" /> {skill.title}
            </a>
          ))}
        </div>
      </section>

      {/* What we will build */}
      <section className="container mx-auto px-5 py-10">
        <h4 className="text-center text-2xl font-bold">
          What You Will Build Here? 🚀
        </h4>

        <div className="mx-auto my-10 max-w-4xl rounded-xl bg-gray-800 p-4 text-center text-white">
          <p>
            In our journey, We are going to build some massive projects that
            could elevate your skills in the tech stacks. Let’s fIN out what are
            the real-life projects that we are going to build? From beginner
            level to advanced level and it will slowly boost your experience to
            build things. Yes. <strong>BUILD THINGS.</strong>
          </p>
        </div>

        <div className="py-3">
          <h4 className="text-xl font-bold">Beginner Level - Projects</h4>
          <div className="grid items-center gap-5 md:grid-cols-7">
            {beginnerProjects.map((project) => (
              <div className="mt-3" key={`beginner-projects-${project.id}`}>
                <div className="mb-3 h-40 w-40 rounded-xl bg-gray-800"></div>
                <p className="px-2 font-medium">{project.title}</p>
              </div>
            ))}
            <div className="col-span-2">
              <h4 className="text-2xl font-bold text-orange-600">
                & Much More
                <MaterialSymbolsArrowRightAlt className="inline-flex" />
              </h4>
            </div>
          </div>
        </div>

        <div className="py-3">
          <h4 className="text-xl font-bold">
            Intermediate to Advanced Level - Projects
          </h4>
          <div className="grid items-center gap-5 md:grid-cols-7">
            {advancedProjects.map((project) => (
              <div className="mt-3" key={`beginner-projects-${project.id}`}>
                <div className="mb-3 h-40 w-40 rounded-xl bg-gray-800"></div>
                <p className="px-2 font-medium">{project.title}</p>
              </div>
            ))}
            <div className="col-span-2">
              <h4 className="text-2xl font-bold text-orange-600">
                & Much More
                <MaterialSymbolsArrowRightAlt className="inline-flex" />
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <MaterialSymbolsArrowDownward className=" text-4xl text-orange-600" />
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-red-600 px-3 py-20">
        <div className="container mx-auto text-center">
          <h4 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h4>
          <div className="mx-auto my-10 max-w-4xl rounded-xl bg-yellow-500 p-4 text-center font-medium">
            <p>
              In this Frequently Asked Questions (FAQ) section, We were able to
              answer the most common questions that an INividual has. However,
              let us know if you had any specific questions regarding the tech
              stacks that you going to learn with us.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-20 pt-10 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((num, INex) => (
              <div className="relative rounded-b-3xl rounded-r-3xl bg-gray-100 px-10 py-5">
                <div className="absolute -top-10 left-0 rounded-tl-full rounded-tr-full bg-yellow-500 px-4 py-1 text-2xl font-bold text-red-500">
                  #{INex + 1}
                </div>
                <h4 className="text-lg font-semibold">
                  Do i need a PC to Start?
                </h4>
                <p className="text-sm text-gray-600">
                  Yes, Obviously You need a desktop or Laptop to continue on
                  this journey. Cannot use smartphone instead PC for coding.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet our Interns */}
      <section className="bg-yellow-400 px-5 py-10">
        <div className="container mx-auto">
          <h4 className="text-center text-3xl font-extrabold">
            Meet Our Interns
          </h4>

          <div className="my-10 grid gap-5 md:grid-cols-8">
            {internPersons.map((interns) => (
              <a
                href="#"
                className="flex flex-col items-center rounded p-5 transition-all  hover:bg-gray-50"
              >
                {/* <img src={interns.image} alt={interns.name} /> */}
                <div className="h-20 w-20 rounded-full bg-gray-600"></div>
                <span className="pt-2 font-medium">{interns.name}</span>
                <img
                  src={`https://flagsapi.com/${interns.country}/flat/32.png`}
                  alt={interns.country}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-10 text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center justify-between space-x-10 space-y-10 md:flex-row md:space-y-0">
            <div className="w-60 space-y-4">
              <div className="h-20 w-full rounded bg-gray-600"></div>
              <p className="text-sm text-gray-300">
                Cyberdude Networks Pvt. Ltd. is creative product startup company
                that primary focuses on tech and product development.
              </p>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    <MdiFacebookBox />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    <MdiInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    <MdiYoutube />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    <MdiTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-5 md:grid-cols-4 ">
              <div>
                <h4 className="font-bold">What We Cover?</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <a href="#" className="font-semibold">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      CSS Flexbox & CSS Grid
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Bootstrap CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      TailwindCSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Javascript
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Live Sessions</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <a href="#" className="">
                      Portfolio Builder
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Giveaway App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      RTO Builder
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      eCommerce
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">For Beginners</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <a href="#" className="">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      JavaScript
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Best Playlists</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <a href="#" className="font-semibold">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      ES6+ Concepts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Bootstrap 5
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      React JS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      Angular JS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
