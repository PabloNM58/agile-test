import { ApiResponse, ApiResult } from "@/types";
import { useState } from "react";
import styles from "./ResultsList.module.scss";
import useModalCardContext from "@/hooks/useModalCardContext";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

interface Props {
  data: ApiResponse | null;
}

export default function ResultsList({ data }: Props) {
  const [loading, setLoading] = useState(false);
  const { setInfoCard } = useModalCardContext();
  const { setModalIsOpen } = useModalCardContext();

  const { visibleItems, loadMoreRef } = useInfiniteScroll({
    totalItems: data?.length ?? 0,
    initialItems: 15,
    increment: 10,
    isLoading: loading,
    setLoading,
  });

  const saveInfoCard = (item: ApiResult) => {
    setInfoCard(item);
    setModalIsOpen(true);
  };

  return (
    <>
      <ul className={styles.list}>
        {data?.slice(0, visibleItems).map((item) => (
          <li key={item.id} onClick={() => saveInfoCard(item)}>
            <a>{item.url}</a>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading results...</p>}
      <div ref={loadMoreRef} style={{ height: "50px" }}></div>
    </>
  );
}
