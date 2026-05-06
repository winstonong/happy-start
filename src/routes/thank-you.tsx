import { createFileRoute, Link } from "@tanstack/react-router";

const C = {
  primary: "#003d9b",
  primaryContainer: "#0052cc",
  surface: "#f7f9fb",
  onSurface: "#191c1e",
  onSurfaceVariant: "#434654",
};

const gradient = `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryContainer} 100%)`;

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Virtual Assistants Philippines" },
      { name: "description", content: "Thank you for reaching out to Virtual Assistants Philippines. We'll be in touch within 24 hours." },
      { property: "og:title", content: "Thank You — Virtual Assistants Philippines" },
      { property: "og:description", content: "We've received your inquiry and will get back to you shortly." },
      { name: "twitter:title", content: "Thank You — Virtual Assistants Philippines" },
      { name: "twitter:description", content: "We've received your inquiry and will get back to you shortly." },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: "100vh" }} className="flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 py-28 text-center">
        {/* Checkmark icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: gradient }}
        >
          <svg width={40} height={40} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: C.onSurface }}>
          Thank You!
        </h1>
        <p className="text-lg leading-relaxed font-medium mb-4" style={{ color: C.onSurfaceVariant }}>
          We&apos;ve received your inquiry and a member of our team will be in touch within <strong style={{ color: C.onSurface }}>24 hours</strong>.
        </p>
        <p className="text-base leading-relaxed font-medium mb-10" style={{ color: C.onSurfaceVariant }}>
          In the meantime, feel free to explore our services or learn more about how we can help scale your team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: gradient }}
          >
            Back to Home
            <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:-translate-y-1"
            style={{ color: C.primary, border: `2px solid ${C.primary}` }}
          >
            View Careers
          </Link>
        </div>
      </div>
    </div>
  );
}
