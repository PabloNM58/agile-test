import styles from "./GoogleLogo.module.scss";
import Image from "next/image";

interface Props {
  isNavbar?: boolean;
}
export default function GoogleLogo({ isNavbar }: Props) {
  return (
    <span className={isNavbar ? styles.logoInNavbar : styles.logoContainer}>
      <Image
        className={styles.logo}
        src="/logo_google.svg"
        width={isNavbar ? 30 : 50}
        height={isNavbar ? 30 : 50}
        alt="google"
        layout="intrinsic"
      />
    </span>
  );
}
