"use client";
import { ApiResult, DataSearchContextType, ProviderProps } from "@/types";
import { createContext, useState } from "react";

export const DataSearchContext = createContext<DataSearchContextType | null>(
  null
);

export const DataSearchProvider = ({ children }: ProviderProps) => {
  const [inputQuery, setInputQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<ApiResult[] | null>(null);
  return (
    <DataSearchContext.Provider
      value={{
        inputQuery,
        setInputQuery,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </DataSearchContext.Provider>
  );
};
