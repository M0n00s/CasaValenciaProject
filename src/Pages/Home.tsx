import React from "react";
import { Hero } from "../components/Hero";
import { Welcome } from "../components/Welcome";

export const Home = () => {
  return (
    <div className="md:px-12">
      <Hero />
      <Welcome />
    </div>
  );
};
