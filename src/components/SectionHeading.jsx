import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ title, intro }) {
  return (
    <ScrollReveal className="mb-10 md:mb-14 text-center">
      <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em]">{title}</h2>
      {intro && <p className="text-muted text-lg md:text-xl mt-4">{intro}</p>}
    </ScrollReveal>
  );
}
