import Link from 'next/link'
import { ReactNode } from 'react'

const navItems = [
  ['Project', '/project'],
  ['Community', '/community'],
  ['Execution Roadmap', '/execution-roadmap'],
  ['Investor Brief', '/investor-brief'],
  ['Development Economics', '/development-economics'],
  ['Team', '/team'],
  ['Documents', '/documents'],
  ['Contact', '/contact'],
]

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="text-xl font-semibold tracking-tight">5501 Forward</Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-slate-900">{label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl px-6 py-10">{children}</main>
      <footer className="mt-16 border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 5501 Forward. Denver, Colorado.</p>
          <p>Public and investor-facing site for 5501 E. 33rd Avenue redevelopment.</p>
        </div>
      </footer>
    </div>
  )
}
