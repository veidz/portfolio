import type { Metadata } from 'next'
import { Geist, Geist_Mono, Pacifico } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const pacifico = Pacifico({
  weight: '400',
  variable: '--font-pacifico',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'João Victor Veidz | Engenheiro de Software',
  description:
    'Portfolio de João Victor Veidz - Engenheiro de Software especializado em React, Next.js, TypeScript e Node.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
