import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroPhoto from "@/assets/start-hero-wide.jpg";

/* ─── Tokens ─── */
const T = {
  ink: "#0A0A0A",
  inkSoft: "#3F3F46",
  muted: "#71717A",
  line: "#E4E4E7",
  surface: "#FFFFFF",
  surfaceMuted: "#F5F5F4",
  accent: "#000000",
};

/* ─── HubSpot form ─── */
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

const qualities = [
  { t: "Excellent communication skills", d: "Strong English — verbal and written — paired with a friendly, professional demeanour." },
  { t: "Equipped and ready to work", d: "Quiet workspace, high-spec computer, reliable internet, and access to cloud-based tools." },
  { t: "Time management", d: "One of the top qualities we screen for, so your tasks get done quickly and on schedule." },
];

const benefits = [
  { t: "No lock-in contracts", d: "Stay month to month with no long-term commitment." },
  { t: "No set-up fees", d: "Recruiting is on us — you only pay once your hire starts." },
  { t: "Free to change staff", d: "Swap your assistant any time if the fit isn't right." },
  { t: "All-in hourly rate", d: "Wages, computer, internet, and all fees included." },
  { t: "24/7 operation", d: "We support global businesses across every time zone." },
  { t: "From 20 hours per week", d: "Hire part-time or full-time — whichever fits your workload." },
];

const faqs = [
  {
    q: "Why is Virtual Assistants Philippines a leader in outsourcing?",
    a: "Since the shift to remote work, companies have realised local staffing isn't always necessary. The Philippines stands out as a top outsourcing destination thanks to its educated workforce, strong work ethic, and mature remote-work infrastructure. We help businesses of every size — from startups to ASX and NASDAQ listed companies — build offshore teams quickly and find the right people to fit their operations.",
  },
  {
    q: "Do I get a dedicated Virtual Assistant?",
    a: "Yes. We place full-time or part-time assistants who work exclusively for you. The same person stays with your business throughout, so they build rapport and a deep understanding of how you operate.",
  },
  {
    q: "What are the key skills of your Virtual Assistants?",
    a: "We screen for strong English, a hard-working attitude, university education, and a friendly demeanour. We also confirm they have a quiet workspace, a high-spec computer, and access to cloud tools. Time management and communication are top priorities, and we check tool familiarity before placement. Common tasks include calendar and inbox management, research, LinkedIn lead generation, spreadsheet work, website updates and audits, product-listing optimisation, and customer communications — but the scope is only limited by what you train them on.",
  },
  {
    q: "Key benefits of hiring a Virtual Assistants Philippines VA",
    a: "Filipino professionals genuinely enjoy virtual assistant work — it lets them avoid traffic and work from home, which is a preferred setup locally. That translates to high job satisfaction and lower turnover. For you, the benefit is substantial cost savings that fund expansion, plus the mental clarity that comes from offloading repetitive tasks so you can focus on growing the business.",
  },
  {
    q: "How long does it take to set up a team?",
    a: "On average about 14 days from brief to start date. We post the job, vet candidates, run interviews, and shortlist the best fit so you only meet the top picks.",
  },
  {
    q: "Describe your recruitment process",
    a: "It's similar to onshore recruiting — except the Philippine talent pool is roughly 5× larger, so each role attracts many more applicants. We do the heavy lifting: screening for English, aptitude, and role-specific skills, then surfacing only the strongest candidates. You provide a brief, we shortlist, and you can take the final interview if you'd like. If a hire doesn't work out, we manage the exit and replacement for you.",
  },
  {
    q: "How do you maintain quality?",
    a: "Our talent team checks in regularly with candidates, and time-tracking technology makes sure your hire starts and stops at the agreed hours. You set the KPIs once your assistant is on board, and we step in to performance-manage or replace at no extra cost if needed.",
  },
  {
    q: "Can I hire Virtual Assistants part-time?",
    a: "Yes. Part-time placements work well for ongoing roles or specific campaigns. Our minimum is 20 hours per week.",
  },
  {
    q: "Can I set the work hours? Can they work overnight?",
    a: "Yes. Candidates are briefed on your preferred schedule. Filipino workers are very flexible — night shifts are common because of the volume of US clients — so overnight, weekend, and public-holiday coverage is all available (holidays attract a loading).",
  },
  {
    q: "How do you handle non-performing Virtual Assistants?",
    a: "We handle it on your behalf. If KPIs aren't being met, let us know and we'll performance-manage the hire or replace them at no extra cost.",
  },
  {
    q: "How do I pay my offshore staff?",
    a: "We invoice you and take care of payroll as part of the service — no extra fees, no setup costs.",
  },
  {
    q: "Is my company data safe?",
    a: "Our staff work from home, but for sensitive workloads we can layer in extra security including remote-desktop solutions and NDAs. We keep verified ID on file for every hire and follow ISO 27001-aligned protocols.",
  },
];

const testimonials = [
  {
    quote: "Virtual Assistants Philippines has been instrumental in helping us build a strong, remote, global workforce. We've thrown a wide variety of tasks at them and they've delivered consistently. Highly recommended.",
    name: "Manal Iqbal",
    title: "Chief Executive Officer",
    company: "Buddy Bet",
  },
  {
    quote: "Their team let us scale digital campaigns far faster and more cost-effectively than local agencies. As an early-stage startup, that speed was perfect — we could test, learn, and pivot quickly.",
    name: "Shanya Suppasiritad",
    title: "Chief Executive Officer",
    company: "RNTR",
  },
  {
    quote: "As a multi-jurisdictional retailer, outstanding client service is core to what we do. We came to Virtual Assistants Philippines for customer support and they've been exceptional at finding the right people to operate around the clock — at industry-leading speed and cost.",
    name: "Anthony Spon-Smith",
    title: "Chief Executive Officer",
    company: "Coco Republic",
  },
];

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "$4–$8/hr Virtual Assistants | Virtual Assistants Philippines" },
      { name: "description", content: "Hire vetted full-time or part-time Virtual Assistants from the Philippines. No lock-in, no set-up fees, all-in hourly rate. Book a free consultation." },
      { property: "og:title", content: "$4–$8/hr Virtual Assistants | Virtual Assistants Philippines" },
      { property: "og:description", content: "Outsource to talented Virtual Assistants in the Philippines. Live within a week, all-in hourly rate, no lock-in." },
      { name: "twitter:title", content: "$4–$8/hr Virtual Assistants | Virtual Assistants Philippines" },
      { name: "twitter:description", content: "Outsource to talented Virtual Assistants in the Philippines. Live within a week, all-in hourly rate, no lock-in." },
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
          src={heroPhoto}
          alt=""
          width={1632}
          height={672}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "right top" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]" style={{ minHeight: 640 }}>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-7" style={{ color: T.ink, fontFamily: "'Poppins', system-ui, sans-serif" }}>
              $4-$8 Per Hour Virtual Assistants
            </h1>
            <HubSpotForm containerId="hubspot-start-hero" />
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* ════════ PRESS ════════ */}
      <section className="py-20" style={{ backgroundColor: T.surfaceMuted }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-3" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            #1 Website For Hiring Virtual Assistants
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

      {/* ════════ FITS PERFECTLY ════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
              Get a VA who fits perfectly in your business
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: T.inkSoft }}>
              Our Virtual Assistants are skilled professionals ready to tackle a wide range of tasks, tailored to your unique needs.
            </p>
            <a
              href="#hubspot-start-footer"
              className="inline-flex items-center px-6 py-3.5 rounded-full font-bold text-sm tracking-wide bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Contact us today →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {qualities.map((q, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: T.surfaceMuted, border: `1px solid ${T.line}` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm bg-black text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>{q.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: T.inkSoft }}>{q.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ANY TASK / BENEFITS ════════ */}
      <section className="py-24" style={{ backgroundColor: T.ink, color: "white" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center max-w-4xl mx-auto mb-16 leading-tight" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            Virtual Assistants for any task
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, overflow: "hidden" }}>
            {benefits.map((b, i) => (
              <div key={i} className="p-8 lg:p-10" style={{ backgroundColor: T.ink }}>
                <div className="text-2xl lg:text-3xl font-black tracking-tight mb-3" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
                  {b.t}
                </div>
                <p className="text-base font-medium text-white/70">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#hubspot-start-footer"
              className="inline-flex items-center px-6 py-3.5 rounded-full font-bold text-sm tracking-wide bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Book a free call →
            </a>
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="py-24" style={{ backgroundColor: T.surfaceMuted }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            FAQs about our Virtual Assistant services
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: T.inkSoft }}>
            From entrepreneurs to globally listed companies, we help scale quality labour solutions on time and well below the equivalent local cost.
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

          <div className="text-center mt-12">
            <a
              href="#hubspot-start-footer"
              className="inline-flex items-center px-6 py-3.5 rounded-full font-bold text-sm tracking-wide bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Contact us today →
            </a>
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
            Hear about the Virtual Assistants Philippines experience direct from our clients
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: T.inkSoft }}>
            With 4.9 stars from over 2,000 reviews across Trustpilot, Google Reviews and Glassdoor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl flex flex-col" style={{ border: `1px solid ${T.line}`, backgroundColor: "white" }}>
                <div className="text-4xl font-black mb-4 leading-none" style={{ color: T.ink, fontFamily: "'Poppins', system-ui, sans-serif" }}>
                  &ldquo;
                </div>
                <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: T.inkSoft }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: `1px solid ${T.line}` }} className="pt-4">
                  <div className="font-bold text-base" style={{ color: T.ink }}>{t.name}</div>
                  <div className="text-sm" style={{ color: T.muted }}>{t.title}</div>
                  <div className="text-sm font-medium" style={{ color: T.ink }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA / FORM ════════ */}
      <section className="py-24" style={{ backgroundColor: T.ink, color: "white" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-6" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
              Get a free consultation with a Virtual Assistants Philippines expert today
            </h2>
            <p className="text-lg leading-relaxed text-white/75 mb-6">
              Tell us about the role. We'll come back with a shortlist of vetted candidates — no obligation.
            </p>
            <ul className="space-y-3">
              {["Free 15-minute consultation", "Shortlist within days", "No lock-in, cancel any time"].map((x, i) => (
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
