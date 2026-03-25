import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-ford-blue">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Sayfa Bulunamadı</h2>
        <p className="mt-3 text-gray-600 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönerek aradığınız Ford yedek parçayı bulabilirsiniz.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Ana Sayfaya Dön
          </Link>
          <Link href="/iletisim" className="btn-secondary">
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </section>
  )
}
