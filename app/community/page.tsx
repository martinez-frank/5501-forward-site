import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Vision Page',
  description: 'Community outreach page for 5501 E. 33rd Avenue in Denver. Early planning, listening-first engagement, and preliminary design scenarios under study.',
}

const renderingDisclaimer =
  'Images shown are preliminary and intended for community discussion only. Final design, building height, unit count, retail layout, parking configuration, and project scope remain subject to further due diligence, community input, financing, and City and County of Denver review.'

const glanceItems = [
  ['Address', '5501 E. 33rd Avenue, Denver, Colorado'],
  ['Status', 'Early planning, due diligence, and outreach'],
  ['Purpose', 'Study options for a neighborhood-serving mixed-use future'],
  ['Feedback', 'Community input is being requested now'],
  ['Design', 'No final design has been approved'],
] as const

export default function CommunityPage() {
  return (
    <div className="space-y-10 pb-8 sm:space-y-12">
      <section className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F5531]">5501 Forward</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Listening First. Planning Responsibly.</h1>
        <p className="text-lg text-slate-800">A community vision effort for 5501 E. 33rd Avenue.</p>
        <p className="text-base leading-7 text-slate-700">This site is currently in an early planning, due diligence, and outreach phase. No final design has been approved.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">At a Glance</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {glanceItems.map(([title, detail]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7A6140]">{title}</h3>
              <p className="mt-2 text-base text-slate-800">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Where the Site Is Located</h2>
        <figure className="space-y-3 rounded-2xl border border-slate-200 p-4">
          <Image src="/images/5501-zoning-map.png" alt="Map showing site location at 5501 E. 33rd Avenue in Denver" width={1400} height={1000} className="h-auto w-full rounded-lg" />
          <figcaption className="text-sm text-slate-700">The site is located at 5501 E. 33rd Avenue in northeast Denver.</figcaption>
        </figure>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Existing Site Conditions</h2>
        <figure className="space-y-3 rounded-2xl border border-slate-200 p-4">
          <Image src="/images/5501-zoning-map.png" alt="Existing site conditions context for 5501 E. 33rd Avenue" width={1400} height={1000} className="h-auto w-full rounded-lg object-cover" />
          <figcaption className="text-sm text-slate-700">Current conditions are being reviewed as part of early due diligence and planning.</figcaption>
        </figure>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why This Site Matters</h2>
        <p className="text-base leading-7 text-slate-700">This corner has long-term potential to support neighborhood-serving retail, homes near transit and jobs, and a safer, more active street edge. The intent at this stage is to listen, study options, and identify a responsible path forward with community input.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Preliminary Neighborhood Vision</h2>
        <figure className="space-y-3 rounded-2xl border border-slate-200 p-4">
          <Image src="/images/5501-3story-rendering.jpg" alt="Preliminary neighborhood-serving retail and mixed-use concept" width={1600} height={900} className="h-auto w-full rounded-lg object-cover" />
          <figcaption className="space-y-2 text-sm leading-6 text-slate-700">
            <p className="font-semibold text-slate-800">Neighborhood-serving retail concept</p>
            <p>{renderingDisclaimer}</p>
          </figcaption>
        </figure>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Design Scenarios Being Studied</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="space-y-3 rounded-2xl border border-slate-200 p-4">
            <Image src="/images/5501-33rd-6story-context-rendering.jpg" alt="Six-story context study rendering" width={1600} height={1067} className="h-auto w-full rounded-lg object-cover" />
            <figcaption className="text-sm leading-6 text-slate-700">Context study scenario (not final). {renderingDisclaimer}</figcaption>
          </figure>
          <figure className="space-y-3 rounded-2xl border border-slate-200 p-4">
            <Image src="/images/5501-33rd-10story-stepback-rendering.jpg" alt="Ten-story stepback massing study rendering" width={1600} height={1067} className="h-auto w-full rounded-lg object-cover" />
            <figcaption className="text-sm leading-6 text-slate-700">Stepback massing study scenario (not final). {renderingDisclaimer}</figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Design Values Being Studied</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {['Walkability and safer street experience', 'Neighborhood-serving ground-floor uses', 'Compatible transitions to nearby homes', 'Durable materials and long-term maintenance', 'Thoughtful parking and access patterns', 'Public-realm improvements where feasible'].map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-slate-800">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What Should This Corner Offer?</h2>
        <p className="text-base leading-7 text-slate-700">Helpful feedback includes desired neighborhood services, mobility and safety priorities, building character preferences, and concerns to address early in planning.</p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-semibold tracking-tight">Share Feedback by Email</h2>
        <p className="text-slate-100">We want to hear what matters most to neighbors and nearby businesses.</p>
        <button type="button" className="w-full rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 sm:w-auto" aria-disabled>
          Email contact coming soon
        </button>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How Community Feedback Will Be Used</h2>
        <p className="text-base leading-7 text-slate-700">Input collected in this outreach phase will inform design priorities, scenario refinement, and future conversations with city staff and community stakeholders.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Where the Project Stands</h2>
        <p className="text-base leading-7 text-slate-700">The project remains in preliminary planning and due diligence. No final design, height, unit count, retail mix, financing package, or construction timeline has been approved.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>
        <div className="space-y-3">
          {[
            ['Is this project approved?', 'No. This is an early planning and outreach effort.'],
            ['Is the building height decided?', 'No. Multiple scenarios are still being studied.'],
            ['Can neighbors still shape the plan?', 'Yes. Feedback is being requested during this stage.'],
          ].map(([q, a]) => (
            <article key={q} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">{q}</h3>
              <p className="mt-2 text-slate-700">{a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Stay Involved</h2>
        <p className="text-base leading-7 text-slate-700">Check this page for updates as outreach continues and as scenarios are refined through due diligence and community input.</p>
        <Link href="/" className="text-sm font-medium text-slate-700 underline underline-offset-4">Return to main site</Link>
      </section>
    </div>
  )
}
