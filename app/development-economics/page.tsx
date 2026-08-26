import Link from 'next/link'

export const metadata = {
  title: 'Development Economics | 5501 Forward',
  description:
    'Preliminary scenario underwriting, Phase II environmental update, DURA advancement, capital uses, and risk-control framework for 5501 Forward.',
}

const scenarios = [
  {
    title: '3-Story By-Right Control Case',
    role: 'Control case / lowest entitlement-height risk',
    units: '18–24',
    residential: '13,300–21,000 SF',
    retail: '2,000–3,500 SF',
    parking: '10–18 stalls or reduced parking strategy',
    cost: '$8.3M–$10.4M',
    risk: 'Low / By-Right, subject to zoning confirmation',
    read: 'Practical baseline while higher-density alternatives are tested.',
  },
  {
    title: '6-Story Primary Feasibility Case',
    role: 'Primary feasibility study',
    units: '50–70',
    residential: '35,500–60,000 SF',
    retail: '2,000–3,500 SF',
    parking: '25–45 stalls; structured, tuck-under, or reduced parking strategy',
    cost: '$23M–$31.5M',
    risk: 'Moderate / High',
    read: 'Primary upside case if entitlement, parking, public benefit, cost, and market assumptions validate.',
  },
  {
    title: '8-Story Higher-Density Sensitivity',
    role: 'Higher-density sensitivity',
    units: '75–95',
    residential: '53,750–80,250 SF',
    retail: '2,000–3,500 SF',
    parking: '40–65 stalls; likely structured or aggressive parking reduction',
    cost: '$41M–$57M',
    risk: 'High',
    read: 'Preserve as a sensitivity unless entitlement, infrastructure, market, cost, and capital support further study.',
  },
  {
    title: '10-Story Long-Range Entitlement Sensitivity',
    role: 'Strategic upside sensitivity',
    units: '100–125',
    residential: '72,000–105,750 SF',
    retail: '2,000–3,500 SF',
    parking: '50–85 stalls; structured or minimal-parking urban model',
    cost: '$62M–$86M',
    risk: 'Very High',
    read: 'Long-range outer-boundary sensitivity only; not a proposed base plan.',
  },
]

export default function DevelopmentEconomicsPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="rounded-3xl border border-[#d7dee8] bg-white p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a67c00]">5501 FORWARD DEVELOPMENT ECONOMICS</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0f223a] sm:text-5xl">Development Economics</h1>
        <p className="mt-4 text-lg text-slate-700">Preliminary scenario underwriting, Phase II environmental update, DURA advancement, capital uses, and risk-control framework for 5501 E. 33rd Avenue.</p>
        <p className="mt-4 max-w-4xl text-slate-700">5501 Forward remains in predevelopment. The purpose of this page is to show what has been de-risked, what still needs to be validated, and the directional “cowboy math” behind the principal development scenarios before larger capital is committed.</p>
        <div className="mt-5 rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm text-slate-700">This page is for preliminary planning and discussion purposes only. It is not an offering memorandum, securities solicitation, appraisal, financing commitment, public funding approval, environmental clearance, demolition approval, or approved development plan. All figures remain directional and subject to consultant review, entitlement strategy, design feasibility, market validation, financing terms, and formal approvals.</div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#phase-ii" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">Phase II Update</Link>
          <Link href="#scenario-underwriting" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">Scenario Framework</Link>
          <Link href="#capital-ask" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Capital Framework</Link>
          <Link href="/investor-brief" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Investor Brief</Link>
        </div>
      </section>

      <section id="phase-ii" className="space-y-5 scroll-mt-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a67c00]">Diligence Milestone</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#0f223a]">Environmental Diligence Update — Phase II Complete</h2>
        </div>
        <p className="text-slate-700">The Phase II Environmental Site Assessment was completed August 21, 2026. Based on the investigation results, additional investigation of the recognized environmental conditions and vapor encroachment conditions identified in the Phase I does not appear warranted for commercial use.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">Commercial Use</h3><p className="mt-2 text-sm text-slate-700">The Phase II materially narrows the prior broad environmental uncertainty for commercial-use planning.</p></article>
          <article className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">Residential Vapor</h3><p className="mt-2 text-sm text-slate-700">Naphthalene in soil gas exceeded the residential screening level. Additional assessment may be warranted if residential development advances.</p></article>
          <article className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">Former Fuel-Pump Area</h3><p className="mt-2 text-sm text-slate-700">Ground-penetrating radar identified subsurface anomalies that may warrant targeted investigation or a soil waste-management plan. If a UST is encountered, proper regulatory closure would be required.</p></article>
        </div>
        <div className="rounded-2xl bg-[#0f223a] p-4 text-sm text-white">Current underwriting posture: the former broad $350,000–$500,000 environmental-response envelope is not treated as a base-case project cost. Remaining environmental costs should be scoped from the actual Phase II findings, final development program, and consultant recommendations.</div>
      </section>

      <section id="dura" className="space-y-5 scroll-mt-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a67c00]">Public-Sector Advancement</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#0f223a]">DURA Advancement</h2>
        </div>
        <p className="text-slate-700">On August 18, 2026, the Denver Urban Renewal Authority Board of Commissioners authorized DURA staff to move forward with the next phase of discussions for 5501 Forward. The next steps include defining the final project scope, reviewing project estimates and potential DURA participation, and negotiating a Redevelopment and Disbursement Agreement.</p>
        <p className="text-slate-700">DURA staff are currently targeting the October 15, 2026 Board meeting for finalization and approval, subject to change. No DURA funding should be considered secured until the required agreement and Board approval process are completed.</p>
      </section>

      <section id="scenario-underwriting" className="space-y-5 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Scenario Underwriting Framework</h2>
        <p className="text-slate-700">The project should not pursue height simply because height may be possible. Additional density should only advance if it improves risk-adjusted value after accounting for entitlement risk, community response, infrastructure, parking, construction cost, financing complexity, public benefit, and timing.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {scenarios.map((s) => (
            <article key={s.title} className="rounded-2xl border border-[#d7dee8] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a67c00]">{s.role}</p>
              <h3 className="mt-2 text-xl font-semibold text-[#0f223a]">{s.title}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[['Total Units', s.units], ['Residential SF', s.residential], ['Retail SF', s.retail], ['Parking', s.parking], ['Preliminary Cost', s.cost], ['Entitlement Risk', s.risk]].map(([label, value]) => (
                  <div key={label}><p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f223a]">{label}</p><p className="mt-1 text-sm text-slate-700">{value}</p></div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700">{s.read}</p>
            </article>
          ))}
        </div>
        <div className="rounded-2xl bg-[#0f223a] p-4 text-sm text-white">Current planning read: 3 stories remains the by-right control case; 6 stories is the primary feasibility case; 8 and 10 stories remain upside sensitivities until the added entitlement, infrastructure, cost, market, and capital complexity is justified.</div>
      </section>

      <section id="capital-ask" className="space-y-5 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Post-Phase-II Predevelopment Capital</h2>
        <p className="text-slate-700">The next capital should fund the decision layer following completion of the Phase II ESA. It is not vertical construction capital and should not be used to imply that the final development scenario has been selected.</p>
        <div className="rounded-2xl border border-[#0f223a] bg-[#0f223a] p-5 text-white"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Recommended Initial Predevelopment Tranche</p><p className="mt-2 text-3xl font-semibold">$250,000–$400,000</p><p className="mt-3 text-sm text-slate-200">Purpose: entitlement and zoning strategy, architecture and massing studies, civil and utility feasibility, parking analysis, market validation, conceptual construction pricing, site stabilization, targeted environmental follow-up where warranted, and preparation of a decision-ready capital package.</p></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[['Entitlement + Zoning','Confirm by-right assumptions and define realistic added-density pathways.'],['Architecture + Massing','Test 3-, 6-, 8-, and 10-story scenarios against actual site constraints and usable yield.'],['Civil + Utilities + Parking','Validate drainage, access, utility capacity, parking, ROW, and infrastructure implications.'],['Market + Product Validation','Validate rent, condo, retail, absorption, affordability, and exit assumptions.'],['Cost + Constructability','Develop conceptual construction pricing and identify cost drivers before larger capital decisions.'],['Capital Readiness','Prepare organized sources-and-uses, risk register, decision package, and materials for qualified capital partners.']].map(([t,b]) => <article key={t} className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">{t}</h3><p className="mt-2 text-sm text-slate-700">{b}</p></article>)}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Immediate Site-Readiness Planning</h2>
        <p className="text-slate-700">With Phase II completed, remaining near-term site-readiness planning should be separated from completed diligence rather than bundled together.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#d7dee8] bg-white"><table className="min-w-[720px] w-full text-sm"><thead className="bg-[#f7faff]"><tr><th className="p-3 text-left font-semibold text-[#0f223a]">Use</th><th className="p-3 text-left font-semibold text-[#0f223a]">Planning Range</th><th className="p-3 text-left font-semibold text-[#0f223a]">Purpose</th></tr></thead><tbody>{[['Vacant Property Stabilization / Fencing / Monitoring','$11,000–$22,000','Reduce trespass, dumping, vandalism, fire risk, nuisance conditions, and neighborhood-impact concerns.'],['Abatement / Utility Cutoff / Demolition Decision Readiness','$20,000–$50,000','Hazmat review, clean-out planning, utility coordination, demolition bid solicitation, and permit-readiness review.'],['Remaining Immediate Site-Readiness Planning','$31,000–$72,000','Current remaining range after separating the completed Phase II from future site-readiness needs.'],['Rounded Executive Planning Range','$35,000–$75,000','Simple near-term planning target; not a final budget or DURA funding request.']].map((r)=><tr key={r[0]} className="border-t border-[#e6ebf2] align-top">{r.map((c,i)=><td key={i} className="p-3 text-slate-700">{c}</td>)}</tr>)}</tbody></table></div>
        <p className="text-xs text-slate-500">The prior Phase II proposal amount should not be represented as the final paid Phase II cost unless and until the final consultant invoice is reconciled.</p>
      </section>

      <section className="space-y-4"><div className="flex flex-wrap gap-3"><Link href="/investor-brief" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">View Investor Brief</Link><Link href="/roadmap" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">View Roadmap</Link><Link href="/documents" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Project Documents</Link><Link href="/contact" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Contact Project Team</Link></div><div className="rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm text-slate-700">All figures, ranges, and scenarios shown on this page are preliminary and for discussion purposes only. They are not final budgets, appraisals, commitments, guarantees, permits, environmental clearance, demolition approvals, or investment offerings.</div></section>
    </div>
  )
}
