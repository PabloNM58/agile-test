import { ModalCardContext } from "@/context/ModalCardContext";
import { useContext } from "react";

export default function useModalCardContext() {
  const context = useContext(ModalCardContext);
  if (!context) {
    throw new Error(
      "ModalCardContext must be used within a OptionsSelectedProvider"
    );
  }
  return context;
}
