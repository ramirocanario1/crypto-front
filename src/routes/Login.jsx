import React, { useEffect } from "react";
import Title from "../components/utils/Title";
import useLogin from "../components/login/useLogin";
import LoginForm from "../components/login/LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const { login, isLoading, isError, errorMessage, isSuccess } = useLogin();
  const navigate = useNavigate();
  
  async function onSubmit(data) {
    const user = await login(data.email, data.password);

    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
    return navigate("/");

  }

  return (
    <main className="p-2">
      <Title>Inicio de sesión</Title>
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} error={{isError, message: errorMessage}}/>
    </main>
  );
}
