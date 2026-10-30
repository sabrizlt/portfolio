import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ title, intro }) {
  return (
    <ScrollReveal className="max-w-2xl mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-paper">
        {title}
      </h2>
      {intro && <p className="text-muted text-lg mt-3 leading-relaxed">{intro}</p>}
    </ScrollReveal>
  );
}
