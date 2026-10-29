import React from 'react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    id: 1,
    title: "Scrocchia80.no",
    category: "E-Commerce & Food Tech",
    desc: "Piattaforma e-commerce chiavi in mano sviluppata con WordPress e WooCommerce per un'attività in Norvegia. Gestisce la vendita e la logistica di basi pizza, impasti pronti e prodotti artigianali ad alto flusso di ordini.",
    tags: ["WordPress", "WooCommerce", "E-Commerce", "Business Launch"],
    link: "https://scrocchia80.no",
    type: "Production"
  },
  {
    id: 2,
    title: "Appointment-geb.com",
    category: "Full-Stack Web Application",
    desc: "Applicazione web enterprise dedicata alla gestione e prenotazione degli appuntamenti per barberie. Sistema di schedulazione in tempo reale con selezione operatore, servizio, data e slot orari ottimizzati.",
    tags: ["React", "Java Spring Boot", "PostgreSQL", "REST API"],
    link: "https://appointment-geb.com",
    type: "Production"
  },
  {
    id: 3,
    title: "Love-Quotes.com",
    category: "Web Publishing & Community",
    desc: "Sito web sviluppato in WordPress per un digital creator con una vasta community Instagram di aforismi. Il portale traccia l'intero progresso, la timeline e i contenuti editoriali del brand.",
    tags: ["WordPress", "CSS Customization", "Community Hub"],
    link: "https://love-quotes.com",
    type: "Production"
  },
  {
    id: 4,
    title: "Sakura-Academy-Biella.it",
    category: "Sport & Martial Arts",
    desc: "Sito web per un'accademia di arti marziali a Biella: presentazione dei corsi di judo, brazilian jiu jitsu, grappling, kick boxing e corsi per bambini, con documenti e moduli per gli iscritti.",
    tags: ["Web Design", "Responsive", "Client Work"],
    link: "https://sakura-academy-biella.it",
    type: "Production"
  },
  {
    id: 5,
    title: "Enterprise Internal Applications",
    category: "Corporate Software",
    desc: "Sviluppo e manutenzione di applicativi interni aziendali ad alte prestazioni. Ottimizzazione di flussi dati complessi tramite API JSON stabili e manipolazione di database relazionali.",
    tags: ["React", "PHP", "Relational DB", "JSON APIs"],
    link: null,
    type: "Internal Work"
  }
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <ScrollReveal
          key={project.id}
          delay={i * 90}
          direction={i % 2 === 0 ? 'left' : 'right'}
        >
          <div
            className="relative p-8 bg-black border border-neutral-900 hover:border-emerald-500/40 transition-all duration-500 group flex flex-col justify-between h-full hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-25px_rgba(16,185,129,0.35)]"
          >
            {/* Riflesso ad angolo che appare al hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_55%)]" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1 border border-neutral-900 uppercase tracking-wider">
                  // {project.category}
                </span>
                <span className="text-[10px] font-mono text-neutral-600 uppercase">
                  {project.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white font-mono group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-sm mt-4 leading-relaxed font-sans">
                {project.desc}
              </p>
            </div>

            <div className="mt-8 space-y-6 relative">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-neutral-950 text-neutral-500 px-2.5 py-1 border border-neutral-900 group-hover:border-neutral-800 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors pt-2 cursor-none"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1 inline-flex items-center gap-2">
                    [ lancia_sito_web ] ↗
                  </span>
                </a>
              ) : (
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-700 pt-2 select-none">
                  [ codice_proprietario_protetto ]
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}