import type { Metadata } from 'next'
import Link from 'next/link'

const documentStatuses = [
  { name: 'Geotechnical Report', status: 'Completed', access: 'Internal / controlled', notes: 'Owner-funded diligence' },
  { name: 'Phase I ESA', status: 'Completed', access: 'Internal / controlled', notes: 'Phase II completed; original Phase I RECs/VECs have been further evaluated.' },
  { name: 'Phase II ESA', status: 'Completed — Aug. 21, 2026', access: 'Internal / controlled', notes: 'Commercial-use environmental uncertainty materially narrowed; targeted residential vapor and former fuel-island / UST follow-up remains.' },
  { name: 'ALTA/NSPS Land Title Survey', status: 'Completed — Sealed', access: 'Internal / controlled', notes: 'Final sealed survey received; title and consultant integration underway.' },
  { name: 'DURA Notice to Proceed', status: 'Received — Aug. 18, 2026', access: 'Internal / controlled', notes: 'DURA Board authorized staff to advance scope, potential funding, and Redevelopment & Disbursement Agreement discussions; final approval remains pending.' },
  { name: 'Concept Renderings', status: 'Available', access: 'Public', notes: 'Preliminary design discussion only' },
  { name: 'Community Vision Materials', status: 'Active', access: 'Public', notes: 'Supports QR outreach and feedback page' },
  { name: 'Investor Brief', status: 'Active', access: 'Public / controlled', notes: 'Capital-readiness narrative' },
  { name: 'Public-Sector / DURA Eligibility Materials', status: 'Agreement development', access: 'Internal / controlled', notes: 'DURA pathway advanced into scope, estimate, funding, and agreement discussions; final Board approval and funding remain pending.' },
] as const

type PublicMaterial = {
  title: string
  description: string
  cta?: string
  href?: string
}

const publicMaterials: PublicMaterial[] = [
  {
    title: 'Community Vision Page',
    description: 'Public-facing page for neighborhood feedback and early project context.',
    cta: 'View Community Page',
    href: '/community',
  },
  {
    title: 'Concept Renderings',
    description:
      'Preliminary images used for discussion only. They do not represent final design, approved height, approved unit count, or approved project scope.',
  },
  {
    title: 'Existing Site Image',
    description: 'Current site condition image used to document the property’s existing frontage, access, and neighborhood context.',
  },
  {
    title: 'Community Outreach Materials',
    description: 'Postcard, QR-code, and feedback materials used to invite early community input.',
  },
] as const

const controlledMaterials = [
  {
    title: 'Geotechnical / Soil Review',
    description:
      'Completed owner-funded diligence supporting early understanding of soil, foundation, drainage, and construction assumptions.',
  },
  {
    title: 'Phase I Environmental Site Assessment',
    description:
      'Completed owner-funded diligence identifying the site’s environmental history and the recognized environmental conditions that were subsequently evaluated through Phase II.',
  },
  {
    title: 'Phase II Environmental Site Assessment',
    description:
      'Completed August 21, 2026. The assessment materially narrowed commercial-use environmental uncertainty. Future residential planning may warrant targeted vapor-intrusion assessment, and the former fuel-pump island / UST anomaly remains a focused follow-up item for future assessment or construction planning.',
  },
  {
    title: 'DURA Notice to Proceed',
    description:
      'Received August 18, 2026. DURA authorized staff to advance discussions regarding final scope, project estimates, potential funding participation, and a Redevelopment & Disbursement Agreement. Final funding and Board approval are not yet secured.',
  },
  {
    title: 'ALTA/NSPS Land Title Survey',
    description: 'Completed and sealed. Establishes the current legal and physical survey base for boundary, right-of-way, access, utility, easement, title, design, entitlement, and lender-diligence coordination. The survey remains a controlled technical document.',
  },
  {
    title: 'Cost + Constructability Materials',
    description:
      'Future GC and consultant input to support cost range, phasing, construction assumptions, and contingency planning.',
  },
  {
    title: 'Entitlement / Public-Sector Eligibility Review',
    description:
      'Ongoing materials related to city process, DURA eligibility, public benefit, final project scope, and entitlement pathway evaluation.',
  },
] as const

const pendingDocuments = [
  'Phase II-informed environmental follow-up scope — residential vapor / former fuel-island UST evaluation as warranted',
  'ALTA/title integration and coordinated consultant review',
  'Consultant scope matrix',
  'Preliminary cost range',
  'Entitlement path memo',
  'DURA final scope, project estimate, and Redevelopment & Disbursement Agreement materials',
  'Capital stack framework',
  'Investor / Lender Decision Package',
  'Updated community outreach summary',
  'Go / no-go decision memo',
] as const

export const metadata: Metadata = {
  title: 'Documents & Due Diligence Index',
  description: 'A controlled document hub for planning materials, studies, and investor-readiness workstreams.',
}

export default function DocumentsPage() {
  return (
    <div className="space-y-12 pb-8 sm:space-y-14">
      <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2c14e]">5501 FORWARD DOCUMENTS</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#0d1b2a] sm:text-5xl">Documents &amp; Due Diligence Index</h1>
        <p className="max-w-[90ch] text-lg leading-8 text-[#1f2f43]">
          A controlled document hub for studies, planning materials, public-sector coordination, and investor-readiness workstreams.
        </p>
        <p className="max-w-[90ch] text-base leading-7 text-slate-700">
          This page organizes the current project documents and active workstreams for 5501 E. 33rd Avenue. Materials will continue to evolve as Phase II-informed environmental follow-up, ALTA/title integration, entitlement strategy, DURA agreement development, design testing, and capital planning advance.
        </p>
        <div className="rounded-xl border border-[#f2c14e]/60 bg-[#fffdf4] p-4 text-sm leading-6 text-[#23364d] sm:text-base">
          <p className="font-semibold text-[#0d1b2a]">Planning &amp; discussion disclaimer</p>
          <p className="mt-1">
            Documents shown or referenced on this page are for planning and discussion purposes only. They do not represent final approvals, final design, committed financing, environmental clearance, or public funding approval.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Document Status Dashboard</h2>
        <p className="max-w-[90ch] text-base leading-7 text-slate-700">
          Access level note: Public materials may be shared for general project, community, or public-sector review. Controlled materials may contain technical, legal, environmental, financial, ownership, or predevelopment information and should be shared selectively with qualified stakeholders, consultants, lenders, public-sector partners, or capital partners.
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_2fr] md:gap-4 md:border-b md:border-slate-200 md:bg-slate-50 md:px-6 md:py-4 md:text-xs md:font-semibold md:uppercase md:tracking-[0.14em] md:text-slate-600">
            <p>Document</p>
            <p>Status</p>
            <p>Access Level</p>
            <p>Notes</p>
          </div>
          <div className="divide-y divide-slate-200">
            {documentStatuses.map((item) => (
              <article key={item.name} className="grid gap-3 px-5 py-5 md:grid-cols-[2fr_1fr_1fr_2fr] md:items-start md:gap-4 md:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:hidden">Document</p>
                  <p className="font-semibold text-[#0d1b2a]">{item.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:hidden">Status</p>
                  <p className="text-sm text-slate-700">{item.status}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:hidden">Access Level</p>
                  <p className="text-sm text-slate-700">{item.access}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:hidden">Notes</p>
                  <p className="text-sm text-slate-700">{item.notes}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Public / Community-Facing Materials</h2>
        <p className="max-w-[90ch] text-base leading-7 text-slate-700">
          These materials may be used to support community understanding, QR-code outreach, and preliminary public discussion.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {publicMaterials.map((material) => (
            <article key={material.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-[#0d1b2a]">{material.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{material.description}</p>
              {material.href && material.cta ? (
                <Link
                  href={material.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-lg border border-[#0d1b2a] px-4 py-2 text-sm font-semibold text-[#0d1b2a] transition hover:bg-slate-50"
                >
                  {material.cta}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Controlled Due Diligence Materials</h2>
        <p className="max-w-[90ch] text-base leading-7 text-slate-700">
          Certain diligence materials may contain technical, legal, environmental, financial, or ownership-sensitive information and may be shared selectively with project stakeholders, consultants, lenders, public partners, or qualified capital partners.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {controlledMaterials.map((material) => (
            <article key={material.title} className="rounded-xl border border-slate-200 bg-[#fffdf8] p-5">
              <h3 className="text-lg font-semibold text-[#0d1b2a]">{material.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{material.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Critical Path Documents Pending</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {pendingDocuments.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#f2c14e]" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-2xl border border-[#0d1b2a] bg-[#0d1b2a] p-6 text-white sm:p-8 md:p-10">
        <span className="block h-1 w-16 rounded-full bg-[#f2c14e]" />
        <h2 className="text-3xl font-semibold tracking-tight">Document Control Principle</h2>
        <p className="max-w-[90ch] text-base leading-7 text-slate-200">
          The project team is organizing documents in a staged manner so that public materials, controlled diligence, consultant work product, and investor-readiness materials remain clearly separated. Each document should support a specific environmental, entitlement, design, public-sector, or capital decision.
        </p>
      </section>
    </div>
  )
}
