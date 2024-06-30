import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../API/axiosInstance";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });
  const [data, setData] = useState(null);

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { isLoading, error, data };
};
