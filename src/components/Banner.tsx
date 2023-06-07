import React from "react";

export const Banner = () => {
  return (
    <div className="h-[30vh] p-3 bg-banner bg-fixed bg-no-repeat bg-cover flex justify-center items-center gap-10">
      <p className="text-white font-bold text-4xl">
        Aqui podemos colocar un slogan o algo
      </p>
      <a href="#contacto">
        <button className="bg-primary text-secondary text-xl font-bold p-3 rounded-full box-content">
          Contactanos
        </button>
      </a>
    </div>
  );
};
