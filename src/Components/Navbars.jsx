import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Data path App.jsx
export const nav = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "about",
    text: "About",
  },
  {
    link: "contact",
    text: "Contact",
  },
  {
    link: "faq",
    text: "Faq",
  },
];

// Component Navlink from react-router-dom
export const NavUrl = ({ urlTo, urlText }) => {
  return (
    <NavLink className="block px-2 py-1" to={urlTo}>
      {urlText}
    </NavLink>
  );
};

// Main Component
export const Navbars = () => {
  //   Icon Onclick Function
  const [isActive, setIsActive] = useState(false);
  const iconClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <nav className="lg:relative fixed top-2 right-2 z-0">
      {/* Icon [START] */}
      <div
        className={`lg:hidden relative z-20 ${
          isActive
            ? "inline-block cursor-pointer change"
            : "inline-block cursor-pointer"
        }`}
        onClick={iconClick}
      >
        {[
          `w-[35px] h-[5px] my-[6px] bg-gray-600 ease-linear duration-150 ${
            isActive ? "translate-x-0 translate-y-[11px] -rotate-45" : ""
          }`,
          `w-[35px] h-[5px] my-[6px] bg-gray-600 ease-linear duration-150 ${
            isActive ? "opacity-0" : ""
          }`,
          `w-[35px] h-[5px] my-[6px] bg-gray-600 ease-linear duration-150 ${
            isActive ? "translate-x-0 -translate-y-[11px] rotate-45" : ""
          }`,
        ].map((id, index) => (
          <div key={index} className={`${id.toString()}`}></div>
        ))}
      </div>
      {/* Icon [END] */}

      {/* Menu [START] */}
      <ul
        className={`lg:flex lg:flex-row flex-col ${
          isActive
            ? "flex flex-col justify-center bg-opacity-75 bg-slate-400 align-middle text-right fixed top-0 left-0 right-0 bottom-0"
            : "hidden"
        }`}
      >
        {nav.map((id, index) => (
          <li key={index}>
            <NavUrl urlTo={id.link} urlText={id.text} />
          </li>
        ))}
      </ul>
      {/* Menu [END] */}
    </nav>
  );
};
