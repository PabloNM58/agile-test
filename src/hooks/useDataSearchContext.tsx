import { DataSearchContext } from "@/context/DataSearchContext";
import { useContext } from "react";

export default function useDataSearchContext() {
  const context = useContext(DataSearchContext);
  if (!context) {
    throw new Error(
      "DataSearchContext must be used within a OptionsSelectedProvider"
    );
  }
  return context;
}
