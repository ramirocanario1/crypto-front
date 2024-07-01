
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { api } from "../../config";

import UserContext from '../../contexts/UserContext';

export default function useGetSaldoCripto(criptoId) {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getSaldo = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${api}/portfolio/${user.id}`);

        const portfolio = response.data

        if (portfolio.length === 0) {
          setSaldo(0);
          setIsSuccess(true);
          return
        }
        const cripto = portfolio.find(c => `${c.cripto.id}` === criptoId)

        setSaldo(cripto.saldo.toFixed(8));
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
