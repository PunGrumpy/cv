import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '../lib/utils'
import type { Metadata } from 'next'
import { ThemeProvider } from '../components/theme-provider'

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
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
        <div className="flex flex-col min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
