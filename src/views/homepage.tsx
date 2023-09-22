import TheNavbar from "@/components/TheNavbar";
import MaterialSymbolsVolumeUpRounded from "~icons/material-symbols/volume-up-rounded";
import MaterialSymbolsArrowRightAltRounded from "~icons/material-symbols/arrow-right-alt-rounded";
import MaterialSymbolsSlowMotionVideo from "~icons/material-symbols/slow-motion-video";
import MaterialSymbolsTrophyOutline from "~icons/material-symbols/trophy-outline";

const techSkills = [
  { id: 1, title: "HTML", type: "frontend" },
  { id: 2, title: "CSS", type: "frontend" },
  { id: 3, title: "CSS Flexbox", type: "frontend" },
  { id: 4, title: "CSS Grid", type: "frontend" },
  { id: 5, title: "SASS", type: "frontend" },
  { id: 6, title: "Bootstrap", type: "frontend" },
  { id: 7, title: "TailwindCSS", type: "frontend" },
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

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TheNavbar />
      <section className="flex flex-col items-center justify-center bg-red-50 px-10 pb-0 pt-32 sm:pt-0 md:flex md:px-20 md:py-32">
        <div className="max-w-lg">
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
          <div className="my-5 flex flex-col items-center space-x-4 space-y-4 text-sm md:flex md:space-y-0">
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
          <div className="flex flex-col items-center space-x-10 space-y-2 text-sm md:flex md:space-y-0">
            <button className="flex w-full items-center justify-center rounded bg-red-400 px-4 py-2 font-medium text-white hover:bg-red-500">
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
        <div className="my-10 space-y-0 md:my-10">
          <div className="flex flex-col items-center md:flex">
            <div className="frontend-tech px-20">
              <div className="flex w-fit max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                  1
                </div>
                <span>Frontend Technologies</span>
              </div>
              <div className="flex max-w-xl flex-col items-center space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex md:space-x-4 md:space-y-0">
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
                  src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
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
            <div className="backend-tech px-20 py-10 sm:py-0">
              <div className="flex w-fit max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                  2
                </div>
                <span>Backend Technologies</span>
              </div>
              <div className="flex max-w-xl flex-col items-center space-x-4  space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex md:space-y-0">
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
          </div>
          <div className="flex flex-col items-center space-y-10 md:flex md:space-y-0">
            <div className="creativity px-20 ">
              <div className="flex w-fit max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                  3
                </div>
                <span>Creativity</span>
              </div>
              <div className="flex max-w-xl flex-col items-center space-x-4 space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex md:flex md:space-y-0">
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
                  src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
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
            <div className="deployment-tech px-20">
              <div className="flex w-fit max-w-xl items-center rounded-tr border border-l-4 border-blue-300 bg-white px-5 py-1 font-semibold text-blue-800">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                  4
                </div>
                <span>Deployment & Other experiences</span>
              </div>
              <div className="flex max-w-xl flex-col items-center space-x-4 space-y-4 rounded-b rounded-tr bg-gray-800 px-10 py-5 md:flex md:space-y-0">
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
        <div className="mt-10 flex flex-wrap justify-center gap-2 space-x-2 px-10 text-center text-sm md:px-0">
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
    </div>
  );
}

export default Homepage;
