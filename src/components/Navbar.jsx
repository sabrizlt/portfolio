import React, { useEffect, useRef, useState } from "react";

const links = [
  { id: "progetti", label: "Progetti" },
  { id: "about", label: "Percorso" },
  { id: "technologie", label: "Tecnologie" },
  { id: "contatti", label: "Contatti" },
];

/* Barra sospesa in alto, su computer e sul telefono. */
export default function Navbar() {
  const [active, setActive] = useState(null);
  const [indicator, setIndicator] = useState(null);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? null : current));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const place = () => {
      const node = refs.current[active];
      setIndicator(node ? { left: node.offsetLeft, width: node.offsetWidth } : null);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  return (
    <nav className="fixed z-50 left-1/2 -translate-x-1/2 top-3 md:top-5">
      <div className="glass rounded-full p-1.5 flex items-center gap-1 w-max">
        <a href="#top" className="hidden md:block px-4 font-semibold tracking-tight">
          Sabri
        </a>
        <div className="relative flex">
          <span
            aria-hidden
            className="glass-pill absolute top-0 bottom-0 rounded-full"
            style={{
              left: indicator?.left ?? 0,
              width: indicator?.width ?? 0,
              opacity: indicator ? 1 : 0,
              transition: "left 0.5s cubic-bezier(0.3, 1.3, 0.5, 1), width 0.5s cubic-bezier(0.3, 1.3, 0.5, 1), opacity 0.3s",
            }}
          />
          {links.map(({ id, label }) => (
            <a
              key={id}
              ref={(node) => (refs.current[id] = node)}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative px-3 md:px-4 py-2 text-sm rounded-full transition-colors ${
                active === id ? "text-paper" : "text-muted hover:text-paper"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
