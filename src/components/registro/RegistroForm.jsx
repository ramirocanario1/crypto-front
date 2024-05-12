import React from "react";
import Button from "../utils/Button";
import OutlinedLinkButton from "../utils/OutlinedLinkButton";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./registroValidator";
import FieldError from "../utils/FieldError";

export default function RegistroForm({ onSubmit, isLoading, error }) {
  const [formRef] = useAutoAnimate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
    delayError: 1000,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-3">
      <fieldset className="flex flex-col" ref={formRef}>
        <label>Nombre de usuario</label>
        <input
          className="rounded shadow-md py-2 px-2 text-black outline-none"
          {...register("username")}
        />
        {errors.username && <FieldError>{errors.username.message}</FieldError>}
      </fieldset>

      <fieldset className="flex flex-col" ref={formRef}>
        <label>Email</label>
        <input
          placeholder="usuario@email.com"
          className="rounded shadow-md py-2 px-2 text-black outline-none"
          {...register("email")}
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </fieldset>

      <fieldset className="flex flex-col" ref={formRef}>
        <label>Contraseña</label>
        <input
          type="password"
          className="rounded shadow-md py-2 px-2 text-black outline-none"
          {...register("password")}
        />
        {errors.password && <FieldError>{errors.password.message}</FieldError>}
      </fieldset>

      <fieldset className="flex flex-col" ref={formRef}>
        <label>Repetí tu contraseña</label>
        <input
          type="password"
          className="rounded shadow-md py-2 px-2 text-black outline-none"
          {...register("password2")}
        />
        {errors.password2 && <FieldError>{errors.password2.message}</FieldError>}
      </fieldset>

      <fieldset className="flex flex-col gap-1 mt-2" ref={formRef}>
        {error.isError && <FieldError>{error.message}</FieldError>}
        <Button disabled={isLoading}>
          {isLoading ? "Creando cuenta..." : "Crear cuenta"}
        </Button>
        <OutlinedLinkButton to="/registro">¿Ya tenés cuenta? Iniciá sesión</OutlinedLinkButton>
      </fieldset>
    </form>
  );
}
