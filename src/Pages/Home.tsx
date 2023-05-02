import React from "react";
import { HabitacionGrid } from "../components/HabitacionGrid";
import { Hero } from "../components/Hero";
import { Welcome } from "../components/Welcome";

export const Home = () => {
  return (
    <div className="md:px-12">
      <Hero />
      <Welcome />
      <HabitacionGrid />
    </div>
  );
};
