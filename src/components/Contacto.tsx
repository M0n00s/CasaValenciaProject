import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Contacto = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <div
      id="contactanos"
      className="flex flex-col items-center justify-center px-12 md:px-24"
    >
      <div className=" max-w-[480px] my-12">
        <p className="text-primary text-4xl py-6 font-bold self-start">
          Contactanos
        </p>
        <Formik
          initialValues={{
            nombre: "",
            correo: "",
          }}
          validate={(valores) => {
            let errores: any = {};

            // Validacion nombre
            if (!valores.nombre) {
              errores.nombre = "Por favor ingresa un nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios";
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
            console.log("Formulario enviado");
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
                  className="col-span-1 appearance-none bg-transparent border-b-2 border-primary rounded-md w-full text-gray-700  py-2 px-4 leading-tight focus:outline-none"
                  type="text"
                  id="correo"
                  name="correo"
                  placeholder="correo@correo.com"
                />
                <ErrorMessage
                  name="correo"
                  component={() => (
                    <div className="text-xs text-red-500 ">{errors.correo}</div>
                  )}
                />
              </div>

              <div>
                <Field
                  className="h-[25vh] md:h-[20vh] w-[74vw] md:w-[60vw] max-w-[480px] col-span-2 appearance-none  border-b-2 border-primary rounded-md text-gray-700 py-2 px-4 leading-tight focus:outline-none"
                  name="mensaje"
                  as="textarea"
                  placeholder="Mensaje"
                />
              </div>

              <button
                className="col-span-1 md:col-span-2 py-4 bg-primary text-white rounded-md mb-6 font-bold"
                type="submit"
              >
                Enviar
              </button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
