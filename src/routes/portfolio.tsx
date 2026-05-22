import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Star } from "lucide-react";
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
    <div>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm uppercase tracking-widest text-primary mb-3 font-semibold">Portfolio</p>
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter">
          Selected <span className="italic font-light text-accent">work</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {projects.length} projects spanning AI agents, computer vision, full-stack web, mobile apps, and developer tools.
        </p>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-5 h-5 text-primary fill-primary" />
          <h2 className="font-display text-2xl font-bold">Featured</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <article key={p.title} className="group rounded-3xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-transform duration-300">
              <div className="overflow-hidden aspect-[16/10]">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                {p.date && <p className="text-xs text-muted-foreground mb-2">{p.date}</p>}
                <h3 className="font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-3">{p.description}</p>
                {p.highlights && p.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2"><span className="text-primary">▸</span><span>{h}</span></li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.technologies.map((t) => <span key={t} className="text-[10px] font-medium bg-muted rounded-full px-2 py-1">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All other projects in masonry */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-24">
        <h2 className="font-display text-2xl font-bold mb-8">All projects</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {others.map((p, i) => (
            <article key={p.title} className="mb-6 break-inside-avoid group rounded-3xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-transform duration-300">
              <div className="overflow-hidden">
                <img src={p.image} alt={p.title} loading={i < 3 ? "eager" : "lazy"} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold leading-tight">{p.title}</h3>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label="View demo" className="shrink-0 rounded-full p-1.5 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {p.github && !p.demo && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="View source" className="shrink-0 rounded-full p-1.5 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.technologies.map((t) => <span key={t} className="text-[10px] font-medium bg-secondary text-secondary-foreground rounded-full px-2 py-0.5">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}