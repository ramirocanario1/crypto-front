
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../config";

export default function useGetCripto({id}) {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getCripto()
  }, [])

  const getCriptoFromLocalStorage = () => {
    const criptos = JSON.parse(localStorage.getItem('criptos'))
    const cripto = criptos.find(cripto => cripto.id === parseInt(id))
    return cripto
  }

  const getCripto = async () => {
    try {
      setIsError(false)
      setIsLoading(true)

      const response = await axios.get(`${api}/criptos/${id}`)

      const criptoObj = response.data.data
      const cripto = Object.values(criptoObj)[0]

      setData({
        info: cripto,
        precios: getCriptoFromLocalStorage()
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