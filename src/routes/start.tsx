import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroPhoto from "@/assets/start-hero.jpg";

/* ─── Tokens (mirroring the inspiration's clean editorial look) ─── */
const T = {
  ink: "#0A0A0A",
  inkSoft: "#3F3F46",
  muted: "#71717A",
  line: "#E4E4E7",
  surface: "#FFFFFF",
  surfaceMuted: "#F5F5F4",
  accent: "#000000",
};

/* ─── HubSpot form (same wiring as the rest of the site) ─── */
function HubSpotForm({ containerId }: { containerId: string }) {
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    const el = document.getElementById(containerId);
    if (!el) return;
    const s = document.createElement("script");
    s.src = "//js.hsforms.net/forms/embed/v2.js";
    s.charset = "utf-8";
    s.onload = () => {
      (window as any).hbspt?.forms?.create({
        portalId: "8513837",
        formId: "e84c4e9d-49d9-4c00-8607-66c9b1e89067",
        region: "na1",
        target: `#${containerId}`,
        onFormSubmitted: (_$f: any, data: any) => {
          (window as any).dataLayer?.push({ event: "hubspot_form_submitted", form_location: containerId });
          const fields = data?.submissionValues || {};
          if (typeof (window as any).ChiliPiper?.submit === "function") {
            (window as any).ChiliPiper.submit("bruntwork", "virtual-assistants-philippines", {
              trigger: "ThirdPartyForm",
              lead: {
                firstname: fields.firstname || "",
                lastname: fields.lastname || "",
                email: fields.email || "",
                phone: fields.phone || "",
                message: fields.message || "",
                country___website_form: fields.country___website_form || "",
                company: fields.company || "",
                type_of_employment: fields.type_of_employment || "",
                hiring_through_company_or_individual: fields.hiring_through_company_or_individual || "",
                Company: fields.Company || fields.company || "",
                roughly_how_many_people_work_in_your_company_: fields.roughly_how_many_people_work_in_your_company_ || "",
              },
            });
          }
        },
      });
    };
    document.head.appendChild(s);
  }, [containerId]);
  return <div id={containerId} />;
}

/* ─── Data ─── */
const press = [
  { logo: "/images/logos/forbes.webp", quote: "Leading the remote outsourcing revolution targeting $180M and 10,000 agents." },
  { logo: "/images/logos/fastcompany.webp", quote: "Reimagining global employment with 6,000 new hires planned." },
  { logo: "/images/logos/variety.webp", quote: "How this team became a global outsourcing leader." },
  { logo: "/images/logos/vanityfair.webp", quote: "Aggressive expansion strategy now in hyperdrive." },
  { logo: "/images/logos/dailymail.webp", quote: "Rapid rise as the go-to virtual assistant powerhouse." },
  { logo: "/images/logos/lofficiel.webp", quote: "Betting big on AI-powered remote-only global recruitment." },
];

const stats = [
  { k: "No lock-in", v: "Cancel any time, no contracts to negotiate." },
  { k: "70% savings", v: "Versus equivalent local hires, all-in." },
  { k: "Hire in <7 days", v: "Match, interview, onboard in one week." },
  { k: "All-in hourly rate", v: "Computer, internet, fees — included." },
  { k: "24/7 operation", v: "Global coverage, any time zone." },
  { k: "From 20 hrs/week", v: "Part-time or full-time placements." },
];

const qualities = [
  { t: "Excellent communication", d: "Strong English, both verbal and written. Friendly, clear, professional." },
  { t: "Equipped and ready", d: "Quiet workspace, high-spec computer, backup power, and cloud-based tools." },
  { t: "Time management", d: "Disciplined and outcome-focused, so your tasks ship on schedule." },
];

const capabilities = [
  "Calendar and email management",
  "Detailed research and data analysis",
  "Spreadsheet creation and management",
  "Website updates, audits, and optimisation",
  "Build and optimise online product listings",
  "LinkedIn profile management for lead generation",
  "Prompt and professional customer communication",
];

const steps = [
  { n: "01", t: "Tell us what you need", d: "A short discovery call to understand your goals, workflows, and the role you're hiring for." },
  { n: "02", t: "We screen, you interview", d: "We source, test, and shortlist. You meet only the top candidates — then pick the one you want." },
  { n: "03", t: "Your hire starts this week", d: "We handle onboarding, timesheets, and payroll. You get a single, simple monthly invoice." },
];

const faqs = [
  { q: "Why outsource to the Philippines?", a: "The Philippines combines a deep, English-fluent talent pool with strong work ethic, mature remote-work infrastructure, and a time zone that flexes for US, UK, and AU business hours." },
  { q: "Do I get a dedicated assistant?", a: "Yes. Your assistant works exclusively for you, full-time or part-time. The same person stays with your business so they learn your tools and rapport builds over time." },
  { q: "How long does it take to hire?", a: "About 7 days on average from brief to start date. We post, vet, test, and shortlist — you only sit in the final interview." },
  { q: "What's the recruitment process?", a: "We brief, advertise, and receive 5–10× the local applicant pool. Candidates are screened for English fluency, aptitude, and role-specific skills. You get a curated shortlist." },
  { q: "How do you maintain quality?", a: "Our client services team monitors timesheets and check-ins. You set KPIs once your hire is on board, and we step in to performance-manage or replace if needed — at no extra cost." },
  { q: "Can I hire part-time?", a: "Yes. Minimum 20 hours per week. Full-time, part-time, or campaign-based engagements all work." },
  { q: "What hours can my hire work?", a: "Any. Day shift, night shift, weekends, public holidays. Filipino remote workers are accustomed to overseas time zones, including overnight US shifts." },
  { q: "How is billing handled?", a: "We invoice monthly based on logged hours. One flat hourly rate covers wages, computer, internet, payroll, and all fees. No setup costs, no surprises." },
  { q: "Is my data secure?", a: "Yes. NDAs, identity verification, and remote-desktop solutions are available on request. We follow ISO 27001-aligned data handling protocols." },
];

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Get Started — Hire Top Remote Talent Fast | Virtual Assistants Philippines" },
      { name: "description", content: "Full-time remote staff from $4/hr. Hire in days, not months. Cancel any time. Book a free consultation." },
      { property: "og:title", content: "Get Started — Hire Top Remote Talent Fast" },
      { property: "og:description", content: "Vetted, full-time remote staff in your time zone — live within a week. Book a free consultation." },
      { name: "twitter:title", content: "Get Started — Hire Top Remote Talent Fast" },
      { name: "twitter:description", content: "Vetted, full-time remote staff in your time zone — live within a week." },
    ],
  }),
  component: StartPage,
});

function StartPage() {
  return (
    <div style={{ backgroundColor: T.surface, color: T.ink, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden">
        <img
          src="/images/hero-v8.jpg"
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:via-white/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]" style={{ minHeight: 640 }}>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-4" style={{ color: T.ink, fontFamily: "'Poppins', system-ui, sans-serif" }}>
              Hire top remote talent — fast
            </h1>
            <p className="text-base lg:text-lg mb-7 font-medium" style={{ color: T.inkSoft }}>
              Full-time remote staff from $4/hr. Hire in days, not months. Cancel any time.
            </p>
            <HubSpotForm containerId="hubspot-start-hero" />
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* ════════ PRESS ════════ */}
      <section className="py-20" style={{ backgroundColor: T.surfaceMuted }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-3" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            Leading website for outsourced talent
          </h2>
          <p className="text-center mb-12" style={{ color: T.muted }}>As featured in the global press.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white rounded-2xl overflow-hidden" style={{ border: `1px solid ${T.line}` }}>
            {press.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-start px-6 py-8 text-center min-h-[240px]"
                style={{ borderRight: i < press.length - 1 ? `1px solid ${T.line}` : "none" }}
              >
                <img
                  src={p.logo}
                  alt=""
                  width={160}
                  height={40}
                  loading="lazy"
                  className="h-10 md:h-12 w-auto object-contain mb-6"
                  style={{ filter: "brightness(0)" }}
                />
                <p className="text-sm leading-relaxed font-medium" style={{ color: T.inkSoft }}>
                  &lsquo;{p.quote}&rsquo;
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-base md:text-lg font-bold tracking-tight mt-12">
            4.9 stars from +2,500 reviews
          </p>
          <p className="text-center text-sm mt-2" style={{ color: T.muted }}>
            Across Trustpilot, Google Reviews and Glassdoor.
          </p>
        </div>
      </section>

      {/* ════════ STATS GRID ════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center max-w-4xl mx-auto mb-16 leading-tight" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            Vetted, full-time remote staff in your time zone — live within a week.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: T.line, border: `1px solid ${T.line}`, borderRadius: 24, overflow: "hidden" }}>
            {stats.map((s, i) => (
              <div key={i} className="bg-white p-8 lg:p-10">
                <div className="text-3xl lg:text-4xl font-black tracking-tight mb-3" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
                  {s.k}
                </div>
                <p className="text-base font-medium" style={{ color: T.inkSoft }}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STOP INTERVIEWING ════════ */}
      <section className="py-24" style={{ backgroundColor: T.ink, color: "white" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
              Stop interviewing.<br />Start delegating.
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-white/75">
              Our global talent pool is full of skilled professionals ready to tackle the everyday and the extraordinary. We handle the vetting — you manage the work.
            </p>
            <a
              href="#hubspot-start-footer"
              className="inline-flex items-center px-6 py-3.5 rounded-full font-bold text-sm tracking-wide bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Book a free call →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {qualities.map((q, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm" style={{ backgroundColor: "white", color: T.ink }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>{q.t}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{q.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CAPABILITIES ════════ */}
      <section className="py-24" style={{ backgroundColor: T.surfaceMuted }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/hero-v3.jpg"
              alt="Remote professional at work"
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-[480px] object-cover rounded-3xl"
            />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
              Outsourced agents for any task
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: T.inkSoft }}>
              Our agents bring versatile expertise across operations, growth, and back-office work. Your vision sets the only limit.
            </p>
            <ul className="space-y-3 mb-8">
              {capabilities.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill={T.ink} />
                    <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base font-medium" style={{ color: T.ink }}>{c}</span>
                </li>
              ))}
            </ul>
            <a
              href="#hubspot-start-footer"
              className="inline-flex items-center px-6 py-3.5 rounded-full font-bold text-sm tracking-wide bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Contact us today →
            </a>
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            How to hire an agent
          </h2>
          <p className="text-center text-lg mb-16 max-w-2xl mx-auto" style={{ color: T.inkSoft }}>
            We take the guesswork out of offshore staffing with a bespoke process that finds you the right people for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="p-8 rounded-3xl" style={{ border: `1px solid ${T.line}`, backgroundColor: "white" }}>
                <div className="text-5xl font-black mb-4 tracking-tighter" style={{ color: T.ink, fontFamily: "'Poppins', system-ui, sans-serif" }}>
                  {s.n}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>{s.t}</h3>
                <p className="text-base leading-relaxed" style={{ color: T.inkSoft }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="py-24" style={{ backgroundColor: T.surfaceMuted }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            Frequently asked
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: T.inkSoft }}>
            Everything you need to know about hiring remote staff.
          </p>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl overflow-hidden" style={{ border: `1px solid ${T.line}` }}>
                <summary className="flex items-center justify-between px-7 py-5 cursor-pointer font-bold text-base list-none" style={{ color: T.ink }}>
                  <span>{f.q}</span>
                  <svg className="w-5 h-5 ml-4 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-7 pb-5 leading-relaxed font-medium" style={{ color: T.inkSoft }}>
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA / FORM ════════ */}
      <section className="py-24" style={{ backgroundColor: T.ink, color: "white" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
              Get a free consultation with an expert today.
            </h2>
            <p className="text-lg leading-relaxed text-white/75 mb-6">
              Tell us about the role. We'll come back with a shortlist of vetted candidates within 48 hours — no obligation.
            </p>
            <ul className="space-y-3">
              {["Free 15-minute consultation", "Shortlist within 48 hours", "No lock-in, cancel any time"].map((x, i) => (
                <li key={i} className="flex items-center gap-3 text-white/85 text-base">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10" style={{ minHeight: 600 }}>
            <h3 className="text-2xl font-bold mb-2" style={{ color: T.ink, fontFamily: "'Poppins', system-ui, sans-serif" }}>
              Book your call
            </h3>
            <p className="text-sm mb-6 font-medium" style={{ color: T.inkSoft }}>
              Risk-free. 7-day new-hire guarantee.
            </p>
            <HubSpotForm containerId="hubspot-start-footer" />
          </div>
        </div>
      </section>
    </div>
  );
}
