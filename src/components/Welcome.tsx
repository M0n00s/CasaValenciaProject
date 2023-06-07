import React from "react";
import { posadaGalery } from "../db/Db";

export const Welcome = () => {
  return (
    <>
      <div className=" px-12 md:px-24 pt-6 flex flex-col gap-4 ">
        <h2 className="font-bold text-4xl text-primary ">
          Posada Casa Valencia
        </h2>
        <p className=" md:px-12 text-lg leading-5">
          Ofrece alojamiento independiente y está situado frente al río, en el
          Tigre estado Aragua Venezuela. Cuenta con un jardín precioso y
          aparcamiento gratuito.{" "}
        </p>
      </div>
      {/* Galeria */}
      <div className="grid  grid-cols-1 md:grid-cols-8 rounded-lg px-12 md:px-24 py-6 gap-1  box-content ">
        {/* foto grande */}
        <div className=" md:col-span-4 md:h-[35vh] lg:h-[50vh] ">
          <img
            src={posadaGalery.url1}
            alt="img"
            className="w-[100%] h-[100%] object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none "
          />
        </div>
        {/* cuatro fotos individuales */}
        <div className="  md:col-span-4  grid grid-cols-8 grid-rows-2 grid-flow-col gap-1 md:h-[35vh] lg:h-[50vh] ">
          <div className=" col-span-4 ">
            <img
              src={posadaGalery.url2}
              alt="img"
              className="w-[100%] h-[100%] object-cover "
            />
          </div>
          <div className=" col-span-4  ">
            <img
              src={posadaGalery.url3}
              alt="img"
              className="w-[100%] h-[100%] object-cover rounded-bl-2xl md:rounded-none"
            />
          </div>
          <div className=" col-span-4">
            <img
              src={posadaGalery.url4}
              alt="img"
              className="w-[100%] h-[100%] object-cover  md:rounded-tr-2xl"
            />
          </div>
          <div className=" col-span-4 ">
            <img
              src={posadaGalery.url5}
              alt="img"
              className="w-[100%] h-[100%] object-cover rounded-br-2xl md:rounded-br-2xl"
            />
          </div>
        </div>
      </div>
      {/* fin galeria */}
    </>
  );
};
