import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { personal } from "@/data/portfolio";
import { Mail, Github, Linkedin } from "lucide-react";

function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link =
    "text-sm font-semibold tracking-tight text-foreground/70 hover:text-primary transition-colors";

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center rounded-full bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg shadow-black/5 transition-all duration-500 ${
        scrolled ? "gap-4 px-4 py-2" : "gap-6 px-6 py-3"
      }`}
    >
      <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span
          className={`font-display font-extrabold tracking-tight transition-all duration-500 ${
            scrolled ? "hidden" : "inline text-sm"
          }`}
        >
          neethila.
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className={link} activeOptions={{ exact: true }} activeProps={{ className: "!text-primary" }}>
          Home
        </Link>
        <Link to="/portfolio" className={link} activeProps={{ className: "!text-primary" }}>
          Work
        </Link>
        <Link to="/certifications" className={link} activeProps={{ className: "!text-primary" }}>
          Lab
        </Link>
        <Link to="/contact" className={link} activeProps={{ className: "!text-primary" }}>
          Contact
        </Link>
      </div>
      <div className="h-4 w-px bg-foreground/10" />
      <Link
        to="/contact"
        className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors"
      >
        Let's talk
      </Link>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} — {personal.name} / Built with care
        </span>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href={`mailto:${personal.email}`} className="hover:text-foreground transition-colors" aria-label="Email"><Mail className="w-4 h-4" /></a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub"><Github className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Neethila Ransika Silva — Software Engineer & AI Enthusiast" },
      { name: "description", content: "Portfolio of Neethila Ransika Silva — Software Engineering undergraduate building AI/ML, computer vision, and full-stack systems." },
      { name: "author", content: "Neethila Ransika Silva" },
      { property: "og:title", content: "Neethila Ransika Silva — Software Engineer & AI Enthusiast" },
      { property: "og:description", content: "Software Engineering undergraduate building AI/ML, computer vision, and full-stack systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <FloatingNav />
        <main className="flex-1 pt-24"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
