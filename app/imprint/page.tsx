import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Eyebrow from '@/components/ui/Eyebrow';

export const metadata: Metadata = {
  title: 'Imprint — Advald',
  description: 'Legal information for Advald.',
  robots: { index: false, follow: true },
};

export default function ImprintPage() {
  return (
    <>
      <Header />
      <main className="px-6 md:px-10 lg:px-16 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <Eyebrow className="mb-8">Imprint</Eyebrow>
          <h1 className="font-serif font-medium text-ink leading-[1.1] text-[clamp(2rem,3vw,2.75rem)]">
            Legal notice
          </h1>

          <div className="mt-12 space-y-8 font-sans text-[1.0625rem] leading-[1.65] text-ink/90">
            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Responsible
              </h2>
              <p>
                {'{{FILL IN: company / individual name}}'}
                <br />
                {'{{FILL IN: street, number}}'}
                <br />
                {'{{FILL IN: postal code, city, country}}'}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Contact
              </h2>
              <p>
                Email:{' '}
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
                Registration
              </h2>
              <p>
                {'{{FILL IN: commercial register / trade register number}}'}
                <br />
                {'{{FILL IN: VAT ID, if applicable}}'}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Hosting
              </h2>
              <p>
                {'{{FILL IN: hosting provider name and address}}'}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
                Liability
              </h2>
              <p>
                The content of this site has been prepared with care. No
                guarantee is given for the accuracy, completeness, or currency
                of the information provided. Liability claims arising from the
                use of the information are excluded to the extent permitted by
                law.
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
