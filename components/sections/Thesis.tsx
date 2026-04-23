import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

export default function Thesis() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow className="mb-8">Approach</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif font-medium text-ink leading-[1.1] text-[clamp(2rem,3vw,2.75rem)]">
            Most acquisition problems aren&rsquo;t media problems.
            <br />
            <span className="italic text-muted">
              They&rsquo;re tracking, attribution, and automation problems
              dressed up as media problems.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-7 font-sans text-[1.0625rem] leading-[1.65] text-ink/90 prose-measure">
          <Reveal delay={120}>
            <p>
              Advald operates a single stack across the acquisition layer. Paid
              media is the visible surface. Underneath sits first-party
              tracking, server-side attribution, a warehouse the campaigns
              actually feed, and an automation layer that moves faster than
              manual ops allow.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              The work is built on infrastructure we own — Cloudflare Workers,
              Supabase, AWS RDS — not rented dashboards. Postbacks, CAPI, and
              conversion signals are wired correctly before a euro of spend
              goes live.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              AI is not a feature here. It&rsquo;s the operating layer: agentic
              workflows for campaign management, content pipelines for landing
              pages and creative, fraud signals layered into the funnel.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
