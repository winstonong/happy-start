import { createFileRoute, Link } from "@tanstack/react-router";

const C = {
  primary: "#003d9b",
  surface: "#f7f9fb",
  surfaceLow: "#f2f4f6",
  surfaceHigh: "#e6e8ea",
  onSurface: "#191c1e",
  onSurfaceVariant: "#434654",
};

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Virtual Assistants Philippines" },
      { name: "description", content: "Privacy Policy for Virtual Assistants Philippines. Learn how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy — Virtual Assistants Philippines" },
      { property: "og:description", content: "Privacy Policy for Virtual Assistants Philippines." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-12 hover:underline" style={{ color: C.primary }}>
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-black tracking-tight mb-2" style={{ color: C.primary }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: C.onSurfaceVariant }}>Last updated: May 6, 2026</p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: C.onSurfaceVariant }}>
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>1. Introduction</h2>
            <p>Virtual Assistants Philippines ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website virtualassistantphilippines.io and use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title provided through our contact forms or when you engage our services.</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and other analytical data collected automatically.</li>
              <li><strong>Cookies &amp; Tracking:</strong> We use cookies and similar technologies to enhance your experience and gather usage analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our services</li>
              <li>To communicate with you, including responding to inquiries and sending service-related notifications</li>
              <li>To improve our website and services based on usage analytics</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To send marketing communications (only with your consent; you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>4. Information Sharing &amp; Disclosure</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website, conducting business, or providing services to you.</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>6. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>7. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us using the details below.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-3 font-semibold" style={{ color: C.onSurface }}>Virtual Assistants Philippines</p>
            <p>Email: privacy@virtualassistantphilippines.io</p>
            <p>Website: virtualassistantphilippines.io</p>
          </section>
        </div>
      </div>
    </div>
  );
}
