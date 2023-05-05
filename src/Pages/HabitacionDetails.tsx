import { useParams } from "react-router-dom";
import { Maps } from "../components/Maps";
import { Habitaciones } from "../db/Db";
import { useSlider } from "../hooks/useSlider";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export const HabitacionDetails = () => {
  const { habtitulo } = useParams();

  const habitacion = Habitaciones.find(
    (habitacion) => habitacion.titulo === habtitulo?.replace("_", " ")
  );
  if (!habitacion) return null;
  const [prevSlide, nextSlide, currentIndex] = useSlider(habitacion.img);

  return (
    <div className=" px-12 md:px-24 py-6 pt-[12vh]">
      <p className="font-bold text-primary text-6xl md:text-7xl">
        {habitacion?.titulo}
      </p>
      {/* galeria */}
      <div className="h-[60vh] w-full m-auto  relative group transition-all my-6">
        <div
          style={{
            backgroundImage: `url(${habitacion?.img[currentIndex as number]})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500  "
        ></div>
        {/* Left Arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoMdArrowDropleft onClick={prevSlide} size={15} />
        </div>
        {/* Right Arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IoMdArrowDropright onClick={nextSlide} size={15} />
        </div>
      </div>
      {/* fin galeria */}

      <Maps />
      <p className="font-bold mb-2 text-xl">
        Los Ángeles, California, Estados Unidos
      </p>
      <p>
        Ubicado a seis manzanas del Museo de la Academia (Oscars), el Museo de
        Arte del Condado de Los Ángeles, La Brea Tar Pits y el Peterson
        Automotive Museum en Museum Row. CBS-TV Studios, el mercado de
        agricultores original, las tiendas de The Grove y muchas galerías de
        arte están a poca distancia a pie, además de restaurantes de primera
        categoría, comida étnica y excelentes restaurantes asequibles.
        Aparcamiento gratuito las 24 horas.
      </p>
      <div className="py-12">
        <p className="font-bold text-xl pb-2  text-primary">
          Lo que deberias saber
        </p>
        <div className="grid gord-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div className="col-span-1 p-2 ">
            <p className="font-bold">Covertura</p>
            <p>
              Todas las reservaciones incluyen protección gratuita en caso de
              que el anfitrión cancele, de que haya imprecisiones en el anuncio
              o de que surjan otros inconvenientes, como problemas al momento de
              hacer el check-in.
            </p>
          </div>

          <div className="col-span-1 p-2">
            <p className="font-bold">Politica de cancelacion</p>
            <p>
              Antes de reservar, Ten en cuenta que la Política de Causas
              Extenuantes deCasa Valencia no cubre las cancelaciones debidas
              problemas de salud o problemas de viaje causados por la COVID-19.
            </p>
          </div>
          <div className="col-span-1 p-2">
            <p className="font-bold">Reglas de la casa</p>
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
    </div>
  );
};
