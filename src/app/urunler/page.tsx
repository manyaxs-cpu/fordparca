import { Metadata } from 'next'
import Link from 'next/link'
import { featuredProducts } from '@/data/products'
import { partCategories } from '@/data/categories'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Ford Yedek Parça Ürünleri - Orijinal & Yan Sanayi',
  description:
    'Ford yedek parça ürünleri. Motor parçaları, kaporta, aydınlatma, süspansiyon, fren sistemi ve daha fazlası. Orijinal ve yan sanayi seçeneklerle uygun fiyatlar.',
}

export default function UrunlerPage() {
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
            <span className="font-medium text-gray-900">Ürünler</span>
          </nav>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ford Yedek Parça Ürünleri
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                Tüm Ford modelleri için orijinal ve yan sanayi yedek parçalar
              </p>
            </div>
            <a
              href={siteConfig.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              Tüm Ürünler (otomert.com.tr)
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-ford-blue px-4 py-2 text-xs font-medium text-white">
              Tümü
            </span>
            {partCategories.slice(0, 8).map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:border-ford-blue hover:text-ford-blue transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* More Products CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              50.000+ ürün için online mağazamızı ziyaret edin
            </p>
            <a
              href={siteConfig.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Online Mağazaya Git
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
