import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — PasteVite",
  description: "Read the PasteVite privacy policy. Learn how we handle your data.",
};

const LAST_UPDATED = "March 1, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/50">Privacy Policy</span>
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-sm text-white/35">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="prose-custom">
            <Section title="1. Introduction">
              <p>
                Welcome to PasteVite (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to
                protecting your personal information and your right to privacy. This Privacy
                Policy explains how we collect, use, and safeguard your information when
                you use the PasteVite iOS application and related services.
              </p>
              <p>
                By using PasteVite, you agree to the terms of this Privacy Policy. If you
                do not agree, please discontinue use of the application.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect the following types of information:</p>
              <SubSection title="2.1 Information You Provide">
                <ul>
                  <li>
                    <strong>Snippet content:</strong> The text snippets, labels, and
                    collections you create within PasteVite. This data is stored locally
                    on your device and, if enabled, synced via iCloud to your other Apple
                    devices.
                  </li>
                  <li>
                    <strong>Account information:</strong> If you contact us for support,
                    we may collect your name and email address.
                  </li>
                </ul>
              </SubSection>
              <SubSection title="2.2 Automatically Collected Information">
                <ul>
                  <li>
                    <strong>Usage analytics:</strong> We may collect anonymised,
                    aggregated data about how the app is used (e.g., feature engagement,
                    crash reports) to improve the app experience. This data does not
                    identify you personally.
                  </li>
                  <li>
                    <strong>Device information:</strong> Basic device information such as
                    iOS version and device model, used solely for debugging and
                    compatibility purposes.
                  </li>
                </ul>
              </SubSection>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain the PasteVite application.</li>
                <li>Sync your snippet data across your devices via iCloud (if enabled).</li>
                <li>Improve, personalise, and expand our application.</li>
                <li>Diagnose technical problems and fix bugs.</li>
                <li>Respond to support requests and communications.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </Section>

            <Section title="4. iCloud Sync">
              <p>
                PasteVite optionally uses Apple&apos;s iCloud to sync your snippet data
                across your Apple devices. When iCloud sync is enabled, your data is
                stored in your personal iCloud account and governed by Apple&apos;s Privacy
                Policy. We do not have access to your iCloud-stored data. You can
                disable iCloud sync at any time in your device Settings.
              </p>
            </Section>

            <Section title="5. Keyboard Extension">
              <p>
                PasteVite includes an optional iOS keyboard extension. The keyboard
                extension only reads snippet data stored locally in the app to display
                your saved text. <strong>The keyboard extension does not log, transmit,
                or store any text you type in other applications.</strong> We do not have
                access to keystrokes or content typed using the standard iOS keyboard.
              </p>
              <p>
                The keyboard extension operates with &quot;Allow Full Access&quot; disabled by
                default, which means it cannot send data to the internet. You may be
                prompted to enable full access for certain features; if you do so, no
                keystroke data is ever transmitted.
              </p>
            </Section>

            <Section title="6. Clipboard Access">
              <p>
                PasteVite accesses your device clipboard solely to copy snippet content
                when you tap a snippet button. The app does not read clipboard contents
                from other apps, monitor your clipboard, or transmit clipboard data
                to any server.
              </p>
            </Section>

            <Section title="7. Data Sharing">
              <p>
                We do not sell, trade, or otherwise transfer your personal information
                to third parties. We may share anonymised, aggregated data with
                analytics providers to help us understand app usage. Any such data
                cannot be used to identify you.
              </p>
              <p>
                We may disclose your information if required by law or to protect the
                rights, property, or safety of PasteVite, our users, or others.
              </p>
            </Section>

            <Section title="8. Data Retention">
              <p>
                Your snippet data is stored on your device and in your iCloud account
                (if sync is enabled). We retain support correspondence for up to 2 years.
                You may delete your data at any time by deleting the app or disabling
                iCloud sync in Settings.
              </p>
            </Section>

            <Section title="9. Children&apos;s Privacy">
              <p>
                PasteVite is not directed to children under the age of 13. We do not
                knowingly collect personal information from children under 13. If you
                believe a child has provided us with personal information, please
                contact us and we will delete it promptly.
              </p>
            </Section>

            <Section title="10. Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request correction or deletion of your personal information.</li>
                <li>Object to or restrict our processing of your personal information.</li>
                <li>Data portability.</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@pastevite.app" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  privacy@pastevite.app
                </a>.
              </p>
            </Section>

            <Section title="11. Security">
              <p>
                We implement appropriate technical and organisational measures to
                protect your information. However, no method of electronic storage or
                transmission is 100% secure. We strive to use commercially acceptable
                means to protect your data but cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="12. Third-Party Services">
              <p>
                PasteVite may use the following third-party services:
              </p>
              <ul>
                <li>
                  <strong>Apple iCloud</strong> — for data sync (governed by{" "}
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Apple&apos;s Privacy Policy
                  </a>).
                </li>
                <li>
                  <strong>Apple App Store</strong> — for app distribution and
                  in-app purchases (governed by Apple&apos;s Privacy Policy).
                </li>
              </ul>
            </Section>

            <Section title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify
                you of any significant changes by updating the &quot;Last updated&quot; date at
                the top of this page. We encourage you to review this policy
                periodically.
              </p>
            </Section>

            <Section title="14. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:privacy@pastevite.app" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    privacy@pastevite.app
                  </a>
                </li>
              </ul>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/5">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-white/55 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-3">
      <h3 className="text-sm font-semibold text-white/75 mb-2">{title}</h3>
      {children}
    </div>
  );
}
