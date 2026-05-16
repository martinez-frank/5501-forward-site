import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const statusCards = [
  ['Current Phase', 'Early planning + due diligence'],
  ['Community Outreach', 'Active listening phase'],
  ['Consultant Input', 'Architect / GC / project advisory input is being coordinated'],
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
  {
    nameRole: 'Terry Johnson — Owner / Developer',
    description: 'Property ownership and development sponsor.',
  },
  {
    nameRole: 'Frank Martinez — Project Consultant, Capital Strategy & Stakeholder Coordination',
    description: 'Project coordination, capital-readiness strategy, consultant alignment, stakeholder preparation, and owner advisory support.',
  },
  {
    nameRole: 'Lucy Van Dusen, LCVD Architecture — Architect Partner',
    description: 'Architectural planning, design feasibility, massing input, and entitlement-facing design guidance.',
  },
  {
    nameRole: 'Mike Jameson — General Contractor A',
    description: 'Commercial GC review, constructability input, and execution planning.',
  },
  {
    nameRole: 'Klaus Hirtler — General Contractor B',
    description: 'Commercial GC review, alternate constructability perspective, and cost/field input.',
  },
  {
    nameRole: 'Raymond Nelson — General Contractor',
    description: 'GC advisory, site execution input, and construction planning support.',
  },
] as const

export const metadata: Metadata = {
  title: '5501 Forward | Executive Project Dashboard',
  description:
    'Executive homepage dashboard for 5501 Forward covering project status, decision gates, stakeholder pathways, and consultant coordination.',
}

export default function HomePage() {
  return (
    <div className="space-y-16 pb-8">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="pt-1">
          <Image
            src="/images/5501forward.logo.png"
            alt="5501 Forward logo"
            width={520}
            height={120}
            className="h-auto w-[250px] sm:w-[320px] lg:w-[390px]"
            priority
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#f2c14e]">DENVER REDEVELOPMENT INITIATIVE</p>
          <p className="mt-5 max-w-[62ch] text-base leading-[1.6] font-normal text-[#1f2f43] sm:text-[17px] lg:text-[19px]">
            A community-informed redevelopment platform for 5501 E. 33rd Avenue in Denver, linking public priorities, consultant diligence, and responsible capital planning.
          </p>
          <p className="mt-5 max-w-[62ch] text-base leading-[1.6] font-normal text-[#1f2f43] sm:text-[17px] lg:text-[19px]">
            Early-stage planning is underway for a potential mixed-use future, including environmental and entitlement review, multidisciplinary consultant coordination, and disciplined pre-development capital strategy.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link href="/project" className="rounded-lg bg-[#0d1b2a] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#13263a]">
              View Project Overview →
            </Link>
            <Link href="/execution-roadmap" className="rounded-lg border border-[#0d1b2a] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-slate-50">
              Explore the Roadmap →
            </Link>
            <Link href="/community" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#f2c14e] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-[#fffdf5]">
              Community Vision Page ↗
            </Link>
            <Link href="/contact" className="rounded-lg border border-[#0d1b2a] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-slate-50">
              Contact Project Team →
            </Link>
          </div>
        </div>

        <figure className="space-y-3">
          <div className="h-[360px] overflow-hidden rounded-2xl border border-slate-200 sm:h-[420px] lg:h-[560px]">
            <Image
              src="/images/5501-3story-rendering.jpg"
              alt="Conceptual rendering for 5501 E. 33rd Avenue"
              width={1600}
              height={1067}
            className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <figcaption className="border-l-2 border-[#f2c14e] pl-3 text-sm leading-6 text-slate-600">
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
          <span className="rounded-full border border-[#f2c14e] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d1b2a]">Coming Soon</span>
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
              <Link href="/contact" className="hover:underline">Contact Project Team</Link>
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
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Project Advisory Group</h2>
        <p className="text-base leading-7 text-slate-700">
          A multidisciplinary advisory group is being assembled to support due diligence, design feasibility, entitlement strategy, construction planning, and capital-readiness.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {consultantGroup.map((member) => (
            <li key={member.nameRole} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-800">
              <p className="font-semibold text-[#0d1b2a]">{member.nameRole}</p>
              <p className="mt-2 text-slate-700">{member.description}</p>
            </li>
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
