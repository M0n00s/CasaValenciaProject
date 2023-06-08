import React from "react";
import { IoMdRocket } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="p-6 bg-primary flex items-center justify-between text-white">
      <p>Casa Valecia 2023 C.A.</p>
      <p className="flex gap-1 items-center">
        <IoMdRocket /> Español (VE)
      </p>
    </div>
  );
};
