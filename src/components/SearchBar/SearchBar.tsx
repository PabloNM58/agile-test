"use client";
import styles from "./SearchBar.module.scss";
import { ChangeEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import useDataSearchContext from "@/hooks/useDataSearchContext";
import useModalCardContext from "@/hooks/useModalCardContext";

interface Props {
  isNavbar?: boolean;
}

export default function SearchBar({ isNavbar }: Props) {
  const { inputQuery, setInputQuery } = useDataSearchContext();
  const { setInfoCard } = useModalCardContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputQuery(e.target.value);
  };

  const clearSearch = (): void => {
    setInputQuery("");
    setInfoCard(null);
  };

  return (
    <div className={isNavbar ? styles.searchInNavbar : styles.searchBar}>
      <BsSearch
        className={isNavbar ? styles.iconSearchInNavbar : styles.iconSearch}
      />
      <input
        type="text"
        value={inputQuery}
        onChange={handleInputChange}
        placeholder=""
        aria-label="Search"
      />
      {inputQuery && (
        <BsX
          onClick={clearSearch}
          className={`${styles.clearButton} ${
            inputQuery ? styles.visible : ""
          }`}
        />
      )}
    </div>
  );
}
