import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactElement } from "react";

/* ─── Design Tokens ─── */
const C = {
  primary: "#003d9b",
  primaryContainer: "#0052cc",
  surface: "#f7f9fb",
  surfaceLow: "#f2f4f6",
  surfaceHigh: "#e6e8ea",
  surfaceHighest: "#e0e3e5",
  onSurface: "#191c1e",
  onSurfaceVariant: "#434654",
  outlineVariant: "rgba(195, 198, 214, 0.2)",
};

const gradient = `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryContainer} 100%)`;
const ambientShadow = "0 20px 40px rgba(11, 20, 55, 0.06)";

/* ─── Data ─── */
const services = [
  { title: "Executive Admin", description: "Email management, scheduling, travel planning, and operational workflows that keep your business running.", icon: "shield" },
  { title: "Finance & Billing", description: "Bookkeeping, accounts payable/receivable, payroll processing, and financial reporting.", icon: "wallet" },
  { title: "Sales & Lead Gen", description: "Cold calling, LinkedIn outreach, CRM management, and pipeline building to fill your funnel.", icon: "rocket" },
  { title: "Customer Support", description: "24/7 chat and email support, ticket management, and personalized client success.", icon: "headset" },
];

const comparisonData = [
  { feature: "Hourly Rate", local: "$35–$65", freelance: "$10–$25", us: "$4–$8" },
  { feature: "Talent Quality", local: "Mixed", freelance: "Hit or Miss", us: "Top 1% Vetted" },
  { feature: "Management Overhead", local: "High (Benefits/Tax)", freelance: "Moderate", us: "Managed for You" },
  { feature: "Reliability", local: "Standard", freelance: "Low (Ghosting Risk)", us: "Guaranteed" },
  { feature: "Replacement Guarantee", local: "None", freelance: "None", us: "Free, Always" },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We analyze your bottlenecks and define the exact skill set required for your first remote hire." },
  { num: "02", title: "Match & Interview", desc: "We present 2–3 hand-picked candidates. You interview the best and choose your perfect fit." },
  { num: "03", title: "Launch & Support", desc: "Your VA starts with guided onboarding. We handle payroll, benefits, and ongoing management." },
];

const guarantees = [
  { title: "30-Day Satisfaction", desc: "Not happy in the first month? We'll credit your full invoice.", icon: "shield-check" },
  { title: "Free Replacement", desc: "If your VA leaves or isn't a fit, we replace them at zero cost.", icon: "refresh" },
  { title: "No Lock-In", desc: "Cancel anytime with 14 days notice. Flexible for your growth.", icon: "lock-open" },
  { title: "Transparent Billing", desc: "Flat-rate billing with zero hidden fees. What you see is what you pay.", icon: "receipt" },
];

const talents = [
  { name: "Maria Santos", role: "Senior Executive Assistant", exp: "6 yrs exp.", img: "/images/hero-v3.jpg" },
  { name: "Sofia Reyes", role: "Finance & Bookkeeping Lead", exp: "8 yrs exp.", img: "/images/hero-v1.jpg" },
  { name: "Angela Cruz", role: "Sales & Growth Specialist", exp: "5 yrs exp.", img: "/images/admin.jpg" },
];

const faqs = [
  { q: "How much does a virtual assistant cost?", a: "Our VAs range from $4–$8 per hour depending on role complexity. This is an all-in rate — no hidden fees, no benefits overhead, no recruiting costs." },
  { q: "How fast can I get started?", a: "Most clients are matched within 3–7 days. Your VA is pre-trained on your tools before day one." },
  { q: "What if my VA isn't a good fit?", a: "We offer a 30-day satisfaction guarantee and free replacement at any time — no questions asked." },
  { q: "What tasks can a VA handle?", a: "Admin, email, scheduling, data entry, CRM, research, lead gen, customer service, social media, bookkeeping, and more." },
  { q: "Is there a minimum commitment?", a: "No long-term contracts. Month-to-month flexibility with 14 days notice to cancel." },
];

/* ─── Icons ─── */
const ShieldIcon = () => (
  <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const WalletIcon = () => (
  <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 110-6h5.25A2.25 2.25 0 0121 6v6zm-3 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-12.75 0h.008v.008H5.25V12z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15A2.25 2.25 0 0121.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75z" />
  </svg>
);
const RocketIcon = () => (
  <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);
const HeadsetIcon = () => (
  <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

const serviceIcons: Record<string, () => ReactElement> = {
  shield: ShieldIcon, wallet: WalletIcon, rocket: RocketIcon, headset: HeadsetIcon,
};

const StarIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const pressFeatures = [
  { logo: "/images/logos/forbes.png", name: "Forbes", quote: "Leading The Remote Outsourcing Revolution Targeting $180m and 10,000 Agents" },
  { logo: "/images/logos/fastcompany.png", name: "Fast Company", quote: "Reimagining Global Employment With 6,000 New Hires Planned" },
  { logo: "/images/logos/variety.png", name: "Variety", quote: "How VA Philippines Became A Global Outsourcing Leader" },
  { logo: "/images/logos/vanityfair.png", name: "Vanity Fair", quote: "VA Philippines\u2019s Aggressive Expansion Strategy Now In Hyperdrive" },
  { logo: "/images/logos/dailymail.png", name: "Daily Mail", quote: "VA Philippines\u2019s Rapid Rise as the Go-To Virtual Assistant Powerhouse" },
  { logo: "/images/logos/lofficiel.png", name: "L\u2019Officiel", quote: "VA Philippines Bets Big On AI-Powered Remote-Only Global Recruitment" },
];

/* ─── HubSpot Form ─── */

/* ─── FAQ Accordion ─── */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24" style={{ backgroundColor: C.surface }}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black tracking-tight text-center mb-14" style={{ color: C.onSurface }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", border: `1px solid ${C.outlineVariant}`, boxShadow: open === i ? ambientShadow : "none" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left font-bold transition-colors hover:bg-gray-50/50"
                style={{ color: C.onSurface }}
              >
                <span>{faq.q}</span>
                <svg className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} style={{ color: C.onSurfaceVariant }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-7 pb-5 leading-relaxed font-medium" style={{ color: C.onSurfaceVariant }}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HubSpot Client Component ─── */
function HubSpotForm({ containerId = "hubspot-form" }: { containerId?: string }) {
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
    };
    document.head.appendChild(script);
  }, [containerId]);

  return <div id={containerId} />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virtual Assistants Philippines — Hire Remote Staff from $4/hr" },
      { name: "description", content: "Full-time remote staff from $4-$8/hr. Hire in days, not months. Cancel anytime." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
        <img
          src="/images/hero-v8.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1437]/75 via-[#0B1437]/50 to-[#0B1437]/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-6 bg-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#00A86B" }} />
              <span className="text-sm font-bold uppercase tracking-wider text-blue-200">Top 1% Philippine Talent</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.08] mb-6 tracking-tighter text-white">
              Full-time remote staff from <span className="text-blue-300">$4/hr</span>
            </h1>

            <p className="text-xl leading-relaxed mb-8 max-w-xl font-medium text-blue-100/80">
              Scale your business with high-level executive support, precision finance, and expert sales assistance from elite Philippine virtual professionals.
            </p>

            <div className="flex flex-wrap items-center gap-10 mb-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">3,000+</span>
                <span className="text-sm font-medium text-blue-200/70">Businesses Served</span>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="flex flex-col">
                <div className="flex items-center mb-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} />)}
                </div>
                <span className="text-sm font-medium text-blue-200/70">4.9/5 Rating (Clutch / Trustpilot)</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 animate-fadeInUp scroll-mt-20" id="hubspot-v8-hero-anchor">
            <div className="p-8 lg:p-10 rounded-[2.5rem] bg-white/95 backdrop-blur-md" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: C.onSurface }}>Book Your Strategy Session</h3>
              <p className="mb-6 font-medium" style={{ color: C.onSurfaceVariant }}>Tell us your hiring needs and get a shortlist of candidates within 48 hours.</p>
              <HubSpotForm containerId="hubspot-v8-hero" />
              <p className="text-center text-xs font-medium mt-4" style={{ color: C.onSurfaceVariant }}>
                Risk-free. 7 Day New Hire Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ AS SEEN IN ════════ */}
      <section className="py-20" style={{ backgroundColor: C.surface }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: C.onSurface }}>
              Leading Website For Outsourced Talent
            </h2>
          </div>
          <p className="text-center mb-10">
            <a href="#press" className="font-medium" style={{ color: C.primary }}>Read about us</a>{" "}
            <span style={{ color: C.onSurfaceVariant }}>below.</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border rounded-2xl overflow-hidden" style={{ borderColor: C.outlineVariant }}>
            {pressFeatures.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-start p-6 text-center"
                style={{ borderRight: i < pressFeatures.length - 1 ? `1px solid ${C.outlineVariant}` : "none" }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="h-10 w-auto object-contain mb-5 grayscale"
                />
                <p className="text-sm leading-relaxed font-medium" style={{ color: C.onSurfaceVariant }}>
                  &lsquo;{p.quote}&rsquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-lg md:text-xl font-bold tracking-tight" style={{ color: C.onSurface }}>
              4.9 Stars from +2,500 Reviews across{" "}
              <span style={{ color: C.primary }}>Trustpilot</span>,{" "}
              <span style={{ color: C.primary }}>Google Reviews</span> and{" "}
              <span style={{ color: C.primary }}>Glassdoor</span>
            </p>
            <div className="flex justify-center gap-1 mt-3 text-amber-400">
              {[...Array(4)].map((_, i) => <StarIcon key={i} size={28} />)}
              <svg width={28} height={28} viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="py-24" style={{ backgroundColor: C.surfaceLow }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: C.onSurface }}>
              Dedicated Support for Every Department
            </h2>
            <p className="max-w-2xl mx-auto font-medium" style={{ color: C.onSurfaceVariant }}>
              We don&apos;t just provide &ldquo;VAs&rdquo; — we provide skilled remote staff trained for specific business functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              const isAlt = i % 2 === 1;
              return (
                <div
                  key={s.title}
                  className="p-8 rounded-3xl flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2"
                  style={{ backgroundColor: "white", boxShadow: ambientShadow }}
                >
                  <div
                    className="rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      width: 64, height: 64,
                      backgroundColor: isAlt ? `${C.primaryContainer}12` : `${C.primaryContainer}18`,
                      color: isAlt ? C.onSurfaceVariant : C.primary,
                    }}
                  >
                    <Icon />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: C.onSurface }}>{s.title}</h4>
                  <p className="text-sm leading-relaxed font-medium mb-6" style={{ color: C.onSurfaceVariant }}>
                    {s.description}
                  </p>
                  <a href="#contact" className="text-sm font-bold mt-auto hover:underline cursor-pointer" style={{ color: C.primary }}>
                    Learn More &rarr;
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ COMPARISON TABLE ════════ */}
      <section className="py-24" style={{ backgroundColor: C.surface }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: C.onSurface }}>
              The Smarter Way to Hire
            </h2>
            <p className="max-w-2xl mx-auto font-medium" style={{ color: C.onSurfaceVariant }}>
              Compare the total value of partnering with us against traditional methods.
            </p>
          </div>

          {/* Desktop table */}
          <div className="v8-desktop-only rounded-[2.5rem] overflow-hidden" style={{ backgroundColor: "white", boxShadow: ambientShadow, border: `1px solid ${C.outlineVariant}` }}>
            <div className="grid grid-cols-4" style={{ borderBottom: `1px solid ${C.surfaceHigh}` }}>
              <div className="p-6 lg:p-8 font-bold text-xs uppercase tracking-widest" style={{ color: C.onSurfaceVariant }}>Comparison</div>
              <div className="p-6 lg:p-8 font-bold text-center text-sm" style={{ backgroundColor: `${C.surfaceLow}80` }}>Local Employee</div>
              <div className="p-6 lg:p-8 font-bold text-center text-sm" style={{ backgroundColor: C.surfaceLow }}>Freelancer</div>
              <div className="p-6 lg:p-8 font-bold text-center text-sm text-white" style={{ background: gradient }}>Us</div>
            </div>
            {comparisonData.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-4 items-center" style={{ borderBottom: i < comparisonData.length - 1 ? `1px solid ${C.surfaceHigh}` : "none" }}>
                <div className="p-6 lg:p-8 font-bold" style={{ color: C.onSurface }}>{row.feature}</div>
                <div className="p-6 lg:p-8 text-center font-medium" style={{ color: C.onSurfaceVariant }}>{row.local}</div>
                <div className="p-6 lg:p-8 text-center font-medium" style={{ color: C.onSurfaceVariant }}>{row.freelance}</div>
                <div className="p-6 lg:p-8 text-center font-black text-lg" style={{ color: C.primary }}>{row.us}</div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="v8-mobile-only space-y-3">
            {comparisonData.map((row) => (
              <div key={row.feature} className="rounded-2xl p-4" style={{ backgroundColor: "white", border: `1px solid ${C.outlineVariant}` }}>
                <p className="font-bold text-sm mb-3" style={{ color: C.onSurface }}>{row.feature}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white px-2 py-0.5 rounded" style={{ background: gradient }}>Us</span>
                    <span className="text-sm font-black" style={{ color: C.primary }}>{row.us}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium" style={{ color: C.onSurfaceVariant }}>Local Employee</span>
                    <span className="text-sm font-medium" style={{ color: C.onSurfaceVariant }}>{row.local}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium" style={{ color: C.onSurfaceVariant }}>Freelancer</span>
                    <span className="text-sm font-medium" style={{ color: C.onSurfaceVariant }}>{row.freelance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: C.surfaceHigh }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: C.onSurface }}>
              Hiring a VA shouldn&apos;t be hard
            </h2>
            <p className="font-medium" style={{ color: C.onSurfaceVariant }}>
              We&apos;ve refined our onboarding to be as seamless as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="relative group">
                <div className="text-8xl font-black absolute -top-10 -left-6 pointer-events-none transition-transform duration-500 group-hover:scale-110" style={{ color: `${C.primary}12` }}>
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4" style={{ color: C.onSurface }}>{step.title}</h4>
                  <p className="leading-relaxed font-medium" style={{ color: C.onSurfaceVariant }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ GUARANTEES ════════ */}
      <section className="py-24" style={{ backgroundColor: C.surface }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[3rem] p-12 lg:p-20 overflow-hidden relative" style={{ background: gradient, boxShadow: `0 25px 60px ${C.primary}30` }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight text-white">
                  Total Peace of Mind,<br />Zero Risk to You
                </h2>
                <p className="text-white/80 text-lg mb-10 font-medium max-w-md">
                  We&apos;re so confident in our talent that we offer industry-leading guarantees that put your business first.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105"
                  style={{ color: C.primary, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                >
                  Start Your Risk-Free Trial
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guarantees.map((g) => (
                  <div
                    key={g.title}
                    className="p-6 rounded-2xl border border-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="mb-4 text-white">
                      {g.icon === "shield-check" && <ShieldIcon />}
                      {g.icon === "refresh" && (
                        <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      )}
                      {g.icon === "lock-open" && (
                        <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      )}
                      {g.icon === "receipt" && (
                        <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      )}
                    </div>
                    <h5 className="font-bold mb-2 text-lg text-white">{g.title}</h5>
                    <p className="text-sm text-white/70 font-medium leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TALENT PROFILES ════════ */}
      <section className="py-24" style={{ backgroundColor: C.surfaceLow }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: C.onSurface }}>
                Meet your next A-Player
              </h2>
              <p className="font-medium" style={{ color: C.onSurfaceVariant }}>
                Our virtual assistants are highly educated, culturally aligned, and ready to contribute from day one.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl font-bold text-sm transition-all hover:bg-white"
              style={{ color: C.primary, border: `1px solid ${C.outlineVariant}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              View All Talent Profiles
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {talents.map((t, i) => (
              <div key={t.name} className={`group cursor-pointer ${i === 1 ? "md:mt-12" : ""}`}>
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 relative" style={{ boxShadow: ambientShadow }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2" style={{ backgroundColor: "rgba(255,255,255,0.9)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
                    <h6 className="font-bold text-lg" style={{ color: C.onSurface }}>{t.name}</h6>
                    <p className="text-sm font-medium" style={{ color: C.onSurfaceVariant }}>{t.role} &middot; {t.exp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <FAQSection />

      {/* ════════ FINAL CTA ════════ */}
      <section id="contact" className="py-24" style={{ backgroundColor: C.surfaceLow }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: C.onSurface }}>
              Ready to scale your team?
            </h2>
            <p className="text-lg font-medium" style={{ color: C.onSurfaceVariant }}>
              Full-time remote staff from $4/hr. Matched in days, not months.
            </p>
          </div>
          <div className="rounded-[2.5rem] p-8 lg:p-10" style={{ backgroundColor: "white", boxShadow: ambientShadow, border: `1px solid ${C.outlineVariant}` }}>
            <HubSpotForm containerId="hubspot-v8-footer" />
            <p className="text-center text-xs font-medium mt-4" style={{ color: C.onSurfaceVariant }}>
              No commitment &middot; No credit card &middot; Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="pt-20 pb-10" style={{ backgroundColor: C.surfaceLow, borderTop: `1px solid ${C.surfaceHigh}` }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="text-2xl font-black tracking-tighter mb-6" style={{ color: C.primary }}>
              Virtual Assistants Philippines
            </div>
            <p className="text-sm mb-8 leading-relaxed font-medium" style={{ color: C.onSurfaceVariant }}>
              We build high-performance remote teams for the world&apos;s most ambitious companies. Precision, trust, and executive-level authority in every hire.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-20">
            <div className="flex flex-col space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest" style={{ color: C.onSurface }}>Links</h5>
              <a href="#" className="text-sm font-medium transition-colors hover:underline" style={{ color: C.onSurfaceVariant }}>Privacy Policy</a>
              <a href="#" className="text-sm font-medium transition-colors hover:underline" style={{ color: C.onSurfaceVariant }}>Terms of Service</a>
            </div>
            <div className="flex flex-col space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest" style={{ color: C.onSurface }}>Company</h5>
              <a href="#" className="text-sm font-medium transition-colors hover:underline" style={{ color: C.onSurfaceVariant }}>LinkedIn</a>
              <a href="#" className="text-sm font-medium transition-colors hover:underline" style={{ color: C.onSurfaceVariant }}>Careers</a>
            </div>
            <div className="flex flex-col space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-widest" style={{ color: C.onSurface }}>Support</h5>
              <a href="#contact" className="text-sm font-medium transition-colors hover:underline" style={{ color: C.onSurfaceVariant }}>Contact Us</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid ${C.surfaceHigh}` }}>
          <p className="text-sm font-medium" style={{ color: C.onSurfaceVariant }}>
            &copy; 2026 Virtual Assistants Philippines. All rights reserved.
          </p>
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: `${C.onSurfaceVariant}80` }}>
            Headquartered in Manila &middot; Serving Globally
          </div>
        </div>
      </footer>
    </div>
  );
}
