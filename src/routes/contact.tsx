import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { personal } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Neethila Ransika Silva" },
      { name: "description", content: "Get in touch with Neethila Ransika Silva. Open to collaboration, opportunities, and interesting conversations." },
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
    <div>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <p className="text-sm uppercase tracking-widest text-primary mb-3 font-semibold">Contact</p>
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter">
          Let's build something <span className="italic font-light text-accent">together</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Got a project, opportunity, or just want to say hi? Drop a message — I usually reply within a day or two.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-5 gap-10">
        {/* Form */}
        <form onSubmit={onSubmit} className="md:col-span-3 rounded-3xl border border-border bg-card p-8 space-y-5">
          <div>
            <label htmlFor="name" className="text-sm font-medium block mb-2">Name</label>
            <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2">Email</label>
            <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium block mb-2">Message</label>
            <textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-colors">
            Send message <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Direct links */}
        <aside className="md:col-span-2 space-y-4">
          <a href={`mailto:${personal.email}`} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Mail className="w-5 h-5" /></div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="font-medium text-sm break-all">{personal.email}</p>
            </div>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent"><Linkedin className="w-5 h-5" /></div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="font-medium text-sm">@ransikasilva</p>
            </div>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center"><Github className="w-5 h-5" /></div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="font-medium text-sm">@ransikasilva</p>
            </div>
          </a>
        </aside>
      </section>
    </div>
  );
}