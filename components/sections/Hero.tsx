import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section className="px-6 md:px-10 lg:px-16 pt-32 pb-40 md:pt-48 md:pb-56">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow className="mb-8">An acquisition studio</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif font-medium text-ink tracking-tight leading-[1.05] text-[clamp(3.25rem,6vw,5.5rem)]">
              Acquisition infrastructure for iGaming.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-10 max-w-2xl font-sans text-muted leading-[1.45] text-[clamp(1.25rem,1.5vw,1.5rem)]">
              Media, tracking, and AI automation — operated as one system for
              operators, affiliates, and performance brands.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
