import { useEffect, useState } from "react";
import { api } from "../../config";
import getCurrentUser from "../utils/getCurrentUser";

import axios from "axios";

export default function useGetTenencias() {
  const [tenencias, setTenencias] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getTenencias() {
      try {
        setIsLoading(true);
        setIsError(false);

        const {id} = getCurrentUser();
        const { data } = await axios.get(`${api}/portfolio/${id}`);
        
        setTenencias(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTenencias();
  }, []);

  return { tenencias, isLoading, isError };
}
