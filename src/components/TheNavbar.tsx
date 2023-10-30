import { NavLink } from "react-router-dom";
import { useState } from "react";
import CyberDudeLogoBlack from "../assets/cyberdude-logo-black.svg";
// import CyberDudeLogoWhite from "../assets/cyberdude-logo-white.svg";
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
      <NavLink
        to={href}
        className={({ isActive, isPending }) => {
          return isActive
            ? "font-medium text-orange-600 underline-offset-8 hover:text-orange-600 hover:underline"
            : isPending
            ? "pending"
            : "font-medium text-gray-700 underline-offset-8 hover:text-orange-600 hover:underline ";
        }}
      >
        {label}
      </NavLink>
    </li>
  );
}

// function to display the navMenu in mobile

export default function TheNavbar() {
  const [istoggleMenu, setIstoggleMenu] = useState(true);
  const toggleMenu = () => {
    setIstoggleMenu(!istoggleMenu);
  };

  return (
    <header className="fixed inset-x-0 z-50  bg-orange-50 px-10 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          <img src={CyberDudeLogoBlack} alt="CyberDude logo" width={140} />
        </div>
        <button
          id="hamburger-menu"
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-orange-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600 lg:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={istoggleMenu ? " h-5 w-5 lg:hidden" : "hidden"}
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
          <svg
            id="close-menu"
            className={istoggleMenu ? "hidden h-5 w-5" : "h-5 w-5"}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
            ></path>
          </svg>
        </button>
        <ul
          id="mobileNavMenu"
          className={
            istoggleMenu
              ? " hidden items-center space-x-10 lg:flex"
              : "absolute left-[0px] top-[118px]  flex  h-screen w-full flex-col items-center justify-center gap-8 bg-gray-50 "
          }
        >
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
