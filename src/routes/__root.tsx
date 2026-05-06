import {
  createRootRoute,
  Outlet,
  Link,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";

function RootComponent() {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2 font-bold tracking-tight text-gray-900 min-w-0">
              <img src="/images/logo-icon.svg" alt="VA" width={28} height={28} className="flex-shrink-0" />
              <span className="text-base md:text-2xl truncate" style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>Virtual Assistants Philippines</span>
            </Link>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center px-3 md:px-5 py-2 md:py-2.5 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Get a Free Quote
            </a>
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
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
});
