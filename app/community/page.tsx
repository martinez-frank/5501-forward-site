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

const feedbackOptions = [
  'Coffee shop / café',
  'Small grocery or neighborhood market',
  'Restaurant',
  'Childcare or family services',
  'Health, wellness, or fitness',
  'Local retail / maker space',
  'Professional services',
  'Community gathering space',
  'Other',
]

const renderingDisclaimer =
  'Images shown are preliminary and intended for community discussion only. Final design, building height, unit count, retail layout, parking configuration, and project scope remain subject to further due diligence, community input, financing, and City and County of Denver review.'

const publicEmail = '5501forward@buildersgeneralconstruction.com'

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-7 pb-10 text-slate-800 sm:space-y-9">
      <section className="rounded-3xl border border-[#d8c9a2] bg-white p-5 shadow-sm sm:p-8">
        <Image
          src="/images/5501forward.logo.png"
          alt="5501 Forward — Listening First. Planning Responsibly."
          width={600}
          height={204}
          className="mx-auto h-auto w-full max-w-[460px]"
          priority
        />
        <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#7b602f]">Listening First. Planning Responsibly.</p>
        <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-[#12284c] sm:text-4xl">A community vision effort for 5501 E. 33rd Avenue</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-slate-700">
          We are studying whether this property can become a stronger neighborhood asset through thoughtful mixed-use planning, possible neighborhood-serving retail, new housing opportunities, improved street presence, and long-term community investment.
        </p>
        <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-[#d9b56a] bg-[#fbf1d8] p-4 text-center">
          <p className="text-lg font-semibold text-[#5f4a24]">No final design has been approved.</p>
          <p className="mt-1 text-sm font-medium text-[#5f4a24]">Community input will help guide the next steps.</p>
        </div>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#site-location" className="rounded-lg bg-[#12284c] px-5 py-3 text-center text-sm font-semibold text-white">View the Site</a>
          <a href="#share-feedback" className="rounded-lg border border-[#12284c] bg-white px-5 py-3 text-center text-sm font-semibold text-[#12284c]">Share Feedback</a>
        </div>
        <p className="mt-6 rounded-xl border border-[#d9b56a] bg-[#fff6e4] px-4 py-3 text-sm font-medium text-[#5f4a24]">
          Preliminary concept only. Final project scope remains subject to due diligence, community input, financing, and City and County of Denver review.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-[#d9b56a] pl-3 text-2xl font-bold text-[#12284c]">At a Glance</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {glanceItems.map(([title, detail]) => (
            <article key={title} className="rounded-xl border border-[#ddd6c7] bg-white p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#7b602f]">{title}</h3>
              <p className="mt-2 text-sm leading-6">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="site-location" className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">Where the Site Is Located</h2>
        <p className="leading-7 text-slate-700">
          The project site is located at 5501 E. 33rd Avenue in Denver. This location is being studied for potential mixed-use reinvestment that could better connect with neighborhood needs and street-level activity.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">Existing Site Conditions</h2>
        <p className="leading-7 text-slate-700">
          Before any final concept is advanced, the project team is reviewing the site as it exists today, including frontage, access, surrounding uses, pedestrian experience, environmental considerations, and long-term improvement opportunities.
        </p>
        <figure className="space-y-3">
          <Image src="/images/5501-existing-site.jpg" alt="5501 E. 33rd Avenue existing site condition" width={1600} height={1067} className="h-auto w-full rounded-xl border border-slate-200" />
          <figcaption className="text-sm text-slate-700">Existing site photo — current site condition</figcaption>
        </figure>
      </section>

      <section className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">Why This Site Matters</h2>
        <p className="leading-7 text-slate-700">This corner may have long-term potential to support neighborhood-serving retail activity, housing opportunities, and a safer, more welcoming street presence. The current stage is focused on listening, due diligence, and understanding what responsible reinvestment could look like for this part of the neighborhood.</p>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">Preliminary Neighborhood Vision</h2>
        <figure className="space-y-3">
          <Image src="/images/5501-3story-rendering.jpg" alt="Preliminary neighborhood-serving mixed-use concept" width={1600} height={900} className="h-auto w-full rounded-xl border border-slate-200" />
          <figcaption className="text-sm font-semibold text-slate-800">Neighborhood-serving mixed-use concept — not final</figcaption>
        </figure>
        <p className="rounded-xl border border-[#d9b56a] bg-[#fbf1d8] px-4 py-3 text-sm text-[#5f4a24]">{renderingDisclaimer}</p>
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-[#d9b56a] pl-3 text-2xl font-bold text-[#12284c]">Design Scenarios Being Studied</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-4 shadow-sm">
            <Image src="/images/5501-33rd-6story-context-rendering.jpg" alt="Context study scenario concept" width={1600} height={1067} className="h-auto w-full rounded-xl border border-slate-200" />
            <figcaption className="text-sm font-semibold text-slate-800">Context study scenario — not final</figcaption>
          </figure>
          <figure className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-4 shadow-sm">
            <Image src="/images/5501-33rd-10story-stepback-rendering.jpg" alt="Stepback massing study scenario concept" width={1600} height={1067} className="h-auto w-full rounded-xl border border-slate-200" />
            <figcaption className="text-sm font-semibold text-slate-800">Stepback massing study scenario — not final</figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">Design Values Being Studied</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {['Site conditions', 'Neighborhood fit', 'Ground-floor uses', 'Responsible planning', 'Walkability and safer street experience', 'Public-realm improvements where feasible'].map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">What Should This Corner Offer?</h2>
        <p className="leading-7 text-slate-700">What would you like this corner to offer the neighborhood?</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {feedbackOptions.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</li>
          ))}
        </ul>
        <p className="text-sm leading-6 text-slate-700">This list is intended to gather early community preferences. It does not represent a final tenant plan or commitment.</p>
      </section>

      <section id="share-feedback" className="space-y-3 rounded-2xl border border-[#0d1d39] bg-[#12284c] p-6 text-white shadow-sm">
        <h2 className="text-3xl font-bold">We Want to Hear From You</h2>
        <p className="text-slate-100">What would you like this corner to offer the neighborhood?</p>
        <a href={`mailto:${publicEmail}`} className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#12284c] sm:w-auto">Email the Project Team</a>
      </section>

      <section className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">How Community Feedback Will Be Used</h2>
        <p className="leading-7 text-slate-700">Input collected during this outreach phase will inform design priorities, scenario refinement, and future conversations with city staff and community stakeholders.</p>
      </section>

      <section className="space-y-3 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">Where the Project Stands</h2>
        <p className="leading-7 text-slate-700">The project remains in preliminary planning and due diligence. No final design, height, unit count, retail mix, financing package, or construction timeline has been approved.</p>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">FAQ</h2>
        <div className="space-y-3">
          {[
            ['Has this project been approved?', 'No. It remains in preliminary planning and outreach.'],
            ['Is the building height decided?', 'No. Height is still being studied and no final decision has been made.'],
            ['Is the concept image the final design?', 'No. Images are preliminary and for community discussion only.'],
            ['What type of retail is planned?', 'No final tenant mix has been selected or approved.'],
            ['Can neighbors still shape the plan?', 'Yes. Community feedback is being requested before further advancement.'],
            ['How will my feedback be used?', 'Feedback will help inform design priorities and scenario refinement.'],
          ].map(([question, answer]) => (
            <article key={question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">{question}</h3>
              <p className="mt-2 text-slate-700">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#ddd6c7] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#12284c]">Stay Involved</h2>
        <p className="leading-7 text-slate-700">This page is part of an early effort to listen, learn, and gather input before the project concept advances further. If you live nearby, work nearby, own property in the area, operate a local business, or represent a community organization, we welcome your feedback.</p>
        <a href={`mailto:${publicEmail}`} className="inline-flex w-full items-center justify-center rounded-lg bg-[#12284c] px-5 py-3 text-sm font-semibold text-white sm:w-auto">Email the Project Team</a>
      </section>
    </div>
  )
}
