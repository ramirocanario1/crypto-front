import { useState } from "react";
import { api } from "../../config";
import axios from "axios";

export default function useRetiro() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function retirar(userId, cantidad) {
    try {
      setIsLoading(true);
      setIsSuccess(false)
      setIsError(false)

      const body = {
        usuario_id: userId,
        monto: cantidad,
        fecha: new Date().toISOString(),
        tipo: 'RETIRO'
      }
      
      await axios.post(`${api}/movimientos/registrar`, body)

      setIsSuccess(true)
      return true
    } catch {
      setIsError(true)
      setIsSuccess(false)
      return false
    } finally {
      setIsLoading(false);
    }
  }

  return { retirar, isError, isLoading, isSuccess };
}