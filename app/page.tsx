import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
    title: "Smart Paste Buttons",
    description:
      "Create custom buttons for any text you repeat. Tap once to instantly copy it to your clipboard — no retyping ever again.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Organised Collections",
    description:
      "Group your snippets into collections — work templates, personal info, greetings, scripts — all neatly organised and instantly accessible.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Rich Text Formatting",
    description:
      "Style your snippets with bold, italic, links, and more. Paste beautifully formatted text anywhere it&apos;s supported.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M8 4v16M16 4v16M2 10h20M2 16h20" />
      </svg>
    ),
    title: "iOS Keyboard Extension",
    description:
      "Access all your snippets right from the iOS keyboard in any app — Messages, Mail, Notes, or anywhere else. No switching apps.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
    ),
    title: "Quick Share",
    description:
      "Share snippets with friends or colleagues instantly. Send your most-used phrases as a collection in just a few taps.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: "iCloud Sync",
    description:
      "Your snippets sync seamlessly across all your Apple devices via iCloud, so they&apos;re always with you wherever you go.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create a snippet",
    description: "Type or paste any text you use often. Add a label and save it as a button.",
  },
  {
    step: "02",
    title: "Tap to copy",
    description: "In the PasteVite app, tap any button to instantly copy that text to your clipboard.",
  },
  {
    step: "03",
    title: "Paste anywhere",
    description: "Switch to any app and paste — or use the keyboard extension to paste without leaving.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
            <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Available on the App Store
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Paste smarter.
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Type faster.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
              PasteVite turns your most-used phrases into one-tap buttons. Copy
              to clipboard instantly, or paste directly from the iOS keyboard —
              in any app, without switching.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                aria-label="Download PasteVite on the App Store"
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-white/90 transition-all shadow-xl shadow-white/10 group"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-900" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/10 text-white/70 font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              >
                See how it works
              </a>
            </div>

            {/* Mock app preview */}
            <div className="relative mt-20 flex justify-center">
              <div className="relative w-72 sm:w-80 bg-[#12102a] rounded-[2.5rem] border border-white/10 shadow-2xl shadow-indigo-900/40 overflow-hidden p-6">
                {/* Notch */}
                <div className="w-24 h-1.5 bg-white/10 rounded-full mx-auto mb-6" />
                <p className="text-xs text-white/30 uppercase tracking-widest mb-3 font-medium">My Snippets</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "Email Signature", preview: "Best regards, Flynn..." },
                    { label: "Meeting Link", preview: "https://meet.example.co..." },
                    { label: "Address", preview: "123 Main St, Sydney..." },
                    { label: "Quick Thanks", preview: "Thanks so much for re..." },
                    { label: "Support Reply", preview: "Hi! Thanks for reaching..." },
                  ].map(({ label, preview }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5 group cursor-pointer"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white/90">{label}</p>
                        <p className="text-[10px] text-white/35 mt-0.5">{preview}</p>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="2" width="6" height="4" rx="1" />
                          <path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating keyboard tag */}
              <div className="absolute -right-4 sm:right-0 top-16 bg-[#1a1730] border border-white/10 rounded-xl px-3 py-2 shadow-xl text-xs text-white/70 flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M8 16h8" />
                </svg>
                Keyboard extension
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 sm:px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Three steps to faster typing
              </h2>
              <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
                Set it up once, save time forever.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map(({ step, title, description }) => (
                <div key={step} className="relative flex flex-col gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <span className="text-4xl font-black text-white/5 leading-none select-none">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">{title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Everything you need to paste faster
              </h2>
              <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
                PasteVite is packed with features that make repetitive typing a thing of the past.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.025] hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500/25 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                    <p
                      className="text-sm text-white/45 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keyboard Extension spotlight */}
        <section id="keyboard" className="py-24 px-4 sm:px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M8 16h8" />
                  </svg>
                  iOS Keyboard Extension
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                  Paste in any app — without ever leaving it
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-6">
                  The PasteVite keyboard extension puts all your saved snippets
                  right on your iOS keyboard. Switch to PasteVite keyboard, tap
                  your snippet, and it&apos;s inserted instantly — in Messages, Mail,
                  WhatsApp, or any app on your phone.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Works in every app on iOS",
                    "Browse all your snippet collections",
                    "Search snippets by name",
                    "One tap to insert text",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                      <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Keyboard mock */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm bg-[#1c1a35] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Keyboard header */}
                  <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/5">
                    <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="2" width="6" height="4" rx="1" />
                        <path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
                      </svg>
                      PasteVite
                    </span>
                    <span className="text-[10px] text-white/25">My Snippets</span>
                  </div>

                  {/* Snippet rows */}
                  <div className="p-3 flex flex-col gap-2">
                    {[
                      { label: "Email Signature", color: "bg-indigo-500" },
                      { label: "Meeting Link", color: "bg-violet-500" },
                      { label: "My Address", color: "bg-purple-500" },
                      { label: "Quick Reply", color: "bg-blue-500" },
                    ].map(({ label, color }) => (
                      <button
                        key={label}
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 text-left hover:bg-white/10 transition-colors"
                      >
                        <span className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                        <span className="text-xs text-white/75 font-medium">{label}</span>
                        <svg className="ml-auto w-3 h-3 text-white/25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>

                  {/* Fake keyboard keys */}
                  <div className="px-3 pb-4 pt-1 flex flex-col gap-1.5 opacity-30">
                    <div className="flex gap-1 justify-center">
                      {["Q","W","E","R","T","Y","U","I","O","P"].map((k) => (
                        <div key={k} className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-[9px] text-white font-medium">{k}</div>
                      ))}
                    </div>
                    <div className="flex gap-1 justify-center">
                      {["A","S","D","F","G","H","J","K","L"].map((k) => (
                        <div key={k} className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-[9px] text-white font-medium">{k}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="relative py-28 px-4 sm:px-6 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-700/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Stop retyping.
              <br />
              Start pasting.
            </h2>
            <p className="text-white/50 text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Join thousands of iOS users who save time every day with
              PasteVite. Download free on the App Store.
            </p>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PasteVite on the App Store"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold text-base hover:bg-white/90 transition-all shadow-2xl shadow-white/10 group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-900" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-4 text-xs text-white/25">Free to download &bull; iOS 16+ required</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
