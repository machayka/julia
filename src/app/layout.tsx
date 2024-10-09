import "@/firebase/init-firebase";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Background } from "./components/Background";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julia Zając",
  description: "Doradczynin klienta biznesowego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(inter.className, "bg-slate-100 dark:bg-black")}>
        <Background>
          <Providers>{children}</Providers>
        </Background>
      </body>
    </html>
  );
}
