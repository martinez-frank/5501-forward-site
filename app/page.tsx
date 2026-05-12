import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const renderingDisclaimer =
  'Conceptual image for discussion purposes only. Final design, height, density, approvals, financing, and construction scope remain subject to due diligence, entitlement review, public process, and project underwriting.'

const projectSnapshot = [
  {
    title: 'Address',
    detail: '5501 E. 33rd Avenue, Denver, Colorado',
  },
  {
    title: 'Project Type',
    detail: 'Mixed-use redevelopment opportunity',
  },
  {
    title: 'Current Phase',
    detail: 'Predevelopment, environmental diligence, entitlement strategy, and capital readiness',
  },
  {
    title: 'Focus Areas',
    detail:
      'Housing potential, neighborhood-serving commercial space, public-private financing pathways, and community benefit',
  },
]

const workstreams = [
  {
    title: 'Phase II ESA preparation',
    detail: 'Environmental investigation planning and consultant coordination are underway, subject to due diligence.',
  },
  {
    title: 'Entitlement and zoning strategy',
    detail: 'Entitlement pathways and zoning positioning are being evaluated and will remain subject to approvals.',
  },
  {
    title: 'DURA/TIF exploration',
    detail: 'Potential redevelopment-tool alignment is in exploration for discussion with relevant public partners.',
  },
  {
    title: 'CHFA/LIHTC positioning',
    detail: 'Affordable-housing capital stack positioning is being reviewed for fit, timing, and program eligibility.',
  },
  {
    title: 'Design and feasibility refinement',
    detail: 'Concept-level design and feasibility assumptions are being refined through iterative consultant input.',
  },
  {
    title: 'Capital partner readiness',
    detail: 'Materials are being organized to support lender and equity conversations under disciplined underwriting.',
  },
]

const consultantGroup = [
  'Terry Johnson: Project sponsor / owner representative / developer contact',
  'Frank Martinez: Project consultant',
  'Lucy Van Dusen, LCVD Architecture: Architect partner',
  'Mike Jameson: General Contractor A',
  'Klaus Hirtler: General Contractor B',
  'Raymond Nelson: General Contractor',
]

export const metadata: Metadata = {
  title: '5501 Forward | 5501 E. 33rd Avenue Denver Redevelopment Initiative',
  description:
    '5501 Forward is a Denver redevelopment initiative for 5501 E. 33rd Avenue, connecting community priorities, public-sector tools, environmental diligence, entitlement strategy, and responsible capital.',
}

export default function HomePage() {
  return (
    <div className="space-y-20 pb-6">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6F5531]">DENVER REDEVELOPMENT INITIATIVE</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">5501 Forward</h1>
          <p className="text-xl font-medium text-slate-800 sm:text-2xl">Listening First. Planning Responsibly.</p>
          <p className="text-lg text-slate-700">
            A civic redevelopment platform connecting community priorities, public-sector tools, and responsible capital.
          </p>
          <p className="text-base leading-7 text-slate-700">
            Early-stage planning is underway for a potential mixed-use future in Denver, with focus on environmental
            diligence, entitlement strategy, consultant input, and capital readiness.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Link href="/project" className="rounded-lg bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700">
              View Project Overview →
            </Link>
            <Link href="/execution-roadmap" className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-[#B99963] hover:bg-[#F9F6EF]">
              Explore the Roadmap →
            </Link>
            <Link href="/contact" className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-[#B99963] hover:bg-[#F9F6EF]">
              Contact Project Team →
            </Link>
          </div>
        </div>

        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Image
              src="/images/5501-33rd-6story-context-rendering.jpg"
              alt="Conceptual redevelopment rendering for 5501 Forward"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <figcaption className="space-y-2">
            <p className="text-sm font-semibold text-slate-800">Conceptual redevelopment vision</p>
            <p className="text-sm leading-6 text-slate-600">{renderingDisclaimer}</p>
          </figcaption>
        </figure>
      </section>

      <section className="animate-in-view space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Project Snapshot</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectSnapshot.map((item) => (
            <article key={item.title} className="card-lift rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7A6140]">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-slate-800">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="animate-in-view space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Why This Site Matters</h2>
        <p className="text-base leading-7 text-slate-700">
          5501 Forward is focused on reinvestment in an underutilized site with potential to support housing need,
          neighborhood-serving commercial activation, and public realm improvement. Current planning emphasizes
          environmental and entitlement diligence so redevelopment pathways can be evaluated responsibly and aligned with
          community priorities and public-sector planning frameworks.
        </p>
      </section>

      <section className="animate-in-view space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Current Workstreams</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workstreams.map((item) => (
            <article key={item.title} className="card-lift rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="animate-in-view grid gap-6 lg:grid-cols-2">
        <article className="card-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Public Partner Alignment</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            The project is being organized for productive conversations with city officials, redevelopment agencies,
            housing partners, community stakeholders, public finance partners, and infrastructure and environmental
            diligence partners. Engagement planning supports coordination and information-sharing and does not imply
            agency approval, commitment, or final program selection.
          </p>
        </article>

        <article className="card-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Capital Readiness</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            5501 Forward is preparing for disciplined discussions with lenders, private equity, and mission-aligned
            capital providers. Current work includes predevelopment funding dialogue, diligence packaging, and
            underwriting-readiness materials to support informed evaluation.
          </p>
        </article>
      </section>

      <section className="animate-in-view space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Consultant Group</h2>
          <Link href="/team" className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
            Meet the Project Team
          </Link>
        </div>
        <p className="text-base leading-7 text-slate-700">
          Current consultant group supporting early-stage feasibility, design review, entitlement strategy, and
          construction input:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {consultantGroup.map((member) => (
            <li key={member} className="card-lift rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-800">
              {member}
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-in-view space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Visual Context</h2>
        <figure className="space-y-3 rounded-2xl border border-slate-200 p-4 sm:p-5">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/5501-3story-rendering.jpg"
              alt="Neighborhood-serving retail and public realm concept rendering"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="space-y-2">
            <p className="text-sm font-semibold text-slate-800">Neighborhood-serving retail / public realm concept</p>
            <p className="text-sm leading-6 text-slate-600">{renderingDisclaimer}</p>
          </figcaption>
        </figure>
      </section>

      <section className="animate-in-view rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white sm:p-10">
        <h2 className="text-3xl font-semibold tracking-tight">Listening first. Planning responsibly.</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-100">
          For project inquiries, community feedback, public partner coordination, consultant input, or capital partner
          discussions, contact the project team.
        </p>
        <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200">
          Contact Project Team →
        </Link>
      </section>
    </div>
  )
}
