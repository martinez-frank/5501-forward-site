import type { Metadata } from 'next'
import Link from 'next/link'

const thesisCards = [
  {
    title: 'Preserve the By-Right Path',
    body: 'The 3-story scenario provides the clearest near-term control case and helps protect against overcommitting before entitlement, cost, market, infrastructure, and financing conditions are better understood.',
  },
  {
    title: 'Test Residential Yield Sensitivities',
    body: '6-, 8-, and 10-story scenarios may be studied as planning sensitivities to test housing yield, affordability impact, financial feasibility, neighborhood fit, infrastructure requirements, and public-benefit alignment.',
  },
  {
    title: 'Sequence Capital Carefully',
    body: 'Early capital should reduce uncertainty, not create premature obligations. Consultant spend should answer specific entitlement, environmental, market, design, infrastructure, cost, or financing questions.',
  },
] as const

const scenarioCards = [
  {
    title: '3 Stories — By-Right Control Case',
    role: 'Lowest entitlement-height risk baseline',
    strength: 'Provides the clearest control case and near-term execution path, subject to zoning confirmation.',
    risk: 'May produce lower yield and may require cost control, market validation, and public-benefit alignment to support feasibility.',
  },
  {
    title: '6 Stories — Primary Feasibility Case',
    role: 'Primary feasibility scenario',
    strength: 'May improve residential yield and project viability while remaining more moderate than higher-density sensitivity cases.',
    risk: 'Requires entitlement pathway, infrastructure, parking, public-benefit, affordability, cost, financing, and market validation.',
  },
  {
    title: '8 Stories — Higher-Density Sensitivity',
    role: 'Higher-density sensitivity case',
    strength: 'May create additional residential yield and long-term optionality if entitlement, public-sector alignment, infrastructure, market, cost, and capital conditions support further study.',
    risk: 'Greater entitlement, parking, infrastructure, massing, financing, construction-cost, and stakeholder complexity.',
  },
  {
    title: '10 Stories — Long-Range Entitlement Sensitivity',
    role: 'Long-range sensitivity case',
    strength: 'Preserves the ability to understand the outer boundary of potential residential yield if entitlement, DURA, public-benefit, infrastructure, market, parking, and capital-stack conditions support further study.',
    risk: 'Highest entitlement, public-process, infrastructure, parking, construction-cost, financing, timeline, and community-response risk. Not a proposed base plan.',
  },
] as const

const benefitCards = [
  'Neighborhood-serving ground-floor retail',
  'Improved corner activation and street presence',
  'Housing supply near jobs, transit, and services',
  'Potential mixed-income or workforce housing positioning',
  'Environmental cleanup or site condition improvement',
  'Long-term tax base and corridor reinvestment',
  'Safer pedestrian experience and better frontage',
  'Clearer public process before final commitments',
] as const

const capitalCards = [
  {
    title: 'Owner / Sponsor Soft-Cost Tranche',
    body: 'Early diligence, consultant alignment, survey, environmental review, and strategic positioning.',
  },
  {
    title: 'Consultant + Entitlement Tranche',
    body: 'Architecture, engineering, zoning, planning, outreach support, and permit-grade advancement under staged controls.',
  },
  {
    title: 'Predevelopment Equity Tranche',
    body: 'Capital supporting design progression, entitlement milestones, financing readiness, and project underwriting.',
  },
  {
    title: 'Construction Capital Stack',
    body: 'Debt, equity, public-sector tools, and GMP-aligned construction funding once scope, approvals, and delivery path are sufficiently mature.',
  },
] as const

const gates = [
  {
    title: 'Site + Environmental Review',
    body: 'Existing site conditions, ESA findings, tank/petroleum history, geotechnical assumptions, and cleanup exposure.',
  },
  {
    title: 'Survey / Title / Legal Base',
    body: 'Boundary, easements, ROW, utilities, title matters, and physical constraints.',
  },
  {
    title: 'Market + Product Fit',
    body: 'Retail demand, rental assumptions, condo pricing, affordability positioning, and absorption risk.',
  },
  {
    title: 'Height Scenario Selection',
    body: '3-, 6-, 8-, and 10-story paths compared for feasibility, entitlement risk, economics, and public benefit.',
  },
  {
    title: 'Public-Sector Alignment',
    body: 'City process, district outreach, planning strategy, possible public financing tools, and approval path.',
  },
  {
    title: 'Capital Stack Readiness',
    body: 'Sponsor equity, predevelopment budget, debt assumptions, public-sector support, and investor readiness.',
  },
  {
    title: 'Permit / Construction Path',
    body: 'DD, engineering, GMP alignment, permit strategy, procurement, and construction sequencing.',
  },
] as const

export const metadata: Metadata = {
  title: 'Development Strategy',
  description: 'A disciplined path to preserve near-term feasibility while testing long-term upside.',
}

export default function StrategyPage() {
  return (
    <div className="space-y-14 pb-6 sm:space-y-16">
      <section className="space-y-6 rounded-2xl border border-slate-200 bg-[#fffdf8] p-6 sm:p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2c14e]">5501 FORWARD STRATEGY</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#0d1b2a] sm:text-5xl">Development Strategy</h1>
        <p className="max-w-[85ch] text-base leading-7 text-[#1f2f43] sm:text-lg">
          The strategy for 5501 Forward is to preserve a feasible near-term development path while studying whether additional height, mixed-use programming, neighborhood-serving retail, and public-sector alignment can create a stronger long-term project.
        </p>
        <p className="max-w-[85ch] text-base leading-7 text-slate-700 sm:text-lg">
          The project team is not treating maximum height as the objective. The objective is to identify the most responsible path that balances feasibility, entitlement risk, community benefit, capital readiness, and long-term value.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/roadmap" className="rounded-lg bg-[#0d1b2a] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#13263a]">Review Roadmap →</Link>
          <Link href="/investor-brief" className="rounded-lg border border-[#0d1b2a] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-slate-50">View Investor Brief →</Link>
        </div>
      </section>

      <section className="space-y-6 rounded-2xl border border-[#0d1b2a] bg-[#0d1b2a] p-6 text-white sm:p-8 md:p-10">
        <div className="space-y-3">
          <span className="block h-1 w-16 rounded-full bg-[#f2c14e]" />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-[2.05rem]">Preserve the executable path. Test residential yield sensitivity. Sequence capital with certainty.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {thesisCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/20 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Scenario Strategy Matrix</h2>
        <p className="max-w-[95ch] text-sm leading-6 text-slate-700 sm:text-base">
          These scenarios are planning sensitivities, not proposed final designs. The 3-story case is the by-right control case, the 6-story case is the primary feasibility case, and the 8- and 10-story cases require additional entitlement, public-sector, infrastructure, market, cost, and capital validation.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {scenarioCards.map((scenario) => (
            <article key={scenario.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-[#0d1b2a]">{scenario.title}</h3>
              <dl className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                <div>
                  <dt className="inline font-semibold text-[#0d1b2a]">Role: </dt>
                  <dd className="inline">{scenario.role}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#0d1b2a]">Strength: </dt>
                  <dd className="inline">{scenario.strength}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-[#0d1b2a]">Risk: </dt>
                  <dd className="inline">{scenario.risk}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="rounded-lg border border-slate-200 bg-[#fffdf8] p-4 text-sm leading-6 text-slate-700">
          These scenarios are planning studies only. No final height, density, unit count, retail program, parking plan, financing structure, public-sector support, or approval path has been selected.
        </p>
      </section>

      <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Why a Stronger Strategy Matters</h2>
        <p className="max-w-[85ch] text-base leading-7 text-slate-700">
          A successful strategy must connect private feasibility with visible public benefit. The project becomes stronger when the development path can support neighborhood value, housing opportunity, street-level activation, public-safety improvement, and responsible reinvestment without overcommitting before diligence is complete.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefitCards.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-[#fffdf8] p-4 text-sm font-medium leading-6 text-[#1f2f43]">{item}</div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-2xl border border-[#0d1b2a]/20 bg-[#0d1b2a] p-6 text-white sm:p-8 md:p-10">
        <h2 className="text-3xl font-semibold tracking-tight">Capital should follow certainty.</h2>
        <p className="max-w-[85ch] text-base leading-7 text-slate-200">
          The early capital strategy should be staged around risk reduction. Survey, environmental diligence, market validation, concept design, entitlement strategy, and public-sector alignment should precede major construction-level commitments.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {capitalCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/20 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Decision Gates Before Major Commitments</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {gates.map((gate, index) => (
            <article key={gate.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2c14e]">Gate {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#0d1b2a]">{gate.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{gate.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-2xl border border-[#0d1b2a] bg-[#0d1b2a] p-6 text-white sm:p-8 md:p-10">
        <span className="block h-1 w-16 rounded-full bg-[#f2c14e]" />
        <h2 className="text-3xl font-semibold tracking-tight">Recommended Strategic Posture</h2>
        <p className="max-w-[85ch] text-base leading-7 text-slate-200">
          Preserve the 3-story by-right control case as the clearest near-term baseline while testing whether additional residential yield can be justified through entitlement, market, community, infrastructure, public-sector, consultant, and capital validation.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/roadmap" className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-[#0d1b2a] hover:bg-slate-100">Review Roadmap →</Link>
          <Link href="/investor-brief" className="rounded-lg border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">View Investor Brief →</Link>
          <Link href="/contact" className="rounded-lg border border-[#f2c14e]/90 px-5 py-3 text-center text-sm font-semibold text-[#fdf3cf] hover:bg-[#f2c14e]/10">Contact Project Team →</Link>
        </div>
      </section>
    </div>
  )
}
