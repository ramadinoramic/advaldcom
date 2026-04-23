import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function About() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow className="mb-8">Who</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif font-medium text-ink leading-[1.1] text-[clamp(2rem,3vw,2.75rem)]">
            Dino Ramadinovic
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-[62ch] font-sans text-[1.0625rem] leading-[1.65] text-ink/90">
            Performance marketer operating primarily in Swiss/DACH and Turkish
            markets. Background across iGaming, mobile apps, crypto, and lead
            generation. Trilingual — English, German, BHS. Based in Zurich.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
