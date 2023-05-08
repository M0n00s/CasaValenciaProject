import React from "react";

export const DebeSaber = ({ habitacion }) => {
  return (
    <div className="py-12">
      <p className="font-bold text-xl pb-2  text-primary">
        Lo que deberias saber
      </p>
      <div className="grid gord-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4">
        <div className="col-span-1 px-8 py-4 border-solid border-2 border-primary rounded-2xl">
          <p className="font-bold text-lg">Covertura</p>
          <p>
            Todas las reservaciones incluyen protección gratuita en caso de que
            el anfitrión cancele, de que haya imprecisiones en el anuncio o de
            que surjan otros inconvenientes, como problemas al momento de hacer
            el check-in.
          </p>
        </div>

        <div className="col-span-1 px-8 py-4 border-solid border-2 border-primary rounded-2xl">
          <p className="font-bold text-lg">Politica de cancelacion</p>
          <p>
            Antes de reservar, Ten en cuenta que la Política de Causas
            Extenuantes deCasa Valencia no cubre las cancelaciones debidas
            problemas de salud o problemas de viaje causados por la COVID-19.
          </p>
        </div>
        <div className="col-span-1 px-8 py-4 border-solid border-2 border-primary rounded-2xl">
          <p className="font-bold text-lg">Reglas de la casa</p>
          <p>
            El check-in es a partir de las 15:00 pm
            <br />
            El Check-out es antes de las 12:00 pm
            <br />
            {habitacion?.personas} huéspedes como máximo
          </p>
        </div>
      </div>
    </div>
  );
};
