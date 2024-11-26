import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© Google 2021</span>
      <span>Versión: 0.1.0</span>
    </footer>
  );
}
