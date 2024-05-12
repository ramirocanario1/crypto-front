import * as yup from "yup";

const schema = yup
  .object({
    username: yup
      .string()
      .required("Debes ingresar un nombre de usuario.")
      .min(4, "El nombre de usuario debe tener entre 4 y 20 caracteres")
      .max(20, "El nombre de usuario debe tener entre 4 y 20 caracteres")
      .label("Username"),
    email: yup.string().email("El email no es válido").required("Debes ingresar un email."),
    password: yup
      .string()
      .required("Debes ingresar una contraseña.")
      .min(4, "La contraseña debe tener entre 4 y 20 caracteres")
      .max(20, "La contraseña debe tener entre 4 y 20 caracteres")
      .label("Password"),
    password2: yup
      .string()
      .required("Debes confirmar la contraseña.")
      .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
      .label("Confirm Password"),
  })
  .required();

export default schema;
