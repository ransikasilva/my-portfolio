import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, Briefcase, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { personal, workExperience, education, technicalSkills, honorsAndAwards, workshopsAndEvents } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${personal.name} — ${personal.title}` },
      { name: "description", content: personal.tagline },
      { property: "og:title", content: `${personal.name} — ${personal.title}` },
      { property: "og:description", content: personal.tagline },
    ],
  }),
});

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-20">
      {eyebrow && <p className="text-sm uppercase tracking-widest text-primary mb-3 font-semibold">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-12">{title}</h2>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for collaborations & opportunities
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-black tracking-tighter">
              Hi, I'm <span className="text-primary">Neethila</span>.
              <br />
              Building <span className="italic font-light text-accent">intelligent</span> software.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              {personal.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-colors">
                View my work <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition-colors">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-display font-black text-7xl md:text-8xl shadow-2xl">
                {personal.initials}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section eyebrow="About" title="A bit about me">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{personal.bio.whoIAm}</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-accent" />
              <h3 className="font-display text-xl font-bold">What I Do</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{personal.bio.whatIDo}</p>
          </div>
        </div>
      </Section>

      {/* Work Experience */}
      <Section eyebrow="Experience" title="Where I've worked">
        <div className="space-y-6">
          {workExperience.map((w) => (
            <article key={w.company} className="rounded-3xl border border-border bg-card p-8 hover:border-primary/40 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">{w.title}</h3>
                  <p className="text-primary font-medium mt-1">{w.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{w.location} · {w.type}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted rounded-full px-3 py-1">{w.period}</span>
              </div>
              <ul className="space-y-2 mb-5 text-muted-foreground">
                {w.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3"><span className="text-primary mt-1.5">▸</span><span>{r}</span></li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {w.skills.map((s) => (
                  <span key={s} className="text-xs font-medium bg-muted rounded-full px-3 py-1">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section eyebrow="Education" title="Where I've studied">
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <article key={e.degree} className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight">{e.degree}</h3>
                  <p className="text-sm text-accent font-medium mt-1">{e.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">{e.period}</p>
                </div>
              </div>
              {e.details.length > 0 && (
                <ul className="text-sm text-muted-foreground space-y-1 mt-3 pl-8">
                  {e.details.map((d) => <li key={d}>• {d}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section eyebrow="Toolkit" title="Technical skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((s) => (
            <div key={s.category} className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold mb-4">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.skills.map((sk) => (
                  <span key={sk} className="text-xs font-medium bg-secondary text-secondary-foreground rounded-full px-3 py-1.5">{sk}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Honors */}
      <Section eyebrow="Recognition" title="Honors & awards">
        <div className="grid md:grid-cols-2 gap-6">
          {honorsAndAwards.map((h) => (
            <article key={h.title} className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary p-8">
              <Trophy className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold">{h.title}</h3>
              <p className="text-sm text-accent font-medium mt-1">{h.organization}</p>
              <p className="text-sm text-muted-foreground mt-3">{h.description}</p>
              <p className="text-sm mt-2">{h.details}</p>
              <p className="text-xs text-muted-foreground mt-4">{h.date}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Workshops */}
      <Section eyebrow="Community" title="Workshops & tech events">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {workshopsAndEvents.map((e, i) => (
            <article key={e.title} className="mb-6 break-inside-avoid group rounded-3xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-transform duration-300">
              <div className="overflow-hidden">
                <img src={e.image} alt={e.title} loading={i < 3 ? "eager" : "lazy"} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Award className="w-3 h-3" /> {e.date}
                </div>
                <h3 className="font-display text-lg font-bold leading-tight">{e.title}</h3>
                <p className="text-xs text-primary font-medium mt-1">{e.organizer}</p>
                <p className="text-sm text-muted-foreground mt-3">{e.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {e.tags.map((t) => <span key={t} className="text-[10px] font-medium bg-muted rounded-full px-2 py-0.5">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
