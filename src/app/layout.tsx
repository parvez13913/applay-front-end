import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/components/nav-bar";
import TopNavBar from "./ui/components/top-nav-bar";

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
        <main>
          <TopNavBar />
          <div className="sticky top-0">
            <NavBar />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
