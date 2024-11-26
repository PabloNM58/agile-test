import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { DataSearchProvider } from "@/context/DataSearchContext";
import { ModalCardProvider } from "@/context/ModalCardContext";
import MainLayout from "@/components/common/MainLayout/MainLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Agile Content Test",
  description: "Agile Content Test by Pablo Neiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <DataSearchProvider>
          <ModalCardProvider>
            <MainLayout>{children}</MainLayout>
          </ModalCardProvider>
        </DataSearchProvider>
      </body>
    </html>
  );
}
