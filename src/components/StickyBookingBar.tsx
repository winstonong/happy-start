import { useState, useEffect, useRef, useCallback } from "react";

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);
  const crossedHalf = useRef(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPct = docHeight > 0 ? scrollY / docHeight : 0;
      const scrollingUp = scrollY < lastScrollY.current;

      if (scrollPct >= 0.5) {
        crossedHalf.current = true;
      }

      if (scrollPct < 0.1) {
        setVisible(false);
      } else if (crossedHalf.current) {
        if (scrollingUp) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }

      lastScrollY.current = scrollY;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = () => {
    const heroForm = document.getElementById("hubspot-v8-hero");
    const footerForm = document.getElementById("hubspot-v8-footer");
    const target = heroForm || footerForm;

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        const input = target.querySelector<HTMLInputElement>(
          'input:not([type="hidden"]):not([type="submit"])'
        );
        input?.focus();
      }, 800);
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div
      role="region"
      aria-label="Booking call-to-action"
      className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out motion-reduce:transition-opacity motion-reduce:duration-200"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : undefined,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div
        className="w-full bg-white border-t border-gray-200 flex items-center justify-between px-4 md:px-6 h-16 md:h-[72px]"
        style={{ boxShadow: "0 -4px 16px rgba(0, 0, 0, 0.06)" }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          {/* Left — headline (desktop only) */}
          <p
            className="hidden md:block text-base font-medium shrink-0"
            style={{ color: "#1F2937", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Ready to scale with virtual assistants?
          </p>

          {/* Centre — subline (desktop only) */}
          <p
            className="hidden md:block text-sm shrink-0"
            style={{ color: "#6B7280" }}
          >
            Book a free 15-minute consultation.
          </p>

          {/* Right — CTA */}
          <button
            onClick={handleClick}
            aria-label="Book a call"
            className="ml-auto flex-shrink-0 inline-flex items-center justify-center px-5 md:px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap w-[65%] md:w-auto"
          >
            Book a Call
            <span className="ml-2" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
