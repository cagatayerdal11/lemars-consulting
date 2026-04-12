import type { Dictionary } from '@/lib/types'
import { serviceArticlesTr } from './service-articles-tr'

const tr: Dictionary = {
  meta: {
    title: 'LEMARS | İdari İşlerde Kör Noktaları Görünür Kılan İşletim Sistemleri',
    description: 'İdari işler fonksiyonunu dağınık destek hizmetleri alanı olmaktan çıkarıp; standart, veriyle yönetilen, çalışan deneyimine dokunan ve kurumsal performansa katkı sağlayan bir işletim sistemine dönüştürüyoruz.',
  },
  nav: {
    services: 'Hizmetler',
    whyUs: 'Neden Biz',
    model: 'Çalışma Modeli',
    insights: 'İçerikler',
    news: 'Gündem',
    contact: 'İletişim',
    cta: 'Bize Ulaşın',
    langSwitch: 'EN',
  },
  hero: {
    tag: 'Operational Excellence & Employee Experience',
    title: 'İdari İşlerde Kör Noktaları Görünür Kılan',
    titleHighlight: 'İşletim Sistemleri',
    subtitle: 'İdari işler fonksiyonunu dağınık destek hizmetleri alanı olmaktan çıkarıp; standart, veriyle yönetilen, çalışan deneyimine dokunan ve İK hedefleriyle hizalanan bir işletim sistemine dönüştürüyoruz.',
    cta: 'Keşfedin',
    ctaSecondary: 'Hizmetlerimiz',
    stats: [
      { value: '360°', label: 'Bütünsel Bakış' },
      { value: '4', label: 'Hizmet Sütunu' },
      { value: '∞', label: 'Sürekli İyileştirme' },
    ],
  },
  themes: {
    tag: 'Temel Yaklaşım',
    title: 'Operasyonu Yalnızca Operasyon Olarak Görmüyoruz',
    subtitle: 'Her hizmet noktasını çalışan deneyimi, yönetsel kontrol ve kurumsal performans eksenlerinde değerlendiriyoruz.',
    items: [
      {
        icon: 'eye',
        title: 'Görünmeyeni Görünür Kılmak',
        description: 'İdari işlerdeki gizli zaman kaybını, ölçülmeyen hizmet sürtünmesini ve merkezden görünmeyen saha gerçekliğini ortaya çıkarıyoruz.',
      },
      {
        icon: 'users',
        title: 'Hizmet Kalitesini İnsan Deneyimine Bağlamak',
        description: 'Shuttle gecikmesi, yemek kalitesi, seyahat sürtünmesi ve tesis hizmetleri yalnızca operasyonel değil; çalışan deneyimi sorunlarıdır.',
      },
      {
        icon: 'settings',
        title: 'Kuralsızlıktan İşletim Sistemine Geçiş',
        description: 'Kişiye bağlı uygulamaları, lokasyon bazlı farklılıkları ve zayıf istisna yönetimini standart, ölçüm ve kontrol sistemine dönüştürüyoruz.',
      },
      {
        icon: 'cpu',
        title: 'Mevcut Sistemlerle Akıllı Modernizasyon',
        description: 'Önce SAP, HROne, ServiceNow, SharePoint ve Forms ile süreç disiplini kurulur; yeni araç ihtiyacı ancak net ROI ile değerlendirilir.',
      },
      {
        icon: 'heart',
        title: 'İK ile Birlikte Çalışan İdari İşler',
        description: 'Memnuniyet, bağlılık, iç hizmet deneyimi, güven ve saha adalet algısı — İK hedeflerinden kopuk ele alınmaz.',
      },
    ],
  },
  about: {
    tag: 'Biz Kimiz',
    title: 'İdari İşlerde Görünmeyeni Görünür Kılan İşletim Sistemleri',
    description: 'Kuruluşların idari işler hizmetleri çoğu zaman görünmeyen iş gücü kayıpları, ölçülemeyen kalite farkları, lokasyon bazlı uygulama sapmaları ve çalışan deneyimine yansıyan sürtünmeler üretir. Biz bu alanı yalnızca operasyonel bir destek fonksiyonu olarak değil; çalışan memnuniyeti, bağlılık, verimlilik ve kurumsal yönetim kalitesi ile doğrudan ilişkili bir işletim sistemi olarak ele alıyoruz.',
    points: [
      'Sadece öneri değil, işletim modeli kuruyoruz',
      'Sadece rapor değil, sürekli işleyebilen yapı tasarlıyoruz',
      'Ölçülebilir ve yaygınlaştırılabilir çerçeve sunuyoruz',
    ],
  },
  services: {
    tag: 'Hizmet Kapsamı',
    title: 'Dört Sütunlu İşletim Mimarisi',
    subtitle: 'Her sütun, operasyonel mükemmelliğin farklı bir boyutunu temsil eder. Birlikte çalıştıklarında bütünsel bir işletim sistemi oluştururlar.',
    pillars: [
      {
        id: 'standardization',
        icon: 'layers',
        title: 'Hizmet Standardizasyonu',
        description: 'Tüm destek hizmetlerinde tutarlı, ölçülebilir ve denetlenebilir standartlar oluşturuyoruz.',
        items: [
          'Shuttle / Personel Taşımacılığı',
          'Filo & Havuz Araç Yönetimi',
          'Yönetici Aracı',
          'Seyahat & Konaklama',
          'Taksi & Şoförlü Araç',
          'Temizlik & Pest Kontrol',
          'Peyzaj',
          'Catering & Yemek Hizmetleri',
        ],
      },
      {
        id: 'control',
        icon: 'shield',
        title: 'Yönetim ve Kontrol Sistemi',
        description: 'Süreçleri tasarlar, kuralları belirler ve kontrol mekanizmalarını kurarız.',
        items: [
          'Süreç Tasarımı & Optimizasyonu',
          'Politika ve Prosedür Geliştirme',
          'Rol ve Sorumluluk Matrisi',
          'KPI / SLA Tanımlama',
          'Denetim ve Kontrol Mekanizmaları',
          'Tedarikçi Performans Yönetimi',
          'İstisna Yönetimi',
        ],
      },
      {
        id: 'digital',
        icon: 'monitor',
        title: 'Dijital ve Görünür Yönetim',
        description: 'Mevcut sistemlerle dijitalleşme ve veri görünürlüğü sağlıyoruz.',
        items: [
          'Mevcut Sistemlerle Dijitalleşme',
          'Onay ve Takip Akışları',
          'Veri Görünürlüğü & Dashboard',
          'İş Gücü ve Zaman Kaybı Analizi',
          'Hizmet Kalitesi Ölçümü',
        ],
      },
      {
        id: 'experience',
        icon: 'sparkles',
        title: 'İnsan ve Deneyim Boyutu',
        description: 'Operasyonu çalışan deneyimi ve İK hedefleri ile buluşturuyoruz.',
        items: [
          'Çalışan Memnuniyeti Entegrasyonu',
          'Çalışan Bağlılığı Analizi',
          'İç Hizmet Deneyimi Tasarımı',
          'İletişim Dili Standardizasyonu',
          'Hizmet Kurallarının Benimsenmesi',
          'İK ile Hizmet Kalitesi Köprüsü',
        ],
      },
    ],
  },
  whyDifferent: {
    tag: 'Fark',
    title: 'Neden Farklıyız',
    subtitle: 'Klasik operasyon danışmanlığından stratejik ve yapısal olarak ayrışıyoruz.',
    items: [
      {
        icon: 'zap',
        title: 'Operasyon + İnsan Etkisi',
        description: 'Her operasyonel çıktıyı çalışan deneyimi üzerindeki etkisiyle birlikte değerlendiriyoruz. Süreç mükemmelliği, insan etkisi olmadan eksiktir.',
      },
      {
        icon: 'eye',
        title: 'Görünmeyeni Görünür Kılmak',
        description: 'Ölçülmeyen zaman kaybı, görünmeyen beyaz yaka koordinasyon yükü ve lokasyon bazlı uygulama sapmalarını gün yüzüne çıkarıyoruz.',
      },
      {
        icon: 'code',
        title: 'İşletim Sistemi Dili',
        description: 'Sadece rapor yazmıyoruz. İşletim modeli kuruyor, sürekli işleyebilen ve ölçülebilir yapılar tasarlıyoruz.',
      },
      {
        icon: 'database',
        title: 'Mevcut Sistem Önce Gelir',
        description: 'Önce süreç disiplini, sonra veri görünürlüğü, sonra yönetim ritmi, en son yeni araç ihtiyacı. Gereksiz teknoloji yatırımı önermiyoruz.',
      },
      {
        icon: 'link',
        title: 'İK ile Doğrudan Bağ',
        description: 'Shuttle, yemek, seyahat, tesis hizmetleri ve araç erişimi — tüm bunlar İK hedeflerinden kopuk ele alınmaz.',
      },
    ],
  },
  gaps: {
    tag: 'Kör Noktalar',
    title: 'Sessizce Eriyen Değerler',
    subtitle: 'Şirketlerin kaybı sadece bütçe değil; zaman, dikkat, güven ve benimseme de sessizce eriyor.',
    items: [
      {
        title: 'Ölçülmeyen Zaman Kaybı',
        description: 'Manuel takip, e-posta zincirleri, telefon koordinasyonu — günlük operasyondaki görünmeyen iş gücü kaybı.',
        impact: 'Beyaz yaka verimliliğinde %15-25 kayıp',
      },
      {
        title: 'Görünmeyen Beyaz Yaka Eforu',
        description: 'İdari işler koordinasyonunda harcanan yönetsel zaman, hiçbir KPI\'da görünmüyor.',
        impact: 'Yönetsel dikkat ve stratejik odak kaybı',
      },
      {
        title: 'Yorum Bazlı Tedarikçi Yönetimi',
        description: 'Performans verisi yerine kişisel izlenimlere dayalı tedarikçi değerlendirmesi.',
        impact: 'Tutarsız hizmet kalitesi ve maliyet kontrolü',
      },
      {
        title: 'İK Verisi ile Kök Neden Kopukluğu',
        description: 'Çalışan memnuniyetsizliğinin operasyonel kök nedenleri tespit edilemiyor.',
        impact: 'Yanlış aksiyonlar ve tekrarlayan sorunlar',
      },
    ],
  },
  employee: {
    tag: 'Çalışan Deneyimi',
    title: 'İdari Hizmetler ile İK Arasındaki Köprü',
    subtitle: 'İdari hizmetler yalnızca operasyonel destek değildir; çalışan deneyimi, İK hedefleri ve yönetsel güven mimarisinin parçasıdır.',
    chain: [
      { step: 'Hizmet Sürtünmesi', description: 'Gecikme, kalite farkı, tutarsızlık' },
      { step: 'Günlük Çalışan Deneyimi', description: 'Motivasyon kaybı, şikayet artışı' },
      { step: 'İK Sinyali', description: 'Memnuniyet düşüşü, bağlılık erozyonu' },
      { step: 'Bağlılık & Kurumsal Güven', description: 'Yönetim algısı, kurum kalitesi' },
    ],
    message: 'Her operasyonel aksaklık, çalışan deneyiminde bir kırılma noktası yaratır ve İK metriklerine yansır.',
  },
  workingModel: {
    tag: 'Metodoloji',
    title: 'Çalışma Modeli',
    subtitle: 'Yapılandırılmış, aşamalı ve ölçülebilir bir dönüşüm yaklaşımı.',
    phases: [
      {
        period: '0 — 30 Gün',
        title: 'Diagnostik & Görünürlük',
        description: 'Mevcut durumun derinlemesine analizi ve hızlı kazanımlar.',
        items: [
          'Kritik hizmetlerin haritalanması',
          'Mevcut gap\'lerin tespiti',
          'Hızlı kazanımların belirlenmesi',
          'Yönetsel risk listesi oluşturma',
        ],
      },
      {
        period: '30 — 90 Gün',
        title: 'Standart & Kontrol Tasarımı',
        description: 'Süreçlerin, kuralların ve ölçüm yapılarının oluşturulması.',
        items: [
          'Politika ve prosedür geliştirme',
          'Hizmet katalogu tasarımı',
          'KPI / SLA tanımlama',
          'Skor kart ve denetim checklisti',
          'Karar eşikleri belirleme',
        ],
      },
      {
        period: '90+ Gün',
        title: 'Yerleşim & Yaygınlaştırma',
        description: 'Modelin organizasyona yerleştirilmesi ve sürdürülebilir hale getirilmesi.',
        items: [
          'Lokal adaptasyon',
          'Yönetim ritmi kurulumu',
          'Dashboard ve raporlama',
          'Çalışan deneyimi geri bildirim döngüsü',
        ],
      },
    ],
  },
  insights: {
    tag: 'Bilgi Merkezi',
    title: 'Ücretsiz İçerikler',
    subtitle: 'İdari işler alanında thought leadership ve pratik yaklaşımlar.',
    cta: 'Tüm İçerikleri Gör',
    items: [
      {
        title: 'İdari İşlerde Kör Nokta Atlası',
        description: 'Şirketlerin idari işler fonksiyonunda fark edemediği verimsizlik alanlarını haritalayan kapsamlı çerçeve.',
        slug: 'kor-nokta-atlasi',
      },
      {
        title: 'Çok Lokasyonlu İdari Hizmet Gap Haritası',
        description: 'Farklı lokasyonlardaki hizmet kalitesi farklarını ve uygulama sapmalarını tespit eden analiz modeli.',
        slug: 'gap-haritasi',
      },
      {
        title: 'Tedarikçi Performans Yönetimi için 12 Kontrol Noktası',
        description: 'Hizmet tedarikçilerini yorum bazlı değerlendirmeden veri bazlı performans yönetimine taşıyan sistematik yaklaşım.',
        slug: 'tedarikci-performansi',
      },
      {
        title: 'Çalışan Memnuniyetinden Operasyonel Aksiyona',
        description: 'Memnuniyet verisini operasyonel iyileştirme aksiyonlarına dönüştüren köprü model.',
        slug: 'calisan-deneyimi',
      },
      {
        title: 'Mevcut Sistemlerle Akıllı Modernizasyon',
        description: 'Yeni teknoloji yatırımı öncesinde mevcut sistemlerle nelerin başarılabileceğini gösteren yaklaşım.',
        slug: 'akilli-modernizasyon',
      },
      {
        title: 'İdari İşler ile İK Arasında Hizmet Kalitesi Köprüsü',
        description: 'İdari hizmet kalitesini İK metrikleri ve çalışan bağlılığı ile ilişkilendiren çerçeve.',
        slug: 'ik-hizalama',
      },
    ],
  },
  contact: {
    tag: 'İletişim',
    title: 'Birlikte Çalışalım',
    subtitle: 'İdari işler fonksiyonunuzdaki kör noktaları birlikte keşfedelim.',
    email: 'cagatayerdal@icloud.com',
    phone: '+90 545 278 2747',
    emailLabel: 'E-posta',
    phoneLabel: 'Telefon',
    cta: 'İletişime Geçin',
  },
  footer: {
    brand: 'LEMARS',
    tagline: 'İdari işlerde görünmeyeni görünür kılan işletim sistemleri.',
    rights: '© 2026 LEMARS. Tüm hakları saklıdır.',
    sections: [
      {
        title: 'Hizmetler',
        links: [
          { label: 'Hizmet Standardizasyonu', href: '#services' },
          { label: 'Yönetim ve Kontrol', href: '#services' },
          { label: 'Dijital Yönetim', href: '#services' },
          { label: 'İnsan Deneyimi', href: '#services' },
        ],
      },
      {
        title: 'Kaynaklar',
        links: [
          { label: 'İçerikler', href: '/icerikler' },
          { label: 'Kör Nokta Atlası', href: '/resources/kor-nokta-atlasi' },
          { label: 'Gap Haritası', href: '/resources/gap-haritasi' },
        ],
      },
      {
        title: 'İletişim',
        links: [
          { label: 'cagatayerdal@icloud.com', href: 'mailto:cagatayerdal@icloud.com' },
          { label: '+90 545 278 2747', href: 'tel:+905452782747' },
        ],
      },
    ],
  },
  servicesPage: {
    title: 'Hizmet Kapsamı',
    subtitle: 'Her hizmet alanı, operasyonel mükemmellik ve çalışan deneyimi perspektifinden ele alınır.',
    categories: [
      {
        id: 'transportation',
        title: 'Ulaşım ve Araç Yönetimi',
        description: 'Personel taşımacılığından filo yönetimine, şoförlü araçtan taksi hizmetlerine kadar tüm ulaşım operasyonlarını kapsayan standart ve kontrol sistemi.',
        icon: 'truck',
        services: [
          { name: 'Shuttle / Personel Taşımacılığı', description: 'Güzergah optimizasyonu, kapasite yönetimi, doluluk analizi ve çalışan memnuniyeti entegrasyonu.' },
          { name: 'Filo & Havuz Araç Yönetimi', description: 'Araç tahsis kuralları, kullanım takibi, bakım planlaması ve maliyet kontrolü.' },
          { name: 'Yönetici Aracı', description: 'Tahsis kriterleri, politika standardizasyonu ve bütçe yönetimi.' },
          { name: 'Taksi & Şoförlü Araç', description: 'Kullanım kuralları, onay mekanizmaları ve maliyet analizi.' },
        ],
      },
      {
        id: 'travel',
        title: 'Seyahat ve Konaklama',
        description: 'Seyahat politikası tasarımından konaklama standartlarına, süreç optimizasyonundan maliyet kontrolüne kadar uçtan uca seyahat yönetimi.',
        icon: 'plane',
        services: [
          { name: 'Seyahat Politikası ve Süreç Tasarımı', description: 'Yetki matrisi, onay akışları, sınıf kuralları ve istisna yönetimi.' },
          { name: 'Konaklama Yönetimi', description: 'Otel seçim kriterleri, kontrat yönetimi ve standart belirleme.' },
        ],
      },
      {
        id: 'facility',
        title: 'Tesis ve Çevre Hizmetleri',
        description: 'Temizlik, pest kontrol ve peyzaj hizmetlerinde kalite standardı, tedarikçi yönetimi ve denetim sistemi.',
        icon: 'building',
        services: [
          { name: 'Temizlik Hizmetleri', description: 'Kalite standartları, denetim checklisti, tedarikçi performans yönetimi.' },
          { name: 'Pest Kontrol', description: 'Periyodik kontrol planı, raporlama standardı ve uyum takibi.' },
          { name: 'Peyzaj', description: 'Bakım planlaması, mevsimsel program ve kalite ölçümü.' },
        ],
      },
      {
        id: 'catering',
        title: 'Yemek ve Catering',
        description: 'Yemek hizmetlerinde kalite yönetimi, çalışan memnuniyeti ve maliyet optimizasyonu.',
        icon: 'utensils',
        services: [
          { name: 'Catering Kalite Yönetimi', description: 'Menü standardizasyonu, hijyen denetimi, çalışan geri bildirimi ve tedarikçi performansı.' },
          { name: 'Maliyet ve Porsiyon Kontrolü', description: 'Kişi başı maliyet analizi, israf takibi ve optimizasyon.' },
        ],
      },
      {
        id: 'management',
        title: 'Yönetim ve Kontrol Sistemleri',
        description: 'Süreç tasarımı, politika geliştirme, KPI tanımlama ve tedarikçi performans yönetimini kapsayan yönetim altyapısı.',
        icon: 'settings',
        services: [
          { name: 'Süreç Tasarımı ve Optimizasyonu', description: 'İş akışları, onay mekanizmaları ve rol-sorumluluk matrisi.' },
          { name: 'Politika ve Prosedür Geliştirme', description: 'Kurum geneli geçerli, uygulanabilir ve denetlenebilir dokümanlar.' },
          { name: 'KPI ve SLA Tanımlama', description: 'Ölçülebilir performans göstergeleri ve hizmet seviye anlaşmaları.' },
          { name: 'Tedarikçi Performans Yönetimi', description: 'Veri bazlı değerlendirme, skor kart ve düzeltici aksiyon sistemi.' },
        ],
      },
      {
        id: 'digital',
        title: 'Dijital Dönüşüm ve Veri Yönetimi',
        description: 'Mevcut sistemlerle dijitalleşme, veri görünürlüğü ve karar destek mekanizmaları.',
        icon: 'chart',
        services: [
          { name: 'Dijitalleşme Stratejisi', description: 'SAP, ServiceNow, SharePoint ve Forms ile süreç dijitalleştirme.' },
          { name: 'Dashboard ve Raporlama', description: 'Yönetsel karar desteği için görsel veri platformu tasarımı.' },
          { name: 'İş Gücü ve Zaman Kaybı Analizi', description: 'Manuel efor haritalama ve otomasyon fırsatı tespiti.' },
        ],
      },
    ],
  },
  serviceArticles: serviceArticlesTr,
}

export default tr
