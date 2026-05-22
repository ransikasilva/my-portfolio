import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [
      { title: "Certifications — Neethila Ransika Silva" },
      { name: "description", content: "23 certifications across Machine Learning & AI, Cybersecurity, Frameworks & Languages, and more." },
      { property: "og:title", content: "Certifications — Neethila Ransika Silva" },
      { property: "og:description", content: "23 certifications across Machine Learning & AI, Cybersecurity, Frameworks & Languages, and more." },
    ],
  }),
});

const tileBg = [
  "bg-card border border-border",
  "bg-foreground text-background",
  "bg-accent/30",
  "bg-primary text-primary-foreground",
];

function CertificationsPage() {
  const total = Object.values(certifications).reduce((n, arr) => n + arr.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10 space-y-6">
      {/* Hero */}
      <div className="rounded-[2.5rem] bg-card border border-border p-8 md:p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary flex items-center gap-2 relative z-10">
          <span className="w-2 h-2 rounded-full bg-primary" /> Certifications / Lab
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mt-5 relative z-10 leading-[0.95]">
          Always <span className="text-stroke">learning</span>.
        </h1>
        <p className="mt-5 max-w-xl text-foreground/60 relative z-10">
          {total} certifications across {Object.keys(certifications).length} categories — from Stanford & DeepLearning.AI to Google, AWS, and Meta.
        </p>
      </div>

      {Object.entries(certifications).map(([category, items], catIdx) => (
        <section key={category} className="space-y-4">
          <div className="flex items-center gap-3 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {String(catIdx + 1).padStart(2, "0")} / {category}
            </span>
            <span className="flex-1 h-px bg-foreground/10" />
            <span className="font-mono text-[10px] uppercase text-muted-foreground">{items.length}</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((c, i) => {
              const bg = tileBg[(catIdx + i) % tileBg.length];
              const dark = bg.includes("foreground") || bg.includes("primary");
              return (
                <article key={c.title} className={`rounded-[1.5rem] p-5 ${bg}`}>
                  <Award className={`w-5 h-5 mb-3 ${dark ? "" : "text-primary"}`} />
                  <h3 className="font-display text-base font-bold leading-snug">{c.title}</h3>
                  <p className={`text-sm mt-2 ${dark ? "opacity-80" : "text-foreground/70"}`}>{c.issuer}</p>
                  <p className={`font-mono text-[10px] uppercase mt-1 ${dark ? "opacity-60" : "text-muted-foreground"}`}>{c.date}</p>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}