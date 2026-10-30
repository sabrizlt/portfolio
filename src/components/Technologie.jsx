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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {groups.map((group, i) => (
        <ScrollReveal key={group.title} delay={i * 70}>
          <div className="glass h-full rounded-[2rem] p-7">
            <h3 className="text-sm text-faint">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="glass-pill px-3.5 py-1.5 rounded-full text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
