"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-medium tracking-wide text-white"
        >
          .Ayr
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-60"
          >
            About
          </a>

          <a
            href="#collection"
            className="text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-60"
          >
            Collection
          </a>

          <a
            href="#instagram"
            className="text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-60"
          >
            Instagram
          </a>

          <a
            href="#shop"
            className="border border-white px-5 py-2 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
          >
            Shop
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="bg-black px-6 pb-8 md:hidden">
          <div className="flex flex-col gap-6 pt-4">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-white"
            >
              About
            </a>

            <a
              href="#collection"
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-white"
            >
              Collection
            </a>

            <a
              href="#instagram"
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-white"
            >
              Instagram
            </a>

            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="border border-white px-5 py-3 text-center text-sm uppercase tracking-widest text-white"
            >
              Shop
            </a>
          </div>
        </div>
      )}
    </header>
  );
}