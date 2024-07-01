import '@/app/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '../components/theme-provider'
import { cn } from '../lib/utils'

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_VERCEL_URL
    ? new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`)
    : process.env.NEXT_PUBLIC_LOCAL_URL
      ? new URL(process.env.NEXT_PUBLIC_LOCAL_URL)
      : undefined,
  title: {
    default: 'Curriculum Vitae',
    template: `%s | Curriculum Vitae`
  },
  description: 'A minimalist CV page',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png',
    apple: '/apple-touch-icon.png'
  },
  robots: 'follow, index',
  openGraph: {
    title: 'Curriculum Vitae',
    siteName: 'Curriculum Vitae',
    url: 'https://cv.pungrumpy.com',
    description: 'A minimalist CV page',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Curriculum Vitae'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curriculum Vitae',
    description: 'A minimalist CV page',
    images: [
      {
        url: '/twitter-card.png',
        width: 1500,
        height: 500,
        alt: 'Curriculum Vitae'
      }
    ],
    site: '@cv'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
