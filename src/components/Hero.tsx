import React from "react";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div
      id="inicio"
      // className=" px-12  overflow-x-hidden h-[100vh] " grid grid-cols-1 lg:grid-cols-8
      className=" px-20 pt-32 pb-10 grid grid-cols-1 lg:grid-cols-1 overflow-x-hidden  "
    >
      <div className="lg:col-span-5 flex flex-col  justify-center  gap-8 md:pt-[12vh] lg:pt-8">
        {/* // className=" lg:col-span-5 flex flex-col  justify-center  gap-8 md:pt-[12vh] lg:pt-8 "> */}
        <h1
          className=" text-5xl md:text-7xl "
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Casa Valencia, La Casa del Comfort
        </h1>
        <p
          className="text-primary text-2xl mt-[-2rem]"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          El trato que mereces,
          <span className="text-secondary"> El Tigre, Estado Anzoategui</span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <a href="#habitaciones">
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg font-semibold whitespace-nowrap   "
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              Ver Habitaciones
            </button>
          </a>
          <a href="#contacto">
            <button
              className="flex gap-2 items-center p-1  "
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1500"
            >
              <IoMdCall className="bg-secondary text-white p-3 rounded-full box-content" />{" "}
              Contactanos
            </button>
          </a>
        </div>
      </div>
      {/* <div className="r lg:col-span-3 hidden md:inline ">
        <img
          src="/src/images/casaValencia2.jpeg"
          alt="img"
          className=" md:w-[100%] lg:w-[100%] md:h-[80%] lg:h-[100%] object-contain "
        />
      </div>  */}
    </div>
  );
};
