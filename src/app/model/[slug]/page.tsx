import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { vehicleCategories } from '@/data/categories'
import { featuredProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/data/site'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return vehicleCategories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = vehicleCategories.find((c) => c.slug === params.slug)
  if (!category) return {}

  return {
    title: `${category.name} Yedek Parça Fiyatları`,
    description: category.description,
    keywords: [
      `${category.name.toLowerCase()} yedek parça`,
      `${category.name.toLowerCase()} parça fiyatları`,
      `${category.name.toLowerCase()} orijinal parça`,
      `ford ${params.slug} yedek parça`,
    ],
  }
}

export default function ModelPage({ params }: Props) {
  const category = vehicleCategories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  const modelProducts = featuredProducts.filter(
    (p) => p.modelSlug === params.slug
  )

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
            <Link href="/modeller" className="hover:text-ford-blue transition-colors">
              Ford Modelleri
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-gray-900">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10" />
        </div>
        <div className="container-main relative py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {category.name}
              <span className="block mt-2 text-xl text-ford-accent sm:text-2xl">
                Yedek Parça Fiyatları
              </span>
            </h1>
            <p className="mt-4 text-lg text-blue-100">{category.description}</p>
            {category.modelYears && (
              <p className="mt-2 text-sm text-blue-200">
                Model Yılları: {category.modelYears}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={category.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-ford-blue hover:bg-gray-100 transition-all"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Online Mağazada İncele
              </a>
              <a
                href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, ${category.name} yedek parça fiyat bilgisi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white hover:bg-green-600 transition-all"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fiyat Sorun
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      {category.subcategories && (
        <section className="py-12">
          <div className="container-main">
            <h2 className="text-xl font-bold text-gray-900">Parça Kategorileri</h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {category.subcategories.map((sub) => (
                <a
                  key={sub}
                  href={`${category.parentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-ford-blue/20 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ford-blue/5 text-ford-blue group-hover:bg-ford-blue group-hover:text-white transition-all">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-ford-blue transition-colors">
                    {sub}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products */}
      {modelProducts.length > 0 && (
        <section className="bg-ford-gray py-12">
          <div className="container-main">
            <div className="flex items-end justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {category.name} Yedek Parçaları
              </h2>
              <a
                href={category.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ford-blue hover:underline"
              >
                Tümünü Gör &rarr;
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {modelProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO Content */}
      <section className="py-12">
        <div className="container-main">
          <div className="mx-auto max-w-3xl prose prose-gray">
            <h2>{category.name} Yedek Parça Fiyatları</h2>
            <p>
              {category.name} aracınız için ihtiyaç duyduğunuz tüm yedek parçaları{' '}
              <strong>FordParca.com</strong> ve{' '}
              <a href={siteConfig.parentSite} target="_blank" rel="noopener noreferrer">
                Oto Mert
              </a>{' '}
              güvencesiyle uygun fiyatlarla temin edebilirsiniz. {category.modelYears} model
              yılları arasındaki tüm {category.name} araçlar için orijinal ve yan sanayi parça
              seçenekleri mevcuttur.
            </p>
            <p>
              Motor parçaları, kaporta, aydınlatma, süspansiyon, fren sistemi ve daha fazlası
              için hemen sipariş verin veya{' '}
              <strong>{siteConfig.company.phoneDisplay}</strong> numaralı çağrı merkezimizi
              arayın.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
