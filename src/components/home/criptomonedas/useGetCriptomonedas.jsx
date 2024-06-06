
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../../config";

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

      const response = await axios.get(`${api}/criptos`);
      setIsSuccess(true);
      setIsError(false);

      const criptosObj = response.data.data
      const criptosArray = Object.values(criptosObj)
      setData(criptosArray);
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