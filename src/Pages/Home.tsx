import React from "react";
import { Beneficios } from "../components/Beneficios";
import { Footer } from "../components/Footer";
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
      <Maps />
      <HabitacionGrid />
      <hr />
      <Footer />
    </div>
  );
};
