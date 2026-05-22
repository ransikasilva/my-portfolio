import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import p7 from "@/assets/project-7.jpg";
import p8 from "@/assets/project-8.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Projects & Case Studies" },
      { name: "description", content: "A vibrant portfolio showcasing selected creative projects, case studies, and experiments." },
    ],
  }),
});

const projects = [
  { img: p1, title: "Chroma Field", tag: "Art Direction", year: "2025", tint: "bg-[oklch(0.95_0.08_30)]" },
  { img: p2, title: "Drift OS", tag: "Product Design", year: "2025", tint: "bg-[oklch(0.92_0.07_300)]" },
  { img: p3, title: "Loud Type", tag: "Typography", year: "2024", tint: "bg-[oklch(0.96_0.1_95)]" },
  { img: p4, title: "Mintwave Studio", tag: "Branding", year: "2024", tint: "bg-[oklch(0.93_0.08_180)]" },
  { img: p5, title: "Issue 07", tag: "Editorial", year: "2024", tint: "bg-[oklch(0.96_0.12_95)]" },
  { img: p6, title: "Bloom Render", tag: "3D / CGI", year: "2025", tint: "bg-[oklch(0.92_0.07_350)]" },
  { img: p7, title: "Casa Coral", tag: "Spatial", year: "2023", tint: "bg-[oklch(0.93_0.09_30)]" },
  { img: p8, title: "Pulse Dashboard", tag: "UI / Data", year: "2025", tint: "bg-[oklch(0.93_0.08_180)]" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#top" className="font-display font-extrabold text-xl tracking-tight">
            studio<span className="text-primary">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#work" className="hover:text-primary transition">Work</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition">
            Let's talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for new projects — Summer 2026
        </div>
        <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] font-black tracking-tighter">
          Building
          <span className="inline-block mx-3 -rotate-2 px-4 bg-primary text-primary-foreground rounded-2xl">
            vibrant
          </span>
          <br />
          things on the
          <span className="italic font-light text-accent"> internet.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          A selection of projects spanning brand systems, product design, editorial,
          and the occasional weird experiment. Pick anything below.
        </p>
      </section>

      {/* Masonry */}
      <section id="work" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Selected work</h2>
          <span className="text-sm text-muted-foreground">{projects.length} projects</span>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`mb-6 break-inside-avoid group cursor-pointer rounded-3xl overflow-hidden border border-border ${p.tint} hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.tag} · {p.year}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 group-hover:rotate-45 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-foreground text-background py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-widest text-background/60">About</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.15] font-light tracking-tight">
              I'm an independent designer & maker working across brand,
              <span className="text-primary font-bold"> product</span>, and the
              <span className="text-accent font-bold"> playful edges</span> in between.
              Currently shipping from anywhere with good coffee.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div><div className="text-3xl font-display font-bold">8+</div><div className="text-background/60 mt-1">years</div></div>
              <div><div className="text-3xl font-display font-bold">60+</div><div className="text-background/60 mt-1">projects</div></div>
              <div><div className="text-3xl font-display font-bold">14</div><div className="text-background/60 mt-1">countries</div></div>
              <div><div className="text-3xl font-display font-bold">∞</div><div className="text-background/60 mt-1">curiosity</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-32 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Get in touch</p>
        <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter leading-none">
          Got something
          <br />
          <span className="italic font-light text-primary">interesting?</span>
        </h2>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-3 mt-12 rounded-full bg-foreground text-background px-8 py-4 text-lg font-medium hover:bg-primary transition"
        >
          <Mail className="w-5 h-5" /> hello@example.com
        </a>
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 — Built with care.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Twitter</a>
            <a href="#" className="hover:text-foreground transition">Instagram</a>
            <a href="#" className="hover:text-foreground transition">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
