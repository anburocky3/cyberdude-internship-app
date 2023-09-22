// import CyberDudeLogoBlack from "../assets/cyberdude-logo-black.svg";
import CyberDudeLogoWhite from "../assets/cyberdude-logo-white.svg";
import { HeaderMenu } from "@/types";

const menuData: HeaderMenu[] = [
  { label: "Home", href: "/" },
  { label: "Browse by Dates", href: "/browse-by-dates" },
  { label: "Live Coding Sessions", href: "/live-coding-sessions" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
  { label: "About CyberDude", href: "/about-cyberdude" },
];

function MenuLink({ label, href }: HeaderMenu) {
  return (
    <li>
      <a
        href={href}
        className="font-medium text-gray-200 underline-offset-8 hover:text-orange-600 hover:underline"
      >
        {label}
      </a>
    </li>
  );
}

export default function TheNavbar() {
  return (
    <header className="fixed inset-x-0 bg-gray-800 px-10 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          <img src={CyberDudeLogoWhite} alt="CyberDude logo" width={140} />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-orange-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul className="hidden items-center space-x-10 md:flex">
          {menuData.map((headerMenu, index) => {
            return (
              <MenuLink
                key={`header-${index}`}
                label={headerMenu.label}
                href={headerMenu.href}
              />
            );
          })}
        </ul>
      </div>
    </header>
  );
}
