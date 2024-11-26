import useDataSearchContext from "@/hooks/useDataSearchContext";
import styles from "./NoResults.module.scss";

export default function NoResults() {
  const { inputQuery } = useDataSearchContext();
  return (
    <div className={styles.noResults}>
      {inputQuery !== "" && (
        <p>
          No results found for <b>&quot;{inputQuery}&quot;</b>
        </p>
      )}
      <p className={styles.searchSuggestions}>
        Try looking for:{" "}
        <b>
          insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
          cat, snake, dog, bird.
        </b>
      </p>
    </div>
  );
}
