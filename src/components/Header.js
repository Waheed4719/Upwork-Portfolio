import React from "react";
import { ReactSVG } from "react-svg";
import { getIcons } from "../utils/getIcons";

const headerItems = [
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Awards",
    href: "#awards",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "#",
    icon: "github2",
  },
  {
    name: "Email",
    href: "#",
    icon: "email",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-[15px] px-4 hidden md:flex justify-end items-center z-[101]">
      <nav>
        <ul className="flex gap-[5px]">
          {headerItems.map((item, index) => (
            <li
              className={`text-white mx-2 flex items-center text-[1.2rem] ${
                item.icon && "before:content-[unset]"
              }  before:bg-white before:h-1 hover:before:w-full before:bottom-0 before:left-0 before:w-0 before:absolute relative before:transition-all duration-200`}
            >
              <a href={item.href}>
                {item.icon ? (
                  <ReactSVG
                    className={`h-8 w-8 dev-icon text-[1.2rem] text-white ${
                      item.icon === "email" && "email"
                    }`}
                    src={getIcons(item.icon)}
                  />
                ) : (
                  item.name
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
