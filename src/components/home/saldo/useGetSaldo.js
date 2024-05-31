import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { api } from "./../../../config";

import UserContext from '../../../contexts/UserContext';

export default function useGetSaldo() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getSaldo = async () => {
      try {
        const response = await axios.get(`${api}/saldo/${user.id}`);
        setSaldo(response.data.saldo);
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
