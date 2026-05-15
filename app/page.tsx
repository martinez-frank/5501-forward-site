import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const statusCards = [
  ['Current Phase', 'Early planning + due diligence'],
  ['Community Outreach', 'Active listening phase'],
  ['Consultant Input', 'Architect / GC / project advisory group assembled'],
  ['Entitlement Strategy', 'Being evaluated'],
  ['Capital Readiness', 'Pre-development positioning underway'],
  ['Design Status', 'Conceptual only — not approved'],
] as const

const decisionGates = [
  {
    title: 'Site + Environmental Review',
    detail: 'Existing conditions, ESA, infrastructure, and risk are being studied under preliminary due diligence.',
  },
  {
    title: 'Market + Program Fit',
    detail:
      'Retail, housing, parking, affordability, and neighborhood benefit are under evaluation and subject to review.',
  },
  {
    title: 'Entitlement Path',
    detail: 'Height, zoning, public process, and city alignment are conceptual and subject to approvals.',
  },
  {
    title: 'Capital Strategy',
    detail:
      'Pre-development budget, sponsor equity, debt, and public tools are being evaluated for preliminary fit.',
  },
  {
    title: 'Final Development Direction',
    detail: 'Approved scope, budget, timeline, and delivery plan remain subject to due diligence and final review.',
  },
] as const

const stakeholderPreview = [
  'Open Decisions',
  'Consultant Workstreams',
  'Risk Register',
  'Document Library',
  'Capital Readiness',
  'Meeting Notes',
] as const

const consultantGroup = [
  'Terry Johnson — Owner / Developer',
  'Frank Martinez — Project Consultant',
  'Lucy Van Dusen, LCVD Architecture — Architect Partner',
  'Mike Jameson — General Contractor A',
  'Klaus Hirtler — General Contractor B',
  'Raymond Nelson — General Contractor',
] as const

export const metadata: Metadata = {
  title: '5501 Forward | Executive Project Dashboard',
  description:
    'Executive homepage dashboard for 5501 Forward covering project status, decision gates, stakeholder pathways, and consultant coordination.',
}

export default function HomePage() {
  return (
    <div className="space-y-16 pb-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d1b2a]">DENVER REDEVELOPMENT INITIATIVE</p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#0d1b2a] sm:text-5xl">5501 Forward</h1>
          <p className="text-xl font-medium text-[#223247]">Listening first. Planning responsibly.</p>
          <p className="text-lg text-[#1f2f43]">
            A community-informed redevelopment platform linking public priorities, consultant diligence, and responsible capital planning.
          </p>
          <p className="text-base leading-7 text-slate-700">
            Early-stage planning is underway for a potential mixed-use future in Denver, including environmental and entitlement review, multidisciplinary consultant coordination, and disciplined pre-development capital strategy.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/project" className="rounded-lg bg-[#0d1b2a] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#13263a]">
              View Project Overview →
            </Link>
            <Link href="/execution-roadmap" className="rounded-lg border border-[#0d1b2a] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-slate-50">
              Explore the Roadmap →
            </Link>
            <Link href="/community" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#d4a63a] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-[#fffaf0]">
              Community Vision Page ↗
            </Link>
            <Link href="/contact" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-slate-50">
              Contact Project Team →
            </Link>
          </div>
        </div>

        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Image src="/images/5501-3story-rendering.jpg" alt="Conceptual rendering for 5501 Forward" width={1600} height={1067} className="h-full w-full object-cover" priority />
          </div>
          <figcaption className="border-l-2 border-[#d4a63a] pl-3 text-sm leading-6 text-slate-600">
            Conceptual image for discussion purposes only. Final design, approvals, and scope remain subject to due diligence, entitlement review, and public process.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Project Status Dashboard</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statusCards.map(([title, detail]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0d1b2a]">{title}</p>
              <p className="mt-2 text-base text-slate-800">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-slate-200 bg-[#0d1b2a] p-6 text-white sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight">Decision Gates</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {decisionGates.map((gate, index) => (
            <article key={gate.title} className="rounded-xl border border-white/20 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2c14e]">Gate {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold">{gate.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">{gate.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-slate-200 bg-[#fffdf8] p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Owner / Stakeholder Dashboard</h2>
          <span className="rounded-full border border-[#d4a63a] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d1b2a]">Coming Soon</span>
        </div>
        <p className="text-base leading-7 text-slate-700">
          A future private planning dashboard can organize project decisions, consultant updates, documents, risks, and
          capital-readiness workstreams for the ownership and stakeholder group.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stakeholderPreview.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800">{item}</div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Audience Pathways</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-[#0d1b2a]">For Community Members</h3>
            <Link href="/community" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#0d1b2a] hover:underline">Community Vision Page ↗</Link>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-[#0d1b2a]">For Project Stakeholders</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm font-semibold text-[#0d1b2a]">
              <Link href="/project" className="hover:underline">Project Overview</Link>
              <Link href="/execution-roadmap" className="hover:underline">Execution Roadmap</Link>
              <Link href="/team" className="hover:underline">Team</Link>
            </div>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-[#0d1b2a]">For Capital / Advisory Review</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm font-semibold text-[#0d1b2a]">
              <Link href="/development-economics" className="hover:underline">Strategy</Link>
              <Link href="/investor-brief" className="hover:underline">Investor Brief</Link>
              <Link href="/documents" className="hover:underline">Documents</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Consultant Group Preview</h2>
        <p className="text-base leading-7 text-slate-700">
          Current consultant group supporting early-stage feasibility, design review, entitlement strategy, and
          construction input.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {consultantGroup.map((member) => (
            <li key={member} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-800">{member}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-[#0d1b2a] p-8 text-white">
        <h2 className="text-3xl font-semibold tracking-tight">Move the project forward responsibly.</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/execution-roadmap" className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-slate-100">Explore the Roadmap →</Link>
          <Link href="/contact" className="rounded-lg border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">Contact Project Team →</Link>
        </div>
      </section>
    </div>
  )
}
