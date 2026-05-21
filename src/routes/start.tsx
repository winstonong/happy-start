import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroPhoto from "@/assets/start-hero.jpg";

/* ─── Editorial tokens ─── */
const T = {
  ink: "#0A0A0A",
  inkSoft: "#3F3F46",
  muted: "#71717A",
  line: "#E4E4E7",
  surface: "#FFFFFF",
  surfaceMuted: "#F6F5F2",
  cream: "#F1EFE9",
  accent: "#FF5A1F",
};

/* ─── HubSpot form: load script once, mount per container ─── */
let hsScriptPromise: Promise<void> | null = null;
function loadHubSpot(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if ((window as any).hbspt) return Promise.resolve();
  if (hsScriptPromise) return hsScriptPromise;
  hsScriptPromise = new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "//js.hsforms.net/forms/embed/v2.js";
    s.charset = "utf-8";
    s.onload = () => resolve();
    document.head.appendChild(s);
  });
  return hsScriptPromise;
}

function HubSpotForm({ containerId }: { containerId: string }) {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    loadHubSpot().then(() => {
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
    });
  }, [containerId]);
  return <div id={containerId} />;
}

/* ─── Data ─── */
const pressLogos = [
  "/images/logos/forbes.webp",
  "/images/logos/fastcompany.webp",
  "/images/logos/variety.webp",
  "/images/logos/vanityfair.webp",
  "/images/logos/dailymail.webp",
  "/images/logos/lofficiel.webp",
];

const heroBadges = [
  { k: "From $4/hr", s: "all-in" },
  { k: "<7 days", s: "to hire" },
  { k: "20–40 hrs", s: "per week" },
  { k: "No lock-in", s: "cancel any time" },
];

const stats = [
  { k: "70%", v: "Average cost saving versus an equivalent local hire — fully loaded." },
  { k: "7 days", v: "From kickoff to first day. Sourcing, screening, interviews, onboarding." },
  { k: "24 / 7", v: "Day shift, night shift, weekends. Your assistant works your hours." },
];

const qualities = [
  { t: "Excellent communication", d: "Neutral-accent English, both written and verbal. Friendly, clear, professional." },
  { t: "Equipped and ready", d: "Quiet workspace, high-spec computer, backup power, redundant internet, modern cloud tools." },
  { t: "Outcome-focused", d: "Disciplined time management. Your priorities ship on schedule, every week." },
];

const roles = [
  "Executive Assistant",
  "Customer Support",
  "Inbox & Calendar",
  "Bookkeeping",
  "Sales Development",
  "Lead Research",
  "LinkedIn Outreach",
  "Recruiting Coordinator",
  "Operations Analyst",
  "E-commerce Ops",
  "Listing Management",
  "Content Editor",
  "Social Media Manager",
  "Graphic Designer",
  "Video Editor",
  "Website Updates",
  "Data Entry & QA",
  "Project Coordinator",
  "Paralegal Assistant",
  "Medical VA",
];

const steps = [
  { n: "01", t: "Tell us what you need", d: "A 15-minute discovery call to scope the role, tools, hours, and the outcomes that matter." },
  { n: "02", t: "We screen, you interview", d: "We source, test, and shortlist. You meet the top 2–3 candidates and pick the one you like." },
  { n: "03", t: "Your hire starts this week", d: "We handle onboarding, timesheets, and payroll. You get one simple monthly invoice." },
];

const faqs = [
  { q: "Why hire remote talent from the Philippines?", a: "Deep, English-fluent talent pool with strong work ethic, mature remote-work infrastructure, and a time zone that flexes for US, UK, AU, and EU business hours." },
  { q: "Do I get a dedicated assistant?", a: "Yes. Your assistant works exclusively for you, full-time or part-time. Same person stays with your business so they learn your tools and rapport builds over time." },
  { q: "How long does it take to hire?", a: "About 7 days from brief to start date. We post, vet, test, and shortlist — you only sit in the final interview." },
  { q: "What's the recruitment process?", a: "We brief, advertise, and receive 5–10× the local applicant pool. Candidates are screened for English fluency, aptitude, and role-specific skills. You get a curated shortlist." },
  { q: "How do you maintain quality?", a: "Our client services team monitors check-ins and timesheets. You set KPIs once your hire is on board; we step in to performance-manage or replace at no extra cost if it's not the right fit." },
  { q: "Can I hire part-time?", a: "Yes. Minimum 20 hours per week. Full-time, part-time, or campaign-based engagements all work." },
  { q: "What hours can my hire work?", a: "Any. Day shift, night shift, weekends, public holidays. Filipino remote workers are accustomed to overseas time zones including overnight US shifts." },
  { q: "How is billing handled?", a: "We invoice monthly based on logged hours. One flat hourly rate covers wages, computer, internet, payroll, and all fees. No setup costs, no surprises." },
  { q: "Is my data secure?", a: "Yes. NDAs, identity verification, and remote-desktop solutions available on request. We follow ISO 27001-aligned data handling protocols." },
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
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
  component: StartPage,
});

function StartPage() {
  const serif: React.CSSProperties = { fontFamily: "'Instrument Serif', 'Times New Roman', serif", fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.01em" };
  const display: React.CSSProperties = { fontFamily: "'Poppins', system-ui, sans-serif", letterSpacing: "-0.025em" };

  return (
    <div style={{ backgroundColor: T.surface, color: T.ink, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: T.cream }}>
        {/* large display backdrop word */}
        <div
          aria-hidden
          className="absolute -top-6 right-0 hidden lg:block select-none pointer-events-none"
          style={{
            ...display,
            fontWeight: 900,
            fontSize: "clamp(180px, 22vw, 360px)",
            lineHeight: 0.8,
            color: T.ink,
            opacity: 0.04,
            letterSpacing: "-0.06em",
          }}
        >
          delegate.
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-16 lg:pt-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* LEFT: editorial copy */}
          <div className="lg:col-span-5">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] mb-7"
              style={{ backgroundColor: T.ink, color: "white" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: T.accent }} />
              Now hiring for your business
            </div>

            <h1 className="font-black leading-[0.92] mb-7" style={{ ...display, fontSize: "clamp(2.6rem, 5.4vw, 4.6rem)" }}>
              Hire top remote talent —{" "}
              <span style={serif} className="font-normal italic">
                fast.
              </span>
            </h1>

            <p className="text-lg max-w-xl mb-8 leading-relaxed" style={{ color: T.inkSoft }}>
              Vetted, full-time virtual assistants in your time zone. From <strong style={{ color: T.ink }}>$4/hr</strong>, live in your business within a week. No contracts, cancel any time.
            </p>

            {/* badges row */}
            <div className="grid grid-cols-2 gap-3 mb-10 max-w-md">
              {heroBadges.map((b) => (
                <div key={b.k} className="bg-white rounded-2xl px-4 py-3" style={{ border: `1px solid ${T.line}` }}>
                  <div className="text-base font-black tracking-tight" style={display}>{b.k}</div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold mt-0.5" style={{ color: T.muted }}>{b.s}</div>
                </div>
              ))}
            </div>

            {/* trust line */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full ring-2 ring-white"
                    style={{
                      background: `linear-gradient(135deg, hsl(${i * 67}, 60%, 65%), hsl(${i * 67 + 40}, 55%, 50%))`,
                    }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={T.accent}>
                      <path d="M10 1l2.6 5.9 6.4.6-4.8 4.4 1.4 6.3L10 14.9l-5.6 3.3 1.4-6.3L1 7.5l6.4-.6L10 1z" />
                    </svg>
                  ))}
                  <span className="font-bold ml-1">4.9</span>
                  <span style={{ color: T.muted }}>· 2,500+ reviews</span>
                </div>
                <div style={{ color: T.muted }} className="text-xs mt-0.5">Trustpilot · Google · Glassdoor</div>
              </div>
            </div>
          </div>

          {/* RIGHT: photo + overlapping form card */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Photo frame — visible on desktop, hidden on mobile to keep form prominent */}
              <div
                className="hidden lg:block relative overflow-hidden rounded-[28px]"
                style={{
                  aspectRatio: "5 / 6",
                  border: `1px solid ${T.line}`,
                  boxShadow: "0 20px 50px -25px rgba(10,10,10,0.25)",
                }}
              >
                <img
                  src={heroPhoto}
                  alt="Professional virtual assistant ready to start work"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "28% center" }}
                />
                {/* soft gradient on right to seat the form */}
                <div
                  aria-hidden
                  className="absolute inset-y-0 right-0 w-2/3"
                  style={{
                    background: "linear-gradient(to left, rgba(255,255,255,0.55), rgba(255,255,255,0))",
                  }}
                />
              </div>

              {/* Form card — floats over right side on desktop, full width on mobile */}
              <div
                className="bg-white rounded-[28px] p-7 lg:p-8 relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[58%]"
                style={{
                  minHeight: 620,
                  boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 30px 60px -20px rgba(10,10,10,0.22), 0 18px 40px -18px rgba(10,10,10,0.14)",
                  border: `1px solid ${T.line}`,
                }}
              >
                {/* sticky little tag */}
                <div className="absolute -top-3 left-7 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase" style={{ backgroundColor: T.accent, color: "white" }}>
                  Free consultation
                </div>
                <h2 className="text-2xl font-black mb-1.5" style={display}>
                  Book your call
                </h2>
                <p className="text-sm mb-6" style={{ color: T.muted }}>
                  Tell us about the role. We'll come back with a shortlist within 48 hours.
                </p>
                <HubSpotForm containerId="hubspot-start-hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PRESS STRIP ════════ */}
      <section className="py-14 border-y" style={{ borderColor: T.line, backgroundColor: T.surface }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.22em] font-bold mb-8" style={{ color: T.muted }}>
            As featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {pressLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={140}
                height={32}
                loading="lazy"
                className="h-7 md:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                style={{ filter: "grayscale(1) brightness(0)" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STATS — editorial row ════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: T.surface }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-5" style={{ color: T.muted }}>
                Why this works
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02]" style={display}>
                Vetted, full-time staff —{" "}
                <span style={serif} className="italic font-normal">live in your business within a week.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed" style={{ color: T.inkSoft }}>
                We do the searching, shortlisting, and onboarding. You meet two or three top candidates, pick one, and they start. One flat hourly rate. One simple invoice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-3xl overflow-hidden" style={{ backgroundColor: T.line, border: `1px solid ${T.line}` }}>
            {stats.map((s) => (
              <div key={s.k} className="bg-white p-10 lg:p-12">
                <div className="text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-none" style={display}>
                  {s.k}
                </div>
                <p className="text-base leading-relaxed" style={{ color: T.inkSoft }}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STOP INTERVIEWING — dark editorial ════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: T.ink, color: "white" }}>
        <div
          aria-hidden
          className="absolute -bottom-20 -left-10 hidden lg:block select-none pointer-events-none"
          style={{ ...display, fontWeight: 900, fontSize: "clamp(180px, 20vw, 320px)", lineHeight: 0.8, color: "white", opacity: 0.03 }}
        >
          ship.
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-5 text-white/60">
              The hiring shift
            </p>
            <h2 className="text-4xl lg:text-6xl font-black leading-[0.98] mb-8" style={display}>
              Stop interviewing.<br />
              <span style={serif} className="italic font-normal">Start delegating.</span>
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-white/75 mb-10 max-w-lg">
              Skilled professionals ready for the everyday and the extraordinary. We handle the vetting. You manage the work.
            </p>
            <a
              href="#hubspot-start-footer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm tracking-wide bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Book a free call
              <span style={{ color: T.accent }}>→</span>
            </a>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {qualities.map((q, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-black text-sm"
                    style={{ backgroundColor: T.accent, color: "white" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5" style={display}>{q.t}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{q.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ROLES — pill cloud ════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: T.surfaceMuted }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-5" style={{ color: T.muted }}>
            What they can do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] mb-6" style={display}>
            Outsourced agents for{" "}
            <span style={serif} className="italic font-normal">any task.</span>
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: T.inkSoft }}>
            From operations to growth to back-office. Pick a role, or pick a stack of them. Your vision sets the only limit.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {roles.map((r) => (
              <span
                key={r}
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold bg-white hover:bg-black hover:text-white transition-colors cursor-default"
                style={{ border: `1px solid ${T.line}`, color: T.ink }}
              >
                {r}
              </span>
            ))}
          </div>

          <a
            href="#hubspot-start-footer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm tracking-wide bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Build my role
            <span style={{ color: T.accent }}>→</span>
          </a>
        </div>
      </section>

      {/* ════════ PROCESS — timeline ════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-5" style={{ color: T.muted }}>
              Hire in 3 steps
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] mb-6" style={display}>
              How to hire{" "}
              <span style={serif} className="italic font-normal">an agent.</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: T.inkSoft }}>
              A bespoke process that finds the right people for your business.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* connector line on desktop */}
            <div className="hidden md:block absolute left-[16.66%] right-[16.66%] top-9 h-px" style={{ backgroundColor: T.line }} />
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div
                  className="relative z-10 w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center mx-auto mb-6 text-2xl font-black"
                  style={{ border: `1.5px solid ${T.ink}`, color: T.ink, ...display }}
                >
                  {s.n}
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl lg:text-2xl font-black mb-3" style={display}>{s.t}</h3>
                  <p className="text-base leading-relaxed" style={{ color: T.inkSoft }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: T.cream }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-5" style={{ color: T.muted }}>
              Common questions
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] mb-4" style={display}>
              Frequently{" "}
              <span style={serif} className="italic font-normal">asked.</span>
            </h2>
          </div>

          <div className="divide-y" style={{ borderTop: `1px solid ${T.ink}`, borderBottom: `1px solid ${T.ink}` }}>
            {faqs.map((f, i) => (
              <details key={i} className="group py-1" style={{ borderColor: T.ink }}>
                <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                  <span className="text-lg lg:text-xl font-bold pr-6" style={{ color: T.ink, ...display }}>{f.q}</span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-transform group-open:rotate-45"
                    style={{ backgroundColor: T.ink, color: "white" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-6 pr-14 leading-relaxed text-base" style={{ color: T.inkSoft }}>
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: T.ink, color: "white" }}>
        <div
          aria-hidden
          className="absolute -bottom-10 -right-10 hidden lg:block select-none pointer-events-none"
          style={{ ...display, fontWeight: 900, fontSize: "clamp(180px, 18vw, 280px)", lineHeight: 0.8, color: "white", opacity: 0.04 }}
        >
          go.
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 lg:pr-8">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-5 text-white/60">
              Get started
            </p>
            <h2 className="text-4xl lg:text-6xl font-black leading-[0.98] mb-7" style={display}>
              Get a free consultation{" "}
              <span style={serif} className="italic font-normal">with an expert today.</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/75 mb-8 max-w-lg">
              Tell us about the role. We'll come back with a shortlist of vetted candidates within 48 hours — no obligation.
            </p>
            <ul className="space-y-4">
              {[
                "Free 15-minute consultation",
                "Shortlist within 48 hours",
                "7-day new-hire guarantee",
                "No lock-in, cancel any time",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3 text-white/90 text-base">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: T.accent }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div
              className="bg-white rounded-[28px] p-7 lg:p-8 relative"
              style={{ minHeight: 620, color: T.ink, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.45)" }}
            >
              <div className="absolute -top-3 left-7 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase" style={{ backgroundColor: T.accent, color: "white" }}>
                Book your call
              </div>
              <h3 className="text-2xl font-black mb-1.5" style={display}>
                Start in days, not months
              </h3>
              <p className="text-sm mb-6" style={{ color: T.muted }}>
                Risk-free. 7-day new-hire guarantee.
              </p>
              <HubSpotForm containerId="hubspot-start-footer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
