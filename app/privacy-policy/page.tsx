import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Cellable",
  description: "Learn how Cellable collects, uses, and protects your personal information.",
};

const EFFECTIVE_DATE = "May 20, 2026";
const CONTACT_EMAIL = "privacy@cellable.app";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 bg-sky-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky-300 text-sm font-medium mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-sky-200 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-8 sm:p-12 space-y-10">

          <Section title="1. Introduction">
            <p>
              Welcome to Cellable (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
              protecting your personal information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use
              our mobile application and related services (collectively, the &quot;Service&quot;).
            </p>
            <p className="mt-3">
              Please read this policy carefully. If you disagree with its terms, please discontinue
              use of the Service.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p className="mb-4">We may collect the following types of information:</p>
            <SubHeading>Information You Provide</SubHeading>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sky-700">
              <li>Account registration details (name, email address, password)</li>
              <li>Profile information you choose to add</li>
              <li>Communications you send us (e.g., support requests)</li>
            </ul>
            <SubHeading>Information Collected Automatically</SubHeading>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sky-700">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (features accessed, time spent, interactions within the app)</li>
              <li>Log data (IP address, access times, app crashes, and performance data)</li>
            </ul>
            <SubHeading>Information from Third Parties</SubHeading>
            <p>
              If you connect third-party accounts or services to Cellable, we may receive
              information from those services in accordance with their privacy policies.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sky-700">
              <li>Provide, operate, and maintain the Service</li>
              <li>Create and manage your account</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you service-related notices and updates</li>
              <li>Monitor and analyse usage to improve the Service</li>
              <li>Detect and prevent fraudulent or unauthorised activity</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties.
            </p>
          </Section>

          <Section title="4. Sharing Your Information">
            <p className="mb-4">
              We may share your information in the following limited circumstances:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sky-700">
              <li>
                <strong className="text-sky-900">Service Providers:</strong> Trusted vendors who
                assist us in operating the Service (e.g., cloud hosting, analytics), subject to
                confidentiality obligations.
              </li>
              <li>
                <strong className="text-sky-900">Legal Requirements:</strong> When required by
                applicable law, regulation, legal process, or governmental request.
              </li>
              <li>
                <strong className="text-sky-900">Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets, your information may be transferred as a
                business asset.
              </li>
              <li>
                <strong className="text-sky-900">Safety:</strong> To protect the rights, property,
                or safety of Cellable, our users, or the public.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal information for as long as your account is active or as
              needed to provide the Service. You may request deletion of your account and
              associated data at any time by contacting us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-600 hover:text-sky-800 underline underline-offset-2 cursor-pointer">
                {CONTACT_EMAIL}
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We implement industry-standard security measures to protect your information,
              including encryption in transit (TLS) and at rest. However, no method of
              transmission over the internet or electronic storage is 100% secure. We encourage
              you to use a strong, unique password and keep your login credentials confidential.
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              The Service is not directed to children under the age of 13 (or the applicable
              age of digital consent in your jurisdiction). We do not knowingly collect personal
              information from children. If you believe we have inadvertently collected such
              information, please contact us immediately so we can delete it.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p className="mb-4">
              Depending on your location, you may have rights regarding your personal data,
              including:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-sky-700">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to correct inaccurate or incomplete data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to object to or restrict processing</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-600 hover:text-sky-800 underline underline-offset-2 cursor-pointer">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>
              The Service may contain links to third-party websites or services. We are not
              responsible for the privacy practices of those third parties and encourage you to
              review their privacy policies.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              material changes by updating the effective date at the top of this page or by
              sending a notice through the app. Your continued use of the Service after changes
              are posted constitutes your acceptance of the revised policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p className="mb-2">
              If you have questions or concerns about this Privacy Policy or your data, please
              contact us:
            </p>
            <div className="bg-sky-50 rounded-xl p-5 space-y-1 text-sm text-sky-700">
              <p><strong className="text-sky-900">Cellable</strong></p>
              <p>
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-600 hover:text-sky-800 underline underline-offset-2 cursor-pointer">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                Or use our{" "}
                <a href="/contact" className="text-sky-600 hover:text-sky-800 underline underline-offset-2 cursor-pointer">
                  contact form
                </a>
                .
              </p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-sky-900 mb-4 pb-2 border-b border-sky-100">
        {title}
      </h2>
      <div className="text-sky-700 leading-relaxed">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-sky-800 mt-5 mb-2">{children}</h3>;
}
