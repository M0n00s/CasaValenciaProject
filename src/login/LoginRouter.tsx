import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AppPage } from "../Pages/AppPage";
import { LoginPage } from "../Pages/LoginPage";

export const LoginRouter = () => {
  const [Login, setLogin] = useState(false);

  return (
    <>
      <Routes>
        {!Login ? (
          <>
            <Route path="/login" element={<LoginPage setLogin={setLogin} />} />
            <Route path="*" element={<Navigate to="login" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<AppPage />} />
          </>
        )}
      </Routes>
    </>
  );
};
