import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — PasteVite",
  description:
    "Read the PasteVite terms of service. EU and UK consumers retain all statutory rights.",
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

          {/* EU consumer notice */}
          <div className="mb-10 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-200/80 leading-relaxed">
            <strong className="text-indigo-300">EU / UK Consumers:</strong> Nothing in these
            Terms affects your mandatory statutory rights under applicable EU or UK consumer
            law, including the EU Consumer Rights Directive (2011/83/EU), the EU Digital
            Content Directive (2019/770/EU), and the EU Unfair Contract Terms Directive
            (93/13/EEC). Where any term conflicts with your statutory rights, your statutory
            rights prevail.
          </div>

          <div className="flex flex-col">
            <Section title="1. About Us">
              <p>
                PasteVite is a software application developed and published by the
                PasteVite team (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). For questions or correspondence,
                please contact us at{" "}
                <a
                  href="mailto:support@pastevite.app"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  support@pastevite.app
                </a>
                .
              </p>
            </Section>

            <Section title="2. Acceptance of Terms">
              <p>
                By downloading, installing, or using PasteVite (&quot;the App&quot;), you agree
                to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree,
                do not use the App.
              </p>
              <p>
                <strong>Changes to Terms:</strong> We may update these Terms at any
                time. We will provide at least <strong>30 days&apos; advance notice</strong>{" "}
                of material changes (e.g., via in-app notification or email where we
                have your contact details). If you continue to use the App after the
                effective date of the revised Terms, you accept the changes. If you do
                not accept the changes, you may stop using the App before the changes
                take effect.
              </p>
            </Section>

            <Section title="3. Description of the App">
              <p>
                PasteVite is an iOS productivity application that allows you to create,
                save, and organise text snippets as quick-access buttons. The App
                optionally includes an iOS keyboard extension to insert saved snippets
                into any iOS application without switching apps.
              </p>
              <p>
                PasteVite is provided as a <strong>digital service</strong> for the
                purposes of EU Directive 2019/770 on contracts for the supply of digital
                content and digital services.
              </p>
            </Section>

            <Section title="4. Eligibility">
              <p>
                You must be at least 13 years old to use PasteVite (or 16 years old in
                EU member states where the national age of digital consent is 16). If
                you are under 18, you must have the permission of a parent or legal
                guardian.
              </p>
            </Section>

            <Section title="5. Licence">
              <p>
                Subject to your compliance with these Terms, we grant you a limited,
                personal, non-exclusive, non-transferable, revocable licence to
                download and use PasteVite on Apple devices you own or control, for
                personal, non-commercial use.
              </p>
              <p>You may not:</p>
              <ul>
                <li>Copy, modify, or create derivative works of the App.</li>
                <li>Reverse engineer, decompile, or disassemble the App.</li>
                <li>Rent, lease, loan, sell, or sublicense the App.</li>
                <li>Use the App for any unlawful or fraudulent purpose.</li>
                <li>Remove any proprietary notices from the App.</li>
              </ul>
            </Section>

            <Section title="6. User Content">
              <p>
                You retain full ownership of all text snippets and content you create
                in the App (&quot;User Content&quot;). Because your User Content is stored
                locally on your device and in your personal iCloud account, we do not
                have access to it and do not claim any licence over it.
              </p>
              <p>You agree not to create or store User Content that:</p>
              <ul>
                <li>Is unlawful, defamatory, threatening, or harassing.</li>
                <li>Infringes any third-party intellectual property rights.</li>
                <li>Contains malware, viruses, or other harmful code.</li>
                <li>Violates any applicable law or regulation.</li>
              </ul>
            </Section>

            <Section title="7. Clipboard and Keyboard Extension">
              <p>
                The App writes to your clipboard only when you explicitly tap a snippet
                button. The keyboard extension inserts your saved snippets only. Neither
                the App nor the keyboard extension reads, logs, or transmits any text
                from other applications or keystrokes you type.
              </p>
            </Section>

            <Section title="8. iCloud Sync">
              <p>
                Optional iCloud sync stores your data in your personal Apple iCloud
                account. We do not have access to this data. Use of iCloud is governed
                by{" "}
                <a
                  href="https://www.apple.com/legal/internet-services/icloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Apple&apos;s iCloud Terms
                </a>
                . We are not liable for data loss caused by Apple or iCloud service
                interruptions.
              </p>
            </Section>

            <Section title="9. In-App Purchases and Right of Withdrawal">
              <p>
                PasteVite may offer optional premium features through in-app purchases
                or subscriptions (&quot;Pro&quot;). All transactions are processed exclusively
                by Apple through the App Store.
              </p>

              <SubSection title="9.1 Right of Withdrawal (EU / UK Consumers)">
                <p>
                  Under the EU Consumer Rights Directive (2011/83/EU) and equivalent UK
                  law, you normally have a <strong>14-day right of withdrawal</strong>{" "}
                  from the date of purchase, without giving any reason.
                </p>
                <p>
                  <strong>
                    Waiver of the right of withdrawal for digital content:
                  </strong>{" "}
                  If you request immediate access to digital content or a digital service
                  and acknowledge that you thereby lose your right of withdrawal, the
                  14-day period no longer applies once delivery has begun with your
                  consent. Apple&apos;s in-app purchase flow includes this acknowledgement.
                </p>
                <p>
                  If you have not yet received or accessed the digital content, you may
                  request a refund within 14 days via{" "}
                  <a
                    href="https://reportaproblem.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    reportaproblem.apple.com
                  </a>{" "}
                  or by contacting Apple Support, as Apple processes all in-app payments.
                  We will cooperate with any legitimate refund request directed to us.
                </p>
              </SubSection>

              <SubSection title="9.2 Subscriptions">
                <p>
                  Subscriptions auto-renew unless cancelled at least 24 hours before the
                  end of the current period. You can manage or cancel subscriptions in
                  your Apple ID Settings at any time.
                </p>
              </SubSection>
            </Section>

            <Section title="10. Conformity and Statutory Rights (EU / UK)">
              <p>
                <strong>[EU / UK]</strong> Under the EU Digital Content Directive
                (2019/770) and equivalent UK legislation, we are obliged to ensure that
                the App conforms to the contract — meaning it must be fit for purpose,
                as described, and of the expected quality. If the App is not in
                conformity, you have the right to have it remedied free of charge.
              </p>
              <p>
                If we cannot remedy the non-conformity within a reasonable time and
                without significant inconvenience to you, you may be entitled to a price
                reduction or termination of the contract. These rights are in addition to
                any other rights you have under applicable law.
              </p>
              <p>
                To raise a conformity issue, contact us at{" "}
                <a
                  href="mailto:support@pastevite.app"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  support@pastevite.app
                </a>
                .
              </p>
            </Section>

            <Section title="11. Privacy">
              <p>
                Your use of PasteVite is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference. The Privacy
                Policy explains how we handle personal data in compliance with GDPR and
                applicable privacy laws.
              </p>
            </Section>

            <Section title="12. Intellectual Property">
              <p>
                All intellectual property rights in PasteVite — including the name,
                logo, design, source code, and features — are owned by us or our
                licensors. Nothing in these Terms grants you any rights beyond the
                limited personal licence described in Section 5.
              </p>
            </Section>

            <Section title="13. Disclaimer of Warranties">
              <p>
                To the extent permitted by applicable law, PasteVite is provided
                &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
              </p>
              <p>
                <strong>[EU / UK Consumers]</strong> This disclaimer does not affect
                your mandatory statutory rights, including rights under the EU Digital
                Content Directive regarding conformity of digital services.
              </p>
            </Section>

            <Section title="14. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, we shall not be liable for any
                indirect, incidental, special, or consequential loss arising from your
                use of, or inability to use, PasteVite.
              </p>
              <p>
                <strong>[EU / UK Consumers]</strong> Nothing in this section limits
                our liability for:
              </p>
              <ul>
                <li>Death or personal injury caused by our negligence.</li>
                <li>Fraud or fraudulent misrepresentation.</li>
                <li>
                  Any liability that cannot be excluded or limited under applicable
                  consumer protection law.
                </li>
              </ul>
            </Section>

            <Section title="15. Termination">
              <p>
                We may suspend or terminate your access to PasteVite if you materially
                breach these Terms. We will give you reasonable notice before doing so,
                except where immediate action is required for legal or security reasons.
              </p>
              <p>
                You may stop using the App and delete it at any time. If you have an
                active paid subscription, termination does not automatically entitle you
                to a refund for the remaining subscription period, except as required by
                applicable law.
              </p>
            </Section>

            <Section title="16. Changes to the App">
              <p>
                We may update or modify the App over time. Where an update materially
                reduces the App&apos;s functionality, we will notify you in advance and you
                may terminate the contract in accordance with applicable law.
              </p>
            </Section>

            <Section title="17. Governing Law and Jurisdiction">
              <p>
                These Terms are governed by the laws of the jurisdiction in which
                PasteVite is based, without regard to conflict of law rules.
              </p>
              <p>
                <strong>[EU / UK Consumers]</strong> This choice of law does not
                deprive you of the protection afforded by mandatory provisions of the
                law of your country of habitual residence. You may bring proceedings in
                the courts of the country where you live, or in our courts.
              </p>
            </Section>

            <Section title="18. Online Dispute Resolution (EU)">
              <p>
                <strong>[EU Consumers]</strong> The European Commission provides an
                Online Dispute Resolution (ODR) platform for resolving disputes between
                consumers and businesses:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Our email for ODR purposes is{" "}
                <a
                  href="mailto:support@pastevite.app"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  support@pastevite.app
                </a>
                . We are not obligated to use an alternative dispute resolution (ADR)
                body, but we are committed to resolving complaints directly and
                promptly.
              </p>
            </Section>

            <Section title="19. Severability">
              <p>
                If any provision of these Terms is found to be unenforceable or invalid,
                that provision will be modified to the minimum extent necessary to make
                it enforceable, and the remaining provisions will continue in full force.
              </p>
            </Section>

            <Section title="20. Contact">
              <p>
                For questions about these Terms, support requests, or complaints:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:support@pastevite.app"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    support@pastevite.app
                  </a>
                </li>
              </ul>
              <p>
                We aim to acknowledge all complaints within 5 business days and provide
                a full response within 30 days.
              </p>
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
    <div className="mt-3 pl-4 border-l border-white/5">
      <h3 className="text-sm font-semibold text-white/75 mb-2">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
