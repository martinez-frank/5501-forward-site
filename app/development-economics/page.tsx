import Link from 'next/link'

export const metadata = {
  title: 'Development Economics | 5501 Forward',
  description:
    'Preliminary scenario underwriting, market validation, capital uses, site-stabilization planning, and risk-control framework for the 5501 Forward redevelopment initiative.',
}

const purposeCards = [
  ['Compare Scenarios', 'Compare the 3-story control case against 6-, 8-, and 10-story sensitivity cases.'],
  ['Validate Market Demand', 'Review rental, condo, retail, parking, affordability, and land-sale assumptions before larger capital is pursued.'],
  ['Define Capital Use', 'Show what the next predevelopment tranche is intended to buy and what decisions it unlocks.'],
  ['Identify Key Risks', 'Track environmental, entitlement, cost, parking, market, affordability, site-security, and capital-stack risks.'],
  ['Preserve Optionality', 'Keep the lower-risk path available while testing whether additional height creates real risk-adjusted value.'],
  ['Support Go / No-Go Discipline', 'Use diligence to decide whether to proceed, pause, recapitalize, sell, stabilize the property, or pursue a different scenario.'],
]

export default function DevelopmentEconomicsPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="rounded-3xl border border-[#d7dee8] bg-white p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a67c00]">5501 FORWARD DEVELOPMENT ECONOMICS</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0f223a] sm:text-5xl">Development Economics</h1>
        <p className="mt-4 text-lg text-slate-700">Preliminary scenario underwriting, market validation, capital uses, site-stabilization planning, and risk-control framework for 5501 E. 33rd Avenue.</p>
        <p className="mt-4 max-w-4xl text-slate-700">5501 Forward is currently in a predevelopment and diligence phase. The purpose of this page is to show the economic questions being tested, the diligence required to answer them, and the capital needed before any larger development decision is made.</p>
        <div className="mt-5 rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm text-slate-700">This page is for preliminary planning and discussion purposes only. It is not an offering memorandum, securities solicitation, appraisal, financing commitment, public funding approval, demolition approval, or approved development plan. All figures are directional and subject to environmental review, survey/title findings, entitlement strategy, design feasibility, construction pricing, market validation, financing terms, demolition permit requirements, and City and County of Denver review.</div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#scenario-underwriting" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">View Scenario Framework</Link>
          <Link href="#capital-ask" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">Review Capital Ask</Link>
          <Link href="#risk-register" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">View Risk Register</Link>
          <Link href="/contact" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Contact Investor Team</Link>
          <Link href="/investor-brief" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Back to Investor Brief</Link>
        </div>
      </section>

      <section id="purpose" className="space-y-5 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Purpose of This Page</h2><p className="text-slate-700">The Development Economics page is intended to convert the project narrative into a decision-useful underwriting framework. The goal is not to publish a final pro forma at this stage. The goal is to identify which questions must be answered before ownership, public partners, lenders, or future capital partners can evaluate the project with confidence.</p><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{purposeCards.map(([t,b]) => <article key={t} className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">{t}</h3><p className="mt-2 text-sm text-slate-700">{b}</p></article>)}</div><div className="rounded-2xl bg-[#0f223a] p-4 text-sm text-white">Core principle: Capital should not be asked to guess. Capital should be used to make the project underwritable.</div></section>

      <section id="entitlement-momentum" className="space-y-5 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Entitlement Momentum + Public-Sector Alignment</h2><p className="text-slate-700">The project team has established constructive working relationships with city stakeholders and has received encouraging early feedback from local political leadership regarding the potential for an entitlement-change strategy. The team also has an upcoming meeting with City Council and DURA to discuss potential soft-cost support and eligible redevelopment assistance.</p><p className="text-slate-700">This early alignment is meaningful, but it should be treated as preliminary momentum, not a final approval or funding commitment. The next phase of work should convert political support, public-benefit alignment, and DURA discussions into a documented entitlement pathway, funding eligibility review, and decision-ready capital plan.</p><p className="text-slate-700">Because the existing structure is vacant and aging, the team should also evaluate whether stabilizing or removing the structure can reduce safety concerns, improve neighborhood perception, and support the public-benefit narrative while redevelopment diligence advances.</p></section>

      <section id="scenario-underwriting" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Scenario Underwriting Framework</h2><p className="text-slate-700">The project should not pursue height simply because height may be possible. Additional density should only be advanced if it improves risk-adjusted value after accounting for entitlement risk, community response, construction cost, financing complexity, public benefit, site-stabilization needs, and timing.</p><p className="text-xs text-slate-500">Directional only. Final unit count, retail square footage, parking, cost, and value remain subject to architect test fits, ALTA/survey review, civil/utility review, entitlement analysis, environmental results, demolition-readiness review, GC pricing, market validation, public-sector funding eligibility, and financing terms.</p></section>

      <section id="capital-ask" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Preliminary Capital Ask</h2><p className="text-slate-700">The current capital objective is not to fund vertical construction. The current capital objective is to fund the next risk-reduction gate before larger capital is pursued.</p><div className="rounded-2xl border border-[#d7dee8] bg-[#f7faff] p-5"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#a67c00]">Recommended Initial Predevelopment Tranche</p><p className="mt-2 text-3xl font-semibold text-[#0f223a]">$250,000–$400,000</p></div></section>

      <section id="sources-uses" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Sources &amp; Uses Summary</h2><p className="text-slate-700">The following summary is preliminary and should be refined after consultant proposals, environmental scope, ALTA review, entitlement counsel input, civil/utility findings, demolition-readiness review, market broker input, and GC estimating.</p></section>

      <section id="risk-register" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Risk Register + Mitigation Plan</h2><p className="text-slate-700">The project&apos;s value will depend on converting key risks into known quantities. The following register should be updated as new diligence is completed.</p></section>

      <section id="readiness-scorecard" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Funding Readiness Scorecard</h2></section>

      <section><h2 className="text-2xl font-semibold text-[#0f223a]">Development Economics Roadmap</h2></section>

      <section id="next-step" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Recommended Next Step</h2><p className="text-slate-700">The recommended next step is to fund a controlled predevelopment and entitlement-readiness tranche. This capital should be used to convert owner-funded studies, pending ALTA delivery, Phase II environmental follow-up, public-sector coordination, design testing, market validation, site-stabilization/demo-readiness planning, and consultant input into a clear decision package.</p><p className="text-slate-700">The project&apos;s early public-sector momentum is a meaningful advantage, but the next step is to translate that momentum into documented entitlement direction, DURA eligibility, cost validation, site-condition strategy, and scenario-specific underwriting.</p><p className="text-lg font-semibold text-[#0f223a]">Capital should not be asked to guess. Capital should be used to make the project underwritable.</p><div className="flex flex-wrap gap-3"><Link href="/contact" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">Contact Investor Team</Link><Link href="/investor-brief" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">Back to Investor Brief</Link><Link href="/roadmap" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">View Roadmap</Link><Link href="/documents" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">View Project Documents</Link></div><div className="rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm text-slate-700">All figures, ranges, and scenarios shown on this page are preliminary and for discussion purposes only. They are not final budgets, appraisals, commitments, guarantees, permits, demolition approvals, or investment offerings. Final project economics remain subject to environmental findings, survey/title review, entitlement strategy, design feasibility, construction pricing, market validation, demolition permit requirements, financing terms, public-sector review, and formal approvals.</div></section>
    </div>
  )
}
