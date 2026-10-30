import React, { useEffect, useRef, useState } from 'react';

/**
 * Wraps children and adds a fade/slide-in animation when the element
 * enters the viewport. Pure IntersectionObserver — no extra dependencies.
 *
 * Props:
 *  - as: html tag to render (default 'div')
 *  - delay: ms delay before the animation starts (for staggering)
 *  - direction: 'up' | 'down' | 'left' | 'right' | 'scale'
 *  - once: replay on every scroll pass, or only the first time (default true)
 *  - className: extra classes passed through
 */
export default function ScrollReveal({
  children,
  as: Tag = 'div',
  delay = 0,
  direction = 'up',
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
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform = {
    up: 'translateY(12px)',
    down: 'translateY(-12px)',
    left: 'translateX(12px)',
    right: 'translateX(-12px)',
    scale: 'scale(0.94)',
  }[direction];

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hiddenTransform,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}