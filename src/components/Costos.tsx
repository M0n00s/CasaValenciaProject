import React from "react";

export const Costos = ({ habitacion, noches, costoNoches }) => {
  return (
    <div>
      <div className="grid grid-cols-8 gap-1 ">
        <div className="col-span-6 ">
          ${habitacion.precio} por {noches} noches
        </div>
        <div className="col-span-2 text-end">${costoNoches}</div>
      </div>
      <div className="grid grid-cols-8 gap-1 ">
        <div className="col-span-6 ">Tarifa por limpieza</div>
        <div className="col-span-2 text-end">$15</div>
      </div>
      <div className="grid grid-cols-8 gap-1 mb-4 ">
        <div className="col-span-6 ">Tarifa por servicio web</div>
        <div className="col-span-2 text-end">$3</div>
      </div>
      <hr />
      <div className="grid grid-cols-8 gap-1  py-2 font-semibold">
        <div className="col-span-6 text-sm text-black">
          Total sin incluir impuestos
        </div>
        <div className="col-span-2 text-end">${costoNoches + 15 + 3}</div>
      </div>
    </div>
  );
};
