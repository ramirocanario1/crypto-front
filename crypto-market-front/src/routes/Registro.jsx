import React from "react";
import ButtonOutlined from "../components/utils/ButtonOutlined";
import Button from "../components/utils/Button";
import Title from "../components/utils/Title";

export default function Registro() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <main className="p-2">
      <Title>Registro</Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
        <fieldset className="flex flex-col">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            placeholder="usuario123"
            className="rounded shadow-md py-2 px-1 text-black"
            id="username"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            placeholder="usuario@email.com"
            className="rounded shadow-md py-2 px-1 text-black"
            type="email"
            id="email"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" className="rounded shadow-md py-2 px-1 text-black" />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="password2">Repetí tu contraseña</label>
          <input type="password" id="password2" className="rounded shadow-md py-2 px-1 text-black" />
        </fieldset>
        <fieldset className="flex flex-col gap-1 mt-2">
          <Button>Crear cuenta</Button>
          <ButtonOutlined to="/login">¿Ya tenés cuenta? Inicia sesión</ButtonOutlined>
        </fieldset>
      </form>
    </main>
  );
}
