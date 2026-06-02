import {
  createRootRoute,
  Outlet,
  Link,
  HeadContent,
  Scripts,
  ScriptOnce,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { StickyBookingBar } from "../components/StickyBookingBar";
import appCss from "../styles.css?url";

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBZB3GH2');`;

function RootComponent() {
  const router = useRouter();

  useEffect(() => {
    const unsub = router.subscribe("onResolved", (evt) => {
      (window as any).dataLayer?.push({
        event: "page_view",
        page_path: evt.toLocation.pathname,
        page_title: document.title,
      });
    });
    return unsub;
  }, [router]);

  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={appCss} />
        {/* Critical inline CSS: hides the body until the bundled stylesheet has parsed and the
            end-of-body boot script reveals it, preventing raw SSR HTML from flashing. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html,body{background:#ffffff;color:#1C1C1C;font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;margin:0}
              body{opacity:0;transition:opacity .18s ease-out}
              html.app-ready body{opacity:1}
            `,
          }}
        />
        <noscript><style>{`body{opacity:1!important}`}</style></noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <ScriptOnce children={gtmScript} />
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBZB3GH2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight text-gray-900 min-w-0 group">
              <img src="/images/logo-icon.svg" alt="VAP logo" width={32} height={32} className="flex-shrink-0 transition-transform group-hover:rotate-[-6deg]" />
              <span className="text-base md:text-xl truncate leading-none" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
                Virtual Assistants <span className="text-blue-700">Philippines</span>
              </span>
            </Link>
          </div>
        </nav>
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="bg-gray-900 text-gray-400 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-center">
            &copy; {new Date().getFullYear()} Virtual Assistants Philippines. All rights reserved.
          </div>
        </footer>
        <ScriptOnce
          children={`(function(){
            var reveal = function(){ document.documentElement.classList.add('app-ready'); };
            var done = false;
            var safeReveal = function(){ if (!done) { done = true; requestAnimationFrame(reveal); } };
            if (document.fonts && document.fonts.ready) document.fonts.ready.then(safeReveal, safeReveal);
            setTimeout(safeReveal, 450);
          })();`}
        />
        
        <ScriptOnce
          children={`
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                var s = document.createElement('script');
                s.id = 'chilipiper-concierge';
                s.src = 'https://bruntwork.chilipiper.com/concierge-js/cjs/concierge.js';
                s.crossOrigin = 'anonymous';
                s.type = 'text/javascript';
                document.body.appendChild(s);
              });
            }
          `}
        />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1>404 — Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { title: "Virtual Assistants Philippines — Hire Remote Staff from $4/hr" },
      { name: "description", content: "Full-time remote staff from $4-$8/hr. Hire in days, not months. Cancel anytime." },
      { property: "og:title", content: "Virtual Assistants Philippines — Hire Remote Staff from $4/hr" },
      { name: "twitter:title", content: "Virtual Assistants Philippines — Hire Remote Staff from $4/hr" },
      { property: "og:description", content: "Full-time remote staff from $4-$8/hr. Hire in days, not months. Cancel anytime." },
      { name: "twitter:description", content: "Full-time remote staff from $4-$8/hr. Hire in days, not months. Cancel anytime." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/eb7257fe-8b93-4acd-98b9-1a56c95d2bd2" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/eb7257fe-8b93-4acd-98b9-1a56c95d2bd2" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [],
  }),
});
