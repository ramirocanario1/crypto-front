
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../config";

export default function useGetCripto({id, precios}) {

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

      const criptoObj = response.data.data
      const cripto = Object.values(criptoObj)[0]

      setData({
        info: cripto,
        precios: precios
      })

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