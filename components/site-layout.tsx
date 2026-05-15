'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  ['Project', '/project'],
  ['Roadmap', '/execution-roadmap'],
  ['Strategy', '/development-strategy'],
  ['Investor Brief', '/investor-brief'],
  ['Team', '/team'],
  ['Documents', '/documents'],
  ['Contact', '/contact'],
] as const

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isCommunityPage = pathname === '/community'

  if (isCommunityPage) {
    return (
      <div className="min-h-screen bg-[#f7f5ef] text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link href="/community" className="inline-flex items-center" aria-label="5501 Forward Community Vision Page">
              <Image src="/images/5501forward.logo.png" alt="5501 Forward" width={180} height={61} className="h-auto w-[140px] sm:w-[170px]" priority />
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
        <footer className="border-t border-slate-200">
          <div className="mx-auto w-full max-w-4xl space-y-1 px-4 py-6 text-sm text-slate-600 sm:px-6">
            <p className="font-medium text-slate-800">5501 Forward</p>
            <p>Listening First. Planning Responsibly.</p>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="inline-flex items-center" aria-label="5501 Forward Home">
            <Image
              src="/images/5501forward.logo.png"
              alt="5501 Forward — Listening First. Planning Responsibly."
              width={220}
              height={74}
              className="hidden h-auto w-[170px] sm:block"
              priority
            />
            <span className="text-base font-semibold tracking-tight sm:hidden">5501 Forward</span>
          </Link>

          <nav className="hidden flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition-colors duration-200 hover:text-[#8E6F3E]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <details className="group relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50">
              Menu
            </summary>
            <nav className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
              <ul className="space-y-1">
                {navItems.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-100 hover:text-slate-900"
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
