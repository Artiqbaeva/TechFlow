import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="uz" suppressHydrationWarning data-qb-installed="true">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
