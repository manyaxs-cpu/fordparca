import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'ford yedek parça',
    'ford parça',
    'ford yedek parça fiyatları',
    'orijinal ford yedek parça',
    'ford transit yedek parça',
    'ford focus yedek parça',
    'ford fiesta yedek parça',
    'ford courier yedek parça',
    'ford mondeo yedek parça',
    'ford kuga yedek parça',
    'ford connect yedek parça',
    'ford ranger yedek parça',
    'ford puma yedek parça',
    'oto mert',
    'otomert',
    'ford yedek parça istanbul',
    'ford yedek parça online',
  ],
  authors: [{ name: siteConfig.company.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
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
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#003478" />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoPartsStore',
              name: siteConfig.company.fullName,
              url: siteConfig.url,
              telephone: siteConfig.company.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Aksaray Mah. Namık Kemal Caddesi No:15',
                addressLocality: 'Fatih',
                addressRegion: 'İstanbul',
                addressCountry: 'TR',
              },
              openingHours: ['Mo-Fr 09:00-19:00', 'Sa 09:00-17:30'],
              priceRange: '₺₺',
              brand: {
                '@type': 'Brand',
                name: 'Ford',
              },
              foundingDate: '1978',
              founder: {
                '@type': 'Person',
                name: siteConfig.company.founder,
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
