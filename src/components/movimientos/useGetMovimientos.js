import { useEffect, useState } from "react";
import { api } from "../../config";
import getCurrentUser from "../utils/getCurrentUser";

import axios from "axios";

export default function useGetMovimientos() {
  const [movimientos, setMovimientos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovimientos() {
      try {
        setIsLoading(true);
        setIsError(false);

        const {id} = getCurrentUser();
        const { data } = await axios.get(`${api}/movimientos/${id}`);

        setMovimientos(data.reverse());
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovimientos();
  }, []);

  return { movimientos, isLoading, isError };
}
