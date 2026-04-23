import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Eyebrow from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'Privacy — Advald',
  description: 'Privacy information for Advald.',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-6 md:px-10 lg:px-16 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <Eyebrow className="mb-8">Privacy</Eyebrow>
          <h1 className="font-serif font-medium text-ink leading-[1.1] text-[clamp(2rem,3vw,2.75rem)]">
            Privacy notice
          </h1>

          <div className="mt-12 space-y-8 font-sans text-[1.0625rem] leading-[1.65] text-ink/90">
            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Scope
              </h2>
              <p>
                This notice describes how personal data is handled on
                advald.com. It applies to visitors of this website only. For
                services delivered under contract, separate agreements apply.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Data controller
              </h2>
              <p>
                {'{{FILL IN: controller name and address}}'}
                <br />
                Contact:{' '}
                <a
                  href="mailto:dino@advald.com"
                  className="underline underline-offset-4 decoration-1 hover:text-accent transition-colors duration-150"
                >
                  dino@advald.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Analytics
              </h2>
              <p>
                This site uses Plausible Analytics, a privacy-friendly
                analytics service that does not set cookies and does not
                collect personal data. No data is shared with third parties
                for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Hosting &amp; logs
              </h2>
              <p>
                This site is hosted by{' '}
                {'{{FILL IN: hosting provider}}'}. Standard server logs may
                include IP address, user agent, and timestamp, retained for
                the period required for security and operations, then
                deleted.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of any
                personal data held about you, and you may object to its
                processing. Contact{' '}
                <a
                  href="mailto:dino@advald.com"
                  className="underline underline-offset-4 decoration-1 hover:text-accent transition-colors duration-150"
                >
                  dino@advald.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Updates
              </h2>
              <p>
                This notice may be updated to reflect changes in services or
                applicable law. The latest version is always the one
                published here.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-6 border-t border-rule font-sans text-[0.875rem] text-muted">
            <Link
              href="/"
              className="hover:text-ink transition-colors duration-150 underline-offset-4 decoration-1 hover:underline"
            >
              ← Back to Advald
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
