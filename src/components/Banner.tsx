import React from "react";

export const Banner = () => {
  return (
    <div className="h-[30vh] px-5 bg-banner bg-fixed bg-no-repeat bg-cover flex flex-col lg:flex-row justify-center items-center gap-10">
      <p className="text-white text-4xl text-center">
        Aqui podemos colocar un slogan o algo
      </p>
      <a href="#contacto">
        <button className=" hover:bg-primary  transition bg-primary/50 text-secondary text-xl p-3 rounded-full box-content">
          Contactanos
        </button>
      </a>
    </div>
  );
};
