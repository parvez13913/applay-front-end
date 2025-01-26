import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FirstNavBar from "./ui/components/first-nav-bar";
import NavBar from "./ui/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Applay-Creative App",
  description: "Welcome to Applay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirstNavBar />
        <div className="sticky top-0">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
