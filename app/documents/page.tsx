import type { Metadata } from 'next'
import Link from 'next/link'

const documentStatuses = [
  { name: 'Geotechnical Report', status: 'Completed', access: 'Internal / controlled', notes: 'Owner-funded diligence' },
  { name: 'Phase I ESA', status: 'Completed', access: 'Internal / controlled', notes: 'Further investigation may be required based on findings' },
  { name: 'Phase II ESA Proposal', status: 'Pending', access: 'Internal / controlled', notes: 'Proposal ordered / requested' },
  { name: 'ALTA Survey', status: 'Pending June 4', access: 'Internal / controlled', notes: 'Purchased and pending delivery' },
  { name: 'Concept Renderings', status: 'Available', access: 'Public', notes: 'Preliminary design discussion only' },
  { name: 'Community Vision Materials', status: 'Active', access: 'Public', notes: 'Supports QR outreach and feedback page' },
  { name: 'Investor Brief', status: 'Active', access: 'Public / controlled', notes: 'Capital-readiness narrative' },
  { name: 'DURA Coordination Materials', status: 'In progress', access: 'Internal / controlled', notes: 'Public-sector support under discussion; not guaranteed' },
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
      'Completed owner-funded diligence identifying environmental history and whether targeted follow-up is needed.',
  },
  {
    title: 'Phase II Environmental Follow-Up',
    description:
      'Proposal pending. Intended to clarify environmental risk and any potential cleanup, lender, or schedule exposure.',
  },
  {
    title: 'ALTA Survey',
    description: 'Purchased and pending delivery June 4. Needed for title, easement, access, utility, and legal-base confirmation.',
  },
  {
    title: 'Cost + Constructability Materials',
    description:
      'Future GC and consultant input to support cost range, phasing, construction assumptions, and contingency planning.',
  },
  {
    title: 'Entitlement / Public-Sector Coordination',
    description:
      'Future memos and materials related to city process, DURA discussions, public benefit, and entitlement pathway evaluation.',
  },
] as const

const pendingDocuments = [
  'Phase II ESA proposal',
  'ALTA survey delivery — pending June 4',
  'Consultant scope matrix',
  'Preliminary cost range',
  'Entitlement path memo',
  'Public-sector funding eligibility memo',
  'Capital stack framework',
  'Investor / lender package',
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
          This page organizes the current project documents and pending workstreams for 5501 E. 33rd Avenue. Materials are preliminary and will continue to evolve as environmental follow-up, ALTA survey delivery, entitlement strategy, public-sector coordination, design testing, and capital planning advance.
        </p>
        <div className="rounded-xl border border-[#f2c14e]/60 bg-[#fffdf4] p-4 text-sm leading-6 text-[#23364d] sm:text-base">
          <p className="font-semibold text-[#0d1b2a]">Planning &amp; discussion disclaimer</p>
          <p className="mt-1">
            Documents shown or referenced on this page are for planning and discussion purposes only. They do not represent final approvals, final design, committed financing, or public funding approval.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Document Status Dashboard</h2>
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
        <h2 className="text-3xl font-semibold tracking-tight text-[#0d1b2a]">Pending / Next Documents</h2>
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
        <h2 className="text-3xl font-semibold tracking-tight">Document Discipline Matters</h2>
        <p className="max-w-[90ch] text-base leading-7 text-slate-200">
          The project team is organizing documents in a staged manner so that each study, proposal, memo, and decision package supports a clearer funding, entitlement, design, or public-sector decision. The goal is not to create volume. The goal is to convert information into project certainty.
        </p>
      </section>
    </div>
  )
}
