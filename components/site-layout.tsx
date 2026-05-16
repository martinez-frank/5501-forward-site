'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  ['Project', '/project'],
  ['Roadmap', '/roadmap'],
  ['Strategy', '/strategy'],
  ['Investor Brief', '/investor-brief'],
  ['Documents', '/documents'],
  ['Contact', '/contact'],
] as const

const mobileHeaderClass =
  'sticky top-0 z-50 border-b border-[rgba(10,31,51,0.08)] bg-[rgba(255,255,255,0.84)] backdrop-blur-[12px] supports-[-webkit-backdrop-filter:blur(12px)]:[-webkit-backdrop-filter:blur(12px)]'

const mobileHeaderInnerClass =
  'mx-auto grid w-full max-w-7xl grid-cols-[76px_minmax(0,1fr)_76px] items-center gap-2 px-4 py-3 sm:grid-cols-[68px_minmax(0,1fr)_68px] min-[390px]:grid-cols-[76px_minmax(0,1fr)_76px] lg:flex lg:justify-between lg:gap-4 lg:px-6'

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isCommunityPage = pathname === '/community'

  if (isCommunityPage) {
    return (
      <div className="min-h-screen bg-[#f7f5ef] text-slate-900">
        <header className={mobileHeaderClass}>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-[76px_minmax(0,1fr)_76px] items-center gap-2 px-4 py-3 sm:grid-cols-[68px_minmax(0,1fr)_68px] sm:px-6 min-[390px]:grid-cols-[76px_minmax(0,1fr)_76px]">
            <div className="h-px w-[76px] justify-self-start" aria-hidden />
            <Link
              href="/community"
              className="col-start-2 inline-flex min-w-0 items-center justify-center"
              aria-label="5501 Forward Community Vision Page"
            >
              <Image
                src="/images/5501forward.logo.png"
                alt="5501 Forward"
                width={275}
                height={93}
                className="block h-auto w-[clamp(175px,48vw,220px)] max-w-full object-contain min-[390px]:w-[clamp(190px,52vw,245px)] sm:w-[213px]"
                priority
              />
            </Link>
            <div className="h-px w-[76px] justify-self-end" aria-hidden />
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
      <header className={mobileHeaderClass}>
        <div className={mobileHeaderInnerClass}>
          <div className="h-px w-[76px] justify-self-start lg:hidden" aria-hidden />

          <Link
            href="/"
            className="col-start-2 inline-flex min-w-0 items-center justify-center lg:col-start-auto lg:justify-self-auto"
            aria-label="5501 Forward Home"
          >
            <Image
              src="/images/5501forward.logo.png"
              alt="5501 Forward — Listening First. Planning Responsibly."
              width={275}
              height={93}
              className="hidden h-auto w-[213px] object-contain lg:block"
              priority
            />
            <Image
              src="/images/5501forward.logo.png"
              alt="5501 Forward"
              width={275}
              height={93}
              className="block h-auto w-[clamp(175px,48vw,220px)] max-w-full object-contain min-[390px]:w-[clamp(190px,52vw,245px)] lg:hidden"
              priority
            />
          </Link>

          <nav className="hidden flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-200 hover:text-[#0d1b2a] ${pathname === href ? 'text-[#0d1b2a]' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <details className="group relative col-start-3 justify-self-end lg:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50">
              Menu
            </summary>
            <nav className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
              <ul className="space-y-1">
                {navItems.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition duration-200 hover:bg-slate-100 hover:text-slate-900 ${pathname === href ? 'bg-slate-100 text-[#0d1b2a]' : 'text-slate-700'}`}
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
