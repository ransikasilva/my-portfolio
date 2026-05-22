import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { personal } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Neethila Ransika Silva" },
      { name: "description", content: "Get in touch — open to collaboration, opportunities, and interesting conversations." },
      { property: "og:title", content: "Contact — Neethila Ransika Silva" },
      { property: "og:description", content: "Get in touch — open to collaboration, opportunities, and interesting conversations." },
    ],
  }),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10 space-y-6">
      {/* Hero */}
      <div className="rounded-[2.5rem] bg-card border border-border p-8 md:p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary opacity-20 blur-[100px] animate-pulse" />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary flex items-center gap-2 relative z-10">
          <span className="w-2 h-2 rounded-full bg-primary" /> Contact / Inbox
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mt-5 relative z-10 leading-[0.95]">
          Let's build <br />
          <span className="text-stroke">something</span> together.
        </h1>
        <p className="mt-5 max-w-xl text-foreground/60 relative z-10">
          Got a project, opportunity, or just want to say hi? Drop a message — I usually reply within a day or two.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-4">
        {/* Form tile */}
        <form onSubmit={onSubmit} className="md:col-span-7 rounded-[2.5rem] bg-card border border-border p-8 space-y-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Send a message</p>
          <div>
            <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 block mb-2">Name</label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 block mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 block mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-colors"
          >
            Send message <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Direct links */}
        <aside className="md:col-span-5 space-y-3">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-4 rounded-[2rem] bg-primary text-primary-foreground p-6 hover:-translate-y-1 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">Email</p>
              <p className="font-medium text-sm break-all">{personal.email}</p>
            </div>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-[2rem] bg-card border border-border p-6 hover:-translate-y-1 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="font-medium text-sm">@ransikasilva</p>
            </div>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-[2rem] bg-foreground text-background p-6 hover:-translate-y-1 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">GitHub</p>
              <p className="font-medium text-sm">@ransikasilva</p>
            </div>
          </a>
        </aside>
      </div>
    </div>
  );
}