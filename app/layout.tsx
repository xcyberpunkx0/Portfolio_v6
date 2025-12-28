import type { Metadata } from "next";
import { Open_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Gupta - Software Engineer",
  description: "Portfolio of Aditya Gupta, a full-stack software engineer specializing in modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${firaCode.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

