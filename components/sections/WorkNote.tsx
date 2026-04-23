import Reveal from '@/components/ui/Reveal';

export default function WorkNote() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="border-t border-b border-rule py-14">
            <p className="font-serif italic text-ink/90 text-[clamp(1.25rem,1.6vw,1.5rem)] leading-[1.55]">
              Case studies are shared privately. Most client work is under NDA
              or operates in markets where public attribution isn&rsquo;t
              appropriate. Reach out and I&rsquo;ll walk you through relevant
              examples.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
