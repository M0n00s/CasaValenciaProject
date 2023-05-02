import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HabitacionCard = ({
  img,
  titulo,
  personas,
  camas,
  precio,
}: any) => {
  return (
    <Link to={`/habitacion/${titulo.replace(" ", "_")}`}>
      <div className="">
        <img
          className="rounded-2xl object-cover h-[40vh]  w-full"
          src={img[0]}
          alt=""
        />
      </div>
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
              {cama[Object.keys(cama)]} {Object.keys(cama)}
            </div>
          ))}
        </p>
        <p className="pt-2">
          <span className="font-semibold ">${precio}</span> Noche
        </p>
      </div>
    </Link>
  );
};
