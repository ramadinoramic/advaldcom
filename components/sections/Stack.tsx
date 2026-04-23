import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

type Group = { label: string; items: string[] };

const groups: Group[] = [
  {
    label: 'Media',
    items: [
      'Google Ads',
      'Meta',
      'PropellerAds',
      'MGID',
      'Telegram Ads',
      'Programmatic DSPs',
    ],
  },
  {
    label: 'Tracking',
    items: ['Voluum', 'RedTrack', 'Keitaro', 'NetRefer', 'Meta CAPI'],
  },
  {
    label: 'Data',
    items: ['BlueLabs', 'AGIDO', 'AWS RDS', 'Supabase', 'Python'],
  },
  {
    label: 'Infrastructure',
    items: ['Next.js', 'Vercel', 'Cloudflare Workers', 'Cloudflare'],
  },
  {
    label: 'AI & Content',
    items: [
      'Claude API',
      'Make.com',
      'ElevenLabs',
      'Creatomate',
    ],
  },
  {
    label: 'Analytics',
    items: ['Looker Studio', 'Plausible'],
  },
];

export default function Stack() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow className="mb-6">Stack</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <p className="font-serif italic text-muted text-[clamp(1.125rem,1.4vw,1.375rem)] leading-[1.4] max-w-2xl">
            The tools this work is actually built on.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-rule pt-12">
            {groups.map((g) => (
              <div key={g.label}>
                <p className="font-sans text-[0.8125rem] font-medium uppercase tracking-caption text-muted mb-4">
                  {g.label}
                </p>
                <ul className="space-y-1.5 font-sans text-[1.0625rem] leading-[1.55] text-ink/90">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
