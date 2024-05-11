import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Debes ingresar un email.")
      .email("El email no es válido"),
    password: yup
      .string()
      .required("Debes ingresar una contraseña.")
      .min(4, "La contraseña debe tener entre 4 y 20 caracteres")
      .max(20, "La contraseña debe tener entre 4 y 20 caracteres")
      .label("Password"),
  })
  .required();

export default schema;