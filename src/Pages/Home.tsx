import React from "react";
import { Beneficios } from "../components/Beneficios";
import { HabitacionGrid } from "../components/HabitacionGrid";
import { Hero } from "../components/Hero";
import { Maps } from "../components/Maps";
import { Welcome } from "../components/Welcome";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <hr />
      <Welcome />
      <Beneficios />
      <hr />
      <div className=" px-12 md:px-24">
        <Maps />
      </div>
      <div id="habitaciones">
        <HabitacionGrid />
      </div>
    </div>
  );
};
