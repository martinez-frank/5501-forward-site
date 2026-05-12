import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Community Vision Page',
  description:
    'Standalone community vision page for 5501 E. 33rd Avenue focused on listening, early planning, and preliminary concept discussion.',
}

const glanceItems = [
  ['Address', '5501 E. 33rd Avenue'],
  ['Status', 'Early planning and outreach'],
  ['Purpose', 'Community input before final decisions'],
  ['Feedback', 'Email-based community comments'],
  ['Design', 'Preliminary concepts only'],
] as const

const renderingDisclaimer =
  'Images shown are preliminary and intended for community discussion only. Final design, building height, unit count, retail layout, parking configuration, and project scope remain subject to further due diligence, community input, financing, and City and County of Denver review.'

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 pb-10 text-slate-800 sm:space-y-10">
      <section className="rounded-3xl border border-slate-300 bg-white p-5 text-center shadow-sm sm:p-8">
        <Image
          src="/images/5501forward.logo.png"
          alt="5501 Forward — Listening First. Planning Responsibly."
          width={500}
          height={170}
          className="mx-auto h-auto w-full max-w-[360px]"
          priority
        />
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#7b602f]">Listening First. Planning Responsibly.</p>
        <div className="mx-auto mt-5 max-w-3xl space-y-4 text-base leading-7 text-slate-700">
          <p>
            5501 Forward is a community vision effort for 5501 E. 33rd Avenue. The project team is studying whether this
            site can become a stronger neighborhood asset through thoughtful mixed-use planning, possible neighborhood-serving
            retail, new housing opportunities, improved street presence, and long-term community investment.
          </p>
          <p>
            This project is still in an early planning, due diligence, and outreach phase. No final design has been approved.
            Before advancing the concept further, the project team wants to hear from neighbors, local businesses, community
            organizations, and nearby stakeholders.
          </p>
        </div>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#site-location" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white">View the Site</a>
          <a href="#share-feedback" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900">Share Feedback</a>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-700">
          <a href="#preliminary-vision" className="underline underline-offset-4">Vision</a>
          <span className="text-slate-300">|</span>
          <a href="#design-scenarios" className="underline underline-offset-4">Design Studies</a>
          <span className="text-slate-300">|</span>
          <a href="#faq" className="underline underline-offset-4">FAQ</a>
        </div>
        <p className="mt-6 rounded-xl border border-[#D9B56A] bg-[#FBF1D8] px-4 py-3 text-sm font-medium text-[#5f4a24]">
          Preliminary concept only. Final project scope remains subject to due diligence, community input, financing, and
          City and County of Denver review.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">At a Glance</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {glanceItems.map(([title, detail]) => (
            <article key={title} className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#7b602f]">{title}</h3>
              <p className="mt-2 text-sm leading-6">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="site-location" className="space-y-3 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Where the Site Is Located</h2>
        <p className="leading-7 text-slate-700">
          The project site is at 5501 E. 33rd Avenue in Denver. This location is being studied for potential mixed-use reinvestment
          that could better connect with neighborhood needs and street-level activity.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Planning and Zoning Context</h2>
        <p className="leading-7 text-slate-700">
          The zoning map is included to help orient the community to the surrounding planning context. It is not a final
          entitlement determination and does not represent project approval.
        </p>
        <figure className="space-y-3">
          <Image src="/images/5501-zoning-map.png" alt="Zoning context map for 5501 E. 33rd Avenue" width={1400} height={1000} className="h-auto w-full rounded-xl border border-slate-200" />
          <figcaption className="text-sm text-slate-700">City and County of Denver zoning context map — planning discussion only.</figcaption>
        </figure>
        <p className="rounded-xl border border-[#D9B56A] bg-[#FBF1D8] px-4 py-3 text-sm text-[#5f4a24]">
          Zoning context shown for planning discussion only. Project feasibility, entitlement path, and final development program
          remain subject to professional review and City and County of Denver approval.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Existing Site Conditions</h2>
        <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-slate-700">Existing site photo pending upload.</p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Why This Site Matters</h2>
        <p className="leading-7 text-slate-700">This corner may have long-term potential to support neighborhood-serving retail activity, housing opportunities, and a safer, more welcoming street presence. The current stage is focused on listening, due diligence, and understanding what responsible reinvestment could look like for this part of the neighborhood.</p>
      </section>

      <section id="preliminary-vision" className="space-y-4 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Preliminary Neighborhood Vision</h2>
        <figure className="space-y-3">
          <Image src="/images/5501-3story-rendering.jpg" alt="Preliminary mixed-use neighborhood concept rendering" width={1600} height={900} className="h-auto w-full rounded-xl border border-slate-200" />
          <figcaption className="text-sm font-semibold text-slate-800">Neighborhood-Serving Mixed-Use Concept — Not Final</figcaption>
        </figure>
        <p className="rounded-xl border border-[#D9B56A] bg-[#FBF1D8] px-4 py-3 text-sm text-[#5f4a24]">{renderingDisclaimer}</p>
      </section>

      <section id="design-scenarios" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Design Scenarios Being Studied</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="space-y-3 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm">
            <Image src="/images/5501-33rd-6story-context-rendering.jpg" alt="Lower-Scale Context Study rendering" width={1600} height={1067} className="h-auto w-full rounded-xl border border-slate-200" />
            <figcaption className="text-sm font-semibold text-slate-800">Lower-Scale Context Study</figcaption>
          </figure>
          <figure className="space-y-3 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm">
            <Image src="/images/5501-33rd-10story-stepback-rendering.jpg" alt="Stepback Housing Study rendering" width={1600} height={1067} className="h-auto w-full rounded-xl border border-slate-200" />
            <figcaption className="text-sm font-semibold text-slate-800">Stepback Housing Study</figcaption>
          </figure>
        </div>
        <p className="rounded-xl border border-[#D9B56A] bg-[#FBF1D8] px-4 py-3 text-sm text-[#5f4a24]">{renderingDisclaimer}</p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Design Values Being Studied</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {['Walkability and street safety', 'Neighborhood-serving retail potential', 'Context-sensitive building transitions', 'Durable materials and long-term stewardship', 'Livability and access considerations', 'Public-realm and corner identity improvements'].map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">What Should This Corner Offer?</h2>
        <p className="leading-7 text-slate-700">Community feedback is especially helpful on neighborhood-serving uses, safety and mobility priorities, building character, and concerns that should be addressed before any concept moves forward.</p>
      </section>

      <section id="share-feedback" className="space-y-3 rounded-2xl border border-slate-300 bg-slate-900 p-6 text-white shadow-sm">
        <h2 className="text-2xl font-bold">Share Feedback by Email</h2>
        <p className="text-slate-100">We want to hear from neighbors, local businesses, and community organizations.</p>
        <button type="button" aria-disabled className="w-full rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 sm:w-auto">Email contact coming soon</button>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">How Community Feedback Will Be Used</h2>
        <p className="leading-7 text-slate-700">Input gathered during this phase will help shape design priorities, refine study scenarios, and inform future conversations with city staff and community stakeholders.</p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Where the Project Stands</h2>
        <p className="leading-7 text-slate-700">The project remains in early planning, due diligence, and outreach. No final design, zoning path, financing package, building height, unit count, retail tenant mix, or construction timeline has been approved.</p>
      </section>

      <section id="faq" className="space-y-4 rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
        <div className="space-y-3">
          {[
            ['Is this project approved?', 'No. This page describes an early planning and outreach phase only.'],
            ['Has a final building height been selected?', 'No. Different scale options are still being studied.'],
            ['Is the unit count final?', 'No. Unit count and program mix remain under review.'],
            ['Can community feedback still influence the concept?', 'Yes. Feedback is being requested before further advancement.'],
          ].map(([question, answer]) => (
            <article key={question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">{question}</h3>
              <p className="mt-2 text-slate-700">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Stay Involved</h2>
        <p className="mt-3 leading-7 text-slate-700">This page will be updated as community outreach continues and as preliminary studies evolve through due diligence and ongoing public input.</p>
      </section>
    </div>
  )
}
