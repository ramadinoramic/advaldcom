import type { ReactNode } from 'react';

export default function Eyebrow({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-sans text-[0.8125rem] font-medium uppercase tracking-caption text-muted ${className}`}
    >
      {children}
    </p>
  );
}
