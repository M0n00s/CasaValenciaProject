import React from "react";
import {
  IoMdBriefcase,
  IoMdCar,
  IoMdPaw,
  IoMdSnow,
  IoMdCloudDone,
  IoMdSunny,
  IoMdDoneAll,
} from "react-icons/io";

export const Beneficios = () => {
  return (
    <div className="px-24 pb-6 grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1">
        <p className="text-xl text-primary font-semibold">
          Servicios mas solicitados
        </p>
        <div className="grid grid-cols-2 py-2">
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdSunny className="text-secondary" /> Piscina
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdCloudDone className="text-secondary" /> Wifi Gratis
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdPaw className="text-secondary" /> Mascotas
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdBriefcase className="text-secondary" /> Negocios
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdSnow className="text-secondary" /> Aire Acondicionado
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdCar className="text-secondary" /> Estacionamiento
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-xl font-semibold text-primary">Que hay en el area</p>
        <div className="flex flex-col py-2">
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdDoneAll className="text-green-500" size={15} /> The Mall of
            Victor Valley (centro comercial)
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdDoneAll className="text-green-500" size={15} /> Scandia Family
            Fun Center
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdDoneAll className="text-green-500" size={15} /> Cal Earth Homes
          </p>
          <p className="col-span-1 flex items-center gap-2 pb-2">
            <IoMdDoneAll className="text-green-500" size={15} /> San Bernardino,
            CA (SBD-San Bernardino Intl.
          </p>
        </div>
      </div>
    </div>
  );
};
