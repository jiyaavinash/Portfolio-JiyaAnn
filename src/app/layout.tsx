import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import Home from "./page";
import { MenuItemProvider } from "@/context/MenuItemContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jiya Ann Portfolio",
  description: "Tech enthusiast, Front-end Developer, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuItemProvider>
        <Menu />
        {children}
        </MenuItemProvider>
      </body>
    </html>
  );
}
