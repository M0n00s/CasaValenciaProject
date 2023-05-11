import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays, formatDistance } from "date-fns";
import { useState, useEffect } from "react";
import { Costos } from "./Costos";
import { FormReserva } from "./FormReserva";

export const ReservationDate = ({ habitacion }) => {
  const [reserva, setReserva] = useState(false);
  // cant de meses en el calendario
  const [cantnum, setCantnum] = useState(1);
  useEffect(() => {
    window.innerWidth > 900 && setCantnum(2);
  }, []);
  // console.log({ windows: window.innerWidth, cantnum });

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      color: "#ff6349",
      key: "selection",
    },
  ]);

  const noches: number = Number(
    formatDistance(state[0].startDate, state[0].endDate).split(" ")[0]
  );
  const costoNoches = noches * habitacion.precio;

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 object-contain ">
      <div className="col-span-1 md:col-span-5 ">
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          minDate={new Date()}
          direction="horizontal"
          months={cantnum}
        />
      </div>
      <div className="px-2 col-span-1 md:col-span-4  xl:px-20   ">
        <div className="  px-4 py-6 rounded-2xl bg-zinc-100">
          <p className="mb-4">
            <span className="font-semibold text-2xl text-primary ">
              ${habitacion.precio}
            </span>{" "}
            noche
          </p>
          <div className="grid grid-cols-2 border-2 border-solid border-primary rounded-2xl font-semibold text-stone-400 ">
            <div className="flex flex-col p-2 col-span-1 border-b-2 border-r-2 border-primary ">
              <span className="text-primary text-xs ">llegada</span>
              <span className="">{state[0].startDate.toDateString()}</span>
            </div>
            <div className="flex flex-col p-2 col-span-1  border-b-2 border-primary   ">
              <span className="text-primary text-xs">Salida</span>
              {state[0].endDate.toDateString()}
            </div>
            <div className="flex flex-col p-2 col-span-2   ">
              <span className="text-primary text-xs">Huespedes</span>
              <span className="text-center">
                Max Huespedes {habitacion.personas}
              </span>
            </div>
          </div>
          {!Number.isNaN(noches) && (
            <p className="text-xs font-semibold pt-2">
              tendra una estancia de {noches + 1} dias y {noches} noches
            </p>
          )}
          {reserva ? (
            <div>
              <FormReserva
                habitacion={habitacion.titulo}
                start={state[0].startDate}
                end={state[0].endDate}
                setReserva={setReserva}
                costo={costoNoches + 15 + 3}
              />
            </div>
          ) : (
            <button
              onClick={() => setReserva(true)}
              className="px-4 py-2 bg-primary text-xl text-white font-bold rounded-xl w-full mt-6 mb-2"
            >
              {" "}
              Reservar{" "}
            </button>
          )}
          <p className="text-xs font-semibold text-center mb-6">
            No se hará ningún cargo por el momento
          </p>
          {Number.isNaN(noches) ? (
            <p className="text-center">
              Por favor selecione una estancia valida
            </p>
          ) : (
            <Costos
              habitacion={habitacion}
              noches={noches}
              costoNoches={costoNoches}
            />
          )}
        </div>
      </div>
    </div>
  );
};
