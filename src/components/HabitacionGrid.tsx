import React from "react";
import { Habitaciones } from "../db/Db";
import { HabitacionCard } from "./HabitacionCard";

export const HabitacionGrid = () => {
  return (
    <div
      id="habitaciones"
      className="pb-12 px-12 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {Habitaciones.map((habitacion) => (
        <div key={habitacion.titulo} className="col-span-1 w-full ">
          <HabitacionCard {...habitacion} />
        </div>
      ))}
    </div>
  );
};
