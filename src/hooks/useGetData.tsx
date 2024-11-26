import { useState, useEffect } from "react";
import { ApiResponse } from "@/types";
import { generateData } from "@/services/getFakeData";

const useGetData = (query: string, debounceTime = 500) => {
  const [data, setData] = useState<ApiResponse>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [query, debounceTime]);

  useEffect(() => {
    if (debouncedQuery === "") {
      setData([]);
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await generateData(debouncedQuery);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Error 500"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return { data, isLoading, error };
};

export default useGetData;
