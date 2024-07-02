import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "./../../../config";

export default function useGetSaldo(formatearSaldo = true) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const getSaldo = async () => {
      setIsLoading(true);
      try {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const response = await axios.get(`${api}/saldo/${user.id}`);
        let saldo = response.data.saldo.toFixed(2);
        if (formatearSaldo) {
          saldo = saldo + ' USDT';
        }

        setSaldo(saldo);
        setIsSuccess(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getSaldo();
  }, []);

  return { saldo, isLoading, isError, isSuccess };
}