import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ThemeMode from "@/components/Buttons/Themes";
import ScrollToTopButton from "@/components/Buttons/Move";
import { ThemeProvider } from "@/context/themeContext";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-sawarabi",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Eduardo A. Cabrejas",
  description: "Frontend Portfolio",
  icons: {
    icon: "./favicon.ico",
  },
  keywords: [
    "Frontend Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Eduardo Cabrejas",
  ],
  authors: [{ name: "Eduardo Alejandro Cabrejas" }],
  creator: "Eduardo Alejandro Cabrejas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
      data-theme="light"
    >
      <body className="flex flex-col relative min-h-screen overflow-x-hidden">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-10 left-20 w-[15rem] h-[15rem] rounded-full bg-[var(--glow1)] blur-xl opacity-60"></div>
          <div className="absolute bottom-10 right-10 w-[12rem] h-[12rem] rounded-full bg-[var(--glow2)] blur-xl opacity-70"></div>
          <div className="absolute top-1/2 left-[40%] w-[8rem] h-[8rem] rounded-full bg-[var(--glow3)] blur-xl opacity-50"></div>
          <div className="absolute bottom-1/2 right-[20%] w-[5rem] h-[5rem] rounded-full bg-[var(--glow1)] blur-xl opacity-70"></div>
          <div className="absolute top-3/4 left-[20%] w-[8rem] h-[8rem] rounded-full bg-[var(--glow2)] blur-xl opacity-60"></div>
          <div className="absolute bottom-3/4 right-[20%] w-[8rem] h-[8rem] rounded-full bg-[var(--glow3)] blur-xl opacity-100"></div>
        </div>

        <ThemeProvider>
          <NavBar />
          <main>
            {children}
            <ThemeMode />
            <ScrollToTopButton />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
