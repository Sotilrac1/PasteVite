"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0814]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="PasteVite home"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="2" width="6" height="4" rx="1" />
              <path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
              <path d="M9 12h6M9 16h4" />
            </svg>
          </div>
          <span className="font-semibold text-lg text-white tracking-tight">
            PasteVite
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
          <Link
            href="/#features"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#keyboard"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Keyboard
          </Link>
          <Link
            href="/#download"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Download
          </Link>
          <Link
            href="/#download"
            className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
          >
            Get the App
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={handleToggleMenu}
          className="sm:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="sm:hidden border-t border-white/5 bg-[#0a0814]/95 px-4 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          <Link
            href="/#features"
            onClick={handleCloseMenu}
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#keyboard"
            onClick={handleCloseMenu}
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Keyboard
          </Link>
          <Link
            href="/#download"
            onClick={handleCloseMenu}
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Download
          </Link>
          <Link
            href="/#download"
            onClick={handleCloseMenu}
            className="px-4 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-center hover:opacity-90 transition-opacity"
          >
            Get the App
          </Link>
        </nav>
      )}
    </header>
  );
}
