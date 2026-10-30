import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import AboutSection from "./components/AboutSection";
import ScrollReveal from "./components/ScrollReveal";
import SectionHeading from "./components/SectionHeading";
import Technologie from "./components/Technologie";

const socials = [
  { label: "GitHub", href: "https://github.com/sabrizlt" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sabri-zaltni-704310270/" },
  { label: "Instagram", href: "https://www.instagram.com/sabri.zlt/" },
  { label: "Facebook", href: "https://www.facebook.com/sabri.zaltini/?locale=it_IT" },
];

export default function App() {
  // Il riflesso del vetro segue il puntatore, con un solo ascoltatore per tutta la pagina.
  useEffect(() => {
    const onMove = (event) => {
      const glass = event.target.closest?.(".glass");
      if (!glass) return;
      const box = glass.getBoundingClientRect();
      glass.style.setProperty("--mx", `${event.clientX - box.left}px`);
      glass.style.setProperty("--my", `${event.clientY - box.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div id="top" className="relative min-h-screen font-sans">
      <div className="wallpaper" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />

        <main className="max-w-6xl mx-auto px-5 md:px-6">
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
              <div className="glass rounded-[2.5rem] px-8 py-16 md:py-24 text-center">
                <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.035em] leading-[1.05]">
                  Hai un progetto?<br />Parliamone.
                </h2>
                <p className="mt-6 mx-auto max-w-xl text-lg md:text-xl text-muted leading-relaxed">
                  Lavoro da Comiso, in Sicilia, e da remoto con clienti in Italia e all'estero. Di solito rispondo entro poche ore.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4">
                  <a href="mailto:sabrizaltni@gmail.com" className="button-solid px-7 py-3.5 rounded-full font-medium">
                    sabrizaltni@gmail.com
                  </a>
                  <a href="tel:+3933485575390" className="text-muted hover:text-paper transition-colors">
                    +39 334 855 75390
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </section>

          <footer className="pt-6 pb-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-faint">
            <p>© 2026 Sabri Zaltni</p>
            <div className="flex flex-wrap justify-center gap-6">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
                  {social.label}
                </a>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
