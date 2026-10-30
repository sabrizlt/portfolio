import React, { useEffect, useRef, useState } from 'react';

/**
 * Fa entrare il contenuto quando arriva nello schermo.
 * Solo con transform: opacity e will-change su un contenitore
 * spegnerebbero l'effetto vetro di ciò che c'è dentro.
 */
export default function ScrollReveal({
  children,
  as: Tag = 'div',
  delay = 0,
  once = true,
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transform: visible ? 'none' : 'translateY(36px) scale(0.975)',
        transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
