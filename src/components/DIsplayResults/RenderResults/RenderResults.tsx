import useGetData from "@/hooks/useGetData";
import NoResults from "../NoResults/NoResults";
import ResultsList from "../ResultsList/ResultsList";
import Skeleton from "@/components/Skeleton/Skeleton";

interface Props {
  inputQuery: string;
}

export default function RenderResults({ inputQuery }: Props) {
  const { data, isLoading } = useGetData(inputQuery);

  if (isLoading) return <Skeleton />;

  if (!data || data.length === 0) return <NoResults />;

  return <ResultsList data={data} />;
}
