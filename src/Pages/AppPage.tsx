import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Contacto } from "./Contacto";
import { Habitaciones } from "./Habitaciones";
import { Home } from "./Home";
export const AppPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};
