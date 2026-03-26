export interface Product {
  id: string
  name: string
  slug: string
  category: string
  model: string
  modelSlug: string
  price: number
  originalPrice?: number
  brand: 'Orijinal' | 'Yan Sanayi' | 'İthal'
  inStock: boolean
  image: string
  description: string
  oemCode?: string
  parentUrl: string
  isFeatured?: boolean
  isNew?: boolean
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Ford Focus Ön Fren Balata Takımı 2011-2018',
    slug: 'focus-on-fren-balata-takimi-2011-2018',
    category: 'fren-sistemi',
    model: 'Ford Focus',
    modelSlug: 'focus',
    price: 450,
    originalPrice: 550,
    brand: 'Orijinal',
    inStock: true,
    image: '/images/products/fren-balata.jpg',
    description:
      'Ford Focus MK3 için orijinal ön fren balata takımı. 2011-2018 model araçlara uyumludur.',
    oemCode: '1809256',
    parentUrl: 'https://www.otomert.com.tr/focus-yedek-parca-pmk1',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Ford Transit Custom Ön Far (SOL) 2018-2024',
    slug: 'transit-custom-on-far-sol-2018-2024',
    category: 'aydinlatma',
    model: 'Ford Transit Custom',
    modelSlug: 'transit-custom',
    price: 2850,
    originalPrice: 3200,
    brand: 'İthal',
    inStock: true,
    image: '/images/products/far-transit.jpg',
    description:
      'Ford Transit Custom V363 makyajlı kasa için sol ön far. LED gündüz farı dahil.',
    oemCode: 'JK21-13W030',
    parentUrl: 'https://www.otomert.com.tr/transit-yedek-parca-pmk12',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Ford Courier Hava Filtresi 2014-2022',
    slug: 'courier-hava-filtresi-2014-2022',
    category: 'filtre',
    model: 'Ford Courier',
    modelSlug: 'courier',
    price: 180,
    originalPrice: 220,
    brand: 'Orijinal',
    inStock: true,
    image: '/images/products/hava-filtresi.jpg',
    description:
      'Ford Courier 1.5 TDCi ve 1.6 TDCi motorlar için orijinal hava filtresi.',
    oemCode: 'C1BJ-9601-AB',
    parentUrl: 'https://www.otomert.com.tr/courier-yedek-parca-pmk142',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Ford Focus Led Ayna Sinyali (SOL) 2019-2023',
    slug: 'focus-led-ayna-sinyali-sol-2019-2023',
    category: 'aydinlatma',
    model: 'Ford Focus',
    modelSlug: 'focus',
    price: 400,
    brand: 'İthal',
    inStock: true,
    image: '/images/products/ayna-sinyal.jpg',
    description: 'Ford Focus MK4 için LED ayna sinyal lambası. Sol taraf.',
    parentUrl: 'https://www.otomert.com.tr/focus-yedek-parca-pmk1',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Ford Transit V347 Ön Amortisör 2006-2013',
    slug: 'transit-v347-on-amortisor-2006-2013',
    category: 'suspansiyon',
    model: 'Ford Transit',
    modelSlug: 'transit',
    price: 1250,
    originalPrice: 1500,
    brand: 'Orijinal',
    inStock: true,
    image: '/images/products/amortisor.jpg',
    description:
      'Ford Transit V347 kasa için orijinal ön amortisör. Tekli satış.',
    oemCode: '6C11-18045-AE',
    parentUrl: 'https://www.otomert.com.tr/transit-yedek-parca-pmk12',
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Ford Fiesta Debriyaj Seti 2009-2017',
    slug: 'fiesta-debriyaj-seti-2009-2017',
    category: 'sanziman',
    model: 'Ford Fiesta',
    modelSlug: 'fiesta',
    price: 3200,
    originalPrice: 3800,
    brand: 'Orijinal',
    inStock: true,
    image: '/images/products/debriyaj.jpg',
    description:
      'Ford Fiesta MK7 1.4 TDCi ve 1.5 TDCi için komple debriyaj seti. Baskı, balata ve bilya dahil.',
    oemCode: '2207826',
    parentUrl: 'https://www.otomert.com.tr/fiesta-yedek-parca-pmk7',
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Ford Kuga Arka Stop Lambası (SAĞ) 2020-2025',
    slug: 'kuga-arka-stop-lambasi-sag-2020-2025',
    category: 'aydinlatma',
    model: 'Ford Kuga',
    modelSlug: 'kuga',
    price: 2100,
    brand: 'İthal',
    inStock: true,
    image: '/images/products/stop-lamba.jpg',
    description: 'Ford Kuga MK3 için sağ arka stop lambası. LED teknolojisi.',
    parentUrl: 'https://www.otomert.com.tr/kuga-yedek-parca-pmk382',
    isFeatured: true,
    isNew: true,
  },
  {
    id: '8',
    name: 'Ford Mondeo Yağ Filtresi 2014-2022',
    slug: 'mondeo-yag-filtresi-2014-2022',
    category: 'filtre',
    model: 'Ford Mondeo',
    modelSlug: 'mondeo',
    price: 120,
    originalPrice: 160,
    brand: 'Orijinal',
    inStock: true,
    image: '/images/products/yag-filtresi.jpg',
    description:
      'Ford Mondeo MK5 2.0 TDCi motor için orijinal yağ filtresi.',
    oemCode: '2525966',
    parentUrl: 'https://www.otomert.com.tr/mondeo-yedek-parca-pmk8',
    isFeatured: true,
  },
]
