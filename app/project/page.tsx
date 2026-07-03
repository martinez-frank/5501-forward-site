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
      <section className="rounded-xl border border-slate-200 bg-slate-50/60 px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2c14e]">5501 Forward</p>
            <h1 className="text-4xl font-bold tracking-tight text-[#12263a] sm:text-5xl">Project Overview</h1>
            <h2 className="text-xl font-semibold text-[#1b3958]">A disciplined redevelopment study for a stronger neighborhood corner.</h2>
            <p className="text-base leading-relaxed text-slate-700">5501 Forward is advancing a disciplined predevelopment process for 5501 E. 33rd Avenue, focused on diligence, entitlement strategy, design feasibility, and capital readiness.</p>
            <p className="text-base leading-relaxed text-slate-700">This page summarizes what is known today, what remains under review, and how the project team is converting early unknowns into clear decisions before any final development commitment is made.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/execution-roadmap" className="rounded-md bg-[#12263a] px-4 py-2 text-sm font-semibold text-white">Explore the Roadmap</Link>
              <Link href="/development-strategy" className="rounded-md border border-[#12263a] bg-white px-4 py-2 text-sm font-semibold text-[#12263a]">View Development Strategy</Link>
              <Link href="/community" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[#f2c14e] bg-white px-4 py-2 text-sm font-semibold text-[#12263a]">Community Vision Page ↗</Link>
              <Link href="/contact" className="rounded-md bg-[#12263a] px-4 py-2 text-sm font-semibold text-white">Contact Project Team</Link>
            </div>
          </div>
          <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative aspect-[4/3] w-full md:aspect-[5/4]">
              <Image src="/images/5501-3story-rendering.jpg" alt="Three-story mixed-use conceptual rendering at 5501 E. 33rd Avenue" fill className="object-cover object-[center_62%]" priority sizes="(min-width: 1280px) 48vw, (min-width: 1024px) 52vw, 100vw" />
            </div>
            <figcaption className="border-t border-slate-200 px-4 py-2.5 text-xs text-slate-600">
              <span className="mr-2 inline-block h-px w-7 align-middle bg-[#f2c14e]" />Three-story conceptual rendering — discussion image only
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="text-3xl font-bold text-[#12263a]">Project Snapshot</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {snapshotCards.map(([label, value]) => (
            <article key={label} className="rounded-lg border-t-2 border-[#f2c14e] bg-white p-5 shadow-sm ring-1 ring-slate-200">
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
            <li key={item} className="rounded-lg border border-[#f2c14e]/60 bg-[#17324d] p-4 text-sm">{item}</li>
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
              'A final sealed ALTA/NSPS Land Title Survey has been received and is being integrated into title, access, utility, environmental, concept-design, and entitlement planning.',
              'No final design or construction plan has been approved.',
            ].map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#12263a]">What We Are Studying</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {['Building scale and neighborhood fit', 'Ground-floor retail and service uses', 'Housing feasibility', 'Parking, access, and circulation', 'Environmental due diligence', 'Entitlement path', 'Public/private financing tools', 'Capital readiness', 'Construction feasibility through GC input'].map((item) => <li key={item}>• {item}</li>)}
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
        <p className="rounded-lg border-l-4 border-[#f2c14e] bg-slate-50 p-4 text-sm text-slate-700">Conceptual image for discussion purposes only. Final design, height, density, unit count, retail layout, parking configuration, financing, approvals, and construction scope remain subject to due diligence, community input, entitlement review, public process, and project underwriting.</p>
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
            <article key={title} className="rounded-xl border border-[#f2c14e]/60 bg-[#17324d] p-4">
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
              <p className="text-xl font-bold text-[#f2c14e]">Gate {n}</p>
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
          {['More active street edge', 'Neighborhood-serving retail or services', 'New housing opportunities', 'Improved frontage and pedestrian experience', 'Long-term reinvestment in the site', 'Potential public-private alignment'].map((item) => (
            <article key={item} className="rounded-lg border-l-4 border-[#f2c14e] bg-white p-4 ring-1 ring-slate-200 text-sm text-[#12263a]">Potential benefit being evaluated: {item}</article>
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
          ].map((item) => <article key={item} className="rounded-xl border-l-4 border-[#f2c14e] bg-[#17324d] p-4 text-sm">{item}</article>)}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h3 className="text-3xl font-bold text-[#12263a]">Project Advisory Group</h3>
        <p className="text-slate-700">A multidisciplinary advisory group is being assembled to support due diligence, design feasibility, entitlement strategy, construction planning, and capital-readiness.</p>
        <ul className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-6">
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-slate-800 lg:col-span-2"><p className="font-semibold text-[#12263a]">Terry Johnson — Owner / Developer</p><p className="mt-2 text-slate-700">Property ownership and development sponsor through Choice Property Investments LLC.</p></li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-slate-800 lg:col-span-2"><p className="font-semibold text-[#12263a]">Lucy Van Dusen, LCVD Architecture — Architect Partner</p><p className="mt-2 text-slate-700">Architectural planning, design feasibility, massing input, and entitlement-facing design guidance.</p></li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-slate-800 lg:col-span-2"><p className="font-semibold text-[#12263a]">Mike Jameson — General Contractor A</p><p className="mt-2 text-slate-700">Commercial GC review, constructability input, and execution planning.</p></li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-slate-800 lg:col-span-3"><p className="font-semibold text-[#12263a]">Klaus Hirtler — General Contractor B</p><p className="mt-2 text-slate-700">Commercial GC review, alternate constructability perspective, and cost/field input.</p></li>
          <li className="rounded-lg border border-slate-200 bg-white p-4 text-slate-800 sm:col-span-2 lg:col-span-3"><p className="font-semibold text-[#12263a]">Peter Van Dusen, LCVD Architecture — Architectural Advisor</p><p className="mt-2 text-slate-700">Architectural advisory support, design feasibility input, entitlement-facing perspective, and project coordination insight.</p></li>
        </ul>
        <Link href="/contact" className="inline-flex rounded-md bg-[#12263a] px-4 py-2 text-sm font-semibold text-white">Contact Project Team</Link>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
        All images, program assumptions, building heights, unit counts, retail layouts, parking concepts, financing structures, public incentives, timelines, and construction scope remain preliminary and subject to due diligence, community input, financing, entitlement review, public agency review, and City and County of Denver approval.
      </section>

      <section className="rounded-3xl bg-[#12263a] p-6 text-white sm:p-10">
        <h3 className="text-3xl font-bold">Move forward with discipline.</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/execution-roadmap" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#12263a]">Explore the Roadmap</Link>
          <Link href="/development-strategy" className="rounded-md border border-white bg-white px-4 py-2 text-sm font-semibold text-[#12263a]">View Development Strategy</Link>
          <Link href="/community" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[#f2c14e] bg-white px-4 py-2 text-sm font-semibold text-[#12263a]">Community Vision Page ↗</Link>
        </div>
      </section>
    </div>
  )
}
