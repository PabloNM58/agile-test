"use client";
import styles from "./page.module.scss";
import GoogleLogo from "@/components/common/GoogleLogo/GoogleLogo";
import RenderResults from "@/components/DIsplayResults/RenderResults/RenderResults";
import ResultsCard from "@/components/DIsplayResults/ResultsCard/ResultsCard";
import Header from "@/components/Header/Header";
import CardModal from "@/components/Modal/CardModal";
import SearchBar from "@/components/SearchBar/SearchBar";
import useDataSearchContext from "@/hooks/useDataSearchContext";
import useModalCardContext from "@/hooks/useModalCardContext";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function ResultsPage() {
  const { infoCard, modalIsOpen } = useModalCardContext();
  const { isDesktop } = useScreenSize();
  const { inputQuery } = useDataSearchContext();

  return (
    <>
      <Header>
        <GoogleLogo isNavbar />
        <SearchBar isNavbar />
      </Header>
      <div className={styles.mainContainer}>
        <div className={infoCard ? styles.resultsColumn : ""}>
          <RenderResults inputQuery={inputQuery} />
        </div>
        <div className={infoCard ? styles.cardColumn : ""}>
          {infoCard && <ResultsCard />}
        </div>
        {!isDesktop && infoCard && modalIsOpen && <CardModal />}
      </div>
    </>
  );
}
