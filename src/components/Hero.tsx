import React from "react";
import { IoMdCall } from "react-icons/io";

export const Hero = () => {
  return (
    <div className=" hero  grid grid-cols-1 lg:grid-cols-8 overflow-x-hidden ">
      <div className=" lg:col-span-5 flex flex-col  justify-center px-12 gap-8 py-8">
        <h1 className=" text-5xl lg:text-7xl font-bold  ">
          Comodidad, atención y diversión al alcance de todos
        </h1>
        <p className="text-primary font-bold text-xl mt-[-2rem]">
          Una estancia como la mereces, en el
          <span className="text-secondary"> Tigre Estado Aragua</span>
        </p>
        <div className="flex flex-col lg:flex-row  gap-8">
          <button className="bg-primary text-white py-2 px-4 rounded-lg font-semibold whitespace-nowrap ">
            Ver Habitaciones
          </button>
          <button className="flex gap-2 items-center p-1">
            <IoMdCall className="bg-secondary text-white p-3 rounded-full box-content" />{" "}
            Contactanos
          </button>
        </div>
      </div>
      <div className="lg:col-span-3 hidden lg:inline ">
        <img
          src="https://media.istockphoto.com/id/1146621051/es/vector/reserva-de-hotel-b%C3%BAsqueda-y-reserva-mano-sosteniendo-un-tel%C3%A9fono-inteligente-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=FkB5nCg_fgsulnkmfMG9shrUPLBooLoWmWTXfJ4d_YM="
          alt="img"
          className="w-[100%] h-[100%] object-contain "
        />
      </div>
      <div className="w-[100vw] mt-[-8rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff6349"
            fillOpacity="1"
            d="M0,192L60,213.3C120,235,240,277,360,256C480,235,600,149,720,122.7C840,96,960,128,1080,128C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
