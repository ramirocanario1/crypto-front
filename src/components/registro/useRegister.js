import axios from "axios";
import { useState } from "react";
import { api } from "../../config";

export default function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const register = async (data) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await axios.post(`${api}/usuarios/registrar`, data);
      setIsSuccess(true);
      setIsError(false);

      return {
        id: response.data.usuario.id,
        email: response.data.usuario.email,
        username: response.data.usuario.username,
      };
    } catch (error) {
      setIsError(true);

      if (error.code === "ERR_NETWORK") {
        setErrorMessage("Ocurrió un error inesperado. Por favor, contacte con el administrador.");
        return
      }

      const errors = error.response.data

      if (errors.username) {
        setErrorMessage("El nombre de usuario ya está en uso");
        return
      }

      if (errors.email) {
        setErrorMessage("El email ya está en uso");
        return
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, isError, errorMessage, isSuccess };
}
