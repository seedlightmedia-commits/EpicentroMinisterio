import type { Metadata } from 'next'
import { Montserrat, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import HeadingReveal from '@/components/heading-reveal'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900']
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Epicentro Ministerio | Iglesia Cristiana en Bogotá',
  description: 'Somos una iglesia de sana doctrina que cree en el Padre, Hijo y Espíritu Santo. Únete a nuestra comunidad en Bogotá, Fontibón.',
  keywords: ['iglesia', 'cristiana', 'bogotá', 'fontibón', 'epicentro', 'ministerio', 'jóvenes', 'mujeres', 'niños'],
  openGraph: {
    title: 'Epicentro Ministerio',
    description: 'Una iglesia de sana doctrina en Bogotá',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1e293b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${montserrat.variable} ${geistMono.variable} font-sans antialiased`}>
        <HeadingReveal />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
