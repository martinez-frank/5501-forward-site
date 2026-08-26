import Link from 'next/link'

export const metadata = {
  title: 'Investor Brief & Capital Readiness | 5501 Forward',
  description: 'Investor brief for 5501 Forward summarizing completed diligence, Phase II findings, DURA advancement, scenario strategy, and next-stage capital readiness.',
}

const diligence = [
  ['Geotechnical / Soil Review', 'Owner-funded and completed', 'Supports early foundation, earthwork, drainage, and constructability assumptions.'],
  ['Phase I ESA', 'Owner-funded and completed', 'Established historical environmental conditions and the need for targeted Phase II work.'],
  ['Phase II ESA', 'Completed August 21, 2026', 'Commercial-use environmental uncertainty materially narrowed. Targeted residential vapor and former fuel-island / UST follow-up remain part of development planning.'],
  ['ALTA/NSPS Land Title Survey', 'Completed and sealed', 'Provides the legal and physical base for title, access, utility, design, and lender-diligence coordination.'],
  ['DURA / Public-Sector Pathway', 'Advanced to agreement-development stage', 'DURA Board authorized staff to proceed with scope, potential funding, and Redevelopment and Disbursement Agreement discussions; final funding remains subject to approval.'],
  ['Entitlement Strategy', 'Being evaluated', 'Compares the by-right control case against higher-density upside.'],
]

export default function InvestorBriefPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="rounded-3xl border border-[#d7dee8] bg-white p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a67c00]">5501 FORWARD INVESTOR BRIEF</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0f223a] sm:text-5xl">Investor Brief &amp; Capital Readiness</h1>
        <p className="mt-4 text-lg text-slate-700">A disciplined predevelopment summary for 5501 E. 33rd Avenue in Denver.</p>
        <p className="mt-4 max-w-4xl text-slate-700">The project has moved beyond first-stage diligence. Geotechnical review, Phase I, Phase II, and the sealed ALTA survey are complete. The current objective is to convert those findings into a defined entitlement, design, cost, market, public-sector, and capital strategy before larger capital commitments are pursued.</p>
        <div className="mt-5 rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm text-slate-700">This page is for preliminary planning and discussion purposes only. It is not an offering memorandum, securities solicitation, appraisal, financing commitment, public funding approval, environmental clearance, or approved development plan.</div>
        <div className="mt-6 flex flex-wrap gap-3"><Link href="#diligence" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">Diligence Status</Link><Link href="/development-economics" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">Development Economics</Link><Link href="/roadmap" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Roadmap</Link></div>
      </section>

      <section id="diligence" className="space-y-5 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Diligence Completed + Current Read</h2>
        <div className="overflow-x-auto rounded-2xl border border-[#d7dee8] bg-white"><table className="min-w-[860px] w-full text-sm"><thead className="bg-[#f7faff]"><tr><th className="p-3 text-left font-semibold text-[#0f223a]">Workstream</th><th className="p-3 text-left font-semibold text-[#0f223a]">Current Status</th><th className="p-3 text-left font-semibold text-[#0f223a]">Investor Meaning</th></tr></thead><tbody>{diligence.map((r)=><tr key={r[0]} className="border-t border-[#e6ebf2] align-top">{r.map((c,i)=><td key={i} className="p-3 text-slate-700">{c}</td>)}</tr>)}</tbody></table></div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Phase II Investor Takeaway</h2>
        <p className="text-slate-700">The completed Phase II materially narrows the earlier broad environmental uncertainty. The consultant concluded that additional investigation of the Phase I recognized environmental conditions and vapor encroachment conditions does not appear warranted for commercial use.</p>
        <div className="grid gap-4 md:grid-cols-2"><article className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">Residential Follow-Up</h3><p className="mt-2 text-sm text-slate-700">Naphthalene in soil gas exceeded the residential screening level, so additional assessment may be warranted if a residential program advances.</p></article><article className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">Former Fuel-Pump Area</h3><p className="mt-2 text-sm text-slate-700">GPR identified subsurface anomalies in the former fuel-pump island area that may warrant targeted investigation or construction soil-management planning.</p></article></div>
        <div className="rounded-2xl bg-[#0f223a] p-4 text-sm text-white">Investor takeaway: The previous broad environmental contingency is no longer treated as a base-case project cost. Remaining environmental costs should be scoped from the actual findings and selected development program.</div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">DURA Advancement</h2>
        <p className="text-slate-700">On August 18, 2026, the Denver Urban Renewal Authority Board of Commissioners authorized staff to move forward with the next phase of discussions for 5501 Forward. The process now moves into final scope development, project-estimate review, potential DURA participation, and negotiation of a Redevelopment and Disbursement Agreement.</p>
        <p className="text-slate-700">DURA staff are targeting the October 15, 2026 Board meeting for finalization and approval, subject to change. Final funding remains subject to the agreement and formal Board approval.</p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Current Funding Objective</h2>
        <div className="rounded-2xl border border-[#0f223a] bg-[#0f223a] p-5 text-white"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Current Investor Discussion Range</p><p className="mt-2 text-3xl font-semibold">$250,000–$400,000</p><p className="mt-3 text-sm text-slate-200">A controlled post-Phase-II predevelopment tranche intended to fund entitlement strategy, architecture and massing, civil and utility review, parking analysis, cost validation, market validation, site stabilization, targeted environmental follow-up where warranted, and capital-readiness materials.</p></div>
        <p className="text-slate-700">The objective is to fund the next decision layer — not the final building. This capital should help determine whether the project advances through the by-right control case, the 6-story primary feasibility case, or another validated path.</p>
      </section>

      <section className="space-y-5"><h2 className="text-2xl font-semibold text-[#0f223a]">Scenario Capital Lens</h2><div className="grid gap-4 md:grid-cols-2">{[['3-Story By-Right Control Case','$8.3M–$10.4M preliminary cost range; lowest entitlement-height risk baseline.'],['6-Story Primary Feasibility Case','$23M–$31.5M preliminary cost range; primary upside case under active feasibility review.'],['8-Story Higher-Density Sensitivity','$41M–$57M preliminary cost range; sensitivity only unless added complexity is validated.'],['10-Story Long-Range Sensitivity','$62M–$86M preliminary cost range; outer-boundary sensitivity, not a proposed base plan.']].map(([t,b])=><article key={t} className="rounded-2xl border border-[#d7dee8] bg-white p-5"><h3 className="font-semibold text-[#0f223a]">{t}</h3><p className="mt-2 text-sm text-slate-700">{b}</p></article>)}</div></section>

      <section className="space-y-4"><div className="flex flex-wrap gap-3"><Link href="/development-economics" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">View Development Economics</Link><Link href="/roadmap" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">View Roadmap</Link><Link href="/contact" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Contact Project Team</Link></div><div className="rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm text-slate-700">All project figures and scenarios remain preliminary and subject to consultant review, entitlement, design, construction pricing, market validation, financing, and formal approvals.</div></section>
    </div>
  )
}
