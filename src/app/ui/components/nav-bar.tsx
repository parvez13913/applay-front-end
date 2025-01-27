"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./button";

export default function NavBar() {
  const [activeHash, setActiveHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Faq", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
      setActiveHash(href);
      setIsMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="w-full bg-white shadow-xl z-[999]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-medium text-primary">
          Applay
        </Link>

        {/* Mobile menu button */}
        <Button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={twMerge(
                "px-4 py-2 text-sm rounded-md transition-colors",
                activeHash === item.href
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-primary hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Get Started Button */}
        <Link
          href="/login"
          className="hidden md:inline-flex rounded-sm bg-blue-100 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
        >
          Get Started
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={twMerge(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  activeHash === item.href
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-100 text-primary hover:bg-primary hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
