import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isAdult, setIsAdult] = useState(true);

  const handleDateChange = (e) => {
    const birthDate = new Date(e.target.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    setIsAdult(age >= 18);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://w.wallhaven.cc/full/yx/wallhaven-yxl66g.jpg')" }}
    >
      <div className="w-full sm:w-96 p-6 bg-white bg-opacity-60 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-bold mb-4">REGISTRO</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              {...register("nombre", { required: "Este campo es obligatorio" })}
              className="mt-2 p-2 w-full border rounded-md"
            />
            {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700">Fecha de Nacimiento:</label>
            <input
              type="date"
              {...register("fechaNac", { required: "Este campo es obligatorio" })}
              onChange={handleDateChange}
              className="mt-2 p-2 w-full border rounded-md"
            />
            {errors.fechaNac && <p className="text-red-500">{errors.fechaNac.message}</p>}
            {!isAdult && <p className="text-red-500">Debe ser mayor de edad</p>}
          </div>

          <div>
            <label className="block text-gray-700">Nota:</label>
            <input
              type="number"
              {...register("nota", {
                required: "Este campo es obligatorio",
                min: {
                  value: 1,
                  message: "La nota debe ser mayor a 0",
                },
                max: {
                  value: 100,
                  message: "La nota debe ser máximo 100",
                },
              })}
              className="mt-2 p-2 w-full border rounded-md"
            />
            {errors.nota && <p className="text-red-500">{errors.nota.message}</p>}
          </div>

          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">ENVIAR</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
