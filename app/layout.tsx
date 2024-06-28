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
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL('http://localhost:3000'),
  title: {
    default: 'Curriculum Vitae',
    template: `%s | Curriculum Vitae`
  },
  description: 'A minimalist CV page',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png',
    apple: '/apple-touch-icon.png'
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
