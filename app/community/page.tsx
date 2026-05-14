import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '5501 Forward Community Outreach',
  description:
    'Standalone community outreach page for 5501 E. 33rd Avenue focused on listening, early planning, and preliminary concept discussion.',
}

const glanceItems = [
  ['Address', '5501 E. 33rd Avenue'],
  ['Status', 'Early planning and outreach'],
  ['Purpose', 'Community input before final decisions'],
  ['Feedback', 'Email-based community comments'],
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

const publicEmail = 'communityfeedback@5501forward.com'

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 bg-[#F7F3EA] pb-10 text-[#0B223F] sm:space-y-10">
      <section className="rounded-3xl border border-[#D99A19] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <Image
          src="/images/5501forward.logo.png"
          alt="5501 Forward — Listening First. Planning Responsibly."
          width={600}
          height={204}
          className="mx-auto h-auto w-full max-w-[500px]"
          priority
        />
        <p className="mt-4 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0B223F] sm:text-[13px]">
          Listening First. Planning Responsibly.
        </p>
        <p className="mx-auto mt-3 max-w-[760px] text-center text-xl font-normal leading-snug text-[#0B223F] sm:mt-4 sm:text-2xl">
          A community vision effort for 5501 E. 33rd Avenue
        </p>
        <p className="mx-auto mt-3 max-w-[820px] text-center text-[15px] leading-7 text-[#0B223F] sm:mt-4 sm:text-[16px]">
          We are studying whether this property can become a stronger neighborhood asset through thoughtful mixed-use planning, possible neighborhood-serving retail, new housing opportunities, improved street presence, and long-term community investment.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:mt-6 sm:flex-row">
          <a href="#site-location" className="rounded-lg bg-[#0B223F] px-5 py-3 text-center text-sm font-semibold text-white">View the Site</a>
          <a href="#share-feedback" className="rounded-lg border border-[#0B223F] bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B223F]">Share Feedback</a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-[#D99A19] pl-3 text-2xl font-bold text-[#0B223F]">At a Glance</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {glanceItems.map(([title, detail]) => (
            <article key={title} className="rounded-xl border border-[#D99A19] bg-white p-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B223F]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#0B223F]">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="site-location" className="space-y-3 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-5 text-white shadow-sm">
        <div className="h-1 w-16 rounded-full bg-[#D99A19]" aria-hidden />
        <h2 className="text-2xl font-bold text-white">Where the Site Is Located</h2>
        <p className="leading-7 text-white">
          The project site is located at 5501 E. 33rd Avenue in Denver. This location is being studied for potential mixed-use reinvestment that could better connect with neighborhood needs and street-level activity.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B223F]">Existing Site Conditions</h2>
        <p className="leading-7 text-[#0B223F]">
          Before any final concept is advanced, the project team is reviewing the site as it exists today, including frontage, access, surrounding uses, pedestrian experience, environmental considerations, and long-term improvement opportunities.
        </p>
        <figure className="space-y-3">
          <Image src="/images/5501-existing-site.jpg" alt="5501 E. 33rd Avenue existing site condition" width={1600} height={1067} className="h-auto w-full rounded-xl border border-[#D99A19]" />
          <figcaption className="text-sm text-[#0B223F]">Existing site photo — current site condition</figcaption>
        </figure>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B223F]">Preliminary Neighborhood Vision</h2>
        <figure className="space-y-3">
          <Image src="/images/5501-3story-rendering.jpg" alt="Preliminary neighborhood-serving mixed-use concept" width={1600} height={900} className="h-auto w-full rounded-xl border border-[#D99A19]" />
          <figcaption className="text-sm font-semibold text-[#0B223F]">Neighborhood-serving mixed-use concept — not final</figcaption>
        </figure>
        <p className="rounded-xl border border-[#D99A19] bg-[#F7F3EA] px-4 py-3 text-sm text-[#0B223F]">{renderingDisclaimer}</p>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-5 text-white shadow-sm">
        <div className="h-1 w-16 rounded-full bg-[#D99A19]" aria-hidden />
        <h2 className="text-2xl font-bold text-white">Design Scenarios Being Studied</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="space-y-3 rounded-2xl border border-[#D99A19] bg-white p-4 shadow-sm">
            <Image src="/images/5501-33rd-6story-context-rendering.jpg" alt="Context study scenario concept" width={1600} height={1067} className="h-auto w-full rounded-xl border border-[#D99A19]" />
            <figcaption className="text-sm font-semibold text-[#0B223F]">Context study scenario — not final</figcaption>
          </figure>
          <figure className="space-y-3 rounded-2xl border border-[#D99A19] bg-white p-4 shadow-sm">
            <Image src="/images/5501-33rd-10story-stepback-rendering.jpg" alt="Stepback massing study scenario concept" width={1600} height={1067} className="h-auto w-full rounded-xl border border-[#D99A19]" />
            <figcaption className="text-sm font-semibold text-[#0B223F]">Stepback massing study scenario — not final</figcaption>
          </figure>
        </div>
        <p className="rounded-xl border border-[#D99A19] bg-[#F7F3EA] px-4 py-3 text-sm text-[#0B223F]">{renderingDisclaimer}</p>
      </section>

      <section className="space-y-3 rounded-2xl border border-[#D99A19] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B223F]">Design Values Being Studied</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {['Site conditions', 'Neighborhood fit', 'Ground-floor uses', 'Responsible planning', 'Walkability and safer street experience', 'Public-realm improvements where feasible'].map((item) => (
            <li key={item} className="rounded-lg border border-[#D99A19] bg-white px-4 py-3 text-sm font-medium text-[#0B223F]">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-5 text-white shadow-sm sm:p-6">
        <div className="h-1 w-16 rounded-full bg-[#D99A19]" aria-hidden />
        <h2 className="text-2xl font-bold">What would you like this corner to offer the neighborhood?</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {feedbackOptions.map((item) => (
            <li key={item} className="rounded-lg border border-[#D99A19] bg-white px-4 py-3 text-sm font-medium text-[#0B223F]">{item}</li>
          ))}
        </ul>
        <p className="text-sm leading-6 text-white">This list is intended to gather early community preferences. It does not represent a final tenant plan or commitment.</p>
      </section>

      <section id="share-feedback" className="space-y-4 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-6 text-white shadow-sm">
        <div className="h-1 w-16 rounded-full bg-[#D99A19]" aria-hidden />
        <h2 className="text-3xl font-bold">We Want to Hear From You</h2>
        <p className="text-white">What would you like this corner to offer the neighborhood?</p>
        <a href={`mailto:${publicEmail}`} className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0B223F] sm:w-auto">Email the Project Team</a>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-5 text-white shadow-sm sm:p-6">
        <div className="h-1 w-16 rounded-full bg-[#D99A19]" aria-hidden />
        <h2 className="text-2xl font-bold text-white">How Community Feedback Will Be Used</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ['Identify Priorities', 'Clarify what matters most to neighbors and nearby stakeholders.'],
            ['Understand Concerns', 'Document questions and concerns to address in future planning.'],
            ['Refine the Concept', 'Use input to guide responsible next-step concept refinements.'],
          ].map(([title, detail]) => (
            <article key={title} className="rounded-xl border border-[#D99A19] bg-white p-4">
              <div className="mb-3 h-1 w-10 rounded-full bg-[#D99A19]" aria-hidden />
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#0B223F]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#0B223F]">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-5 text-white shadow-sm">
        <h2 className="text-2xl font-bold">Where the Project Stands</h2>
        <p className="rounded-xl border border-[#D99A19] bg-white px-4 py-3 leading-7 text-[#0B223F]">The project remains in preliminary planning and due diligence. No final design, height, unit count, retail mix, financing package, or construction timeline has been approved.</p>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-[#0B223F]">FAQ</h2>
        <div className="space-y-3">
          {[
            ['Has this project been approved?', 'No. It remains in preliminary planning and outreach.'],
            ['Is the building height decided?', 'No. Height is still being studied and no final decision has been made.'],
            ['Is the concept image the final design?', 'No. Images are preliminary and for community discussion only.'],
            ['What type of retail is planned?', 'No final tenant mix has been selected or approved.'],
            ['Can neighbors still shape the plan?', 'Yes. Community feedback is being requested before further advancement.'],
            ['How will my feedback be used?', 'Feedback will help inform design priorities and scenario refinement.'],
          ].map(([question, answer]) => (
            <article key={question} className="rounded-xl border border-[#D99A19] bg-white p-4">
              <h3 className="font-semibold text-[#0B223F]">{question}</h3>
              <p className="mt-2 text-[#0B223F]">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-[#D99A19] bg-[#0B223F] p-6 text-white shadow-sm">
        <div className="h-1 w-16 rounded-full bg-[#D99A19]" aria-hidden />
        <h2 className="text-2xl font-bold">Stay Involved</h2>
        <p className="leading-7 text-white">As planning continues, project updates and future engagement opportunities will be shared with community members who request to stay informed.</p>
        <a href={`mailto:${publicEmail}`} className="inline-flex w-full items-center justify-center rounded-lg border border-[#D99A19] bg-white px-5 py-3 text-sm font-semibold text-[#0B223F] sm:w-auto">Request Project Updates</a>
      </section>
    </div>
  )
}
