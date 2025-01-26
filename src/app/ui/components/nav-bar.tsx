"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function NavBar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Faq", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-medium text-primary">
          Applay
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={twMerge(
                "px-4 py-2 text-sm rounded-md transition-colors",
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-primary"
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
    </nav>
  );
}
