import styles from "./Skeleton.module.scss";

export default function Skeleton() {
  return Array.from({ length: 10 }).map((_, index) => (
    <div key={index} className={styles.skeletonContainer}>
      <div className={styles.skeletonFirstLine}></div>
      <div className={styles.skeletonSecondLine}></div>
      <div className={styles.skeletonThirdLine}></div>
    </div>
  ));
}
