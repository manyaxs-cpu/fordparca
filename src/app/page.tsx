import Hero from '@/components/Hero'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import TrustBadges from '@/components/TrustBadges'
import PartCategoriesSection from '@/components/PartCategoriesSection'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/data/site'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <CategoryGrid />
      <FeaturedProducts />
      <PartCategoriesSection />

      {/* SEO Content Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">
              Ford Yedek Parça - Güvenilir Tedarikçiniz
            </h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">FordParca.com</strong>,{' '}
                <a href={siteConfig.parentSite} target="_blank" rel="noopener noreferrer" className="text-ford-blue hover:underline">
                  Oto Mert
                </a>{' '}
                firmasının resmi online Ford yedek parça satış platformudur.
                1978 yılından bu yana Ford araç sahiplerine orijinal ve yan sanayi yedek parça
                tedarikinde hizmet veren firmamız, sektördeki 46 yıllık tecrübesiyle güvenilir
                çözüm ortağınızdır.
              </p>
              <p>
                <strong className="text-gray-900">Ford Transit</strong>, Ford Focus, Ford Fiesta,
                Ford Courier, Ford Mondeo, Ford Connect, Ford Kuga, Ford Ranger, Ford Puma,
                Ford EcoSport ve Ford Tourneo dahil tüm Ford binek ve hafif ticari araç modelleri
                için 50.000&apos;den fazla yedek parça çeşidini stoklarımızda bulunduruyoruz.
              </p>
              <p>
                Motor parçaları, kaporta, aydınlatma, süspansiyon, fren sistemi, elektrik-elektronik,
                egzoz, şanzıman, klima ve filtre kategorilerinde{' '}
                <strong className="text-gray-900">orijinal Ford yedek parça</strong> ve kaliteli
                yan sanayi alternatiflerini en uygun fiyatlarla sunuyoruz.
              </p>
              <p>
                Aynı gün kargo, uygun taksit seçenekleri ve uzman teknik destek ile Ford yedek
                parça ihtiyaçlarınızı hızlı ve güvenilir şekilde karşılıyoruz. Aksaray, Fatih /
                İstanbul&apos;daki mağazamızı ziyaret edebilir veya{' '}
                <strong className="text-gray-900">{siteConfig.company.phoneDisplay}</strong>{' '}
                numaralı çağrı merkezimizden sipariş verebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
