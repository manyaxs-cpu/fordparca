import Link from 'next/link'
import { vehicleCategories } from '@/data/categories'

export default function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-main">
        <div className="text-center">
          <h2 className="section-title">Ford Modeline Göre Yedek Parça</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Aracınızın modeline uygun orijinal ve yan sanayi yedek parçalarına hızlıca ulaşın
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {vehicleCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/model/${category.slug}`}
              className="group card p-5 sm:p-6 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ford-blue/5 text-ford-blue transition-all group-hover:bg-ford-blue group-hover:text-white group-hover:scale-110">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>

              <h3 className="mt-4 text-sm font-bold text-gray-900 sm:text-base group-hover:text-ford-blue transition-colors">
                {category.name}
              </h3>
              <p className="mt-1 text-xs text-gray-500">{category.modelYears}</p>

              {/* Arrow */}
              <div className="mt-3 flex items-center justify-center text-ford-blue opacity-0 transition-all group-hover:opacity-100">
                <span className="text-xs font-medium">Parçaları Gör</span>
                <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
