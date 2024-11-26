import { ReactNode } from "react";

export type DataSearchContextType = {
  inputQuery: string;
  setInputQuery: Dispatch<SetStateAction<string>>;
  filteredData: ApiResult[] | null;
  setFilteredData: Dispatch<SetStateAction<ApiResult[] | null>>;
};

export type ModalCardContextType = {
  infoCard: ApiResult | null;
  setInfoCard: Dispatch<SetStateAction<ApiResult | null>>;
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

export interface ProviderProps {
  children: ReactNode;
}

interface ApiResult {
  description: string;
  id: number;
  image: string;
  title: string;
  type: string;
  url: string;
}

type ApiResponse = ApiResult[];
