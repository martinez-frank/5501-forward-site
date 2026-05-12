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
] as const

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight sm:text-xl">
            5501 Forward
          </Link>

          <nav className="hidden flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-slate-900">
                {label}
              </Link>
            ))}
          </nav>

          <details className="group relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Menu
            </summary>
            <nav className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
              <ul className="space-y-1">
                {navItems.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">{children}</main>

      <footer className="mt-16 border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 5501 Forward. Denver, Colorado.</p>
          <p>Public and investor-facing site for 5501 E. 33rd Avenue redevelopment.</p>
        </div>
      </footer>
    </div>
  )
}
