import React, { useEffect, useRef, useState } from "react";
import CVButton from "./CVButton";

const contactClass = "button-solid inline-block px-7 py-3.5 rounded-full font-medium";
const cvClass = "glass glass-button inline-block px-7 py-3.5 rounded-full font-medium disabled:opacity-60";
const ZOOM = 1.15;

/* Il testo del titolo: la lente ne mostra una seconda copia, ingrandita. */
function HeroCopy({ clone = false }) {
  return (
    <div className="px-6 pt-44 pb-28 md:pt-56 md:pb-40 text-center" aria-hidden={clone || undefined}>
      <p className="text-base md:text-lg text-muted">Sabri Zaltni · Full-Stack Developer</p>
      <h1 className="mt-6 mx-auto max-w-5xl text-5xl md:text-8xl font-semibold tracking-[-0.04em] leading-[1.02]">
        Siti e app su misura per far crescere la tua attività.
      </h1>
      <p className="mt-8 mx-auto max-w-2xl text-lg md:text-2xl text-muted leading-snug">
        Trasformo idee in prodotti concreti, curati nei dettagli e semplici da usare.
      </p>
      <div className="mt-11 flex flex-wrap justify-center gap-3">
        {clone ? (
          <>
            <span className={contactClass}>Parliamo del tuo progetto</span>
            <span className={cvClass}>Scarica il CV</span>
          </>
        ) : (
          <>
            <a href="#contatti" className={contactClass}>Parliamo del tuo progetto</a>
            <CVButton className={cvClass} />
          </>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const hero = useRef(null);
  const lens = useRef(null);
  const shadow = useRef(null);
  const inner = useRef(null);
  const [enabled] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (!enabled) return;
    const node = hero.current;
    let pointer = null;
    let lastMove = 0;
    let x = node.offsetWidth * 0.68;
    let y = node.offsetHeight * 0.42;
    let frame = 0;
    let visible = true;

    const onMove = (event) => {
      const box = node.getBoundingClientRect();
      pointer = { x: event.clientX - box.left, y: event.clientY - box.top };
      lastMove = performance.now();
    };

    const tick = (now) => {
      const width = node.offsetWidth;
      const height = node.offsetHeight;
      const radius = lens.current.offsetWidth / 2;
      // Senza puntatore la lente scivola da sola sul titolo.
      const idle = !pointer || now - lastMove > 2500;
      const targetX = idle ? width * (0.5 + 0.3 * Math.sin(now / 4300)) : pointer.x;
      const targetY = idle ? height * (0.46 + 0.1 * Math.sin(now / 2900)) : pointer.y;
      x += (targetX - x) * (idle ? 0.02 : 0.12);
      y += (targetY - y) * (idle ? 0.02 : 0.12);

      const place = `translate3d(${x - radius}px, ${y - radius}px, 0)`;
      lens.current.style.transform = place;
      shadow.current.style.transform = place;
      inner.current.style.width = `${width}px`;
      inner.current.style.transformOrigin = `${x}px ${y}px`;
      inner.current.style.transform = `translate3d(${radius - x}px, ${radius - y}px, 0) scale(${ZOOM})`;
      if (visible) frame = requestAnimationFrame(tick);
    };

    // Fuori dallo schermo si ferma: niente lavoro inutile.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) frame = requestAnimationFrame(tick);
    });
    observer.observe(node);
    node.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      visible = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      node.removeEventListener("pointermove", onMove);
    };
  }, [enabled]);

  return (
    <section ref={hero} className="relative overflow-hidden">
      <HeroCopy />
      {enabled && (
        <>
          <div ref={shadow} className="lens-shadow" />
          <div ref={lens} className="lens">
            <div ref={inner} className="absolute top-0 left-0">
              <HeroCopy clone />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
