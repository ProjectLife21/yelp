import { useEffect, useState, useCallback } from "react";
import { axiosInstance } from "../API/axiosInstance";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (url) => {
    console.log("Wywołanie");
    setIsLoading(true);
    try {
      const response = await axiosInstance(url);
      const repoData = response.data.result;
      setData(repoData);
    } catch (error) {
      console.log(error);
      setError({
        isError: true,
        errorMsg: error?.message || "Something went wrong!",
      });
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, error, data, fetchData };
};
