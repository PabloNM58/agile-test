import { useEffect, useState, useRef } from "react";

interface UseInfiniteScrollProps {
  totalItems: number;
  initialItems: number;
  increment: number;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export default function useInfiniteScroll({
  totalItems,
  initialItems,
  increment,
  isLoading,
  setLoading,
}: UseInfiniteScrollProps) {
  const [visibleItems, setVisibleItems] = useState(initialItems);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentLoadMoreRef = loadMoreRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoading &&
          visibleItems < totalItems
        ) {
          setLoading(true);
          setTimeout(() => {
            setVisibleItems((prev) => Math.min(prev + increment, totalItems));
            setLoading(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (currentLoadMoreRef) {
      observer.observe(currentLoadMoreRef);
    }

    return () => {
      if (currentLoadMoreRef) {
        observer.unobserve(currentLoadMoreRef);
      }
    };
  }, [isLoading, totalItems, visibleItems, increment, setLoading]);

  return { visibleItems, loadMoreRef };
}
