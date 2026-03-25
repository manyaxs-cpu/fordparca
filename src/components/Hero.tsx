import { siteConfig } from '@/data/site'

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-white/5" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-ford-accent/10" />
      </div>

      <div className="container-main relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            1978&apos;den beri güvenilir Ford yedek parça tedarikçisi
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Ford Yedek Parça
            <span className="block mt-2 text-ford-accent">
              Orijinal & Yan Sanayi
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-blue-100 sm:text-xl max-w-2xl mx-auto">
            Transit, Focus, Fiesta, Courier, Mondeo, Connect, Kuga ve tüm Ford modelleri
            için <strong className="text-white">50.000+ yedek parça</strong> çeşidi.
            Aynı gün kargo, uygun fiyat garantisi.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-ford-blue shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl hover:scale-105 w-full sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Online Mağaza
            </a>
            <a
              href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, Ford yedek parça fiyat bilgisi almak istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl hover:scale-105 w-full sm:w-auto"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Sipariş
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: '46+', label: 'Yıllık Tecrübe' },
              { value: '50.000+', label: 'Parça Çeşidi' },
              { value: 'Aynı Gün', label: 'Kargo' },
              { value: 'Orijinal', label: 'Garanti' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="text-xl font-bold text-white sm:text-2xl">{stat.value}</div>
                <div className="text-xs text-blue-200 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 80 1440 60V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
