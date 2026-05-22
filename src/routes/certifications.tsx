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

function CertificationsPage() {
  const total = Object.values(certifications).reduce((n, arr) => n + arr.length, 0);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm uppercase tracking-widest text-primary mb-3 font-semibold">Certifications</p>
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter">
          Always <span className="italic font-light text-accent">learning</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {total} certifications across {Object.keys(certifications).length} categories — from Stanford & DeepLearning.AI to Google, AWS, and Meta.
        </p>
      </section>

      {Object.entries(certifications).map(([category, items]) => (
        <section key={category} className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold">{category}</h2>
            <span className="text-sm text-muted-foreground">{items.length} certifications</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((c) => (
              <article key={c.title} className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <Award className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-display text-base font-bold leading-snug">{c.title}</h3>
                <p className="text-sm text-accent font-medium mt-2">{c.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.date}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="h-16" />
    </div>
  );
}