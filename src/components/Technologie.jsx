import React from "react";
import ScrollReveal from "./ScrollReveal";

const groups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", items: ["PHP", "Java", "Spring Boot", "API REST"] },
  { title: "Database", items: ["SQL", "MySQL", "PostgreSQL"] },
  { title: "CMS ed e-commerce", items: ["WordPress", "WooCommerce"] },
];

export default function Technologie() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {groups.map((group, i) => (
        <ScrollReveal key={group.title} delay={i * 60} className="border-t border-line pt-4">
          <h3 className="text-sm text-faint">{group.title}</h3>
          <ul className="mt-3 space-y-1.5 text-paper">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ScrollReveal>
      ))}
    </div>
  );
}
