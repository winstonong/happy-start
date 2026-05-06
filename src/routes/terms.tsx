import { createFileRoute, Link } from "@tanstack/react-router";

const C = {
  primary: "#003d9b",
  surface: "#f7f9fb",
  surfaceLow: "#f2f4f6",
  surfaceHigh: "#e6e8ea",
  onSurface: "#191c1e",
  onSurfaceVariant: "#434654",
};

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Virtual Assistants Philippines" },
      { name: "description", content: "Terms and Conditions for Virtual Assistants Philippines. Read our terms of service before using our website and services." },
      { property: "og:title", content: "Terms & Conditions — Virtual Assistants Philippines" },
      { property: "og:description", content: "Terms and Conditions for Virtual Assistants Philippines." },
      { name: "twitter:title", content: "Terms & Conditions — Virtual Assistants Philippines" },
      { name: "twitter:description", content: "Read our terms of service before using our website and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-12 hover:underline" style={{ color: C.primary }}>
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-black tracking-tight mb-2" style={{ color: C.primary }}>Terms &amp; Conditions</h1>
        <p className="text-sm mb-12" style={{ color: C.onSurfaceVariant }}>Last updated: May 6, 2026</p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: C.onSurfaceVariant }}>
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>1. Acceptance of Terms</h2>
            <p>By accessing and using the website virtualassistantphilippines.io and the services provided by Virtual Assistants Philippines ("we," "us," or "our"), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>2. Services</h2>
            <p>Virtual Assistants Philippines provides remote staffing and virtual assistant services. We connect businesses with pre-vetted, professional virtual assistants based in the Philippines. The specific scope, deliverables, and pricing of services will be outlined in a separate service agreement between you and Virtual Assistants Philippines.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>3. User Obligations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information when using our contact forms or engaging our services.</li>
              <li>You agree not to use our website for any unlawful or prohibited purpose.</li>
              <li>You are responsible for maintaining the confidentiality of any account credentials.</li>
              <li>You agree not to reproduce, duplicate, or exploit any portion of the website without express written permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>4. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, images, and software — is the property of Virtual Assistants Philippines or its licensors and is protected by applicable intellectual property laws. You may not use, reproduce, or distribute any content without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>5. Payment Terms</h2>
            <p>Payment terms, rates, and billing cycles for our staffing services will be specified in your individual service agreement. Late payments may incur additional fees as outlined in that agreement. We reserve the right to suspend services for overdue accounts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>6. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of any proprietary or sensitive information exchanged during the course of the engagement. This obligation survives termination of the service agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Virtual Assistants Philippines shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability shall not exceed the fees paid by you in the twelve (12) months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>8. Disclaimer of Warranties</h2>
            <p>Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>9. Termination</h2>
            <p>We reserve the right to terminate or suspend your access to our website or services at our sole discretion, without notice, for conduct that we believe violates these Terms &amp; Conditions or is harmful to other users or our business interests.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>10. Governing Law</h2>
            <p>These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of the Philippines.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>11. Changes to These Terms</h2>
            <p>We may revise these Terms &amp; Conditions at any time by updating this page. Your continued use of the website after any changes constitutes acceptance of the new terms. We encourage you to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>12. Contact Us</h2>
            <p>If you have any questions about these Terms &amp; Conditions, please contact us at:</p>
            <p className="mt-3 font-semibold" style={{ color: C.onSurface }}>Virtual Assistants Philippines</p>
            <p>Email: legal@virtualassistantphilippines.io</p>
            <p>Website: virtualassistantphilippines.io</p>
          </section>
        </div>
      </div>
    </div>
  );
}
