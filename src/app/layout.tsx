import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const inter = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechFlow – Avtosevris boshqaruv platformasi",
  description:
    "TechFlow – avtosevris va xizmat ko'rsatish biznesini boshqarish uchun yagona raqamli platforma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
