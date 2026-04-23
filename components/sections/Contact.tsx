import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <section className="px-6 md:px-10 lg:px-16 pt-28 md:pt-40 pb-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow className="mb-8">Contact</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <a
            href="mailto:dino@advald.com"
            className="font-serif font-medium text-ink leading-[1.1] text-[clamp(2rem,3vw,2.75rem)] underline-offset-[6px] decoration-1 hover:underline hover:text-accent transition-colors duration-150 inline-block"
          >
            dino@advald.com
          </a>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 font-sans text-[1.0625rem] text-muted">
            Telegram:{' '}
            <a
              href="https://t.me/dinoramic"
              className="hover:text-ink transition-colors duration-150 underline-offset-4 decoration-1 hover:underline"
            >
              @dinoramic
            </a>
          </p>
        </Reveal>

        <div className="mt-24 pt-6 border-t border-rule flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-sans text-[0.875rem] text-muted">
          <p>
            Advald · {year}
          </p>
          <p className="flex items-center gap-6">
            <Link
              href="/imprint"
              className="hover:text-ink transition-colors duration-150 underline-offset-4 decoration-1 hover:underline"
            >
              Imprint
            </Link>
            <Link
              href="/privacy"
              className="hover:text-ink transition-colors duration-150 underline-offset-4 decoration-1 hover:underline"
            >
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
