import CyberDudeLogoBlack from "../assets/cyberdude-logo-black.svg";
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
        className="underline-offset-4 hover:text-orange-500 hover:underline"
      >
        {label}
      </a>
    </li>
  );
}

export default function TheNavbar() {
  return (
    <header className="bg-white px-10 py-5 text-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          <img src={CyberDudeLogoBlack} alt="CyberDude logo" width={140} />
        </div>
        <ul className="flex items-center space-x-10">
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
