import React from "react";
import { posadaGalery } from "../db/Db";

export const Welcome = () => {
  return (
    <>
      <div className=" px-12 md:px-24 pt-6 flex flex-col gap-4 ">
        <h2 className=" text-4xl text-primary ">
          Hotel, Bar & Lounge
        </h2>
      </div>
      {/* Galeria */}
      <div className="grid  grid-cols-1 md:grid-cols-8 rounded-lg px-12 md:px-24 py-6 gap-1    ">
        {/* foto grande */}
        <div className=" md:col-span-4 md:h-[35vh] lg:h-[50vh] shadow-[0_15px_40px_-25px_rgba(0,0,0,0.9)]  ">
          <img
            // src={posadaGalery.url1}
            src={'/src/images/casaValencia2.jpeg'}
            alt="img"
            className="w-[100%] h-[100%] object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none "
          />
        </div>
        {/* cuatro fotos individuales */}
        <div className="  md:col-span-4  grid grid-cols-8 grid-rows-2 grid-flow-col gap-1 md:h-[35vh] lg:h-[50vh] shadow-[0_15px_40px_-25px_rgba(0,0,0,0.9)]  ">
          <div className=" col-span-4 ">
            <img
              src={'/src/images/casaValencia1.jpeg'}
              // src={posadaGalery.url2}
              alt="img"
              className="w-[100%] h-[100%] object-cover "
            />
          </div>
          <div className=" col-span-4  ">
            <img
              src={'/src/images/casaValencia3.jpeg'}
              // src={posadaGalery.url3}
              alt="img"
              className="w-[100%] h-[100%] object-cover rounded-bl-2xl md:rounded-none"
            />
          </div>
          <div className=" col-span-4">
            <img
              src={'/src/images/casaValencia4.jpeg'}
              // src={posadaGalery.url4}
              alt="img"
              className="w-[100%] h-[100%] object-cover  md:rounded-tr-2xl"
            />
          </div>
          <div className=" col-span-4 ">
            <img
              src={'/src/images/casaValencia5.jpeg'}
              // src={posadaGalery.url5}
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
