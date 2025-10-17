import type { Metadata } from 'next'
import { Poppins, Pacifico } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-pacifico',
  subsets: ['latin'],
})

const siteUrl = 'https://veidz.vercel.app'
const siteName = 'João Victor Veidz'
const siteDescription =
  'Portfolio de João Victor Veidz - Engenheiro de Software com 5 anos de experiência especializado em React, Next.js, TypeScript e Node.js'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Engenheiro de Software`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'João Victor Veidz',
    'Veidz',
    'Engenheiro de Software',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'JavaScript',
    'Frontend',
    'Backend',
    'Portfolio',
    'Desenvolvedor',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName,
    title: `${siteName} | Engenheiro de Software`,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Engenheiro de Software`,
    description: siteDescription,
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${poppins.variable} ${pacifico.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
