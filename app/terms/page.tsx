import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — PasteVite",
  description: "Read the PasteVite terms of service and conditions of use.",
};

const LAST_UPDATED = "March 1, 2026";

export default function TermsPage() {
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
            <span className="text-white/50">Terms of Service</span>
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
            <p className="text-sm text-white/35">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="flex flex-col">
            <Section title="1. Acceptance of Terms">
              <p>
                By downloading, installing, or using PasteVite (&quot;the App&quot;), you agree
                to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree
                to these Terms, do not use the App.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and the
                developers of PasteVite (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We reserve the right
                to update these Terms at any time. Continued use of the App after
                changes constitutes your acceptance of the new Terms.
              </p>
            </Section>

            <Section title="2. Description of the App">
              <p>
                PasteVite is an iOS productivity application that allows users to
                create, save, and organise text snippets as quick-access buttons. The
                App also provides an optional iOS keyboard extension that enables users
                to insert saved snippets into any iOS application.
              </p>
            </Section>

            <Section title="3. Eligibility">
              <p>
                You must be at least 13 years of age to use PasteVite. By using the
                App, you represent and warrant that you meet this age requirement. If
                you are under 18, you must have the permission of a parent or legal
                guardian.
              </p>
            </Section>

            <Section title="4. Licence">
              <p>
                Subject to your compliance with these Terms, we grant you a limited,
                non-exclusive, non-transferable, revocable licence to download and use
                PasteVite solely for your personal, non-commercial purposes on Apple
                devices you own or control.
              </p>
              <p>You may not:</p>
              <ul>
                <li>Copy, modify, or distribute the App or any portion of it.</li>
                <li>Reverse engineer, decompile, or disassemble the App.</li>
                <li>Rent, lease, loan, sell, or sublicense the App.</li>
                <li>Use the App for any unlawful purpose.</li>
                <li>
                  Remove any proprietary notices or labels on the App.
                </li>
              </ul>
            </Section>

            <Section title="5. User Content">
              <p>
                You retain full ownership of the text snippets and content you create
                within PasteVite (&quot;User Content&quot;). You are solely responsible for
                your User Content and the consequences of storing or sharing it.
              </p>
              <p>
                You agree not to create or store User Content that:
              </p>
              <ul>
                <li>Is unlawful, harmful, threatening, abusive, or harassing.</li>
                <li>Infringes any third-party intellectual property rights.</li>
                <li>Contains malicious code, viruses, or harmful data.</li>
                <li>Violates any applicable laws or regulations.</li>
              </ul>
            </Section>

            <Section title="6. Clipboard & Keyboard Extension">
              <p>
                PasteVite accesses your device clipboard solely for the purpose of
                copying snippet text that you have chosen to copy. The keyboard
                extension accesses your saved snippets only. Neither the App nor
                the keyboard extension monitors, logs, or transmits keystrokes or
                clipboard content from other applications.
              </p>
            </Section>

            <Section title="7. iCloud Sync">
              <p>
                If you enable iCloud sync, your snippet data is stored in your
                personal iCloud account. Use of iCloud is subject to Apple&apos;s Terms
                of Service. We are not responsible for data loss arising from iCloud
                service interruptions.
              </p>
            </Section>

            <Section title="8. In-App Purchases">
              <p>
                PasteVite may offer in-app purchases for premium features
                (&quot;Pro&quot; subscription or one-time purchases). All purchases are
                processed through the Apple App Store. All payments are subject
                to Apple&apos;s terms and conditions for in-app purchases.
              </p>
              <p>
                All purchases are final. Refunds are handled in accordance with
                Apple&apos;s refund policy. We are not responsible for purchases made
                without your authorisation.
              </p>
            </Section>

            <Section title="9. Privacy">
              <p>
                Your use of PasteVite is also governed by our{" "}
                <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference. Please review
                our Privacy Policy to understand our practices.
              </p>
            </Section>

            <Section title="10. Intellectual Property">
              <p>
                All intellectual property rights in PasteVite, including its name,
                logo, design, code, and features, are owned by us or our licensors.
                Nothing in these Terms grants you any rights to our intellectual
                property beyond the limited licence described above.
              </p>
            </Section>

            <Section title="11. Disclaimer of Warranties">
              <p>
                PasteVite is provided &quot;as is&quot; and &quot;as available&quot; without warranties
                of any kind, either express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular purpose,
                or non-infringement.
              </p>
              <p>
                We do not warrant that the App will be uninterrupted, error-free, or
                free of viruses or other harmful components. You use the App at your
                own risk.
              </p>
            </Section>

            <Section title="12. Limitation of Liability">
              <p>
                To the fullest extent permitted by applicable law, we shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of, or inability to use,
                PasteVite — including but not limited to loss of data, loss of profits,
                or business interruption — even if we have been advised of the
                possibility of such damages.
              </p>
              <p>
                Our total liability to you for any claims arising from these Terms
                or your use of the App shall not exceed the amount you paid us in
                the 12 months prior to the claim.
              </p>
            </Section>

            <Section title="13. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless PasteVite and its
                developers from and against any claims, damages, losses, liabilities,
                costs, and expenses arising from your use of the App or violation of
                these Terms.
              </p>
            </Section>

            <Section title="14. Termination">
              <p>
                We may suspend or terminate your access to PasteVite at any time
                without notice if you violate these Terms. You may stop using the App
                and delete it at any time. Upon termination, all licences granted to
                you will immediately cease.
              </p>
            </Section>

            <Section title="15. Changes to the App">
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect
                of PasteVite at any time without liability. We may also update the
                App from time to time, and some updates may be required to continue
                using the App.
              </p>
            </Section>

            <Section title="16. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the
                laws of the jurisdiction in which the developer is based, without
                regard to its conflict of law provisions. Any disputes shall be
                resolved in the courts of that jurisdiction.
              </p>
            </Section>

            <Section title="17. Severability">
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the minimum
                extent necessary, and the remaining provisions will remain in full
                force and effect.
              </p>
            </Section>

            <Section title="18. Contact">
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:support@pastevite.app" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    support@pastevite.app
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
