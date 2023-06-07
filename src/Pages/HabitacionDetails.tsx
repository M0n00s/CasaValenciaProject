import { useParams } from "react-router-dom";
import { Maps } from "../components/Maps";
import { Habitaciones } from "../db/Db";
import { useSlider } from "../hooks/useSlider";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { ReservationDate } from "../components/ReservationDate";
import { ReservationCost } from "../components/ReservationCost";
import { DebeSaber } from "../components/DebeSaber";

export const HabitacionDetails = () => {
  const { habtitulo } = useParams();

  const habitacion = Habitaciones.find(
    (habitacion) => habitacion.titulo === habtitulo?.replace("_", " ")
  );
  if (!habitacion) return null;
  const [prevSlide, nextSlide, currentIndex] = useSlider(habitacion.img);

  return (
    <div className=" px-12 md:px-24 py-6 pt-[12vh]">
      <p
        className="font-bold text-primary text-6xl md:text-7xl"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {habitacion?.titulo}
      </p>
      {/* galeria */}
      <div
        className="h-[25vh] md:h-[30vh] lg:h-[60vh] w-full m-auto  relative group transition-all my-6"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
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
      <div className=" ">
        <ReservationDate habitacion={habitacion} />
      </div>

      <Maps />
      <p
        className="font-bold mb-2 text-xl"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Los Ángeles, California, Estados Unidos
      </p>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
        Ubicado a seis manzanas del Museo de la Academia (Oscars), el Museo de
        Arte del Condado de Los Ángeles, La Brea Tar Pits y el Peterson
        Automotive Museum en Museum Row. CBS-TV Studios, el mercado de
        agricultores original, las tiendas de The Grove y muchas galerías de
        arte están a poca distancia a pie, además de restaurantes de primera
        categoría, comida étnica y excelentes restaurantes asequibles.
        Aparcamiento gratuito las 24 horas.
      </p>
      <DebeSaber habitacion={habitacion} />
    </div>
  );
};
