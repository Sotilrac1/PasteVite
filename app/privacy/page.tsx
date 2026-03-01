import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — PasteVite",
  description:
    "Read the PasteVite privacy policy. Learn how we handle your data in compliance with GDPR and applicable privacy laws.",
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

          {/* GDPR info banner */}
          <div className="mb-10 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-200/80 leading-relaxed">
            This policy complies with the EU General Data Protection Regulation (GDPR), the
            UK GDPR, and other applicable privacy laws. If you are located in the European
            Economic Area (EEA), United Kingdom, or Switzerland, the provisions marked
            <span className="font-semibold text-indigo-300"> [GDPR]</span> apply to you in
            addition to the general provisions.
          </div>

          <div className="prose-custom">
            <Section title="1. Who We Are (Data Controller)">
              <p>
                PasteVite (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is the data controller responsible for
                your personal data collected through the PasteVite iOS application and this
                website.
              </p>
              <p>
                <strong>Contact:</strong>{" "}
                <a href="mailto:privacy@pastevite.app" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  privacy@pastevite.app
                </a>
              </p>
              <p>
                We do not currently have a designated Data Protection Officer (DPO), as we
                are a small-scale data processor. You may direct any privacy enquiries to
                the contact above.
              </p>
            </Section>

            <Section title="2. What Data We Collect and Why">
              <p>
                We only collect data that is strictly necessary. The table below sets out
                each category of data, the purpose, and the legal basis under GDPR Article 6.
              </p>

              <SubSection title="2.1 Snippet Content (User-Created Data)">
                <p>
                  Text snippets, labels, and collections you create in the app are stored
                  entirely on your device (and in your personal iCloud account if sync is
                  enabled). We do not have access to this content.
                </p>
                <p>
                  <strong>[GDPR]</strong> Legal basis:{" "}
                  <strong>Performance of a contract</strong> (Art. 6(1)(b)) — necessary to
                  deliver the core functionality of the App.
                </p>
              </SubSection>

              <SubSection title="2.2 Support Communications">
                <p>
                  If you contact us by email, we collect your email address and any
                  information you include in your message. We use this solely to respond
                  to your enquiry.
                </p>
                <p>
                  <strong>[GDPR]</strong> Legal basis:{" "}
                  <strong>Legitimate interests</strong> (Art. 6(1)(f)) — responding to
                  user enquiries and maintaining quality support.
                </p>
              </SubSection>

              <SubSection title="2.3 Crash Reports and Diagnostics">
                <p>
                  If the App crashes, anonymised diagnostic data (iOS version, device
                  model, crash stack trace) may be collected via Apple&apos;s built-in
                  crash reporting. This data does not contain any of your personal
                  snippets or identifiable information.
                </p>
                <p>
                  <strong>[GDPR]</strong> Legal basis:{" "}
                  <strong>Legitimate interests</strong> (Art. 6(1)(f)) — improving
                  app stability and fixing bugs. This processing does not override your
                  interests, as no personal data is involved.
                </p>
              </SubSection>

              <SubSection title="2.4 Analytics (Website Only)">
                <p>
                  This website may use privacy-respecting, anonymised analytics (e.g.,
                  aggregate page views) to understand how visitors discover PasteVite.
                  No cookies that track individuals are set without your consent.
                </p>
                <p>
                  <strong>[GDPR]</strong> Legal basis:{" "}
                  <strong>Consent</strong> (Art. 6(1)(a)) — where cookies or
                  tracking technologies are used on this website, we will request your
                  consent before doing so.
                </p>
              </SubSection>
            </Section>

            <Section title="3. Keyboard Extension">
              <p>
                The PasteVite keyboard extension reads only the snippet data you have
                saved within the app.{" "}
                <strong>
                  It does not log, store, or transmit any keystrokes or text entered in
                  other applications.
                </strong>{" "}
                We have no access to anything you type on your iOS device.
              </p>
              <p>
                The keyboard extension operates with &quot;Allow Full Access&quot; disabled by
                default. This means it is technically prevented from sending any data
                over the network. If you choose to enable full access, no keystroke
                data is ever collected or transmitted.
              </p>
            </Section>

            <Section title="4. Clipboard Access">
              <p>
                PasteVite writes to your clipboard only when you explicitly tap a
                snippet button. The App never reads clipboard contents from other
                apps, monitors your clipboard in the background, or transmits clipboard
                data to any server.
              </p>
            </Section>

            <Section title="5. iCloud Sync and Data Processors">
              <p>
                If you enable iCloud sync, your snippet data is stored in your personal
                iCloud account under your Apple ID. Apple acts as a data processor on
                your behalf. We do not have access to your iCloud-stored data.
              </p>
              <p>
                <strong>[GDPR] International transfers:</strong> Apple may store and
                process iCloud data on servers located outside the EEA, including in
                the United States. Apple relies on Standard Contractual Clauses (SCCs)
                and other safeguards approved by the European Commission for such
                transfers. See{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Apple&apos;s Privacy Policy
                </a>{" "}
                for details.
              </p>
              <p>
                We do not transfer your personal data to any other country or
                international organisation.
              </p>
            </Section>

            <Section title="6. Data Retention">
              <p>We retain personal data only for as long as necessary:</p>
              <ul>
                <li>
                  <strong>Snippet data:</strong> Stored on your device and deleted when
                  you delete the app. iCloud copies are deleted when you remove the app
                  data from iCloud.
                </li>
                <li>
                  <strong>Support emails:</strong> Retained for up to 2 years after your
                  last communication, then permanently deleted.
                </li>
                <li>
                  <strong>Crash reports:</strong> Anonymised data is retained for up to
                  12 months for debugging purposes.
                </li>
              </ul>
            </Section>

            <Section title="7. Data Sharing">
              <p>
                We do not sell, rent, or trade your personal data to any third party.
                We do not share personal data with advertisers.
              </p>
              <p>
                We may disclose personal data only in the following limited
                circumstances:
              </p>
              <ul>
                <li>
                  <strong>Apple Inc.</strong> — as our App Store and iCloud provider
                  (data processor), subject to Apple&apos;s Data Processing Addendum.
                </li>
                <li>
                  <strong>Legal obligations:</strong> Where we are required by law, court
                  order, or regulatory authority to disclose information.
                </li>
                <li>
                  <strong>Vital interests:</strong> Where necessary to protect the vital
                  interests of any person.
                </li>
              </ul>
            </Section>

            <Section title="8. Your Rights Under GDPR">
              <p>
                <strong>[GDPR]</strong> If you are located in the EEA, UK, or
                Switzerland, you have the following rights regarding your personal data:
              </p>
              <ul>
                <li>
                  <strong>Right of access (Art. 15):</strong> Request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to rectification (Art. 16):</strong> Request correction
                  of inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to erasure (Art. 17):</strong> Request deletion of your
                  personal data (&quot;right to be forgotten&quot;), where there is no
                  overriding legitimate reason to retain it.
                </li>
                <li>
                  <strong>Right to restriction (Art. 18):</strong> Request that we limit
                  the processing of your data in certain circumstances.
                </li>
                <li>
                  <strong>Right to data portability (Art. 20):</strong> Receive your
                  personal data in a structured, machine-readable format where processing
                  is based on consent or contract.
                </li>
                <li>
                  <strong>Right to object (Art. 21):</strong> Object to processing based
                  on legitimate interests. We will stop unless we demonstrate compelling
                  legitimate grounds.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where processing is based
                  on your consent, you may withdraw it at any time without affecting the
                  lawfulness of prior processing.
                </li>
                <li>
                  <strong>Rights re: automated decision-making (Art. 22):</strong> We do
                  not use automated decision-making or profiling that produces legal or
                  similarly significant effects.
                </li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:privacy@pastevite.app"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  privacy@pastevite.app
                </a>
                . We will respond within <strong>30 days</strong>. We may need to verify
                your identity before processing your request.
              </p>
              <p>
                <strong>
                  Right to lodge a complaint with a supervisory authority:
                </strong>{" "}
                You have the right to lodge a complaint with your local data protection
                authority if you believe we have not handled your data lawfully. A list
                of EU supervisory authorities is available at{" "}
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  edpb.europa.eu
                </a>
                . UK residents may contact the{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  ICO
                </a>
                . We encourage you to contact us first so we can resolve any concern
                directly.
              </p>
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                PasteVite is not directed to children. The minimum age to use the App
                is 13 years (or 16 years in EU member states where the national age of
                digital consent is higher than 13). We do not knowingly collect personal
                data from children below the applicable minimum age.
              </p>
              <p>
                If you believe a child below the minimum age has provided us with personal
                data, please contact us at{" "}
                <a
                  href="mailto:privacy@pastevite.app"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  privacy@pastevite.app
                </a>{" "}
                and we will delete it promptly.
              </p>
            </Section>

            <Section title="10. Security">
              <p>
                We implement appropriate technical and organisational measures (TOMs) to
                protect your personal data against accidental or unlawful destruction,
                loss, alteration, unauthorised disclosure, or access. These include
                encryption of data in transit, access controls, and regular security
                reviews.
              </p>
              <p>
                In the event of a personal data breach that is likely to result in a
                high risk to your rights and freedoms, we will notify you without undue
                delay as required by GDPR Article 34.
              </p>
            </Section>

            <Section title="11. Cookies and Tracking Technologies">
              <p>
                The PasteVite iOS app does not use cookies. This website may use
                strictly necessary cookies required for it to function. Any non-essential
                cookies (e.g., for analytics) will only be set with your explicit consent,
                in accordance with the EU ePrivacy Directive and GDPR.
              </p>
            </Section>

            <Section title="12. Third-Party Services">
              <p>We use the following third-party services:</p>
              <ul>
                <li>
                  <strong>Apple iCloud</strong> — optional data sync. Governed by{" "}
                  <a
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Apple&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Apple App Store</strong> — app distribution and in-app
                  purchases, governed by Apple&apos;s Privacy Policy.
                </li>
                <li>
                  <strong>Vercel</strong> — website hosting. Vercel may collect
                  anonymised server logs. See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Vercel&apos;s Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </Section>

            <Section title="13. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. For material
                changes, we will provide at least 30 days&apos; notice by updating the
                &quot;Last updated&quot; date and, where feasible, by in-app notification.
                Continued use of the App after the effective date of changes constitutes
                your acknowledgement of the updated policy.
              </p>
            </Section>

            <Section title="14. Contact Us">
              <p>
                For any privacy-related questions, to exercise your rights, or to raise
                a concern:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:privacy@pastevite.app"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    privacy@pastevite.app
                  </a>
                </li>
              </ul>
              <p>
                We aim to respond to all requests within 30 days. If your request is
                complex or you have made multiple requests, we may extend this period by
                a further two months, in accordance with GDPR Article 12(3).
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
    <div className="mt-3">
      <h3 className="text-sm font-semibold text-white/75 mb-2">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
