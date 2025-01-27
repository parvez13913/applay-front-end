"use client";

import { Facebook, Github, Linkedin, Twitter, Video } from "lucide-react";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h2 className="text-sm text-gray-600">Welcome to Applay</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>

          <Link
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Video"
          >
            <Video className="h-5 w-5" />
          </Link>

          <Link
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>

          <Link
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>

          <Link
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Github"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
