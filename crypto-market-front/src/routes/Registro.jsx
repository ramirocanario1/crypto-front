import React, { useEffect } from "react";
import Title from "../components/utils/Title";
import { useNavigate } from "react-router-dom";
import RegistroForm from "../components/registro/RegistroForm";
import useRegister from "../components/registro/useRegister";

export default function Registro() {

  const { register, isLoading, isError, errorMessage, isSuccess } = useRegister();
  const navigate = useNavigate();
  
  async function onSubmit(data) {

    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    }

    const user = await register(newUser);

    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
    return navigate("/");

  }

  return (
    <main className="p-2">
      <Title>Crear una cuenta</Title>
      <RegistroForm onSubmit={onSubmit} isLoading={isLoading} error={{isError, message: errorMessage}}/>
    </main>
  );
}
