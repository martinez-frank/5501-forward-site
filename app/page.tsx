import { Section } from '@/components/section'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Denver Redevelopment Initiative</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">5501 Forward: 5501 E. 33rd Avenue</h1>
        <p className="max-w-3xl text-lg text-slate-700">A civic-development platform for community stakeholders, public partners, and capital providers.</p>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        <Section title="Project Snapshot">Placeholder summary block for site context, project status, and headline milestones.</Section>
        <Section title="Development Timeline">Placeholder area for phased timeline from predevelopment through stabilization.</Section>
        <Section title="Maps & Site Context">Placeholder for interactive site map and district context visuals.</Section>
        <Section title="Renderings">Placeholder for concept renderings and design evolution media.</Section>
      </div>
    </div>
  )
}
