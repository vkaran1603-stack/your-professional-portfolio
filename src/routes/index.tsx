import { createFileRoute } from "@tanstack/react-router";
import shreyaAsset from "@/assets/shreya.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreya Upadhyay — CS (AI/ML) Student & Developer" },
      { name: "description", content: "Portfolio of Shreya Upadhyay — B.Tech CS (AI/ML) student building AI, IoT and full-stack projects. SIH 2025 Finalist." },
      { property: "og:title", content: "Shreya Upadhyay — Portfolio" },
      { property: "og:description", content: "B.Tech CS (AI/ML) student. AI, IoT & full-stack projects. SIH 2025 Finalist." },
      { property: "og:image", content: shreyaAsset.url },
    ],
  }),
  component: Portfolio,
});

const skills = {
  Languages: ["Java", "Python", "C++"],
  Frontend: ["React", "HTML", "JavaScript", "CSS"],
  Tools: ["GitHub", "LeetCode", "ESP32", "DSA"],
};

const projects = [
  {
    name: "Industrial Fault Detection",
    period: "Oct 2025 — Jan 2026",
    tags: ["IoT", "AI/ML", "ESP32"],
    desc: "IoT + AI based fault detection system for real-time industrial equipment monitoring. Hands-on work with ESP32, sensor integration, data analytics and predictive maintenance.",
  },
  {
    name: "SwiftGo",
    period: "Apr 2025 — May 2025",
    tags: ["Full-Stack", "Web", "Auth"],
    desc: "A ride-sharing platform connecting drivers and passengers on the same route via real-time ride matching and booking. Built full-stack with database design, authentication and transport system architecture.",
  },
];

const certifications = [
  { org: "NPTEL", title: "Python Certification", year: "2025" },
  { org: "CISCO", title: "Cyber-Security", year: "2026" },
  { org: "Accenture", title: "Acquiring Data", year: "2026" },
  { org: "TCS", title: "AI-For-All Certification", year: "2026" },
];

const education = [
  { degree: "B.Tech — Computer Science (AI/ML)", school: "Kashi Institute of Technology", year: "2024 — 2028" },
  { degree: "12th — State Board (BSEB)", school: "Rajya Samposhiy Girls' Higher School", year: "66.6%" },
  { degree: "10th — CBSE Board", school: "Narkatiaganj Central Public School", year: "75.5%" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Shreya<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#education" className="hover:text-foreground transition">Education</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a href="mailto:upadhyayshreya130@gmail.com" className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
            Hire me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Open to internships & collaborations
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.02]">
              Hi, I'm Shreya —<br />
              <span className="italic text-primary">building intelligent</span><br />
              software, one project at a time.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              B.Tech Computer Science (AI/ML) student passionate about AI, IoT and full-stack development. Smart India Hackathon 2025 Finalist.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                View my work
              </a>
              <a href="https://github.com/Shreya-160" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-border hover:bg-card transition">
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="md:col-span-2 relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-gold)", filter: "blur(60px)", opacity: 0.25 }} />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-glow)" }}>
              <img src={shreyaAsset.url} alt="Shreya Upadhyay" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-4 py-3 text-sm shadow-lg">
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="font-medium">2nd Year @ KIT</div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12">
          <h2 className="text-3xl md:text-4xl font-display">About</h2>
          <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground">
              I'm a CS undergrad with a strong foundation in Java, Python and modern web development — and a soft spot for building things that interact with the real world.
            </p>
            <p>
              I learn by building: industrial IoT systems, ride-sharing platforms, DSA grinding on LeetCode. I care about writing clean code, shipping working prototypes, and growing through every project I touch.
            </p>
            <p>
              Quick learner, team player, and always curious about the next emerging tech to dig into.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-display">Selected projects</h2>
          <span className="text-sm text-muted-foreground hidden md:block">2025 — 2026</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-display font-medium">{p.name}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-3">{p.period}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Achievement */}
        <div className="mt-8 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-secondary flex items-center gap-6">
          <div className="text-5xl">🏆</div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-1">Achievement</div>
            <div className="text-xl font-display">Smart India Hackathon 2025 — Finalist</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12">
          <h2 className="text-3xl md:text-4xl font-display">Skills & tools</h2>
          <div className="md:col-span-2 space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{category}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="px-4 py-2 rounded-lg bg-card border border-border text-sm hover:border-primary/50 hover:text-primary transition">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.degree} className="pl-5 border-l-2 border-primary/40">
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-sm text-muted-foreground mt-1">{e.school}</div>
                  <div className="text-xs text-primary mt-1">{e.year}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-8">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.title} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.org}</div>
                    <div className="font-medium mt-0.5">{c.title}</div>
                  </div>
                  <span className="text-sm text-primary">{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Let's <span className="italic text-primary">build</span> something together.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Open to internships, project collaborations, or just a good tech chat.
          </p>
          <a href="mailto:upadhyayshreya130@gmail.com" className="inline-block text-2xl md:text-3xl font-display text-primary hover:underline underline-offset-8">
            upadhyayshreya130@gmail.com
          </a>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            <a href="tel:+916203321501" className="px-5 py-3 rounded-full border border-border hover:bg-card transition text-sm">📞 +91 62033 21501</a>
            <a href="https://github.com/Shreya-160" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-border hover:bg-card transition text-sm">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/shreya-upadhyay-445109337" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-border hover:bg-card transition text-sm">LinkedIn ↗</a>
            <a href="https://leetcode.com/u/shreyaxupadhyay/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full border border-border hover:bg-card transition text-sm">LeetCode ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shreya Upadhyay · Designed & built with care.
      </footer>
    </div>
  );
}
