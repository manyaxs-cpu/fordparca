import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'İletişim - Ford Yedek Parça | Oto Mert',
  description:
    'Ford yedek parça sipariş ve bilgi için bizimle iletişime geçin. Adres: Aksaray Mah. Fatih/İstanbul. Tel: 0850 888 FORD.',
}

export default function IletisimPage() {
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
            <span className="font-medium text-gray-900">İletişim</span>
          </nav>
        </div>
      </div>

      <section className="py-12 sm:py-16">
        <div className="container-main">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">İletişim</h1>
            <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
              Ford yedek parça ihtiyaçlarınız için bize ulaşın. Uzman ekibimiz size yardımcı olacaktır.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-ford-blue/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ford-blue text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Çağrı Merkezi</h3>
                  <p className="mt-1 text-xl font-bold text-ford-blue">
                    {siteConfig.company.phoneDisplay}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Hafta içi {siteConfig.company.workingHours.weekdays}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, Ford yedek parça hakkında bilgi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-green-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">WhatsApp</h3>
                  <p className="mt-1 text-xl font-bold text-green-600">
                    {siteConfig.company.whatsappDisplay}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Hızlı sipariş ve parça sorgulama
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ford-blue/10 text-ford-blue">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Mağaza Adresi</h3>
                  <p className="mt-1 text-gray-700">{siteConfig.company.address}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Hafta içi: {siteConfig.company.workingHours.weekdays}
                    <br />
                    Cumartesi: {siteConfig.company.workingHours.saturday}
                    <br />
                    Pazar: {siteConfig.company.workingHours.sunday}
                  </p>
                </div>
              </div>

              {/* Online Store */}
              <a
                href={siteConfig.parentSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-ford-blue/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ford-blue/10 text-ford-blue">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Online Mağaza</h3>
                  <p className="mt-1 text-ford-blue font-medium">otomert.com.tr</p>
                  <p className="mt-1 text-sm text-gray-500">
                    50.000+ ürün, online sipariş ve aynı gün kargo
                  </p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2!2d28.95!3d41.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzM2LjAiTiAyOMKwNTcnMDAuMCJF!5e0!3m2!1str!2str!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oto Mert Mağaza Konumu"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-8 space-y-4">
              {[
                {
                  q: 'Siparişim ne zaman kargoya verilir?',
                  a: 'Saat 16:00 öncesi verilen ve stokta bulunan ürünlerin siparişleri aynı gün kargoya verilir.',
                },
                {
                  q: 'Taksit imkanı var mı?',
                  a: 'Evet, kredi kartı ile uygun taksit seçenekleri sunulmaktadır. Detaylar için online mağazamızı ziyaret edebilirsiniz.',
                },
                {
                  q: 'Parçanın aracıma uygun olduğunu nasıl anlarım?',
                  a: 'Şasi numaranızı WhatsApp üzerinden göndererek veya çağrı merkezimizi arayarak uzman ekibimizden destek alabilirsiniz.',
                },
                {
                  q: 'İade koşulları nelerdir?',
                  a: 'Kullanılmamış ve ambalajı açılmamış ürünleri 14 gün içinde iade edebilirsiniz. Detaylar için mesafeli satış sözleşmemizi inceleyebilirsiniz.',
                },
                {
                  q: 'Orijinal ve yan sanayi parça arasındaki fark nedir?',
                  a: 'Orijinal parçalar Ford tarafından üretilen veya onaylanan parçalardır. Yan sanayi parçalar ise farklı üreticiler tarafından üretilen, uyumlu alternatif parçalardır.',
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-gray-100 bg-white p-6"
                >
                  <h3 className="text-sm font-bold text-gray-900">{item.q}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
