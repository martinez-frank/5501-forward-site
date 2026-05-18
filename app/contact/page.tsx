import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact 5501 Forward',
  description:
    'Contact pathways for community feedback, project coordination, public-sector follow-up, and capital-readiness discussions for 5501 E. 33rd Avenue.',
}

const contactPathways = [
  {
    title: 'Community Feedback',
    description:
      'For nearby residents, local businesses, community organizations, and stakeholders who want to share comments or questions about the future of the corner.',
    email: 'communityfeedback@5501forward.com',
    cta: 'Email Community Feedback',
    href: 'mailto:communityfeedback@5501forward.com?subject=Community%20Feedback%20for%205501%20E.%2033rd%20Avenue',
  },
  {
    title: 'Project Coordination',
    description:
      'For general project questions, consultant coordination, meeting follow-up, and owner/stakeholder communication.',
    email: 'contact@5501forward.com',
    cta: 'Email Project Team',
    href: 'mailto:contact@5501forward.com?subject=5501%20Forward%20Project%20Inquiry',
  },
  {
    title: 'Capital / Advisory Inquiry',
    description:
      'For capital partners, lenders, advisors, and development stakeholders interested in reviewing the project’s diligence status, capital-readiness path, or investment discussion materials.',
    email: 'investor@5501forward.com',
    cta: 'Email Investor Contact',
    href: 'mailto:investor@5501forward.com?subject=5501%20Forward%20Investor%20Inquiry',
  },
] as const

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 bg-[#F7F3EA] pb-10 text-[#0B223F] sm:space-y-10">
      <section className="rounded-3xl border border-[#D99A19] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D99A19]">Contact Hub</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0B223F] sm:text-4xl">Contact 5501 Forward</h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-[#0B223F] sm:text-lg">
          For community feedback, project coordination, public-sector follow-up, and capital-readiness discussions related to 5501 E. 33rd Avenue.
        </p>
        <p className="mt-5 rounded-xl border border-[#D99A19] bg-[#fffdf8] px-4 py-3 text-sm leading-6 text-[#0B223F]">
          5501 Forward is in an early planning, due diligence, and outreach phase. No final design, financing package, construction scope, or approval has been finalized.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#0B223F]">Contact Pathways</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {contactPathways.map((pathway) => (
            <article key={pathway.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B223F]">{pathway.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{pathway.description}</p>
              <a
                href={`mailto:${pathway.email}`}
                className="mt-4 w-fit break-all text-sm font-semibold text-[#0B223F] underline underline-offset-2 hover:text-[#13263a]"
              >
                {pathway.email}
              </a>
              <a
                href={pathway.href}
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#0B223F] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#13263a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B223F]"
              >
                {pathway.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-6 text-white shadow-sm">
        <div className="h-1 w-16 rounded-full bg-[#D99A19]" aria-hidden />
        <h2 className="text-2xl font-bold text-white">Public-Sector and Agency Coordination</h2>
        <p className="leading-7 text-white">
          The project team is organizing diligence materials, environmental follow-up, preliminary cost information, and public-benefit context for continued discussions with public-sector stakeholders.
        </p>
        <a
          href="mailto:contact@5501forward.com?subject=5501%20Forward%20Public-Sector%20Coordination"
          className="inline-flex w-full items-center justify-center rounded-lg border border-[#D99A19] bg-white px-5 py-3 text-sm font-semibold text-[#0B223F] transition hover:bg-[#fff8e7] sm:w-auto"
        >
          Email Project Team
        </a>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B223F]">Share Community Input</h2>
        <p className="leading-7 text-slate-700">
          If you are a nearby resident, business, or community stakeholder, the Community Vision Page is the best place to review the public-facing outreach summary and share feedback.
        </p>
        <Link
          href="/community"
          className="inline-flex w-full items-center justify-center rounded-lg border border-[#0B223F] bg-white px-5 py-3 text-sm font-semibold text-[#0B223F] transition hover:bg-slate-50 sm:w-auto"
        >
          Visit Community Vision Page
        </Link>
      </section>

      <footer className="rounded-2xl border border-[#D99A19] bg-[#fffdf8] px-5 py-4 text-sm leading-6 text-[#0B223F]">
        This page is for communication and planning purposes only. It does not represent a securities offering, public funding approval, final development approval, or construction commitment.
      </footer>
    </div>
  )
}
