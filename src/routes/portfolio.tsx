import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Star, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Neethila Ransika Silva" },
      { name: "description", content: "Selected projects across AI/ML, full-stack web, mobile, and computer vision." },
      { property: "og:title", content: "Portfolio — Neethila Ransika Silva" },
      { property: "og:description", content: "Selected projects across AI/ML, full-stack web, mobile, and computer vision." },
    ],
  }),
});

function PortfolioPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10 space-y-6">
      {/* Hero tile */}
      <div className="rounded-[2.5rem] bg-card border border-border p-8 md:p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary flex items-center gap-2 relative z-10">
          <span className="w-2 h-2 rounded-full bg-primary" /> Portfolio / Work
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mt-5 relative z-10 leading-[0.95]">
          Selected <span className="text-stroke">work</span>
        </h1>
        <p className="mt-5 max-w-xl text-foreground/60 relative z-10">
          {projects.length} projects spanning AI agents, computer vision, full-stack web, mobile apps, and developer tools.
        </p>
      </div>

      {/* Featured */}
      <div className="flex items-center gap-3">
        <Star className="w-4 h-4 text-primary fill-primary" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Featured / 01</span>
        <span className="flex-1 h-px bg-foreground/10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.map((p, i) => (
          <article
            key={p.title}
            className={`rounded-[2.5rem] p-8 group hover:-translate-y-1 transition-transform ${
              i === 0 ? "bg-foreground text-background" : "bg-card border border-border"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`font-mono text-[10px] uppercase tracking-widest ${i === 0 ? "text-secondary" : "text-primary"}`}>
                {p.date}
              </span>
              <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight">{p.title}</h3>
            <p className={`text-sm mt-3 ${i === 0 ? "text-white/60" : "text-foreground/60"}`}>{p.description}</p>
            {p.highlights && (
              <ul className={`mt-5 space-y-1.5 text-sm ${i === 0 ? "text-white/70" : "text-foreground/70"}`}>
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className={i === 0 ? "text-secondary" : "text-primary"}>▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {p.technologies.map((t) => (
                <span key={t} className={`font-mono text-[10px] uppercase px-2 py-1 rounded-full ${i === 0 ? "bg-white/10" : "bg-muted"}`}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Others */}
      <div className="flex items-center gap-3 pt-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">All Projects / 02</span>
        <span className="flex-1 h-px bg-foreground/10" />
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {others.map((p, i) => (
          <article
            key={p.title}
            className="mb-4 break-inside-avoid group rounded-[2rem] overflow-hidden bg-card border border-border hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading={i < 3 ? "eager" : "lazy"}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold leading-tight">{p.title}</h3>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View demo"
                    className="shrink-0 rounded-full p-1.5 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {p.github && !p.demo && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source"
                    className="shrink-0 rounded-full p-1.5 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-foreground/60 mt-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.technologies.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase bg-muted rounded-full px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}