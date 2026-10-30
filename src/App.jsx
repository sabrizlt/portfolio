import React from "react";
import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import AboutSection from "./components/AboutSection";
import ScrollReveal from "./components/ScrollReveal";
import SectionHeading from "./components/SectionHeading";
import Technologie from "./components/Technologie";
import CVButton from "./components/CVButton";

const socials = [
  { label: "GitHub", href: "https://github.com/sabrizlt" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sabri-zaltni-704310270/" },
  { label: "Instagram", href: "https://www.instagram.com/sabri.zlt/" },
  { label: "Facebook", href: "https://www.facebook.com/sabri.zaltini/?locale=it_IT" },
];

export default function App() {
  return (
    <div id="top" className="relative min-h-screen bg-ink text-paper font-sans antialiased">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="pt-40 pb-24 md:pt-48 md:pb-32">
          <ScrollReveal once>
            <p className="flex items-center gap-2.5 text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Full-Stack Developer · disponibile da remoto
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80} once>
            <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-semibold tracking-[-0.035em] leading-[1.05]">
              Sviluppo siti e app su misura per far crescere la tua attività.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160} once>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
              Sono Sabri. Trasformo idee in prodotti concreti, curati nei dettagli, funzionali e semplici da usare.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} once>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#contatti" className="px-6 py-3 rounded-full bg-paper text-ink font-medium hover:bg-white transition-colors">
                Parliamo del tuo progetto
              </a>
              <CVButton className="px-6 py-3 rounded-full border border-line text-paper font-medium hover:border-faint transition-colors disabled:opacity-60" />
            </div>
          </ScrollReveal>
        </section>

        <section id="progetti" className="py-16 md:py-24">
          <SectionHeading title="Progetti" intro="Alcuni dei lavori che ho realizzato." />
          <ProjectGrid />
        </section>

        <section id="about" className="py-16 md:py-24">
          <SectionHeading title="Percorso" />
          <AboutSection />
        </section>

        <section id="technologie" className="py-16 md:py-24">
          <SectionHeading title="Tecnologie" />
          <Technologie />
        </section>

        <section id="contatti" className="py-16 md:py-24">
          <ScrollReveal>
            <div className="rounded-3xl border border-line bg-surface p-8 md:p-16">
              <h2 className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Hai un progetto in mente? Parliamone.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-muted leading-relaxed">
                Lavoro da Comiso, in Sicilia, e da remoto con clienti in Italia e all'estero. Di solito rispondo entro poche ore.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-4">
                <a href="mailto:sabrizaltni@gmail.com" className="px-6 py-3 w-fit rounded-full bg-paper text-ink font-medium hover:bg-white transition-colors">
                  sabrizaltni@gmail.com
                </a>
                <a href="tel:+3933485575390" className="text-muted hover:text-paper transition-colors">
                  +39 334 855 75390
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <footer className="border-t border-line py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-faint">
          <p>© 2026 Sabri Zaltni</p>
          <div className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
