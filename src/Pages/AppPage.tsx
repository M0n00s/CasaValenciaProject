import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Contacto } from "./Contacto";
import { HabitacionDetails } from "./HabitacionDetails";
import { Habitaciones } from "./Habitaciones";
import { Home } from "./Home";
export const AppPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/habitacion/:habtitulo" element={<HabitacionDetails />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/*" element={<Navigate to="/home " />} />
      </Routes>
      <Footer />
    </>
  );
};
