import { useEffect, useState } from "react";
import { api } from "../../config";
import axios from "axios";

export default function useGetUser(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${api}/usuarios/${id}`);
        setUser(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  return { isLoading, isError, user };
}
