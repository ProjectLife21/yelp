import { useState } from "react";
import { axiosInstance } from "../API/axiosInstance";
import { useFetch } from "./useFetch";

export const useMutation = (url) => {
  const { fetchData: refresh } = useFetch();

  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });

  const mutation = async (data) => {
    try {
      const response = await axiosInstance.post(url, data);
      console.log(response);

      await refresh();
      //  setResult(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { error, isLoading, result, mutation };
};
