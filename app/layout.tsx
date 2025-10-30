import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Joe Baarath - AI Engineer Portfolio',
  description: 'AI Engineer crafting intelligent solutions for tomorrow\'s challenges. Specialized in machine learning, product management, and full-stack development.',
  keywords: ['AI Engineer', 'Machine Learning', 'Product Management', 'Full Stack Developer', 'Data Science'],
  authors: [{ name: 'Joe Baarath' }],
  creator: 'Joe Baarath',
  publisher: 'Joe Baarath',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joebaarath.github.io',
    siteName: 'Joe Baarath Portfolio',
    title: 'Joe Baarath - AI Engineer Portfolio',
    description: 'AI Engineer crafting intelligent solutions for tomorrow\'s challenges.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joe Baarath - AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joe Baarath - AI Engineer Portfolio',
    description: 'AI Engineer crafting intelligent solutions for tomorrow\'s challenges.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}