import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

const C = {
  primary: "#003d9b",
  primaryContainer: "#0052cc",
  surface: "#f7f9fb",
  surfaceLow: "#f2f4f6",
  surfaceHigh: "#e6e8ea",
  onSurface: "#191c1e",
  onSurfaceVariant: "#434654",
  outlineVariant: "rgba(195, 198, 214, 0.2)",
};

const gradient = `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryContainer} 100%)`;

const values = [
  {
    icon: (
      <svg width={32} height={32} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.727-3.557" />
      </svg>
    ),
    title: "100% Remote",
    description: "Work from anywhere in the Philippines — no commute, no office politics, just results.",
  },
  {
    icon: (
      <svg width={32} height={32} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Competitive Pay",
    description: "Above-market rates paid on time, every time. Performance bonuses and regular salary reviews.",
  },
  {
    icon: (
      <svg width={32} height={32} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Growth & Training",
    description: "Ongoing skills development, certifications, and clear career progression paths.",
  },
  {
    icon: (
      <svg width={32} height={32} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Health Benefits",
    description: "HMO coverage and wellness benefits to keep you and your family healthy and secure.",
  },
  {
    icon: (
      <svg width={32} height={32} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Amazing Team",
    description: "Join 6,000+ professionals in a supportive, collaborative culture that celebrates wins.",
  },
  {
    icon: (
      <svg width={32} height={32} fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Flexible Schedules",
    description: "Day and night shifts available. Choose the schedule that fits your lifestyle best.",
  },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Virtual Assistants Philippines" },
      { name: "description", content: "Join Virtual Assistants Philippines. Work remotely, earn competitive pay, and grow your career with a global outsourcing leader." },
      { property: "og:title", content: "Careers — Virtual Assistants Philippines" },
      { property: "og:description", content: "Join our team of 6,000+ remote professionals. Competitive pay, health benefits, and career growth." },
      { name: "twitter:title", content: "Careers — Virtual Assistants Philippines" },
      { name: "twitter:description", content: "Join 6,000+ remote professionals. Competitive pay, health benefits, and career growth." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div style={{ backgroundColor: C.surface, color: C.onSurface, minHeight: "100vh" }}>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: gradient }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-10 hover:underline text-white/70 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Build Your Career<br />With Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Join 6,000+ remote professionals delivering world-class support to companies across the globe. No commute. No limits. Just opportunity.
          </p>
          <a
            href="mailto:careers@virtualassistantphilippines.io?subject=Career%20Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: "white", color: C.primary }}
          >
            Apply Now
            <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── Why Join Us ─── */}
      <section className="py-24" style={{ backgroundColor: C.surface }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ color: C.onSurface }}>
              Why Work With Virtual Assistants Philippines?
            </h2>
            <p className="max-w-2xl mx-auto font-medium" style={{ color: C.onSurfaceVariant }}>
              We don&apos;t just offer jobs — we invest in careers. Here&apos;s what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-3xl flex flex-col group transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: "white", boxShadow: "0 20px 40px rgba(11, 20, 55, 0.06)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: gradient }}
                >
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: C.onSurface }}>{v.title}</h3>
                <p className="text-sm leading-relaxed font-medium" style={{ color: C.onSurfaceVariant }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Culture Strip ─── */}
      <section className="py-24" style={{ backgroundColor: C.surfaceLow }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6" style={{ color: C.onSurface }}>
            Our Culture
          </h2>
          <p className="text-lg leading-relaxed font-medium mb-12" style={{ color: C.onSurfaceVariant }}>
            We believe that great work happens when people feel supported, valued, and empowered. Our team spans thousands of professionals across the Philippines, united by a shared commitment to excellence and a genuine passion for helping businesses succeed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: "6,000+", label: "Team Members" },
              { stat: "4.9/5", label: "Glassdoor Rating" },
              { stat: "100%", label: "Remote Workforce" },
            ].map((s) => (
              <div key={s.label} className="p-8 rounded-3xl" style={{ backgroundColor: "white", boxShadow: "0 20px 40px rgba(11, 20, 55, 0.06)" }}>
                <div className="text-3xl md:text-4xl font-black tracking-tight mb-2" style={{ color: C.primary }}>{s.stat}</div>
                <div className="text-sm font-bold uppercase tracking-widest" style={{ color: C.onSurfaceVariant }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Careers FAQ ─── */}
      <CareersFAQ />

      {/* ─── CTA ─── */}
      <section className="py-24" style={{ backgroundColor: C.surface }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6" style={{ color: C.onSurface }}>
            Ready to Join the Team?
          </h2>
          <p className="text-lg font-medium mb-10 leading-relaxed" style={{ color: C.onSurfaceVariant }}>
            Send us your resume and a brief introduction. We&apos;re always looking for talented, driven professionals to join our growing team.
          </p>
          <a
            href="mailto:careers@virtualassistantphilippines.io?subject=Career%20Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: gradient }}
          >
            Send Your Application
            <svg width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

const careersFaqs = [
  {
    q: "What does the hiring process look like?",
    a: "Our process has four steps: (1) submit your application online, (2) complete a skills assessment tailored to your role, (3) attend a video interview with our recruitment team, and (4) receive an offer — typically within 5–7 business days of applying.",
  },
  {
    q: "Do I need to be in the Philippines to apply?",
    a: "Yes — all of our current roles are for professionals based in the Philippines. Since every position is 100% remote, you can work from anywhere in the country.",
  },
  {
    q: "What locations do you hire from?",
    a: "We hire from all regions of the Philippines — Metro Manila, Cebu, Davao, Clark, Iloilo, and beyond. As long as you have a reliable internet connection and a quiet workspace, you're eligible.",
  },
  {
    q: "What equipment or setup do I need?",
    a: "You'll need a computer or laptop (minimum 8 GB RAM), a stable internet connection (at least 10 Mbps), a noise-cancelling headset, and a quiet, dedicated workspace.",
  },
  {
    q: "Are there opportunities for career growth?",
    a: "Absolutely. We offer ongoing training, mentorship, and clear advancement paths. Many of our team leads and managers started as virtual assistants and grew within the company.",
  },
  {
    q: "Is Virtual Assistants Philippines an equal opportunity employer?",
    a: "Yes. We are committed to creating a diverse and inclusive workplace. We do not discriminate based on race, religion, gender, sexual orientation, age, disability, or any other protected status. All qualified applicants receive equal consideration.",
  },
];

function CareersFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24" style={{ backgroundColor: C.surface }}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-14" style={{ color: C.onSurface }}>
          Careers FAQ
        </h2>
        <div className="space-y-3">
          {careersFaqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "white",
                border: `1px solid ${C.outlineVariant}`,
                boxShadow: open === i ? "0 20px 40px rgba(11, 20, 55, 0.06)" : "none",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left font-bold transition-colors hover:bg-gray-50/50"
                style={{ color: C.onSurface }}
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  style={{ color: C.onSurfaceVariant }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
