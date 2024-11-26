import useModalCardContext from "@/hooks/useModalCardContext";
import styles from "./ResultsCard.module.scss";
import Image from "next/image";

export default function ResultsCard() {
  const { infoCard } = useModalCardContext();
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        width={500}
        height={300}
        alt={infoCard?.title ? infoCard.title : "default image"}
        src={infoCard?.image ? infoCard.image : "./defaultImage"}
      />

      <span className={styles.text}>
        <a>{infoCard?.url}</a>
        <h3>{infoCard?.title}</h3>
        <p>{infoCard?.description}</p>
      </span>
    </div>
  );
}
