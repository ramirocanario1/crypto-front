import axios from "axios";
import { useState } from "react";
import { api } from "../../config";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (email, password) => {
    
    try {
      setIsError(false);
      setIsLoading(true);

      const body = {
        email,
        password,
      };
      const response = await axios.post(`${api}/login`, body);
      setIsSuccess(true);
      setIsError(false);

      return {
        id: response.data.usuario.id,
        email: response.data.usuario.email,
        username: response.data.usuario.username,
      }

    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
      return null
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, isError, errorMessage, isSuccess };	
}
