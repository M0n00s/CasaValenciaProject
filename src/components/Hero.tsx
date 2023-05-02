import React from "react";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="px-12 hero  grid grid-cols-1 lg:grid-cols-8 overflow-x-hidden h-[90vh] ">
      <div className=" lg:col-span-5 flex flex-col  justify-center  gap-8 py-8 ">
        <h1 className=" text-5xl lg:text-7xl font-bold  ">
          Comodidad, atención y diversión al alcance de todos
        </h1>
        <p className="text-primary font-bold text-xl mt-[-2rem]">
          Una estancia como la mereces, en el
          <span className="text-secondary"> Tigre Estado Aragua</span>
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Link to="/habitaciones">
            <button className="bg-primary text-white py-2 px-4 rounded-lg font-semibold whitespace-nowrap ">
              Ver Habitaciones
            </button>
          </Link>
          <Link to="/contacto">
            <button className="flex gap-2 items-center p-1">
              <IoMdCall className="bg-secondary text-white p-3 rounded-full box-content" />{" "}
              Contactanos
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:col-span-3 hidden md:inline ">
        <img
          src="https://media.istockphoto.com/id/1146621051/es/vector/reserva-de-hotel-b%C3%BAsqueda-y-reserva-mano-sosteniendo-un-tel%C3%A9fono-inteligente-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=FkB5nCg_fgsulnkmfMG9shrUPLBooLoWmWTXfJ4d_YM="
          alt="img"
          className="w-[100%] h-[100%] object-contain "
        />
      </div>
    </div>
  );
};
