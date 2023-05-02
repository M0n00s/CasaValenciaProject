import React from "react";
import { useState } from "react";
import {
  IoMdPerson,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HabitacionCard = ({
  img,
  titulo,
  personas,
  camas,
  precio,
}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? img.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === img.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="h-[40vh] w-full m-auto  relative group transition-all">
        <div
          style={{ backgroundImage: `url(${img[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500  "
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
        <h2 className="font-semibold text-lg text-primary py-1">{titulo}</h2>
        <hr />
        <div className="pt-2">
          <p className="flex items-center gap-2">
            <IoMdPerson />
            {personas} Personas
          </p>
          <p>
            {camas.map((cama: any) => (
              <div className="flex gap-2 items-center">
                <FaBed />
                {cama[Object.keys(cama).toString()]} {Object.keys(cama)}
              </div>
            ))}
          </p>
          <p className="pt-2">
            <span className="font-semibold ">${precio}</span> Noche
          </p>
        </div>
      </Link>
    </>
  );
};
