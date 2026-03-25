import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Hakkımızda - Oto Mert Ford Yedek Parça',
  description:
    '1978 yılından bu yana Ford yedek parça sektöründe hizmet veren Oto Mert hakkında bilgi edinin. 46 yıllık tecrübe, güvenilir hizmet.',
}

export default function HakkimizdaPage() {
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
            <span className="font-medium text-gray-900">Hakkımızda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-white/5" />
        </div>
        <div className="container-main relative py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              1978&apos;den Bu Yana
              <span className="block mt-2 text-ford-accent">Ford Yedek Parça Uzmanı</span>
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Oto Mert, {new Date().getFullYear() - 1978} yıllık tecrübesiyle Türkiye&apos;nin
              en köklü Ford yedek parça tedarikçilerinden biridir.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="container-main">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Hikayemiz</h2>
                <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Oto Mert</strong>, 1978 yılında{' '}
                    <strong className="text-gray-900">{siteConfig.company.founder}</strong>{' '}
                    tarafından İstanbul Fatih&apos;te kurulmuştur. Otomotiv sektörüne duyulan
                    tutku ve müşteri odaklı hizmet anlayışı ile temelleri atılan firmamız, o
                    günden bugüne Ford&apos;un tüm modellerine uygun geniş bir yedek parça
                    yelpazesi sunarak sektörde güvenilir bir marka haline gelmiştir.
                  </p>
                  <p>
                    Ford Transit, Focus, Fiesta, Courier, Mondeo, Connect, Kuga, Ranger, Puma,
                    EcoSport ve Tourneo dahil tüm Ford binek ve hafif ticari araç modelleri
                    için hem orijinal hem de kaliteli yan sanayi parça seçenekleri sunuyoruz.
                  </p>
                  <p>
                    Müşterilerimize en iyi hizmeti sunabilmek için stoklarımızda 50.000&apos;den
                    fazla parça çeşidi bulundurarak, aynı gün kargo ve uygun taksit
                    seçenekleriyle hizmet vermeye devam ediyoruz.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-ford-blue/5 to-ford-blue/10 p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '1978', label: 'Kuruluş Yılı' },
                    { value: '46+', label: 'Yıllık Tecrübe' },
                    { value: '50.000+', label: 'Parça Çeşidi' },
                    { value: '12+', label: 'Ford Modeli' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-ford-blue">{stat.value}</div>
                      <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ford-gray py-16 sm:py-24">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-gray-900 text-center sm:text-3xl">
            Neden Oto Mert?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Köklü Tecrübe',
                desc: '1978 yılından bu yana Ford yedek parça sektöründe faaliyet gösteriyoruz. Yılların birikimiyle doğru parçayı, doğru fiyata sunuyoruz.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Geniş Ürün Yelpazesi',
                desc: 'Tüm Ford modelleri için 50.000+ parça çeşidi. Orijinal Ford parçaları ve kaliteli yan sanayi alternatifleri tek adreste.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
              },
              {
                title: 'Hızlı Teslimat',
                desc: 'Saat 16:00 öncesi verilen siparişlerde aynı gün kargo. Türkiye geneline hızlı ve güvenli teslimat.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                title: 'Uzman Kadro',
                desc: 'Ford araçları konusunda uzmanlaşmış ekibimiz, doğru parçayı bulmanız ve teknik sorularınız için her zaman yanınızda.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                title: 'Uygun Fiyat',
                desc: 'Doğrudan tedarikçi olarak en uygun fiyatları sunuyoruz. Taksit imkanı ve kapıda ödeme seçenekleri mevcuttur.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Güvenilir Alışveriş',
                desc: 'SSL sertifikalı güvenli ödeme, garanti belgesi ve kolay iade politikamızla gönül rahatlığıyla alışveriş yapın.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ford-blue/5 text-ford-blue">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
