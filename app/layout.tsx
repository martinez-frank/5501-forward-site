import type { Metadata } from 'next'
import './globals.css'
import { SiteLayout } from '@/components/site-layout'

export const metadata: Metadata = {
  title: {
    default: '5501 Forward',
    template: '%s | 5501 Forward',
  },
  description:
    'Public and investor-facing website for the 5501 E. 33rd Avenue redevelopment project in Denver, Colorado.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
