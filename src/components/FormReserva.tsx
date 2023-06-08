import { Field, Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { IoMdSync } from "react-icons/io";

export const FormReserva = ({ habitacion, start, end, setReserva, costo }) => {
  const [spiner, setspiner] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          nombre: "",
          telefono: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores: any = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }
          //validacion telefono
          if (!valores.telefono) {
            errores.telefono = "Por favor ingresa un numero de telefono";
          } else if (!/^([0-9])*$/.test(valores.telefono)) {
            errores.telefono =
              "Por favor ingresa solo numeros sin guiones ni caracteres especiales";
          } else if (valores.telefono.length < 11) {
            errores.telefono = "Por favor ingresa un numero valido venezolano";
          }

          // Validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setspiner(true);
          //start send email
          emailjs
            .send(
              "service_lv11w2s",
              "template_w3yusza",
              { ...valores, start, end, habitacion, costo },
              "vQxZH2SWWh0zMBOMa"
            )
            .then(
              function (response) {
                // console.log("SUCCESS!", response.status, response.text);
                Swal.fire(
                  "Reserva Enviada",
                  "Gracias por confiar en nosotros, en breve nos comunicaremos con usted",
                  "success"
                );
                setspiner(false);
                setReserva(false);
              },
              function (error) {
                // console.log("FAILED...", error);
                Swal.fire("oh ohh!", "ha pasado un error!", "error");
              }
            );
          //-------/

          //   console.log({ ...valores, start, end, habitacion });
        }}
      >
        {({ errors }) => (
          <Form className="grid grid-cols-1 gap-4 ">
            <div>
              <Field
                className="col-span-1  appearance-none bg-transparent border-b-2 border-primary rounded-md w-full text-gray-700  py-2 px-4 leading-tight focus:outline-none"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => (
                  <div className="text-xs text-red-500 ">{errors.nombre}</div>
                )}
              />
            </div>
            <div>
              <Field
                className="col-span-1  appearance-none bg-transparent border-b-2 border-primary rounded-md w-full text-gray-700  py-2 px-4 leading-tight focus:outline-none"
                type="text"
                id="telefono"
                name="telefono"
                placeholder="telefono"
              />
              <ErrorMessage
                name="telefono"
                component={() => (
                  <div className="text-xs text-red-500 ">{errors.telefono}</div>
                )}
              />
            </div>
            <div>
              <Field
                className="col-span-1  appearance-none bg-transparent border-b-2 border-primary rounded-md w-full text-gray-700  py-2 px-4 leading-tight focus:outline-none"
                type="text"
                id="correo"
                name="correo"
                placeholder="correo"
              />
              <ErrorMessage
                name="correo"
                component={() => (
                  <div className="text-xs text-red-500 ">{errors.correo}</div>
                )}
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-primary text-xl text-white rounded-xl w-full mt-6 mb-2"
            >
              {spiner ? (
                <IoMdSync className="animate-spin text-2xl" />
              ) : (
                <p>Confirmar Reserva</p>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
