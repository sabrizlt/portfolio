import React from "react";
import ScrollReveal from "./ScrollReveal";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Scrocchia 80",
    category: "E-commerce · Norvegia",
    desc: "Il negozio online di un'attività norvegese che vende basi pizza, impasti pronti e prodotti artigianali, dal catalogo alla gestione degli ordini.",
    tags: ["WordPress", "WooCommerce"],
    link: "https://scrocchia80.no",
    image: "projects/scrocchia.jpg",
  },
  {
    title: "Golden Era Barbers",
    category: "Web app su misura",
    desc: "Prenotazioni online per una barberia: il cliente sceglie operatore, servizio, data e orario in pochi passaggi.",
    tags: ["React", "Java Spring Boot", "PostgreSQL"],
    link: "https://appointment-geb.com",
    image: "projects/appointment.jpg",
  },
  {
    title: "Love Quotes",
    category: "Sito per creator",
    desc: "La casa online di un digital creator con una grande community Instagram di aforismi: libro, negozio e contenuti del brand.",
    tags: ["WordPress", "CSS su misura"],
    link: "https://love-quotes.com",
    image: "projects/love-quotes.jpg",
  },
  {
    title: "Sakura Academy",
    category: "Sito per palestra · Biella",
    desc: "Il sito di un'accademia di arti marziali: corsi e orari, storia della scuola e richiesta della prova gratuita.",
    tags: ["WordPress"],
    link: "https://sakura-academy-biella.it",
    image: "projects/sakura.jpg",
  },
];

export default function ProjectGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={(i % 2) * 90}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group block h-full rounded-[2rem] p-3 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[1.4rem]">
                <img
                  src={base + project.image}
                  alt={`Il sito ${project.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-sm text-faint">{project.category}</p>
                <h3 className="mt-1.5 text-2xl font-semibold tracking-tight">
                  {project.title}
                  <span aria-hidden className="inline-block ml-2 text-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="glass-pill px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="glass rounded-[2rem] p-8 md:flex md:items-baseline md:justify-between gap-12">
          <div className="md:w-1/3 shrink-0">
            <p className="text-sm text-faint">Software aziendale</p>
            <h3 className="mt-1.5 text-2xl font-semibold tracking-tight">Applicativi interni</h3>
          </div>
          <div className="mt-3 md:mt-0">
            <p className="text-muted leading-relaxed">
              Sviluppo e manutenzione di applicativi interni: flussi di dati, API JSON e database relazionali. Il codice è proprietario, quindi non è pubblico.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "PHP", "SQL"].map((tag) => (
                <span key={tag} className="glass-pill px-3 py-1 rounded-full text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
