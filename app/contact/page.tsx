import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact 5501 Forward',
  description:
    'Contact pathways for project coordination, public-sector follow-up, and capital-readiness discussions for 5501 E. 33rd Avenue.',
}

const contactPathways = [
  {
    title: 'Project Coordination',
    description:
      'For general project questions, consultant coordination, meeting follow-up, owner/stakeholder communication, and public-sector coordination.',
    cta: 'Email Project Team',
    href: 'mailto:contact@5501forward.com?subject=5501%20Forward%20Project%20Inquiry',
  },
  {
    title: 'Capital / Advisory Inquiry',
    description:
      'For capital partners, lenders, advisors, and development stakeholders interested in reviewing the project’s diligence status, capital-readiness path, or investment discussion materials.',
    cta: 'Email Investor Contact',
    href: 'mailto:investor@5501forward.com?subject=5501%20Forward%20Investor%20Inquiry',
  },
] as const

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 pb-10 text-[#0B223F] sm:space-y-10">
      <section className="border-b border-slate-200 bg-white px-6 py-10 sm:px-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-[#0B223F] sm:text-4xl">Contact 5501 Forward</h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-[#0B223F] sm:text-lg">
          For project coordination, public-sector follow-up, and capital-readiness discussions related to 5501 E. 33rd Avenue.
        </p>
      </section>

      <section className="space-y-4">
        <div className="h-[3px] w-12 rounded-full bg-[#f2b632]" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-[#0B223F]">Contact Pathways</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {contactPathways.map((pathway) => (
            <article key={pathway.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B223F]">{pathway.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{pathway.description}</p>
              <div className="mt-auto pt-6">
                <a
                  href={pathway.href}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#0B223F] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#13263a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B223F]"
                >
                  {pathway.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 border-t border-slate-200 pt-6">
        <div className="h-[3px] w-12 rounded-full bg-[#f2b632]" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-[#0B223F]">Share Community Input</h2>
        <p className="max-w-5xl leading-7 text-slate-700">
          If you are a nearby resident, business, or community stakeholder, please use the Community Vision Page to review the public-facing outreach summary and share feedback.
        </p>
        <Link
          href="/community"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg border border-[#f2c14e] bg-white px-5 py-3 text-sm font-semibold text-[#0d1b2a] hover:bg-[#fffdf5] sm:w-auto"
        >
          Community Vision Page ↗
        </Link>
      </section>

      <footer className="rounded-xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-xs leading-6 text-slate-600 sm:text-sm">
        <p>
          5501 Forward is in an early planning, due diligence, and outreach phase. No final design, financing package, construction
          scope, or approval has been finalized.
        </p>
        <p className="mt-3">
          This page is for communication and planning purposes only. It does not represent a securities offering, public funding
          approval, final development approval, or construction commitment.
        </p>
      </footer>
    </div>
  )
}
