import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

type Block = {
  num: string;
  name: string;
  body: string;
  tools: string;
};

const blocks: Block[] = [
  {
    num: '01',
    name: 'Media',
    body: 'Performance buying across paid search, paid social, push, pop, native, Telegram, and programmatic. Built around the channel mix each market actually responds to — DACH, Turkey, and select European geos.',
    tools:
      'Google Ads · Meta · PropellerAds · MGID · Telegram Ads · programmatic DSPs',
  },
  {
    num: '02',
    name: 'Infrastructure',
    body: 'Tracking, attribution, and data. First-party by default. Server-side where it matters. Postbacks and CAPI configured before launch, not patched after. A warehouse that unifies network, tracker, and operator data into dashboards that answer real questions.',
    tools:
      'Voluum · RedTrack · Keitaro · NetRefer · BlueLabs · AGIDO · Meta CAPI · AWS RDS · Supabase · Looker Studio',
  },
  {
    num: '03',
    name: 'AI & Automation',
    body: "Agentic workflows for campaign operations, content pipelines for landing pages and creative, and automation layers that handle the work that doesn't need a human. Built on Claude, Make, and custom orchestration.",
    tools:
      'Claude API · Make.com · Cloudflare Workers · ElevenLabs · Creatomate · Next.js',
  },
];

export default function Capabilities() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow className="mb-14">Capabilities</Eyebrow>
        </Reveal>

        <div className="border-t border-rule">
          {blocks.map((b, i) => (
            <Reveal key={b.num} delay={i * 80}>
              <article className="border-b border-rule py-12 md:py-16 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12">
                <div className="md:pt-2">
                  <p className="font-sans text-[0.8125rem] font-medium uppercase tracking-caption text-muted">
                    {b.num}
                  </p>
                </div>
                <div className="max-w-[62ch]">
                  <h3 className="font-serif font-medium text-ink leading-[1.1] text-[clamp(1.75rem,2.4vw,2.25rem)]">
                    {b.name}
                  </h3>
                  <p className="mt-5 font-sans text-[1.0625rem] leading-[1.65] text-ink/90">
                    {b.body}
                  </p>
                  <p className="mt-6 font-sans text-[0.8125rem] font-medium uppercase tracking-caption text-muted">
                    {b.tools}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
