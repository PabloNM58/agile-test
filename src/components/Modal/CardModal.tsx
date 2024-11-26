import { useEffect, useRef, useCallback } from "react";
import ResultsCard from "../DIsplayResults/ResultsCard/ResultsCard";
import styles from "./CardModal.module.scss";
import useModalCardContext from "@/hooks/useModalCardContext";

export default function CardModal() {
  const { setModalIsOpen } = useModalCardContext();

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalIsOpen(false);
      }
    },
    [setModalIsOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modal} ref={modalRef}>
        <ResultsCard />
      </div>
    </>
  );
}
