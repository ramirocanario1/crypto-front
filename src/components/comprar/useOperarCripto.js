

import axios from 'axios'
import { useEffect, useState } from 'react'	
import { api } from '../../config'
import getCurrentUser from '../utils/getCurrentUser'

export default function useOperarCripto({ cripto, tipoOperacion }) {
  
  const [isPrecioLoading, setIsPrecioLoading] = useState(false)
  const [precio, setPrecio] = useState(0)
  const [isPrecioError, setIsPrecioError] = useState(false)

  const [isOperacionLoading, setIsOperacionLoading] = useState(false)
  const [isOperacionError, setIsOperacionError] = useState(false)

  const getPrecio = async () => {
    setIsPrecioLoading(true)
    setIsPrecioError(false)

    try {
      const response = await axios.get(`${api}/criptos/precio/${cripto}`)
      setPrecio(response.data.precio.toFixed(2))
    } catch (error) {
      setIsPrecioError(true)
    } finally {
      setIsPrecioLoading(false)
    }
  }

  const comprar = async (cantidad) => {
    setIsOperacionLoading(true)
    setIsOperacionError(false)

    try {

      const body = {
        user_id: getCurrentUser().id,
        cripto_id: cripto,
        cantidad: cantidad,
        precio: precio,
      }

      await axios.post(`${api}/comprar`, body)
      return true
    } catch (error) {
      setIsOperacionError(true)
    } finally {
      setIsOperacionLoading(false)
    }
  }

  useEffect(() => {
    getPrecio()
  }, [])

  return { precio, isPrecioLoading, comprar, isOperacionLoading}
}