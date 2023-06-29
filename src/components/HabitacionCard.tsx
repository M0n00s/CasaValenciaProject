import React from "react";
import { useState } from "react";
import {
  IoMdPerson,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSlider } from "../hooks/useSlider";

export const HabitacionCard = ({
  img,
  titulo,
  personas,
  camas,
  precio,
}: any) => {
  const [prevSlide, nextSlide, currentIndex] = useSlider(img);
  // console.log(prevSlide, nextSlide, currentIndex);

  return (
    <section className="hover:bg-primary/40  p-5 rounded-xl transition hover:shadow-xl">
      <div className="h-[25vh] md:h-[15vh] lg:h-[40vh] w-full m-auto  relative group transition-all ">
        <div
          style={{ backgroundImage: `url(${img[currentIndex as number]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-[0_15px_40px_-25px_rgba(0,0,0,0.9)] "
        ></div>
        {/* Left Arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoMdArrowDropleft onClick={prevSlide} size={15} />
        </div>
        {/* Right Arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoMdArrowDropright onClick={nextSlide} size={15} />
        </div>
      </div>
      {/* <div className="">
        <img
          className="rounded-2xl object-cover h-[40vh]  w-full"
          src={img[0]}
          alt=""
        />
      </div> */}
      <Link to={`/habitacion/${titulo.replace(" ", "_")}`}>
        <h2 className="font-semibold text-lg text-primary py-1 pt-5">
          {titulo}
        </h2>
        <hr />
        <div className="pt-2">
          <p className="flex items-center gap-2">
            <IoMdPerson />
            {personas} Personas
          </p>
          <div>
            {camas.map((cama: any) => (
              <div
                key={cama[Object.keys(cama).toString()]}
                className="flex gap-2 items-center"
              >
                <FaBed />
                {cama[Object.keys(cama).toString()]} {Object.keys(cama)}
              </div>
            ))}
          </div>
          <p className="pt-2">
            <span className="font-semibold ">${precio}</span> Noche
          </p>
        </div>
      </Link>
    </section>
  );
};
