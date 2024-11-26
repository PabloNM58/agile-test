import styles from "./Button.module.scss";
import useDataSearchContext from "@/hooks/useDataSearchContext";

interface Props {
  handleClick: () => void;
}

export default function Button({ handleClick }: Props) {
  const { inputQuery } = useDataSearchContext();
  const buttonDisabled = inputQuery.trim() === "";
  const buttonClass = buttonDisabled
    ? styles.buttonDisabled
    : styles.buttonActive;
  return (
    <button
      disabled={buttonDisabled}
      className={buttonClass}
      onClick={handleClick}
    >
      Buscar
    </button>
  );
}
