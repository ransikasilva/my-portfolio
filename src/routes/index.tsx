import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Trophy, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import {
  personal,
  workExperience,
  education,
  technicalSkills,
  honorsAndAwards,
  workshopsAndEvents,
  projects,
} from "@/data/portfolio";

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

const tickerStack = ["Python", "React", "TensorFlow", "Next.js", "PyTorch", "PostgreSQL", "LangChain", "Azure"];

function Tile({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-[2.5rem] relative overflow-hidden ${className}`}>{children}</div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary" />
      {children}
    </p>
  );
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{children}</span>
      <span className="flex-1 h-px bg-foreground/10" />
    </div>
  );
}

function Index() {
  const featured = projects[0];

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10 space-y-4">
      {/* ROW 1 — HERO + STATS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Hero */}
        <Tile className="md:col-span-8 bg-card border border-border p-8 md:p-12 shadow-sm min-h-[440px] flex flex-col justify-end">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary opacity-20 blur-[100px] animate-pulse" />
          <div className="relative z-10">
            <Eyebrow>Available for new challenges</Eyebrow>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter mt-5">
              NEETHILA
              <br />
              <span className="text-stroke">BUILDING</span>
              <br />
              INTELLIGENT
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-foreground/60 leading-relaxed">
              Software engineer bridging the gap between{" "}
              <span className="text-secondary font-semibold italic">machine learning</span> and high-performance web architecture.
            </p>
          </div>
        </Tile>

        {/* Stats */}
        <Tile className="md:col-span-4 bg-primary text-primary-foreground p-8 flex flex-col justify-between min-h-[440px]">
          <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">Active Deployments</div>
          <div>
            <div className="font-display text-[5rem] leading-none font-extrabold">{projects.length}+</div>
            <div className="mt-3 h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-white animate-shimmer" />
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-tighter opacity-80">
            AI & Full-Stack Projects / 2023 — 2026
          </div>
        </Tile>
      </div>

      {/* ROW 2 — ABOUT + TOOLKIT TICKER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <Tile className="md:col-span-4 bg-card border border-border p-8 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-display text-2xl font-extrabold shadow-inner">
              NS
            </div>
            <div>
              <h3 className="font-bold text-xl">{personal.name.split(" ").slice(0, 2).join(" ")}</h3>
              <p className="font-mono text-[10px] text-muted-foreground uppercase">Full-stack & AI/ML</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-foreground/70">
            Software Engineering undergraduate at the University of Westminster (IIT). Focused on AI agents, computer vision, and scalable cloud infra.
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-background border border-border rounded-full font-mono text-[10px] uppercase">Colombo, SL</span>
            <span className="px-3 py-1 bg-background border border-border rounded-full font-mono text-[10px] uppercase font-bold">Hybrid · Remote</span>
          </div>
        </Tile>

        <Tile className="md:col-span-8 bg-foreground text-background p-8 flex flex-col justify-between group min-h-[300px]">
          <div className="flex justify-between items-start">
            <h3 className="font-display text-3xl">Toolkit</h3>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <div className="w-2 h-2 bg-secondary rounded-full" />
            </div>
          </div>

          <div className="relative flex overflow-hidden py-4">
            <div className="flex shrink-0 whitespace-nowrap animate-marquee gap-8 pr-8">
              {tickerStack.map((s, i) => (
                <span
                  key={s}
                  className={`font-display text-5xl uppercase ${
                    i % 3 === 0 ? "text-white/20" : i % 3 === 1 ? "text-primary" : "text-secondary"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 whitespace-nowrap animate-marquee gap-8 pr-8" aria-hidden>
              {tickerStack.map((s, i) => (
                <span
                  key={`b-${s}`}
                  className={`font-display text-5xl uppercase ${
                    i % 3 === 0 ? "text-white/20" : i % 3 === 1 ? "text-primary" : "text-secondary"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="font-mono text-[10px] text-white/40 uppercase">Runtime · Node.js 20+</div>
            <div className="font-mono text-[10px] text-white/40 uppercase">Cloud · AWS / Azure</div>
            <div className="font-mono text-[10px] text-white/40 uppercase">AI · LangGraph · Pinecone</div>
          </div>
        </Tile>
      </div>

      {/* ROW 3 — FEATURED PROJECT + CORE STACK + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <Link
          to="/portfolio"
          className="md:col-span-6 rounded-[2.5rem] relative overflow-hidden bg-card border border-border p-8 h-[360px] flex flex-col group hover:-translate-y-0.5 transition-transform"
        >
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="bg-accent/20 text-foreground px-3 py-1 rounded-full font-mono text-[10px] font-bold">
              FEATURED PROJECT
            </span>
            <div className="font-mono text-[10px] opacity-40">01 / {projects.length}</div>
          </div>
          <h3 className="font-display text-3xl mb-2 relative z-10 group-hover:text-primary transition-colors leading-tight">
            {featured.title}
          </h3>
          <p className="text-sm text-foreground/50 max-w-sm relative z-10">{featured.description}</p>
          <div className="mt-auto relative z-10 flex items-center gap-2 font-bold text-sm border-b-2 border-foreground/5 group-hover:border-primary transition-colors pb-1 w-fit">
            View case study <ArrowUpRight className="w-4 h-4" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-background to-accent/20 rounded-full group-hover:scale-110 transition-transform duration-700" />
        </Link>

        <Tile className="md:col-span-3 bg-secondary p-8 flex flex-col justify-between">
          <div className="font-mono text-[10px] font-bold text-foreground/70 uppercase">Core Stack</div>
          <div className="font-display text-xl leading-tight text-white">
            Full-Stack
            <br />
            Engineering
            <br />
            System Design
            <br />
            AI Integration
          </div>
        </Tile>

        <Link
          to="/contact"
          className="md:col-span-3 rounded-[2.5rem] bg-background border-2 border-dashed border-foreground/15 p-8 flex flex-col justify-center items-center text-center group hover:border-primary transition-colors"
        >
          <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
          <h4 className="font-display text-lg mb-1">Start a project</h4>
          <p className="font-mono text-[10px] opacity-50 uppercase">Response &lt; 24h</p>
        </Link>
      </div>

      {/* ABOUT BLOCKS */}
      <SectionLabel className="pt-12">About / 01</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <Tile className="md:col-span-7 bg-card border border-border p-8">
          <Sparkles className="w-5 h-5 text-primary mb-3" />
          <h2 className="font-display text-2xl font-bold mb-3">Who I Am</h2>
          <p className="text-foreground/70 leading-relaxed">{personal.bio.whoIAm}</p>
        </Tile>
        <Tile className="md:col-span-5 bg-accent/30 p-8">
          <Briefcase className="w-5 h-5 text-foreground mb-3" />
          <h2 className="font-display text-2xl font-bold mb-3">What I Do</h2>
          <p className="text-foreground/70 leading-relaxed text-sm">{personal.bio.whatIDo}</p>
        </Tile>
      </div>

      {/* EXPERIENCE */}
      <SectionLabel className="pt-12">Experience / 02</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workExperience.map((w, i) => (
          <Tile key={w.company} className={`p-8 ${i === 0 ? "bg-foreground text-background" : "bg-card border border-border"}`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className={`font-mono text-[10px] uppercase tracking-widest ${i === 0 ? "text-secondary" : "text-primary"}`}>
                  {w.type}
                </div>
                <h3 className="font-display text-xl font-bold mt-2">{w.title}</h3>
                <p className={`text-sm mt-1 ${i === 0 ? "text-white/60" : "text-foreground/60"}`}>{w.company}</p>
              </div>
              <span className={`font-mono text-[10px] uppercase ${i === 0 ? "bg-white/10 text-white" : "bg-muted"} rounded-full px-3 py-1 whitespace-nowrap`}>
                {w.period}
              </span>
            </div>
            <ul className={`space-y-2 text-sm ${i === 0 ? "text-white/70" : "text-foreground/70"}`}>
              {w.responsibilities.slice(0, 4).map((r) => (
                <li key={r} className="flex gap-2">
                  <span className={i === 0 ? "text-secondary" : "text-primary"}>▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {w.skills.map((s) => (
                <span key={s} className={`font-mono text-[10px] uppercase px-2 py-1 rounded-full ${i === 0 ? "bg-white/10 text-white" : "bg-muted"}`}>
                  {s}
                </span>
              ))}
            </div>
          </Tile>
        ))}
      </div>

      {/* EDUCATION */}
      <SectionLabel className="pt-12">Education / 03</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {education.map((e, i) => {
          const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4"];
          const span = spans[i] ?? "md:col-span-4";
          const isHero = i === 0;
          return (
            <Tile key={e.degree} className={`${span} p-6 ${isHero ? "bg-accent/30" : "bg-card border border-border"}`}>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">{e.period}</p>
                  <h3 className="font-display text-lg font-bold leading-tight mt-1">{e.degree}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{e.institution}</p>
                  {e.details.length > 0 && (
                    <ul className="text-xs text-foreground/60 space-y-1 mt-3">
                      {e.details.map((d) => <li key={d}>• {d}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </Tile>
          );
        })}
      </div>

      {/* SKILLS */}
      <SectionLabel className="pt-12">Toolkit / 04</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {technicalSkills.map((s, i) => {
          const palette = ["bg-card border border-border", "bg-card border border-border", "bg-foreground text-background", "bg-card border border-border", "bg-primary text-primary-foreground", "bg-card border border-border"];
          const spans = ["md:col-span-6", "md:col-span-6", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-12"];
          const bg = palette[i] ?? "bg-card border border-border";
          const dark = bg.includes("foreground") || bg.includes("primary");
          return (
            <Tile key={s.category} className={`${spans[i]} ${bg} p-6`}>
              <p className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${dark ? "opacity-70" : "text-muted-foreground"}`}>
                {s.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.skills.map((sk) => (
                  <span
                    key={sk}
                    className={`text-xs font-medium rounded-full px-3 py-1.5 ${
                      dark ? "bg-white/10 text-white" : "bg-muted text-foreground"
                    }`}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </Tile>
          );
        })}
      </div>

      {/* HONORS */}
      <SectionLabel className="pt-12">Recognition / 05</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {honorsAndAwards.map((h, i) => (
          <Tile key={h.title} className={`p-8 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-accent/40"}`}>
            <Trophy className={`w-8 h-8 mb-4 ${i === 0 ? "text-white" : "text-foreground"}`} />
            <p className={`font-mono text-[10px] uppercase tracking-widest ${i === 0 ? "opacity-80" : "text-muted-foreground"}`}>
              {h.date}
            </p>
            <h3 className="font-display text-2xl font-extrabold mt-2">{h.title}</h3>
            <p className={`text-sm mt-2 ${i === 0 ? "opacity-90" : "text-foreground/70"}`}>{h.organization}</p>
            <p className="text-sm mt-3">{h.details}</p>
          </Tile>
        ))}
      </div>

      {/* WORKSHOPS */}
      <SectionLabel className="pt-12">Community / 06</SectionLabel>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {workshopsAndEvents.map((e, i) => (
          <article
            key={e.title}
            className="mb-4 break-inside-avoid group rounded-[2rem] overflow-hidden bg-card border border-border hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={e.image}
                alt={e.title}
                loading={i < 3 ? "eager" : "lazy"}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              <p className="font-mono text-[10px] uppercase text-muted-foreground mb-2">{e.date}</p>
              <h3 className="font-display text-lg font-bold leading-tight">{e.title}</h3>
              <p className="text-xs text-primary font-medium mt-1">{e.organizer}</p>
              <p className="text-sm text-foreground/60 mt-3">{e.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {e.tags.map((t) => (
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