import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HabitacionDetails } from "./HabitacionDetails";
import { Home } from "./Home";
export const AppPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/habitacion/:habtitulo" element={<HabitacionDetails />} />

        <Route path="/*" element={<Navigate to="/home " />} />
      </Routes>
      <Footer />
    </>
  );
};
