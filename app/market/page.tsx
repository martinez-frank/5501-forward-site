import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Market Benchmarking & Program Fit',
  description:
    'Preliminary market benchmarking for housing, retail, affordability, construction-cost pressure, and scenario fit at 5501 E. 33rd Avenue, Denver.',
}

const benchmarkCards = [
  {
    title: 'Denver Multifamily Conditions',
    sources: [
      ['Source: CBRE — Denver Multifamily Figures Q1 2026', 'https://www.cbre.com/insights/figures/denver-multifamily-figures-q1-2026'],
    ],
    points: [
      'Denver multifamily occupancy was 93.2% in Q1 2026.',
      'Occupancy was up 40 basis points quarter-over-quarter.',
      'Occupancy was down 110 basis points year-over-year.',
      'Net absorption was positive 2,776 units in Q1 2026.',
      'This was a significant improvement from negative absorption in Q4 2025.',
    ],
    body:
      'The Denver multifamily market is not weak, but it is softer than the 2021–2022 environment. Recent market data shows improving absorption, while occupancy and rent trends still require conservative underwriting. For 5501 Forward, this means the housing case should be modeled with realistic lease-up timing, concession assumptions, stabilized occupancy, and capital-market sensitivity.',
    interpretation: 'Residential demand supports continued diligence, not a final feasibility conclusion.',
  },
  {
    title: 'Park Hill / 80207 For-Sale Housing Context',
    sources: [
      ['Source: Redfin — Park Hill Housing Market', 'https://www.redfin.com/neighborhood/122772/CO/Denver/Park-Hill/housing-market'],
      ['Source: Redfin — 80207 Housing Market', 'https://www.redfin.com/zipcode/80207/housing-market'],
    ],
    points: [
      'Park Hill median sale price was approximately $750,747 over the three months ending May 2026.',
      'Park Hill pricing was down approximately 1.9% year-over-year.',
      'Park Hill homes averaged approximately 15 days on market.',
      '80207 median sale price was approximately $647,308 over the three months ending May 2026.',
      '80207 pricing was down approximately 10.7% year-over-year.',
      '80207 homes averaged approximately 14 days on market.',
    ],
    body:
      'Nearby housing benchmarks show continued neighborhood value and liquidity, but recent price movement is mixed. If an ownership component is considered, buyer affordability, unit sizing, HOA exposure, parking, absorption timing, and current sales comps should be tested carefully.',
    interpretation:
      'The local for-sale market supports continued review, but it does not justify assuming aggressive condo pricing without a broker-supported comp package.',
  },
  {
    title: 'Park Hill Rental Context',
    sources: [
      ['Source: Zumper — Park Hill Rent Research', 'https://www.zumper.com/rent-research/denver-co/park-hill'],
      ['Source: Zumper — Denver Rent Research', 'https://www.zumper.com/rent-research/denver-co'],
    ],
    points: [
      'Park Hill average rent was approximately $2,197 per month as of June 2026.',
      'Park Hill average rent was down approximately 10% year-over-year.',
      'Park Hill rent was approximately 13% above the national average according to the source page.',
      'Broader Denver rent context should be reviewed as a separate comparison before underwriting decisions are made.',
    ],
    body:
      'Rental benchmarks indicate that Park Hill remains a meaningful housing market, but rent softness requires discipline. A rental program may be supportable only if cost basis, unit mix, affordability requirements, lease-up assumptions, and financing terms are aligned.',
    interpretation: 'The rental case should be modeled conservatively and should not rely on aggressive rent growth to pencil.',
  },
  {
    title: 'Denver Retail Conditions',
    sources: [
      ['Source: CBRE — Denver Retail Figures Q1 2026', 'https://www.cbre.com/insights/figures/denver-retail-figures-q1-2026'],
      ['Source: Marcus & Millichap — 2026 U.S. Retail Investment Forecast', 'https://www.marcusmillichap.com/research/market-report/multiple-markets/2026/2026-us-retail-investment-forecast'],
    ],
    points: [
      'Denver retail availability was approximately 5.1% in Q1 2026.',
      'Availability was nearly unchanged from approximately 5.0% one year earlier.',
      'Denver retail net absorption was negative approximately 295,000 square feet in Q1 2026.',
      'New retail completions were approximately 26,000 square feet in Q1 2026.',
      'Average net asking rent was approximately $20.70 per square foot.',
      'Asking rent was down approximately 1.3% year-over-year.',
    ],
    body:
      'Denver retail conditions appear relatively stable, but the 5501 Forward retail strategy should remain modest and neighborhood-serving. The strongest retail case is likely small-format activation such as food service, coffee, service retail, health/wellness, local business, or flexible neighborhood commercial use.',
    interpretation: 'Retail should support street activation and neighborhood utility; it should not be treated as the primary economic engine of the project.',
  },
  {
    title: 'Denver Affordability Requirements',
    sources: [
      ['Source: City and County of Denver — Expanding Housing Affordability', 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Plan-Review-Permits-and-Inspections/Development-Fees/EHA-Ordinance-and-Affordable-Housing-Fee'],
    ],
    points: [
      'Residential developments of 10 units or more must be evaluated under Denver’s affordability framework.',
      'Compliance pathways may include building affordable housing on-site, building off-site affordable housing, negotiating an alternative compliance option, or paying a fee-in-lieu where applicable.',
      'Mixed-use developments with 10 or more residential units must evaluate the residential portion under the affordability framework and the non-residential portion under applicable linkage fee requirements.',
    ],
    body:
      'Any residential program of 10 or more units must be evaluated in the context of Denver’s Expanding Housing Affordability framework, applicable linkage fees, potential public-benefit expectations, and available compliance pathways.',
    interpretation: 'Affordability requirements are not just a policy item; they are a core underwriting variable.',
  },
  {
    title: 'Construction Cost Pressure',
    sources: [['Source: Mortenson — Denver Construction Cost Index', 'https://www.mortenson.com/cost-index/denver']],
    points: [
      'Mortenson’s construction cost index should be used as a construction-cost pressure reference.',
      'National nonresidential construction costs rose approximately 1.69% quarter-over-quarter in Q1 2026.',
      'National nonresidential construction costs rose approximately 6.77% year-over-year in Q1 2026.',
      'Denver-specific construction-cost pressure should be reviewed as part of GC pricing and preconstruction diligence.',
      'No Denver-specific percentage is assumed here without direct source verification.',
    ],
    body:
      'Construction-cost escalation remains a key feasibility constraint. For 5501 Forward, market demand must be evaluated alongside construction pricing, environmental exposure, parking strategy, financing cost, affordability requirements, entitlement timeline, and contingency assumptions.',
    interpretation:
      'Feasibility is not determined by market demand alone. It is determined by the spread between achievable revenue, total development cost, entitlement risk, financing terms, and execution timing.',
  },
] as const

const scenarios = [
  ['3-Story Control Case', 'Lowest entitlement risk, lower yield.', 'Baseline fallback case that protects the project from overcommitting before full diligence.'],
  ['6-Story Primary Feasibility Case', 'Potentially stronger residential yield and mixed-use value.', 'Best working case if rents, costs, parking, affordability, entitlement path, environmental findings, and public-sector alignment are supportable.'],
  ['8-Story Sensitivity', 'More units, higher complexity.', 'Advance only if entitlement path, capital support, public benefit, construction pricing, and absorption assumptions are validated.'],
  ['10-Story Long-Range Sensitivity', 'Highest potential yield, highest execution risk.', 'Treat only as an outer-boundary study tied to public benefit, financing, infrastructure, entitlement support, and validated demand.'],
] as const

const validationItems = [
  'Broker-supported rent comps',
  'For-sale housing and condo comps, if applicable',
  'Retail broker and tenant feedback',
  'Parking demand and access strategy',
  'Denver affordability requirement modeling',
  'Construction pricing and GC input',
  'Environmental findings and remediation exposure',
  'Entitlement pathway and public-sector alignment',
  'Capital stack and financing assumptions',
  'Final development budget and sensitivity analysis',
  'Public benefit and community alignment',
  'Infrastructure and utility constraints',
  'Final program mix and phasing strategy',
] as const

const sources = [
  ['CBRE — Denver Multifamily Figures Q1 2026', 'https://www.cbre.com/insights/figures/denver-multifamily-figures-q1-2026'],
  ['Redfin — Park Hill Housing Market', 'https://www.redfin.com/neighborhood/122772/CO/Denver/Park-Hill/housing-market'],
  ['Redfin — 80207 Housing Market', 'https://www.redfin.com/zipcode/80207/housing-market'],
  ['Zumper — Park Hill Rent Research', 'https://www.zumper.com/rent-research/denver-co/park-hill'],
  ['Zumper — Denver Rent Research', 'https://www.zumper.com/rent-research/denver-co'],
  ['CBRE — Denver Retail Figures Q1 2026', 'https://www.cbre.com/insights/figures/denver-retail-figures-q1-2026'],
  ['Marcus & Millichap — 2026 U.S. Retail Investment Forecast', 'https://www.marcusmillichap.com/research/market-report/multiple-markets/2026/2026-us-retail-investment-forecast'],
  ['City and County of Denver — Expanding Housing Affordability', 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Plan-Review-Permits-and-Inspections/Development-Fees/EHA-Ordinance-and-Affordable-Housing-Fee'],
  ['Mortenson — Denver Construction Cost Index', 'https://www.mortenson.com/cost-index/denver'],
] as const

export default function MarketPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="rounded-3xl border border-[#d7dee8] bg-white p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a67c00]">5501 FORWARD MARKET CONTEXT</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#0f223a] sm:text-5xl">Market Benchmarking &amp; Program Fit</h1>
        <p className="mt-4 text-lg text-slate-700">Preliminary market context for housing, retail, development scale, and capital-readiness at 5501 E. 33rd Avenue.</p>
        <p className="mt-4 max-w-4xl text-slate-700">5501 Forward is being evaluated through a disciplined market-benchmarking process. The project team is studying residential demand, neighborhood retail viability, affordability requirements, construction-cost pressure, entitlement risk, and public-benefit alignment before selecting a final development program.</p>
        <p className="mt-5 text-sm font-medium text-[#0f223a]">Last reviewed: June 18, 2026</p>
        <div className="mt-4 rounded-2xl border border-[#cfd8e3] bg-[#f7faff] p-4 text-sm leading-6 text-slate-700">
          Benchmark figures are based on third-party market sources available as of the last review date. Source pages may update over time. These benchmarks are provided for planning discussion only and should be refreshed before investment, entitlement, financing, or development decisions are made.
        </div>
      </section>

      <section className="rounded-2xl border border-[#d7dee8] bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Market Position Summary</h2>
        <p className="mt-3 max-w-4xl text-slate-700">Preliminary benchmarks support continued diligence for a mixed-use redevelopment concept at 5501 E. 33rd Avenue. The strongest near-term strategy is to preserve the executable 3-story control case while testing whether a 6-story mixed-use program can responsibly improve housing yield, street activation, and long-term value.</p>
        <p className="mt-4 rounded-2xl bg-[#0f223a] p-4 text-sm leading-6 text-white">Advisor note: Residential and retail demand should not be evaluated in isolation. Final feasibility depends on the spread between achievable revenue, total development cost, entitlement risk, affordability requirements, financing terms, environmental findings, parking strategy, and execution timing.</p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Benchmark Dashboard</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {benchmarkCards.map((card) => (
            <article key={card.title} className="card-lift rounded-2xl border border-[#d7dee8] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#0f223a]">{card.title}</h3>
              <div className="mt-3 space-y-1 text-sm">
                {card.sources.map(([label, href]) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="block break-words text-[#0f223a] underline decoration-[#f2c14e] underline-offset-4">
                    {label}
                  </a>
                ))}
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {card.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <p className="mt-4 text-sm leading-6 text-slate-700">{card.body}</p>
              <p className="mt-4 rounded-xl border border-[#d7dee8] bg-[#f7faff] p-3 text-sm font-medium leading-6 text-[#0f223a]">Advisor interpretation: {card.interpretation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Scenario Fit Matrix</h2>
        <p className="max-w-4xl text-slate-700">5501 Forward is being evaluated through scenario discipline. The purpose of this framework is to avoid overcommitting to height, density, or product mix before market, entitlement, cost, environmental, and capital assumptions are validated.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {scenarios.map(([title, marketRead, advisorView]) => (
            <article key={title} className="rounded-2xl border border-[#d7dee8] bg-white p-5">
              <h3 className="text-base font-semibold text-[#0f223a]">{title}</h3>
              <dl className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <div><dt className="inline font-semibold text-[#0f223a]">Market read: </dt><dd className="inline">{marketRead}</dd></div>
                <div><dt className="inline font-semibold text-[#0f223a]">Advisor view: </dt><dd className="inline">{advisorView}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-[#d7dee8] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0f223a]">What Still Needs Validation</h2>
        <p className="max-w-4xl text-slate-700">The benchmarks above help frame the discussion, but they do not replace project-specific diligence. Before advancing a final program, the project team should refresh market data, secure broker input, validate costs with qualified construction professionals, review environmental findings, and test each scenario through a full development budget.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {validationItems.map((item) => <div key={item} className="rounded-xl border border-[#d7dee8] bg-[#fffdf8] p-4 text-sm font-medium leading-6 text-[#1f2f43]">{item}</div>)}
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-[#d7dee8] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0f223a]">Sources Reviewed</h2>
        <p className="text-slate-700">Sources are provided for transparency and planning reference. 5501 Forward does not control third-party source pages, and market figures may change as providers update their data.</p>
        <div className="grid gap-3 md:grid-cols-2">
          {sources.map(([label, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-[#d7dee8] bg-[#f7faff] p-4 text-sm font-medium leading-6 text-[#0f223a] underline decoration-[#f2c14e] underline-offset-4 break-words">
              {label}
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#0f223a] bg-[#0f223a] p-6 text-white sm:p-8">
        <h2 className="text-2xl font-semibold">Continue the Diligence</h2>
        <p className="max-w-4xl text-sm leading-6 text-slate-200">Market benchmarking is one input in the 5501 Forward planning process. The next phase should pair updated market data with entitlement review, environmental diligence, construction pricing, affordability modeling, and capital-stack planning.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/investor-brief" className="rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-[#0f223a]">Investor Brief</Link>
          <Link href="/documents" className="rounded-xl border border-white/40 px-4 py-2.5 text-sm font-medium text-white">Documents</Link>
          <Link href="/contact" className="rounded-xl border border-white/40 px-4 py-2.5 text-sm font-medium text-white">Contact</Link>
        </div>
      </section>

      <section className="rounded-2xl border border-[#d7dee8] bg-[#fffdf8] p-5 text-sm leading-6 text-slate-700">
        Market benchmarks are provided for planning discussion only. They do not constitute an appraisal, securities offering, final development budget, final pro forma, or guaranteed feasibility conclusion. Final project feasibility remains subject to due diligence, entitlement review, environmental review, construction pricing, financing terms, public process, and market validation.
      </section>
    </div>
  )
}
