import React from "react";
import { Beneficios } from "../components/Beneficios";
import { HabitacionGrid } from "../components/HabitacionGrid";
import { Hero } from "../components/Hero";
import { Maps } from "../components/Maps";
import { Welcome } from "../components/Welcome";

export const Home = () => {
  return (
    <div className="md:px-12">
      <Hero />
      <Welcome />
      <Beneficios />
      <Maps />
      <HabitacionGrid />
    </div>
  );
};
