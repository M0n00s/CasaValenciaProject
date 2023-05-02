import React from "react";
import { useParams } from "react-router-dom";
import { Habitaciones } from "../db/Db";

export const HabitacionDetails = () => {
  const { habtitulo } = useParams();
  const habitacion = Habitaciones.find(
    (habitacion) => habitacion.titulo === habtitulo?.replace("_", " ")
  );
  return <div>{habitacion?.titulo}</div>;
};
