import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { api } from "./../../../config";

import UserContext from '../../../contexts/UserContext';

export default function useGetSaldo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getSaldo = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${api}/saldo/${user.id}`);
        const saldoFormateado = response.data.saldo.toFixed(2) + ' USDT';

        setSaldo(saldoFormateado);
        setIsSuccess(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);  
      }
    };

    getSaldo()
  }, [user])
  

  return { saldo, isLoading, isError, isSuccess };	
}
