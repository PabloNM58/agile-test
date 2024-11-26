"use client";
import Button from "@/components/common/Button.tsx/Button";
import styles from "./page.module.scss";
import GoogleLogo from "@/components/common/GoogleLogo/GoogleLogo";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/results");
  };
  return (
    <>
      <Header>
        <div>
          <b>Agile Content</b> <span>Frontend Test</span>
        </div>
      </Header>
      <div className={styles.mainContainer}>
        <GoogleLogo />
        <SearchBar />
        <Button handleClick={handleClick} />
      </div>
    </>
  );
}
