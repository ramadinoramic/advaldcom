import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-6 md:px-10 lg:px-16 py-6">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[1.25rem] font-medium tracking-tight text-ink hover:text-accent transition-colors duration-150"
          aria-label="Advald, home"
        >
          Advald
        </Link>
        <a
          href="mailto:dino@advald.com"
          className="font-sans text-[0.9375rem] text-muted hover:text-ink transition-colors duration-150 underline-offset-4 decoration-1 hover:underline"
        >
          dino@advald.com
        </a>
      </div>
    </header>
  );
}
