import { RiGovernmentLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu, IoMdArrowRoundBack } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  let location = useLocation();
  const [showMenu, setshowMenu] = useState(false);
  return (
    <header className="fixed bg-white flex w-full items-center justify-between px-4 md:px-10 shadow-md h-[10vh] z-[1000000000]">
      <div className="  flex items-center gap-2 text-primary">
        {!location.pathname.includes("habitacion") ? (
          <a
            href="#home"
            className="font-bold text-xl whitespace-nowrap flex items-center gap-2"
          >
            <span className="text-3xl">
              <RiGovernmentLine />
            </span>
            Casa Valencia
          </a>
        ) : (
          <NavLink
            to={"/home"}
            className="font-bold text-xl whitespace-nowrap flex items-center gap-2"
          >
            <span className="text-3xl">
              <RiGovernmentLine />
            </span>
            Casa Valencia
          </NavLink>
        )}
      </div>
      <nav
        className={` bg-white  pl-8 shadow-md flex flex-col gap-10 fixed w-[80%] sm:max-w-[200px]  h-full top-[10vh] transition-all duration-300  md:static md:items-center  md:flex-row  md:justify-center md:shadow-none md:pl-0 flex-1  ${
          showMenu ? "left-0" : "-left-full"
        } `}
      >
        <NavLink
          to={`/home`}
          className={({ isActive }) =>
            isActive ? "font-semibold text-primary" : ""
          }
        >
          {!location.pathname.includes("habitacion") ? (
            "Home"
          ) : (
            <p className="font-semibold text-primary flex items-center gap-4">
              <span className="text-2xl font-bold">
                <IoMdArrowRoundBack />
              </span>{" "}
              Volver a Home
            </p>
          )}
        </NavLink>

        {!location.pathname.includes("habitacion") && (
          <a href="#habitaciones">Habitaciones</a>
        )}
        {!location.pathname.includes("habitacion") && (
          <a href="#contacto">Contactanos</a>
        )}
      </nav>
      <div className=" justify-end items-center  flex gap-2">
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
