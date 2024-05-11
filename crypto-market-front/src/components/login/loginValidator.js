import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("El email no es válido")
      .required("Debes ingresar un email para iniciar sesion."),
    password: yup
      .string()
      .min(4, "La contraseña debe tener entre 4 y 20 caracteres")
      .max(20, "La contraseña debe tener entre 4 y 20 caracteres")
      .required("Debes ingresar una contraseña para iniciar sesion.")
      .label("Password"),
  })
  .required();

export default schema;