import axios from "axios";
import { useState } from "react";
import { api } from "../../config";

export default function useEditAttribute() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  async function editAttribute(id, attribute, value) {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const body = {
      [attribute]: value,
    };

    try {
      const response = await axios.patch(`${api}/usuarios/actualizar/${id}`, body);
      setSuccessMessage(`El ${attribute} ha sido actualizado correctamente`);
      setIsSuccess(true);
      return true
    } catch (error) {
      setIsError(true);

      const errors = error.response.data

      if (errors.email) {
        setErrorMessage("El email ya está en uso");
        return
      }
      
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, isError, editAttribute, isSuccess, successMessage, errorMessage };
}
