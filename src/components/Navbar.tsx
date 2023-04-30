import { RiGovernmentLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <header className=" flex w-full items-center justify-between px-4 md:px-10 shadow-md h-[10vh]">
      <div className="  flex items-center gap-2 text-primary">
        <span className="text-3xl">
          <RiGovernmentLine />
        </span>
        <p className="font-bold text-xl whitespace-nowrap">Casa Valencia</p>
      </div>
      <nav
        className={` bg-white  pl-8 shadow-md flex flex-col gap-10 fixed w-[80%] h-full left-0 top-[11vh] transition-all duration-300  md:static md:items-center  md:flex-row  md:justify-center md:shadow-none md:pl-0 flex-1 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
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
      <div className=" justify-end items-center  flex gap-2">
        <div>User</div>
        <button
          onClick={() => setshowMenu(!showMenu)}
          className=" text-3xl md:hidden"
        >
          {showMenu ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
    </header>
  );
};
