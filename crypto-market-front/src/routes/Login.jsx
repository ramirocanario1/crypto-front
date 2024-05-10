import React from "react";
import Button from "../components/utils/Button";
import ButtonOutlined from "../components/utils/ButtonOutlined";
import Title from "../components/utils/Title";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <main className="p-2">
      <Title>Inicio de sesión</Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
        <fieldset className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input placeholder="usuario@email.com" className="rounded shadow-md py-2 px-1 text-black" type="email" id="email" />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="rounded shadow-md py-2 px-1 text-black" />
        </fieldset>
        <fieldset className="flex flex-col gap-1 mt-2">
          <Button>Iniciar sesion</Button>
          <ButtonOutlined to="/registro">Registrarse</ButtonOutlined>
        </fieldset>
      </form>
    </main>
  );
}
