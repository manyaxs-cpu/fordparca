import { Metadata } from 'next'
import Link from 'next/link'
import { vehicleCategories } from '@/data/categories'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Ford Modelleri - Tüm Ford Araç Yedek Parçaları',
  description:
    'Ford Transit, Focus, Fiesta, Courier, Mondeo, Connect, Kuga, Ranger, Puma ve tüm Ford modelleri için yedek parça. Orijinal ve yan sanayi seçenekler.',
}

export default function ModellerPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-ford-gray border-b border-gray-200">
        <div className="container-main py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-ford-blue transition-colors">
              Ana Sayfa
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-gray-900">Ford Modelleri</span>
          </nav>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="container-main">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Ford Modelleri
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Aracınızın modeline tıklayarak uygun yedek parçalara ulaşın
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/model/${cat.slug}`}
                className="group card overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-ford-blue/5 to-ford-blue/10 overflow-hidden">
                  <div className="flex h-full items-center justify-center">
                    <svg className="h-24 w-24 text-ford-blue/20 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  {cat.modelYears && (
                    <div className="absolute top-3 right-3 rounded-full bg-ford-blue/90 px-3 py-1 text-xs font-medium text-white">
                      {cat.modelYears}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-ford-blue transition-colors">
                    {cat.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-ford-blue">
                    <span>Parçaları İncele</span>
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
