import React from "react";
import { RiGovernmentLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className=" flex w-full items-center p-4 shadow-md h-[10vh]">
      <div className=" w-1/6 flex items-center gap-2 text-primary">
        <span className="text-3xl">
          <RiGovernmentLine />
        </span>
        <p className="font-bold whitespace-nowrap">Casa Valencia</p>
      </div>
      <nav className="flex gap-10 justify-center  flex-1">
        {["Home", "Habitaciones", "Contacto"].map((nav) => (
          <NavLink
            key={nav}
            to={`/${nav.toLowerCase()}`}
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            {nav}
          </NavLink>
        ))}
      </nav>
      <div className="w-1/12 justify-center flex justify-end ">User</div>
    </header>
  );
};
