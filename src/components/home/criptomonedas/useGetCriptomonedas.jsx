
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../../config";
import criptos_mock from "./criptos_mock";

export default function useGetCriptomonedas() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);

  const getCriptomonedas = async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      // const response = await axios.get(`${api}/criptos`);

      // Esperar dos segundos para simular la carga de datos
      await new Promise(resolve => setTimeout(resolve, 1000));

      setData(criptos_mock)

      setIsSuccess(true);
      setIsError(false);

      console.log(criptos_mock)
      // setData(response.data);
      return true

    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
      return null
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCriptomonedas()
  }, [])

  return { getCriptomonedas, isLoading, isError, errorMessage, isSuccess, data }

}