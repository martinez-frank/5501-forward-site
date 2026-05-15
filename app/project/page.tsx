import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Project Overview' }

const snapshotCards = [
  ['Address', '5501 E. 33rd Avenue, Denver, Colorado'],
  ['Current Phase', 'Early planning, due diligence, and outreach'],
  ['Project Type', 'Potential mixed-use redevelopment'],
  ['Design Status', 'Conceptual only — not approved'],
  ['Community Input', 'Active listening phase'],
  ['Diligence Focus', 'Environmental, entitlement, design, construction, and capital readiness'],
]

export default function ProjectPage() {
  return (
    <div className="space-y-16 pb-8">
      <section className="rounded-3xl border border-slate-200 bg-[#faf9f6] p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b78a2f]">5501 Forward</p>
            <h1 className="text-4xl font-bold tracking-tight text-[#12263a] sm:text-5xl">Project Overview</h1>
            <h2 className="text-xl font-semibold text-[#1f3b57]">A disciplined redevelopment study for a stronger neighborhood corner.</h2>
            <p className="text-base leading-relaxed text-slate-700">5501 Forward is an early-stage redevelopment platform evaluating whether 5501 E. 33rd Avenue can support a responsible, financeable, and community-responsive mixed-use future.</p>
            <p className="text-base leading-relaxed text-slate-700">This page summarizes what is known, what is being studied, and how the project team is building confidence before any final development commitment is made.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/execution-roadmap" className="rounded-md bg-[#12263a] px-4 py-2 text-sm font-semibold text-white">Explore the Roadmap</Link>
              <Link href="/development-strategy" className="rounded-md border border-[#12263a] px-4 py-2 text-sm font-semibold text-[#12263a]">View Development Strategy</Link>
              <Link href="/community" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[#b78a2f] px-4 py-2 text-sm font-semibold text-[#12263a]">Community Vision Page ↗</Link>
              <Link href="/contact" className="rounded-md bg-[#12263a] px-4 py-2 text-sm font-semibold text-white">Contact Project Team</Link>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src="/images/5501-existing-site.jpg" alt="Existing site condition at 5501 E. 33rd Avenue" width={1400} height={900} className="h-full w-full object-cover" priority />
            <figcaption className="border-t border-slate-200 px-4 py-3 text-sm text-slate-700">Existing site condition — 5501 E. 33rd Avenue</figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-3xl font-bold text-[#12263a]">Project Snapshot</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {snapshotCards.map(([label, value]) => (
            <article key={label} className="rounded-xl border-t-2 border-[#b78a2f] bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
              <p className="mt-2 text-sm font-medium text-[#12263a]">{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-[#12263a] p-6 text-white sm:p-10">
        <h3 className="text-3xl font-bold">Why This Site, Why Now</h3>
        <p className="mt-4 max-w-4xl text-slate-100">5501 E. 33rd Avenue represents an opportunity to evaluate whether an underutilized site can become a more active, useful, and financially sustainable neighborhood asset.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Underutilized site condition',
            'Need for neighborhood-serving ground-floor activity',
            'Denver housing demand and affordability pressure',
            'Opportunity for improved street presence',
            'Potential alignment between private investment and public-sector goals',
            'Long-term neighborhood reinvestment',
          ].map((item) => (
            <li key={item} className="rounded-lg border border-[#b78a2f]/60 bg-[#17324d] p-4 text-sm">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-3xl font-bold text-[#12263a]">Existing Site Conditions</h3>
        <p className="text-slate-700">Before any final concept is advanced, the project team is reviewing the site as it exists today, including frontage, access, surrounding uses, pedestrian experience, environmental history, infrastructure, and long-term improvement opportunities.</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image src="/images/5501-existing-site.jpg" alt="Current conditions at 5501 E. 33rd Avenue" width={1400} height={900} className="w-full object-cover" />
          <figcaption className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600">Existing site photo — current site condition</figcaption>
        </figure>
      </section>

      <section className="grid gap-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-[#12263a]">What We Know</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {[
              'The site is being evaluated for redevelopment potential.',
              'The current site condition creates an opportunity for reinvestment.',
              'Community input is important before final direction is advanced.',
              'Environmental, entitlement, design, and capital diligence remain active.',
              'No final design or construction plan has been approved.',
            ].map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#12263a]">What We Are Studying</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {['Building scale and neighborhood fit','Ground-floor retail and service uses','Housing feasibility','Parking, access, and circulation','Environmental due diligence','Entitlement path','Public/private financing tools','Capital readiness','Construction feasibility through GC input'].map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-3xl font-bold text-[#12263a]">Conceptual Planning Scenarios</h3>
        <p className="text-slate-700">The project team is using conceptual images to compare scale, street presence, housing opportunity, feasibility, and neighborhood fit. These images are not final designs.</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['/images/5501-3story-rendering.jpg', 'Neighborhood-Serving Mixed-Use Concept'],
            ['/images/5501-33rd-6story-context-rendering.jpg', 'Context / Mixed-Use Scenario'],
            ['/images/5501-33rd-10story-stepback-rendering.jpg', 'Stepback Massing Study'],
          ].map(([src, label]) => (
            <figure key={src} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Image src={src} alt={label} width={1200} height={800} className="h-56 w-full object-cover" />
              <figcaption className="border-t border-slate-200 px-4 py-3 text-sm font-medium text-[#12263a]">{label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="rounded-xl border-l-4 border-[#b78a2f] bg-[#faf9f6] p-4 text-sm text-slate-700">Conceptual image for discussion purposes only. Final design, height, density, unit count, retail layout, parking configuration, financing, approvals, and construction scope remain subject to due diligence, community input, entitlement review, public process, and project underwriting.</p>
      </section>

      <section className="rounded-3xl bg-[#12263a] p-6 text-white sm:p-10">
        <h3 className="text-3xl font-bold">How Confidence Is Built</h3>
        <p className="mt-3 text-slate-100">For a project to advance responsibly, the team must build confidence through diligence, not assumptions.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            ['Site Diligence', 'Review existing site conditions, access, utilities, environmental history, and physical constraints.'],
            ['Community Input', 'Understand what neighbors, nearby businesses, and public stakeholders want this corner to provide.'],
            ['Design Scenarios', 'Compare scale, street presence, retail activation, housing potential, and feasibility.'],
            ['Entitlement Strategy', 'Evaluate approvals, zoning pathways, public process, and city review requirements.'],
            ['Capital Readiness', 'Organize the diligence package, project narrative, cost assumptions, and funding path before advancing.'],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-xl border border-[#b78a2f]/60 bg-[#17324d] p-4">
              <h4 className="font-semibold">{title}</h4>
              <p className="mt-2 text-sm text-slate-200">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-3xl font-bold text-[#12263a]">Decision Gates Before Commitments</h3>
        <p className="text-slate-700">The project is being organized around decision gates before any final development commitment is made.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['1', 'Site and Environmental Review', 'Site conditions and environmental diligence must indicate a responsible path that can be further studied.'],
            ['2', 'Community and Stakeholder Input', 'Feedback themes from neighbors and stakeholders must be understood and incorporated into scenario review.'],
            ['3', 'Design Scenario Refinement', 'Conceptual options must be narrowed based on fit, feasibility, and street-level performance.'],
            ['4', 'Entitlement Path Confirmation', 'A realistic review and approval pathway must be identified with city process requirements in view.'],
            ['5', 'Capital and Feasibility Validation', 'Preliminary costs, funding structure, and execution assumptions must support continued evaluation.'],
            ['6', 'Final Scope and Execution Decision', 'Only after the prior gates are validated can a final go/no-go recommendation be considered.'],
          ].map(([n, title, copy]) => (
            <article key={n} className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-xl font-bold text-[#b78a2f]">Gate {n}</p>
              <h4 className="mt-1 text-lg font-semibold text-[#12263a]">{title}</h4>
              <p className="mt-2 text-sm text-slate-700">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-3xl font-bold text-[#12263a]">Potential Public Benefits Being Evaluated</h3>
        <p className="text-slate-700">The project team is evaluating whether a future redevelopment could support public-facing benefits while remaining financially and technically feasible.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['More active street edge','Neighborhood-serving retail or services','New housing opportunities','Improved frontage and pedestrian experience','Long-term reinvestment in the site','Potential public-private alignment'].map((item) => (
            <article key={item} className="rounded-xl border-l-4 border-[#b78a2f] bg-white p-4 ring-1 ring-slate-200 text-sm text-[#12263a]">Potential benefit being evaluated: {item}</article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-[#12263a] p-6 text-white sm:p-10">
        <h3 className="text-3xl font-bold">What Must Be True for the Project to Advance</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            'Environmental diligence must support a viable path forward.',
            'The entitlement strategy must be realistic and aligned with city review.',
            'The design must respond to site constraints and neighborhood context.',
            'The capital structure must support responsible execution.',
            'Community and public-sector feedback must be understood before advancing.',
            'Construction feasibility must be tested through GC input.',
          ].map((item) => <article key={item} className="rounded-xl border-l-4 border-[#b78a2f] bg-[#17324d] p-4 text-sm">{item}</article>)}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h3 className="text-3xl font-bold text-[#12263a]">Consultant Discipline / Team Input Preview</h3>
        <p className="text-slate-700">The project is being supported by a consultant group providing early-stage feasibility, design review, entitlement strategy, and construction input.</p>
        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>Terry Johnson — Owner / Developer</li>
          <li>Frank Martinez — Project Consultant</li>
          <li>Lucy Van Dusen, LCVD Architecture — Architect Partner</li>
          <li>Mike Jameson — General Contractor A</li>
          <li>Klaus Hirtler — General Contractor B</li>
          <li>Raymond Nelson — General Contractor</li>
        </ul>
        <Link href="/team" className="inline-flex rounded-md bg-[#12263a] px-4 py-2 text-sm font-semibold text-white">Meet the Project Team</Link>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-[#faf9f6] p-5 text-sm leading-relaxed text-slate-700">
        All images, program assumptions, building heights, unit counts, retail layouts, parking concepts, financing structures, public incentives, timelines, and construction scope remain preliminary and subject to due diligence, community input, financing, entitlement review, public agency review, and City and County of Denver approval.
      </section>

      <section className="rounded-3xl bg-[#12263a] p-6 text-white sm:p-10">
        <h3 className="text-3xl font-bold">Move forward with discipline.</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/execution-roadmap" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#12263a]">Explore the Roadmap</Link>
          <Link href="/development-strategy" className="rounded-md border border-white px-4 py-2 text-sm font-semibold text-white">View Development Strategy</Link>
          <Link href="/community" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[#b78a2f] bg-white px-4 py-2 text-sm font-semibold text-[#12263a]">Community Vision Page ↗</Link>
          <Link href="/contact" className="rounded-md bg-[#12263a] px-4 py-2 text-sm font-semibold text-white">Contact Project Team</Link>
        </div>
      </section>
    </div>
  )
}
