import { featuredProducts } from '@/data/products'
import ProductCard from './ProductCard'
import { siteConfig } from '@/data/site'

export default function FeaturedProducts() {
  return (
    <section className="bg-ford-gray py-16 sm:py-24">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Öne Çıkan Ürünler</h2>
            <p className="section-subtitle">
              En çok tercih edilen Ford yedek parçaları uygun fiyatlarla
            </p>
          </div>
          <a
            href={siteConfig.parentSite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-2.5 !text-xs whitespace-nowrap"
          >
            Tüm Ürünleri Gör
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
