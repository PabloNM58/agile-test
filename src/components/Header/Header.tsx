import styles from "./Header.module.scss";
import { BsGrid3X3GapFill } from "react-icons/bs";
import Image from "next/image";
import { ReactNode } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

interface Props {
  avatarSrc?: string;
  children: ReactNode;
}

export default function Header({ children, avatarSrc }: Props) {
  const avatar = avatarSrc || "/avatar_default.jpg";
  const { isMobile } = useScreenSize();
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>{children}</div>
      {!isMobile && (
        <div className={styles.headerRight}>
          <span className={styles.icon}>
            <BsGrid3X3GapFill />
          </span>
          <Image
            src={avatar}
            alt="avatar"
            className={styles.avatar}
            width={30}
            height={30}
          />
        </div>
      )}
    </header>
  );
}
