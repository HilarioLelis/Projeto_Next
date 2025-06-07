import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import { HeroUIProvider } from "@heroui/react";
import Header from "../components/Header";
import Footer from "../components/Footer"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-black flex flex-col min-h-screen dark:bg-zinc-900 dark:text-white`}
      >
        <HeroUIProvider>
          <Header />
          <main className="max-w-7xl mx-auto px-4">{children}</main>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
