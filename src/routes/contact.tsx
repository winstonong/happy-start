import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

const C = {
  primary: "#003d9b",
  primaryContainer: "#0052cc",
  surface: "#f7f9fb",
  surfaceLow: "#f2f4f6",
  surfaceHigh: "#e6e8ea",
  onSurface: "#191c1e",
  onSurfaceVariant: "#434654",
};

const gradient = `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryContainer} 100%)`;

function HubSpotForm({ containerId = "hubspot-contact" }: { containerId?: string }) {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const el = document.getElementById(containerId);
    if (!el) return;

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.onload = () => {
      (window as any).hbspt?.forms?.create({
        portalId: "8513837",
        formId: "e84c4e9d-49d9-4c00-8607-66c9b1e89067",
        region: "na1",
        target: `#${containerId}`,
        onFormSubmitted: () => {
          (window as any).dataLayer?.push({ event: "hubspot_form_submitted", form_location: containerId });
        },
      });

      if (!document.getElementById("chilipiper-concierge")) {
        const cpScript = document.createElement("script");
        cpScript.id = "chilipiper-concierge";
        cpScript.src = "https://bruntwork.chilipiper.com/concierge-js/cjs/concierge.js";
        cpScript.crossOrigin = "anonymous";
        cpScript.onload = () => {
          (window as any).ChiliPiper?.deploy("bruntwork", "inbound-router-company-size-test", { formType: "Hubspot" });
        };
        document.body.appendChild(cpScript);
      }
    };
    document.head.appendChild(script);
  }, [containerId]);

  return <div id={containerId} />;
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Virtual Assistants Philippines" },
      { name: "description", content: "Get in touch with Virtual Assistants Philippines. Tell us your hiring needs and get a shortlist of candidates within 48 hours." },
      { property: "og:title", content: "Contact Us — Virtual Assistants Philippines" },
      { property: "og:description", content: "Reach out to hire top-tier remote staff from the Philippines." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: "100vh" }}>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: gradient }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-10 hover:underline text-white/70 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Tell us your hiring needs and get a shortlist of pre-vetted candidates within 48 hours.
          </p>
        </div>
      </section>

      {/* ─── Form + Info ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-black tracking-tight mb-6" style={{ color: C.onSurface }}>
                  Why Companies Choose Us
                </h2>
                <ul className="space-y-4">
                  {[
                    "Top 1% vetted Philippine talent",
                    "Full-time staff from $4/hr",
                    "Matched in days, not months",
                    "7-day risk-free trial",
                    "No long-term contracts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: C.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm font-medium leading-relaxed" style={{ color: C.onSurfaceVariant }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="text-lg font-bold" style={{ color: C.onSurface }}>Other Ways to Reach Us</h3>

                <a href="mailto:hello@virtualassistantphilippines.io" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: gradient }}>
                    <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium group-hover:underline" style={{ color: C.onSurfaceVariant }}>hello@virtualassistantphilippines.io</span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: gradient }}>
                    <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color: C.onSurfaceVariant }}>Manila, Philippines · Serving Globally</span>
                </div>
              </div>
            </div>

            {/* Right — HubSpot form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-3xl" style={{ backgroundColor: "white", boxShadow: "0 20px 40px rgba(11, 20, 55, 0.06)" }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: C.onSurface }}>Book Your Strategy Session</h3>
                <p className="text-sm font-medium mb-8" style={{ color: C.onSurfaceVariant }}>
                  Fill in the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <HubSpotForm containerId="hubspot-contact-page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
