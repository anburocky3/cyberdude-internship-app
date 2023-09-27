import { Link } from "react-router-dom";
import MdiFacebookBox from "~icons/mdi/facebook-box";
import MdiInstagram from "~icons/mdi/instagram";
import MdiYoutube from "~icons/mdi/youtube";
import MdiTwitter from "~icons/mdi/twitter";

export default function TheNavbar() {
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-between space-x-10 space-y-10 md:flex-row md:space-y-0">
          <div className="w-60 space-y-4">
            <Link to={"/"}>
              <div className="h-20 w-full rounded bg-gray-600"></div>
            </Link>
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
  );
}
