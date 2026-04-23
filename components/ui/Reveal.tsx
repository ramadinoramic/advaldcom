'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, as = 'div', className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (delay) {
                window.setTimeout(() => el.classList.add('is-visible'), delay);
              } else {
                el.classList.add('is-visible');
              }
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
      );
      io.observe(el);
      return () => io.disconnect();
    }
    el.classList.add('is-visible');
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
