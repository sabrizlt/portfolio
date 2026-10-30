import React from "react";
import ScrollReveal from "./ScrollReveal";

const timeline = [
  { date: "Nov 2023 – oggi", role: "Full-Stack Developer, Technoparts S.r.l.", detail: "Sviluppo e ottimizzazione di applicativi interni." },
  { date: "2024 – oggi", role: "Progetti per clienti e personali", detail: "Siti, e-commerce e applicazioni, anche per l'estero." },
  { date: "2022 – 2023", role: "Full-Stack Development, Epicode", detail: "L'inizio del mio percorso nello sviluppo." },
];

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
      <ScrollReveal className="md:col-span-3 space-y-5 text-lg text-muted leading-relaxed">
        <p>
          Mi occupo di sviluppo software dal 2022 e mi piace trasformare idee e necessità in soluzioni semplici, funzionali e curate nei dettagli.
        </p>
        <p>
          Oggi lavoro alla <span className="text-paper">Technoparts S.r.l.</span>, dove sviluppo applicativi interni. Nel tempo ho lavorato su applicazioni web e mobile, database, API e sistemi che richiedono una gestione attenta dei dati.
        </p>
        <p>Parlare con le persone e costruire ciò che serve davvero è la parte che preferisco.</p>
      </ScrollReveal>

      <ScrollReveal delay={80} className="md:col-span-2">
        <ol className="space-y-8">
          {timeline.map((item) => (
            <li key={item.date} className="border-t border-line pt-4">
              <p className="text-sm text-faint">{item.date}</p>
              <p className="mt-1 font-medium text-paper">{item.role}</p>
              <p className="mt-1 text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </div>
  );
}
