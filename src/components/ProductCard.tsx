import Link from 'next/link'
import { Product } from '@/data/products'
import { siteConfig } from '@/data/site'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const brandBadgeClass =
    product.brand === 'Orijinal'
      ? 'badge-original'
      : product.brand === 'İthal'
        ? 'badge-import'
        : 'badge-aftermarket'

  return (
    <div className="card group overflow-hidden">
      {/* Image Area */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="flex h-full items-center justify-center p-8">
          <svg className="h-20 w-20 text-gray-300 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z" />
          </svg>
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          <span className={brandBadgeClass}>{product.brand}</span>
          {product.isNew && <span className="badge-new">Yeni</span>}
          {discount > 0 && <span className="badge-sale">%{discount}</span>}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-all group-hover:opacity-100">
          <a
            href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.${product.oemCode ? ' OEM: ' + product.oemCode : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white shadow-md hover:bg-green-600 transition-colors"
            title="WhatsApp ile Sor"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link href={`/model/${product.modelSlug}`} className="hover:text-ford-blue transition-colors">
            {product.model}
          </Link>
          {product.oemCode && (
            <>
              <span>&middot;</span>
              <span className="font-mono text-[10px]">{product.oemCode}</span>
            </>
          )}
        </div>

        <h3 className="mt-2 text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-ford-blue transition-colors leading-snug">
          {product.name}
        </h3>

        <p className="mt-2 text-xs text-gray-500 line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-ford-blue">
                {product.price.toLocaleString('tr-TR')} TL
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice.toLocaleString('tr-TR')} TL
                </span>
              )}
            </div>
            <span className={`mt-1 text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
              {product.inStock ? 'Stokta Mevcut' : 'Stok Sorunuz'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <a
            href={product.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 !py-2.5 !text-xs"
          >
            Satın Al
          </a>
          <a
            href={`https://wa.me/${siteConfig.company.whatsapp}?text=Merhaba, ${product.name} sipariş vermek istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg border border-gray-200 px-3 hover:border-green-500 hover:bg-green-50 transition-all"
            title="WhatsApp"
          >
            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
