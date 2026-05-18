import Link from 'next/link'

export const metadata = {
  title: 'Investor Brief & Capital Readiness | 5501 Forward',
  description:
    'Preliminary investor brief for 5501 Forward, summarizing diligence status, capital readiness, scenario strategy, and next-step predevelopment funding objectives.',
}

const thesisCards = [
  ['Infill Redevelopment Opportunity', '5501 E. 33rd Avenue is an underutilized corner with potential for improved street presence, neighborhood activity, housing opportunity, and long-term value creation.'],
  ['Owner Commitment Already Demonstrated', 'The owner has funded key early diligence before seeking next-stage capital, reducing the risk of an untested concept.'],
  ['Capital Follows Certainty', 'The next investment should reduce uncertainty before larger entitlement, financing, or construction commitments are made.'],
  ['Scenario-Based Strategy', 'The project can preserve a lower-risk baseline while testing whether additional height or mixed-use programming creates enough value to justify additional complexity.'],
  ['Public-Benefit Alignment', 'Potential public-sector tools may strengthen feasibility if eligibility, documentation, funding availability, and agency priorities align.'],
  ['Investor-Ready Discipline', 'The goal is to prepare a clear decision package for ownership, consultants, public partners, lenders, and future capital partners.'],
]

const useOfFunds = [
  ['Environmental Follow-Up', 'Advance Phase II follow-up and clarify environmental risk exposure before larger capital commitments.'],
  ['Entitlement Strategy', 'Define by-right versus added-density entitlement pathways, timelines, and approval considerations.'],
  ['Design + Massing Refinement', 'Test and refine 3-, 6-, 8-, and 10-story scenarios to compare risk, fit, and value potential.'],
  ['Civil + Utility Review', 'Validate access, grading, drainage, utility capacity, and required infrastructure assumptions.'],
  ['Cost + Constructability', 'Develop early cost and constructability confidence with consultant and contractor input.'],
  ['Market Validation', 'Confirm demand, programming fit, affordability assumptions, and exit pathway realism.'],
  ['Public-Sector Funding Coordination', 'Advance DURA-related and public-sector coordination while keeping underwriting conservative.'],
  ['Capital Stack Readiness', 'Prepare a decision-ready package for ownership, lenders, and future capital partners.'],
]

export default function InvestorBriefPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="rounded-3xl border border-[#d7dee8] bg-white p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a67c00]">5501 FORWARD INVESTOR BRIEF</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0f223a] sm:text-5xl">Investor Brief &amp; Capital Readiness</h1>
        <p className="mt-4 text-lg text-slate-700">A disciplined predevelopment summary for 5501 E. 33rd Avenue in Denver.</p>
        <p className="mt-4 max-w-4xl text-slate-700">5501 Forward is an early-stage redevelopment initiative evaluating a potential mixed-use future for 5501 E. 33rd Avenue in Denver. The owner has already funded meaningful early diligence, including geotechnical review, Phase I environmental review, and survey-related work. The current objective is to convert completed and pending diligence into a clear, financeable development path before larger capital is pursued.</p>
        <div className="mt-6 rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm text-slate-700">
          This page is for preliminary planning and discussion purposes only. It is not an offering memorandum, securities solicitation, appraisal, financing commitment, public funding approval, or approved development plan.
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#diligence-status" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">Review Diligence Status</Link>
          <Link href="/development-economics" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">View Development Economics</Link>
          <Link href="/contact" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">Contact Project Team</Link>
          <Link href="/roadmap" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">View Roadmap</Link>
          <Link href="/strategy" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">View Strategy</Link>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Institutional Investment Thesis</h2>
        <p className="text-slate-700">The project is being evaluated through a staged, disciplined process to identify the most financeable, approvable, and durable development path.</p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {thesisCards.map(([title, body]) => (
            <article key={title} className="card-lift rounded-2xl border border-[#d7dee8] bg-white p-5">
              <h3 className="text-base font-semibold text-[#0f223a]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="diligence-status" className="space-y-5 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Diligence Completed + Pending</h2>
        <div className="overflow-x-auto rounded-2xl border border-[#d7dee8]">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f8fc] text-[#0f223a]"><tr><th className="px-4 py-3">Workstream</th><th className="px-4 py-3">Current Status</th><th className="px-4 py-3">Investor Meaning</th></tr></thead>
            <tbody>
              {[
                ['Geotechnical / Soil Review', 'Owner-funded and completed', 'Supports early understanding of soil, foundation, drainage, and construction assumptions.'],
                ['Phase I ESA', 'Owner-funded and completed', 'Identifies environmental history and whether targeted follow-up is needed.'],
                ['Phase II ESA', 'Proposal ordered / pending', 'Next step to clarify environmental risk and potential cleanup exposure.'],
                ['Survey Work', 'Purchased / in process', 'Supports site planning, boundary, access, and title review.'],
                ['ALTA Survey', 'Purchased / pending delivery June 4', 'Needed for title, easement, access, utility, and legal-base confirmation.'],
                ['DURA / Public-Sector Pathway', 'Discussions underway', 'Potential support pathway being explored, not secured or guaranteed.'],
                ['Entitlement Strategy', 'Being evaluated', 'Needed to compare by-right path against height/density upside.'],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[#e3e8ef] align-top"><td className="px-4 py-3 font-medium text-[#0f223a]">{row[0]}</td><td className="px-4 py-3 text-slate-700">{row[1]}</td><td className="px-4 py-3 text-slate-700">{row[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Public-Sector Coordination</h2>
        <p className="text-slate-700">The project team has begun public-sector coordination regarding the 5501 E. 33rd Avenue redevelopment opportunity. Early conversations have focused on project information, environmental next steps, preliminary cost considerations, and potential public-sector support pathways.</p>
        <p className="text-slate-700">The team is evaluating whether potential DURA-related tools may be available to support eligible project needs, which could include environmental diligence, infrastructure, public-realm improvements, or other qualifying redevelopment costs.</p>
        <p className="text-slate-700">Any DURA-related support remains subject to eligibility, documentation, available funding, agency priorities, formal review, and approval processes. No public-sector funding should be assumed as secured at this stage.</p>
        <div className="rounded-2xl bg-[#0f223a] p-4 text-sm text-white">Investor takeaway: Public-sector engagement is active, but the funding strategy remains conservative. Any DURA-related support should be treated as a potential feasibility enhancer, not a base-case assumption.</div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Current Funding Objective</h2>
        <h3 className="text-xl font-semibold text-slate-900">Fund the next decision layer — not the final building.</h3>
        <p className="text-slate-700">The next funding need is not construction capital. It is a controlled predevelopment and entitlement-readiness tranche designed to convert completed owner-funded diligence and pending consultant input into a financeable project decision.</p>
        <p className="text-slate-700">The objective is to determine whether the project should proceed as a conservative by-right scenario, a moderate-density mixed-use scenario, or a higher-density entitlement strategy.</p>
        <div className="grid gap-4 md:grid-cols-2">{useOfFunds.map(([t, b]) => <article key={t} className="rounded-2xl border border-[#d7dee8] p-5"><h4 className="font-semibold text-[#0f223a]">{t}</h4><p className="mt-2 text-sm text-slate-700">{b}</p></article>)}</div>
      </section>

      <section className="space-y-4"><h2 className="text-2xl font-semibold text-[#0f223a]">What This Capital Buys</h2><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{[['Known Risk Position', 'Clarify environmental, title, survey, entitlement, and infrastructure risk.'], ['Preferred Scenario Selection', 'Select the preferred path after comparing baseline and upside scenarios.'], ['Cost Confidence', 'Develop a more realistic early cost range with consultant and contractor input.'], ['Public-Benefit Narrative', 'Document redevelopment benefits with a clear public-sector-facing narrative.'], ['Capital Partner Readiness', 'Prepare materials for lender, JV, investor, and public-partner diligence.'], ['Go / No-Go Discipline', 'Set decision gates so larger capital is only deployed when warranted.']].map(([t, b]) => <article key={t} className="rounded-2xl border border-[#d7dee8] p-5"><h4 className="font-semibold text-[#0f223a]">{t}</h4><p className="mt-2 text-sm text-slate-700">{b}</p></article>)}</div></section>

      <section id="scenario-lens" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Scenario Capital Lens</h2><div className="grid gap-4 md:grid-cols-2">{[['3-Story Baseline / By-Right Path', 'Fastest executable path. Lower entitlement complexity. Lower capital intensity. Serves as the control case.'], ['6-Story Moderate Lift', 'Preferred upside study. May improve housing yield and project economics while maintaining a more realistic entitlement path.'], ['8-Story Optimized Yield', 'Higher-value sensitivity case. May create stronger investment performance but requires greater entitlement, cost, and public-benefit validation.'], ['10-Story Maximum Upside', 'Maximum optionality case. Highest potential yield but longest approval path and highest political, entitlement, financing, and construction complexity.']].map(([t, b]) => <article key={t} className="rounded-2xl border border-[#d7dee8] p-5"><h4 className="font-semibold text-[#0f223a]">{t}</h4><p className="mt-2 text-sm text-slate-700">{b}</p></article>)}</div><div className="rounded-2xl bg-[#0f223a] p-4 text-sm text-white">Core investment discipline: The goal is not the tallest building. The goal is the most responsible, financeable, and valuable development path.</div></section>

      <section id="capital-framework" className="space-y-5 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Preliminary Capital Stack Framework</h2><div className="overflow-x-auto rounded-2xl border border-[#d7dee8]"><table className="w-full min-w-[900px] text-sm"><thead className="bg-[#f5f8fc]"><tr><th className="px-4 py-3">Layer</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Purpose</th><th className="px-4 py-3">Investor Meaning</th></tr></thead><tbody>{[['Owner-Funded Diligence', 'Completed / in process', 'Soil/geotech, Phase I ESA, survey, early consultant coordination', 'Demonstrates sponsor commitment and reduces initial discovery risk.'], ['Current Predevelopment Tranche', 'Current funding need', 'Phase II follow-up, ALTA integration, entitlement strategy, DURA coordination, design testing, cost validation, investor-readiness package', 'Funds the next decision layer before larger capital is committed.'], ['Potential Public-Sector Support', 'Under discussion / not secured', 'Possible DURA-related support for eligible environmental, infrastructure, public-realm, or redevelopment costs', 'Potential feasibility enhancer, not a base-case assumption.'], ['Future Project Equity', 'Future capital event', 'Sponsor/JV equity for entitlement, design advancement, and construction readiness', 'To be structured after risk, scope, and entitlement path are clearer.'], ['Senior Construction Debt', 'Future capital event', 'Construction financing after approved scope, budget, plans, permits, and capital stack alignment', 'Not applicable until the project reaches construction-readiness.'], ['Exit / Permanent Capital', 'Future event', 'Refinance, sale, permanent loan, condo sellout, or mixed exit strategy', 'Depends on final development program and market validation.']].map((r) => <tr key={r[0]} className="border-t border-[#e3e8ef] align-top"><td className="px-4 py-3 font-medium text-[#0f223a]">{r[0]}</td><td className="px-4 py-3">{r[1]}</td><td className="px-4 py-3">{r[2]}</td><td className="px-4 py-3">{r[3]}</td></tr>)}</tbody></table></div><div className="rounded-2xl bg-[#0f223a] p-4 text-sm text-white">The current capital need sits between owner-funded diligence and future construction financing. Its job is to reduce uncertainty before the project asks for larger capital.</div></section>

      <section className="space-y-4"><h2 className="text-2xl font-semibold text-[#0f223a]">Return Modeling Discipline</h2><p className="text-slate-700">The project team is not publishing a target IRR at this stage because the final development scenario, entitlement path, environmental follow-up, cost basis, public-sector support, financing structure, and exit strategy remain under evaluation.</p><p className="text-slate-700">Instead, the current investor focus is on funding the next layer of diligence required to produce a defensible underwriting model.</p></section>

      <section className="space-y-4"><h2 className="text-2xl font-semibold text-[#0f223a]">Investor Readiness Roadmap</h2><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[['Confirm Risk Position', 'Complete Phase II environmental follow-up, ALTA integration, title review, civil/utility review, and entitlement pathway review.'], ['Select Preferred Scenario', 'Compare the 3-story control case against 6-, 8-, and 10-story sensitivity cases using feasibility, cost, community response, and capital availability.'], ['Build Development Economics', 'Prepare scenario underwriting, sources and uses, market validation, affordability assumptions, parking strategy, risk register, and preliminary capital stack.'], ['Prepare Capital Event', 'Use the completed diligence package to support lender, JV, public-sector, or recapitalization discussions.']].map(([t, b]) => <article key={t} className="rounded-2xl border border-[#d7dee8] p-5"><h3 className="font-semibold text-[#0f223a]">{t}</h3><p className="mt-2 text-sm text-slate-700">{b}</p></article>)}</div></section>

      <section id="next-step" className="space-y-4 scroll-mt-24"><h2 className="text-2xl font-semibold text-[#0f223a]">Recommended Next Step</h2><p className="text-slate-700">The recommended next step is to fund a controlled entitlement and investor-readiness tranche. This capital should be used to convert completed owner-funded studies, pending ALTA delivery, Phase II environmental follow-up, public-sector coordination, design testing, and consultant input into a clear decision package.</p><p className="text-lg font-semibold text-[#0f223a]">Capital should not be asked to guess. Capital should be used to make the project underwritable.</p><div className="flex flex-wrap gap-3"><Link href="/contact" className="rounded-xl bg-[#0f223a] px-4 py-2.5 text-sm font-medium text-white">Contact Investor Team</Link><Link href="/roadmap" className="rounded-xl border border-[#0f223a] px-4 py-2.5 text-sm font-medium text-[#0f223a]">View Roadmap</Link><Link href="/documents" className="rounded-xl border border-[#d7dee8] px-4 py-2.5 text-sm font-medium text-slate-700">View Project Documents</Link></div></section>
    </div>
  )
}
