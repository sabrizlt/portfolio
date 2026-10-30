import React, { useEffect, useState } from "react";

const links = [
  { href: "#progetti", label: "Progetti" },
  { href: "#about", label: "Percorso" },
  { href: "#technologie", label: "Tecnologie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-line" : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#top" className="font-semibold tracking-tight text-paper">
          Sabri Zaltni
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm text-muted">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-paper transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contatti"
            className="text-sm font-medium px-4 py-2 rounded-full bg-paper text-ink hover:bg-white transition-colors"
          >
            Parliamone
          </a>
        </div>
      </div>
    </nav>
  );
}
