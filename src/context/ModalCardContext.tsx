"use client";
import { ApiResult, ModalCardContextType, ProviderProps } from "@/types";
import { createContext, useState } from "react";

export const ModalCardContext = createContext<ModalCardContextType | null>(
  null
);

export const ModalCardProvider = ({ children }: ProviderProps) => {
  const [infoCard, setInfoCard] = useState<ApiResult | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  return (
    <ModalCardContext.Provider
      value={{
        infoCard,
        setInfoCard,
        modalIsOpen,
        setModalIsOpen,
      }}
    >
      {children}
    </ModalCardContext.Provider>
  );
};
