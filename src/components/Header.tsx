'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { vehicleCategories } from '@/data/categories'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modelsOpen, setModelsOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-ford-dark text-white">
        <div className="container-main flex items-center justify-between py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="flex items-center gap-1.5 hover:text-ford-accent transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">{siteConfig.company.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href={`https://wa.me/${siteConfig.company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-green-400 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-gray-400">
              Hafta içi: {siteConfig.company.workingHours.weekdays}
            </span>
            <a
              href={siteConfig.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-ford-accent hover:text-white transition-colors font-medium"
            >
              <span>otomert.com.tr</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container-main">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ford-blue">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-bold text-ford-blue leading-tight">
                  FordParca
                </span>
                <span className="block text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                  Oto Mert | Ford Yedek Parça
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-ford-gray hover:text-ford-blue transition-all"
              >
                Ana Sayfa
              </Link>

              {/* Models Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setModelsOpen(true)}
                onMouseLeave={() => setModelsOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-ford-gray hover:text-ford-blue transition-all">
                  Ford Modelleri
                  <svg className={`h-4 w-4 transition-transform ${modelsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {modelsOpen && (
                  <div className="absolute left-0 top-full w-[560px] rounded-2xl bg-white p-4 shadow-xl border border-gray-100">
                    <div className="grid grid-cols-3 gap-1">
                      {vehicleCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/model/${cat.slug}`}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-ford-gray hover:text-ford-blue transition-all"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ford-blue/5 text-ford-blue">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">{cat.name}</span>
                            <span className="block text-[10px] text-gray-400">{cat.modelYears}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 border-t pt-3">
                      <Link
                        href="/modeller"
                        className="flex items-center justify-center gap-2 rounded-lg bg-ford-gray px-4 py-2.5 text-sm font-medium text-ford-blue hover:bg-ford-blue hover:text-white transition-all"
                      >
                        Tüm Modelleri Gör
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/urunler"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-ford-gray hover:text-ford-blue transition-all"
              >
                Ürünler
              </Link>
              <Link
                href="/hakkimizda"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-ford-gray hover:text-ford-blue transition-all"
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-ford-gray hover:text-ford-blue transition-all"
              >
                İletişim
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, Ford yedek parça hakkında bilgi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp gap-2 !py-2.5 !text-xs"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hızlı Sipariş
              </a>
              <a
                href={siteConfig.parentSite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 !text-xs"
              >
                Mağazaya Git
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menüyü aç"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container-main py-4 space-y-1">
              <Link href="/" className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-ford-gray" onClick={() => setMobileMenuOpen(false)}>
                Ana Sayfa
              </Link>
              <Link href="/modeller" className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-ford-gray" onClick={() => setMobileMenuOpen(false)}>
                Ford Modelleri
              </Link>
              <Link href="/urunler" className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-ford-gray" onClick={() => setMobileMenuOpen(false)}>
                Ürünler
              </Link>
              <Link href="/hakkimizda" className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-ford-gray" onClick={() => setMobileMenuOpen(false)}>
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-ford-gray" onClick={() => setMobileMenuOpen(false)}>
                İletişim
              </Link>

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, Ford yedek parça hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full gap-2"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp ile Sipariş
                </a>
                <a href={siteConfig.parentSite} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  Mağazaya Git
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
