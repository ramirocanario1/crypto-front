
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../config";
import cripto from "./cripto_mock";

export default function useGetCripto({id}) {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getCripto()
  }, [])

  const getCripto = async () => {
    try {
      setIsError(false)
      setIsLoading(true)

      const response = await axios.get(`${api}/criptos/${id}`)

      // Esperar un segundo
      // await new Promise(resolve => setTimeout(resolve, 0))

      // setData(cripto)

      setData(response.data)
      return true

    } catch (error) {
      setIsError(true)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, isError, data }
}