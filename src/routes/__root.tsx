import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

function SiteHeader() {
  const linkBase = "text-sm font-medium hover:text-primary transition-colors";
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-display font-extrabold text-xl tracking-tight">
          neethila<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/portfolio" className={linkBase} activeProps={{ className: "text-primary" }}>Portfolio</Link>
          <Link to="/certifications" className={linkBase} activeProps={{ className: "text-primary" }}>Certifications</Link>
          <Link to="/contact" className={linkBase} activeProps={{ className: "text-primary" }}>Contact</Link>
        </nav>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors">
          Let's talk
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} {personal.name}. Built with care.</span>
        <div className="flex items-center gap-5">
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
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
