"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Jewel by Ayr
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm hover:opacity-60">
            About
          </a>

          <a href="#collection" className="text-sm hover:opacity-60">
            Collection
          </a>

          <a href="#contact" className="text-sm hover:opacity-60">
            Contact
          </a>

          <a
            href="#shop"
            className="rounded-full bg-black px-5 py-2 text-sm text-white hover:opacity-80"
          >
            Shop
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#collection" onClick={() => setMenuOpen(false)}>
              Collection
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-black px-5 py-2 text-center text-white"
            >
              Shop
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}