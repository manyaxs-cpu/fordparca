import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { partCategories, vehicleCategories } from '@/data/categories'
import { featuredProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/data/site'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return partCategories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = partCategories.find((c) => c.slug === params.slug)
  if (!category) return {}

  return {
    title: `Ford ${category.name} - Yedek Parça Fiyatları`,
    description: `Ford ${category.name} yedek parça fiyatları. Tüm Ford modelleri için orijinal ve yan sanayi ${category.name.toLowerCase()} parçaları.`,
  }
}

export default function KategoriPage({ params }: Props) {
  const category = partCategories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = featuredProducts.filter(
    (p) => p.category === params.slug
  )

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-ford-gray border-b border-gray-200">
        <div className="container-main py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-ford-blue transition-colors">Ana Sayfa</Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/urunler" className="hover:text-ford-blue transition-colors">Ürünler</Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-gray-900">{category.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ford {category.name}
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Tüm Ford modelleri için {category.name.toLowerCase()} yedek parçaları
          </p>

          {/* Model Links */}
          <div className="mt-8">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Modele Göre Filtrele
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {vehicleCategories.map((model) => (
                <Link
                  key={model.slug}
                  href={`/model/${model.slug}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:border-ford-blue hover:text-ford-blue transition-all"
                >
                  {model.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          {categoryProducts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-10 text-center py-16 rounded-2xl bg-ford-gray">
              <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Bu kategorideki ürünler için mağazamızı ziyaret edin
              </h3>
              <p className="mt-2 text-gray-600">
                50.000+ Ford {category.name.toLowerCase()} parçası için online mağazamıza göz atın
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={siteConfig.parentSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Online Mağazaya Git
                </a>
                <a
                  href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, Ford ${category.name} hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  WhatsApp ile Sorun
                </a>
              </div>
            </div>
          )}

          {/* More Products CTA */}
          <div className="mt-12 text-center">
            <a
              href={siteConfig.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Tüm {category.name} Ürünlerini Gör (otomert.com.tr)
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
