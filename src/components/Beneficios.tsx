import React from "react";
import {
  IoMdCar,
  IoMdDesktop,
  IoMdSnow,
  IoMdCloudDone,
  IoIosLocate,
} from "react-icons/io";
import { FaCoffee, FaSearchLocation } from "react-icons/fa";

export const Beneficios = () => {
  return (
    <div
      className="px-12 md:px-24 pb-6 grid grid-cols-1 md:grid-cols-2"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="col-span-1">
        <p className="text-xl text-primary font-semibold">
          Amenidades
        </p>
        <div className="flex flex-col py-2">
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <FaCoffee className="text-secondary" /> Desayuno incluido
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdCar className="text-secondary" /> Estacinamiento Gratis
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdSnow className="text-secondary" /> Aire Acondicionado
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdCloudDone className="text-secondary" /> Wifi Gratis
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdDesktop className="text-secondary" /> TV
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-xl font-semibold text-primary">Cerca del area</p>
        <div className="flex flex-col py-2">
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <FaSearchLocation size={15} /> San Remo Mall
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
          <FaSearchLocation size={15} /> Paseo de la Virgen del Valle
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
          <FaSearchLocation size={15} /> Estacion de servicio
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
          <FaSearchLocation size={15} /> A 2  km de la salida a Bolivar
          </p>
        </div>
      </div>
    </div>
  );
};
