export interface Category {
  slug: string
  name: string
  description: string
  image: string
  modelYears?: string
  parentUrl: string
  subcategories?: string[]
}

export const vehicleCategories: Category[] = [
  {
    slug: 'transit',
    name: 'Ford Transit',
    description:
      'Ford Transit tüm kasa tipleri için orijinal ve yan sanayi yedek parça. V184, V347, V363 ve Custom modelleri.',
    image: '/images/models/transit.jpg',
    modelYears: '1992 - 2025',
    parentUrl: 'https://www.otomert.com.tr/transit-pmk12',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
      'Elektrik & Elektronik',
      'Egzoz Sistemi',
      'Şanzıman & Debriyaj',
    ],
  },
  {
    slug: 'transit-custom',
    name: 'Ford Transit Custom',
    description:
      'Transit Custom V362 ve V363 yedek parçaları. Orijinal ve muadil seçeneklerle uygun fiyatlı parçalar.',
    image: '/images/models/transit-custom.jpg',
    modelYears: '2013 - 2025',
    parentUrl: 'https://www.otomert.com.tr/transit-custom-v362-pmk278',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
      'Elektrik & Elektronik',
    ],
  },
  {
    slug: 'transit-connect',
    name: 'Ford Transit Connect',
    description:
      'Transit Connect tüm kasalar için yedek parça. Hafif ticari Ford Connect parçaları stokta.',
    image: '/images/models/connect.jpg',
    modelYears: '2002 - 2025',
    parentUrl: 'https://www.otomert.com.tr/connect-pmk11',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'focus',
    name: 'Ford Focus',
    description:
      'Ford Focus MK1, MK2, MK3 ve MK4 yedek parçaları. Sedan ve hatchback tüm modeller.',
    image: '/images/models/focus.jpg',
    modelYears: '1998 - 2025',
    parentUrl: 'https://www.otomert.com.tr/focus-pmk1',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
      'Elektrik & Elektronik',
    ],
  },
  {
    slug: 'fiesta',
    name: 'Ford Fiesta',
    description:
      'Ford Fiesta tüm nesiller için yedek parça. MK5, MK6, MK7 ve MK8 modelleri.',
    image: '/images/models/fiesta.jpg',
    modelYears: '2001 - 2023',
    parentUrl: 'https://www.otomert.com.tr/fiesta-pmk7',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'courier',
    name: 'Ford Courier',
    description:
      'Ford Courier 2014 ve sonrası modeller için yedek parça. Ön-arka takım ve tüm parçalar.',
    image: '/images/models/courier.jpg',
    modelYears: '2014 - 2025',
    parentUrl: 'https://www.otomert.com.tr/courier-pmk142',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'mondeo',
    name: 'Ford Mondeo',
    description:
      'Ford Mondeo MK3, MK4 ve MK5 yedek parçaları. Sedan, hatchback ve station wagon.',
    image: '/images/models/mondeo.jpg',
    modelYears: '2000 - 2023',
    parentUrl: 'https://www.otomert.com.tr/mondeo-pmk8',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'kuga',
    name: 'Ford Kuga',
    description:
      'Ford Kuga MK1, MK2 ve MK3 yedek parçaları. SUV modeli için orijinal ve yan sanayi.',
    image: '/images/models/kuga.jpg',
    modelYears: '2008 - 2025',
    parentUrl: 'https://www.otomert.com.tr/kuga-yedek-parca-pmk382',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'ranger',
    name: 'Ford Ranger',
    description:
      'Ford Ranger pick-up yedek parçaları. Arazi ve şehir kullanımı için tüm parçalar.',
    image: '/images/models/ranger.jpg',
    modelYears: '2011 - 2025',
    parentUrl: 'https://www.otomert.com.tr/',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'puma',
    name: 'Ford Puma',
    description:
      'Ford Puma crossover SUV yedek parçaları. 2019 ve sonrası modeller için.',
    image: '/images/models/puma.jpg',
    modelYears: '2019 - 2025',
    parentUrl: 'https://www.otomert.com.tr/puma-2020-2024-pmk454',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'ecosport',
    name: 'Ford EcoSport',
    description: 'Ford EcoSport kompakt SUV yedek parçaları.',
    image: '/images/models/ecosport.jpg',
    modelYears: '2013 - 2022',
    parentUrl: 'https://www.otomert.com.tr/',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
  {
    slug: 'tourneo',
    name: 'Ford Tourneo',
    description:
      'Ford Tourneo Connect ve Tourneo Custom yolcu taşıma araçları yedek parçaları.',
    image: '/images/models/tourneo.jpg',
    modelYears: '2013 - 2025',
    parentUrl: 'https://www.otomert.com.tr/connect-pmk11',
    subcategories: [
      'Motor Parçaları',
      'Kaporta',
      'Aydınlatma',
      'Süspansiyon',
      'Fren Sistemi',
    ],
  },
]

export const partCategories = [
  { slug: 'motor-parcalari', name: 'Motor Parçaları', icon: 'engine' },
  { slug: 'kaporta', name: 'Kaporta & Dış Parçalar', icon: 'car' },
  { slug: 'aydinlatma', name: 'Aydınlatma & Far Sistemleri', icon: 'lightbulb' },
  { slug: 'suspansiyon', name: 'Süspansiyon & Direksiyon', icon: 'settings' },
  { slug: 'fren-sistemi', name: 'Fren Sistemi', icon: 'disc' },
  { slug: 'elektrik', name: 'Elektrik & Elektronik', icon: 'zap' },
  { slug: 'egzoz', name: 'Egzoz Sistemi', icon: 'wind' },
  { slug: 'sanziman', name: 'Şanzıman & Debriyaj', icon: 'cog' },
  { slug: 'klima', name: 'Klima & Isıtma', icon: 'thermometer' },
  { slug: 'filtre', name: 'Filtre & Bakım', icon: 'filter' },
  { slug: 'ayna-cam', name: 'Ayna & Cam', icon: 'square' },
  { slug: 'ic-trim', name: 'İç Döşeme & Aksesuar', icon: 'layout' },
]
