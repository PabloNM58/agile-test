import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
