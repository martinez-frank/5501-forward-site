'use client'

import Link from 'next/link'

const phases = [
  ['Project Alignment', 'Complete', 'Project basis and early strategy confirmed.'],
  ['Site Studies + Due Diligence', 'In Progress', 'Geotechnical and Phase II complete; targeted environmental follow-up remains tied to the selected development program.'],
  ['Survey + ALTA / Title', 'ALTA Complete / Title Review In Progress', 'Sealed ALTA received; title, access, utility, and consultant integration continues.'],
  ['Market + Product Validation', 'In Progress', 'Validate product mix, pricing, affordability, retail, parking, and exit assumptions.'],
  ['Capital Readiness', 'In Progress', 'Prepare disciplined predevelopment capital strategy and investor-ready decision materials.'],
  ['Entitlement + City Strategy', 'In Progress', 'Compare the by-right control case against added-density pathways while DURA agreement discussions advance.'],
  ['Design Team Assembly', 'Queued', 'Coordinate architect, civil, engineering, GC, and specialty consultant scopes.'],
  ['Concept Design + Massing', 'Queued', 'Test 3-, 6-, 8-, and 10-story planning scenarios against actual site constraints.'],
  ['DD + Engineering', 'Queued', 'Advance the selected planning path into coordinated design development.'],
  ['Permit + Financing', 'Queued', 'Align permit readiness with debt and equity requirements.'],
  ['Preconstruction + Mobilization', 'Queued', 'Prepare field controls, procurement, schedule, and site logistics.'],
  ['Vertical Construction', 'Queued', 'Execute the approved project through controlled construction milestones.'],
  ['Closeout + Exit', 'Queued', 'Complete turnover and execute the final hold, sell, refinance, or other exit path.'],
]

const scenarios = [
  ['3 Story', 'By-Right Control Case', '$8.3M–$10.4M', 'Lowest entitlement-height risk baseline.'],
  ['6 Story', 'Primary Feasibility Case', '$23M–$31.5M', 'Primary upside case under active feasibility review.'],
  ['8 Story', 'Higher-Density Sensitivity', '$41M–$57M', 'Sensitivity only unless added complexity is validated.'],
  ['10 Story', 'Long-Range Sensitivity', '$62M–$86M', 'Outer-boundary sensitivity; not a proposed base plan.'],
]

export default function RoadmapDashboard() {
  return (
    <div className="roadmap-content space-y-10 pb-14">
      <section className="rounded-2xl border border-[#d4af37]/50 bg-[#0d1b2a] p-6 text-[#f8fafc] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37]">5501 FORWARD EXECUTION ROADMAP</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">5501 E. 33rd Development Execution Roadmap</h1>
        <p className="mt-3 max-w-4xl text-sm text-slate-200 md:text-base">A disciplined project index for site diligence, entitlement strategy, capital sequencing, consultant coordination, and construction readiness.</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full border border-[#d4af37]/60 px-3 py-1">Geotech reviewed</span>
          <span className="rounded-full border border-[#d4af37]/60 px-3 py-1">Phase II complete / targeted follow-up</span>
          <span className="rounded-full border border-[#d4af37]/60 px-3 py-1">Sealed ALTA received / title integration active</span>
          <span className="rounded-full border border-[#d4af37]/60 px-3 py-1">DURA agreement discussions advancing</span>
          <span className="rounded-full border border-[#d4af37]/60 px-3 py-1">Capital narrative forming</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3"><Link href="/development-economics" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0d1b2a]">Development Economics</Link><Link href="/investor-brief" className="rounded-lg border border-[#d4af37] px-4 py-2 text-sm font-semibold">Investor Brief</Link></div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {['Current Stage: Due Diligence + Market Validation','Site Studies: Geotech + Phase II Complete / Targeted Follow-Up','Public Sector: DURA Agreement Development','Entitlement: By-Right Control + Density Feasibility','Capital: $250K–$400K Predevelopment Discussion Range','Design Readiness: Scenario Test-Fit Preparation'].map((c)=><div key={c} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-[#0f223a]">{c}</div>)}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#0f223a]">Current Diligence Read</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-semibold text-[#0f223a]">Phase II Complete</h3><p className="mt-2 text-sm text-slate-700">Commercial-use environmental uncertainty has materially narrowed. Residential vapor and former fuel-island / UST follow-up remain targeted planning items.</p></article>
          <article className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-semibold text-[#0f223a]">DURA Advanced</h3><p className="mt-2 text-sm text-slate-700">DURA Board authorized staff to proceed with final scope, potential funding, and Redevelopment and Disbursement Agreement discussions. Final funding remains subject to formal approval.</p></article>
          <article className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-semibold text-[#0f223a]">Next Capital Layer</h3><p className="mt-2 text-sm text-slate-700">Focus on entitlement, design, civil/utilities, market validation, cost confidence, site stabilization, and decision-ready capital materials rather than vertical construction.</p></article>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#0f223a]">Scenario Path</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{scenarios.map(([story,title,cost,body])=><article key={story} className="rounded-xl border border-slate-200 bg-white p-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a67c00]">{story}</p><h3 className="mt-2 font-semibold text-[#0f223a]">{title}</h3><p className="mt-2 text-lg font-semibold text-[#0f223a]">{cost}</p><p className="mt-2 text-sm text-slate-700">{body}</p></article>)}</div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#0f223a]">Execution Phases</h2>
        <div className="space-y-3">{phases.map(([title,status,body],index)=><article key={title} className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-[80px_1fr_220px]"><div className="text-sm font-semibold text-[#a67c00]">Phase {index+1}</div><div><h3 className="font-semibold text-[#0f223a]">{title}</h3><p className="mt-1 text-sm text-slate-700">{body}</p></div><div className="text-sm font-semibold text-slate-600">{status}</div></article>)}</div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-[#f8fafc] p-5"><h2 className="text-xl font-bold text-[#0f223a]">Near-Term Priorities</h2><ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">{['Scope targeted environmental follow-up based on Phase II and selected development program','Integrate sealed ALTA with title, architecture, civil, utility, and entitlement review','Advance DURA scope and Redevelopment and Disbursement Agreement discussions','Validate 3-story control and 6-story primary feasibility cases through test fits','Develop conceptual construction pricing and market-supported economics','Prepare qualified investor / capital partner discussion materials'].map((a)=><li key={a} className="rounded-lg bg-white p-3 text-slate-700">{a}</li>)}</ul></section>
    </div>
  )
}
