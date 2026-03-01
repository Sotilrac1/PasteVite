import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#080612]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
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
              <span className="font-semibold text-white">PasteVite</span>
            </div>
            <p className="text-xs text-white/40 text-center sm:text-left">
              Paste smarter. Type faster.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:support@pastevite.app"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Support
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/25">
            &copy; {currentYear} PasteVite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
