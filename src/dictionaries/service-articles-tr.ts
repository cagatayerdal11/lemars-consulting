import type { ServiceArticle } from '@/lib/types'

export const serviceArticlesTr: ServiceArticle[] = [
  // ============================================================
  // 1. CATERING & HACCP
  // ============================================================
  {
    slug: 'catering-haccp',
    category: 'Yemek & Catering',
    icon: 'utensils',
    title: 'Kurumsal Yemek Hizmetlerinde HACCP ve Gıda Güvenliği Yönetimi',
    subtitle: 'Çalışan yemekhanelerinde gıda güvenliği yalnızca bir mevzuat gerekliliği değildir; çalışan sağlığı, memnuniyeti ve kurumsal itibarın doğrudan belirleyicisidir. HACCP sisteminin etkin uygulanması, görünmeyen riskleri kontrol altına alır.',
    heroStats: [
      { value: '7', label: 'HACCP Prensibi' },
      { value: '%60', label: 'Gıda Kaynaklı Hastalık Riski Azalması' },
      { value: '5996', label: 'Sayılı Kanun (TR Mevzuat)' },
      { value: '852/2004', label: 'AB Gıda Hijyen Tüzüğü' },
    ],
    overview: {
      title: 'HACCP Nedir ve Neden Kritiktir?',
      content: `HACCP (Hazard Analysis and Critical Control Points), gıda üretim ve servis süreçlerinde olası tehlikeleri önceden belirleyip kontrol altına almayı amaçlayan sistematik bir yaklaşımdır. Codex Alimentarius Komisyonu tarafından uluslararası standart olarak kabul edilmiş ve dünya genelinde gıda güvenliğinin temel çerçevesi haline gelmiştir.

Kurumsal yemek hizmetlerinde HACCP, yalnızca mutfak hijyeni demek değildir. Tedarik zincirinden porsiyonlamaya, sıcaklık kontrolünden alerjen yönetimine kadar uçtan uca bir güvenlik mimarisi gerektirir.

Türkiye'de 5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu kapsamında tüm gıda işletmeleri HACCP prensiplerine uygun çalışmak zorundadır. AB'de ise 852/2004 sayılı Gıda Hijyen Tüzüğü benzer gereklilikleri tanımlar.

Kurumsal catering'de kritik sıcaklık eşikleri: sıcak tutma en az 63°C, soğuk muhafaza en fazla 5°C, pişirme iç sıcaklığı en az 75°C (15 saniye), soğutma 63°C'den 5°C'ye 90 dakika içinde. Bu eşiklerin herhangi birinin ihlali, "tehlike bölgesi" (5-63°C) riskini oluşturur ve gıda güvenliğini tehlikeye atar.

DSÖ verilerine göre dünyada yılda 600 milyon kişi kontamine gıdadan hastalanmakta, 420.000 kişi hayatını kaybetmektedir. Kurumsal yemekhanelerdeki tek bir kontaminasyon olayı tüm iş gücünü etkileyebilir; ortalama salgın maliyeti 75.000-100.000 USD'yi aşabilmektedir.`,
    },
    sections: [
      {
        title: 'HACCP\'in 7 Temel Prensibi',
        content: 'Her kurumsal yemek hizmetinin temelinde bu 7 prensip yer almalıdır. Ancak prensiplerin kağıt üzerinde varlığı yetmez; günlük operasyonda yaşayan bir sistem olmalıdır.',
        items: [
          'Tehlike Analizi: Biyolojik, kimyasal ve fiziksel tehlikelerin sistematik tespiti',
          'Kritik Kontrol Noktaları (KKN): Tehlikelerin kontrol edilebileceği süreç adımlarının belirlenmesi',
          'Kritik Limitler: Her KKN için kabul edilebilir üst ve alt sınırların tanımlanması',
          'İzleme Prosedürleri: KKN\'lerin sürekli takibi için ölçüm ve gözlem sistemleri',
          'Düzeltici Faaliyetler: Kritik limit aşımlarında uygulanacak acil müdahale protokolleri',
          'Doğrulama Prosedürleri: Sistemin etkinliğinin periyodik olarak test edilmesi',
          'Kayıt ve Dokümantasyon: Tüm izleme, düzeltme ve doğrulama verilerinin saklanması',
        ],
        highlight: 'Araştırmalar, etkin HACCP uygulamasının gıda kaynaklı hastalık riskini %60\'a kadar azalttığını göstermektedir.',
      },
      {
        title: 'Kurumsal Yemekhanelerde Sık Karşılaşılan HACCP Boşlukları',
        content: `Çoğu şirket, catering tedarikçisinin HACCP sertifikası olduğunu bilir. Ancak sertifikanın varlığı, günlük operasyondaki uyumluluğu garanti etmez. Kurumsal yemekhanelerde en sık karşılaşılan boşluklar şunlardır:

Sıcaklık zincirinin kırılması: Özellikle uzun mesafeli taşımalarda ve servis sürelerinde soğuk zincir veya sıcak tutma sıcaklıklarında sapmalar yaşanır.

Çapraz kontaminasyon: Mutfak düzeni, personel eğitimi ve alerjen yönetimindeki eksiklikler nedeniyle farklı gıda grupları arasında bulaş riski oluşur.

Tedarikçi hammadde kontrolü: Gelen malzemenin kalite ve güvenlik parametrelerine uygunluğu yeterince denetlenmez. Fatura kontrolü ile gıda güvenliği kontrolü birbirine karışır.

Personel hijyeni: Mutfak çalışanlarının el hijyeni, kıyafet değişimi ve sağlık muayene takiplerinde düzenli denetim eksikliği.

Kayıt disiplini: HACCP'in en kritik ayağı olan kayıt tutma, zaman baskısı nedeniyle geriye dönük ve formalitenin ötesine geçemeyen bir alışkanlığa dönüşür.`,
        items: [
          'Sıcaklık kayıt formlarının geriye dönük doldurulması',
          'Alerjen bilgi panolarının güncellenmemesi',
          'Pest kontrol raporlarının takip edilmemesi',
          'Personel sağlık kartlarının süresinin dolması',
          'Temizlik ve dezenfeksiyon planlarının uygulanmaması',
          'Artık gıda ve atık yönetiminin kayıt altına alınmaması',
        ],
      },
      {
        title: 'Gıda Güvenliği ve Çalışan Deneyimi Bağlantısı',
        content: `Yemek kalitesi, çoğu çalışan memnuniyeti anketinde ilk 3 şikayet alanı arasında yer alır. Ancak şirketler genellikle yemek sorunlarını "catering firmasının işi" olarak görür ve operasyonel kontrolü tedarikçiye bırakır.

Gerçekte ise:
- Yemek kalitesindeki düşüş doğrudan çalışan memnuniyetini etkiler
- Gıda güvenliği ihlalleri kurumsal itibar riski oluşturur
- Hijyen standartlarındaki sapmalar yasal sorumluluk doğurur
- Menü çeşitliliği ve beslenme dengesi çalışan verimliliğini etkiler

İdari işler fonksiyonunun görevi, catering tedarikçisinin yerine geçmek değil; tedarikçiyi doğru KPI'larla yönetmek, denetim disiplini kurmak ve çalışan geri bildirimini operasyonel aksiyona dönüştürmektir.`,
        highlight: 'Global araştırmalar, yemek kalitesinden memnun çalışanların %23 daha yüksek iş tatmini bildirdiğini göstermektedir.',
      },
      {
        title: 'Türkiye ve AB Mevzuat Çerçevesi',
        content: `Türkiye'de gıda güvenliği mevzuatı AB ile uyum sürecinde şekillenmiştir. Temel yasal çerçeve:

Türkiye:
- 5996 sayılı Kanun: Gıda işletmelerinin HACCP prensiplerine uygunluğunu zorunlu kılar
- Türk Gıda Kodeksi: Hijyen, etiketleme, katkı maddeleri konularında detaylı düzenlemeler
- Gıda İşletmelerinin Kayıt ve Onay İşlemleri Yönetmeliği
- İl/İlçe Tarım Müdürlükleri denetim yetkileri

Avrupa Birliği:
- 852/2004 sayılı Gıda Hijyen Tüzüğü: Tüm gıda işletmeleri için HACCP zorunluluğu
- 178/2002 sayılı Genel Gıda Yasası: İzlenebilirlik ve hızlı uyarı sistemi
- ISO 22000: Gıda güvenliği yönetim sistemi uluslararası standardı
- BRCGS / IFS / FSSC 22000: Tedarikçi denetim standartları`,
        items: [
          'HACCP planı güncelliği ve revizyonları',
          'Gıda güvenliği ekibi oluşturulması',
          'İç denetim takvimi ve raporlama',
          'Tedarikçi denetim protokolü',
          'Acil durum prosedürleri (gıda geri çağırma)',
          'Eğitim kayıtları ve yetkinlik takibi',
        ],
      },
    ],
    blindSpots: {
      title: 'Kurumsal Catering\'de Görünmeyen Kör Noktalar',
      items: [
        {
          title: 'Sertifika vs. Uygulama Farkı',
          description: 'Tedarikçinin ISO 22000 veya HACCP sertifikası olması, günlük operasyonda standartların uygulandığı anlamına gelmez. Sertifika periyodik denetimle alınır; günlük uyum ise farklı bir kontrol mekanizması gerektirir.',
        },
        {
          title: 'Maliyet Baskısı ile Kalite Erozyonu',
          description: 'Kişi başı yemek maliyeti baskısı altında tedarikçiler kaliteden taviz vermeye başlar. Hammadde kalitesi, porsiyon gramajı ve menü çeşitliliğinde sessiz bir erozyon yaşanır.',
        },
        {
          title: 'Şikayet Verisi ile Aksiyonun Kopukluğu',
          description: 'Çalışan şikayetleri toplanır ancak operasyonel düzeltici aksiyona dönüştürülmez. Şikayet veri tabanı ile catering performans değerlendirmesi birbirinden kopuktur.',
        },
        {
          title: 'Çok Lokasyonlu Yemek Kalitesi Farkı',
          description: 'Aynı tedarikçi farklı lokasyonlarda farklı kalite sunar. Merkez ofis standardı ile saha lokasyonları arasında ciddi uygulama sapmaları oluşur.',
        },
      ],
    },
    framework: {
      title: 'LEMARS Catering Kalite Kontrol Çerçevesi',
      subtitle: 'Yemek hizmetlerinde gıda güvenliği ve kalite yönetimi için yapılandırılmış yaklaşım.',
      steps: [
        { number: '01', title: 'Mevcut Durum Analizi', description: 'HACCP planı, tedarikçi sertifikaları, denetim raporları ve çalışan geri bildirimlerinin kapsamlı değerlendirmesi.' },
        { number: '02', title: 'Risk Haritalama', description: 'Kritik kontrol noktalarındaki boşlukların tespiti, lokasyon bazlı risk değerlendirmesi ve önceliklendirme.' },
        { number: '03', title: 'Kontrol Mekanizması Tasarımı', description: 'Denetim checklisti, sıcaklık izleme protokolü, hammadde kabul kriterleri ve düzeltici aksiyon prosedürleri.' },
        { number: '04', title: 'Tedarikçi Performans Skor Kartı', description: 'Hijyen, kalite, maliyet, memnuniyet ve uyumluluk boyutlarında ölçülebilir performans göstergeleri.' },
        { number: '05', title: 'Sürekli İzleme ve İyileştirme', description: 'Aylık denetim döngüsü, çalışan memnuniyeti takibi ve tedarikçi ile düzeltici aksiyon toplantıları.' },
      ],
    },
    ctaMessage: 'Catering hizmetlerinizde gıda güvenliği ve kalite kontrol sistemini birlikte kuralım.',
  },

  // ============================================================
  // 2. TRANSPORTATION & ROAD REGULATIONS
  // ============================================================
  {
    slug: 'ulasim-mevzuat',
    category: 'Ulaşım & Mevzuat',
    icon: 'truck',
    title: 'Personel Taşımacılığında Karayolu Mevzuatı ve Uyum Yönetimi',
    subtitle: 'Personel servisleri yalnızca bir lojistik hizmet değildir. 4925 sayılı Karayolu Taşıma Kanunu kapsamında ciddi yasal yükümlülükler taşır. Mevzuata uyumsuzluk, hem hukuki hem operasyonel riskler yaratır.',
    heroStats: [
      { value: '4925', label: 'Sayılı Kanun' },
      { value: 'D2', label: 'Yetki Belgesi Zorunluluğu' },
      { value: 'SRC', label: 'Sürücü Yetkinlik Belgesi' },
      { value: '%35', label: 'Mevzuata Uyumsuzluk Oranı' },
    ],
    overview: {
      title: 'Kurumsal Personel Taşımacılığında Yasal Çerçeve',
      content: `Türkiye'de personel/servis taşımacılığı, 4925 sayılı Karayolu Taşıma Kanunu ve ilgili yönetmelikler kapsamında düzenlenmektedir. Bu kanun, taşımacılık faaliyetlerinin güvenli, düzenli ve ekonomik olarak yürütülmesini amaçlar.

Kurumsal şirketlerin personel servis hizmetlerinde dikkat etmesi gereken temel mevzuat gereklilikleri şunlardır:

1. D2 Yetki Belgesi: Taşımacılık firmasının Ulaştırma Bakanlığı'ndan almak zorunda olduğu yetki belgesi
2. SRC Belgesi: Sürücülerin sahip olması gereken mesleki yeterlilik belgesi
3. Psikoteknik Değerlendirme: Sürücülerin periyodik psikolojik ve psikomotor testleri
4. Araç Yaş Limitleri: Servis araçlarının belirli yaş sınırını aşmaması gerekliliği
5. Sigorta Zorunlulukları: Karayolu yolcu taşıma zorunlu mali sorumluluk sigortası
6. Fenni Muayene: Araçların periyodik teknik muayene gereklilikleri`,
    },
    sections: [
      {
        title: 'D2 Yetki Belgesi ve Tedarikçi Denetimi',
        content: `D2 yetki belgesi, şehir içi düzensiz yolcu taşımacılığı için zorunludur. Personel servis hizmetleri bu kategori altında değerlendirilir.

Şirketlerin kontrol etmesi gerekenler:
- Tedarikçinin D2 yetki belgesinin geçerliliği ve kapsamı
- Belge üzerindeki araç sayısının fiili araç sayısıyla uyumu
- Alt yüklenici kullanımında D2 belge kontrolü
- Yetki belgesi iptal veya askıya alma durumlarının takibi

Birçok şirket, tedarikçi seçim aşamasında D2 belge kontrolü yapar ancak sözleşme süresince periyodik doğrulama yapmaz. Bu, ciddi bir uyumsuzluk riski oluşturur.`,
        items: [
          'D2 yetki belgesi periyodik doğrulama takvimi',
          'Alt yüklenici belge kontrolü prosedürü',
          'Araç plaka ve belge eşleşme kontrolü',
          'UBAK ve U-ETDS sistem kayıt kontrolü',
        ],
        highlight: 'Yetki belgesi olmadan yapılan taşımacılık faaliyetleri 50.000 TL\'den başlayan idari para cezası ve araç trafikten men yaptırımı ile sonuçlanabilir.',
      },
      {
        title: 'Sürücü Yetkinlik ve Güvenlik Gereklilikleri',
        content: `Personel servis sürücülerinin sahip olması gereken yasal yetkinlikler kapsamlıdır:

SRC Belgesi: Mesleki yeterlilik belgesi, sürücünün temel ve periyodik eğitim aldığını belgeler. SRC-2 belgesi yolcu taşımacılığı için geçerlidir.

Psikoteknik Değerlendirme: Sürücülerin algı, dikkat, reaksiyon ve karar verme becerilerinin periyodik olarak test edilmesi. Beş yılda bir yenilenmesi zorunludur.

Sağlık Raporu: Sürücü sağlık muayenesi, göz testi ve genel sağlık durumu değerlendirmesi.

Adli Sicil Kaydı: Sürücülerin belirli suçlardan sabıkasının olmaması gerekliliği.

Alkol ve Uyuşturucu Kontrolü: Sürücülerin alkol ve uyuşturucu testlerine tabi tutulması.

Sürüş Süresi Limitleri: Günlük azami sürüş süresi 9 saat (haftada iki kez 10 saate uzatılabilir). 4,5 saat kesintisiz sürüş sonrası 45 dakika mola zorunluluğu. Haftalık azami sürüş süresi 56 saat, iki haftalık toplam 90 saat. AB 561/2006 sayılı Tüzük ile uyumlu.

Ehliyet Gereksinimleri: 8+1 koltuk kapasitesinin üzerindeki araçlar için E sınıfı ehliyet zorunludur.

Bu kontrollerin tamamının tedarikçi tarafından yerine getirilip getirilmediği, şirketin denetim sorumluluğundadır. Tedarikçiye güvenmek yetmez; doğrulama mekanizması şarttır.`,
        items: [
          'SRC-2 belgesi geçerlilik kontrolü',
          'Psikoteknik test periyodik takibi',
          'Sürücü sağlık raporu güncelleme takvimi',
          'Alkol/uyuşturucu test politikası',
          'Sürücü adli sicil kaydı kontrolü',
          'Sürücü eğitim kayıtları takibi',
        ],
      },
      {
        title: 'Araç Güvenliği ve Teknik Uyumluluk',
        content: `Personel servis araçları için teknik gereklilikler:

Araç Yaş Limiti: Belediye düzenlemelerine göre servis araçlarının yaş sınırı genellikle 10-15 yıl arasında değişir. İstanbul Büyükşehir Belediyesi Servis Araçları Yönetmeliği özel gereklilikler içerir.

Fenni Muayene: Yılda bir (ticari araçlar için) veya altı ayda bir (yaşlı araçlar) teknik muayene zorunluluğu.

Sigorta: Karayolu yolcu taşıma zorunlu mali sorumluluk sigortası, ferdi kaza sigortası ve kasko.

Araç İçi Donanım: Emniyet kemeri, yangın söndürücü, ilk yardım çantası, takograf (şehirlerarası taşımalarda) ve çalışma saati kayıt sistemi.

GPS ve Takip Sistemi: Araç takip sistemi zorunluluğu ve veri saklama gereklilikleri.`,
        items: [
          'Araç yaş limiti uyumluluk kontrolü',
          'Fenni muayene takvimi ve hatırlatma sistemi',
          'Sigorta poliçesi kapsam ve geçerlilik kontrolü',
          'Araç içi güvenlik donanım denetim checklisti',
          'GPS takip sistemi veri kontrolü',
          'Lastik, fren ve genel bakım kayıtları',
        ],
        highlight: 'Araç kaynaklı iş kazalarında işveren, hizmet tedarikçisine taşıma sözleşmesi yapmış olsa bile, İş Kanunu ve İSG mevzuatı kapsamında sorumluluk taşıyabilir.',
      },
      {
        title: 'Servis Hizmeti ve Çalışan Deneyimi',
        content: `Personel servisi, birçok çalışanın gün içinde en çok vakit geçirdiği kurumsal hizmet noktalarından biridir. Servis deneyimi, çalışan memnuniyetini ve yönetime olan güveni doğrudan etkiler.

Servis kaynaklı çalışan deneyimi sorunları:
- Gecikmeler ve düzensiz seferler
- Aşırı kalabalık ve konfor eksikliği
- Güzergah verimsizliği ve uzun yolculuk süreleri
- Sürücü davranışı ve güvenli sürüş
- Klima, temizlik ve araç bakımı
- Durak noktalarının uygunsuzluğu

Bu sorunların her biri İK anketlerinde doğrudan yansır. Ancak çoğu şirket servis sorunlarını "ulaşım departmanının sorunu" olarak değerlendirir ve İK verileriyle ilişkilendirmez.`,
      },
    ],
    blindSpots: {
      title: 'Personel Taşımacılığında Görünmeyen Riskler',
      items: [
        {
          title: 'Alt Yüklenici Zinciri',
          description: 'Ana tedarikçi uyumlu olsa bile, alt yüklenici araçlar ve sürücüler aynı standartlarda olmayabilir. Alt yüklenici zincirine denetim uzanmıyor.',
        },
        {
          title: 'Mevzuat Değişikliği Takibi',
          description: 'Belediye servis yönetmelikleri ve merkezi mevzuat sık değişir. Güncel mevzuata uyumun periyodik kontrolü yapılmıyor.',
        },
        {
          title: 'Kaza Sonrası Hukuki Sorumluluk',
          description: 'Servis kazalarında işverenin hukuki sorumluluğu, çoğu şirketin farkında olduğundan daha geniştir. "Biz taşeron kullanıyoruz" savunması her zaman geçerli değildir.',
        },
        {
          title: 'Güzergah Optimizasyonu Eksikliği',
          description: 'Güzergahlar başlangıçta belirlenir ancak yıllar içinde çalışan sayısı ve adresleri değişir. Periyodik güzergah optimizasyonu yapılmadığında hem maliyet hem zaman kaybı artar.',
        },
      ],
    },
    framework: {
      title: 'LEMARS Ulaşım Uyumluluk Çerçevesi',
      subtitle: 'Personel taşımacılığında mevzuat uyumu ve operasyonel kalite için yapılandırılmış yaklaşım.',
      steps: [
        { number: '01', title: 'Mevzuat Tarama ve Gap Analizi', description: 'Mevcut operasyonun 4925 sayılı Kanun, belediye yönetmelikleri ve İSG mevzuatına uyumluluğunun tespiti.' },
        { number: '02', title: 'Tedarikçi Uyumluluk Denetimi', description: 'D2 belgesi, sürücü yetkinlikleri, araç teknik durumu ve sigorta kapsamlarının detaylı kontrolü.' },
        { number: '03', title: 'Kontrol Mekanizması Kurulumu', description: 'Periyodik denetim takvimi, belge yenileme hatırlatma sistemi ve uyumsuzluk eskalasyon prosedürü.' },
        { number: '04', title: 'Güzergah ve Kapasite Optimizasyonu', description: 'Çalışan adresi, vardiya saati ve araç kapasitesi verilerine dayalı güzergah yeniden tasarımı.' },
        { number: '05', title: 'Çalışan Deneyimi Entegrasyonu', description: 'Servis memnuniyeti ölçümü, geri bildirim mekanizması ve İK verileriyle ilişkilendirme.' },
      ],
    },
    ctaMessage: 'Personel taşımacılığınızda mevzuat uyumu ve çalışan deneyimi kalitesini birlikte yükseltelim.',
  },

  // ============================================================
  // 3. TRAVEL & AGENCY MANAGEMENT
  // ============================================================
  {
    slug: 'seyahat-yonetimi',
    category: 'Seyahat & Konaklama',
    icon: 'plane',
    title: 'Kurumsal Seyahat Yönetimi ve Acente Governance Modeli',
    subtitle: 'Kurumsal seyahat, şirketlerin en büyük kontrol edilebilir gider kalemlerinden biridir. Ancak çoğu şirket, seyahat harcamalarının %15-25\'inin görünmeyen verimsizliklerden kaynaklandığının farkında değildir.',
    heroStats: [
      { value: '$1.5T', label: 'Global İş Seyahati Pazarı (2025)' },
      { value: '%15-25', label: 'Görünmeyen Maliyet Oranı' },
      { value: '%40', label: 'Politika İhlali Oranı (Ort.)' },
      { value: '3x', label: 'Doğru TMC Yönetimi ile Tasarruf' },
    ],
    overview: {
      title: 'Seyahat Yönetiminde Stratejik Yaklaşım',
      content: `Global iş seyahati pazarı 2025 yılında 1.5 trilyon dolara ulaşmıştır. Bu devasa harcama kaleminde, şirketlerin büyük çoğunluğu seyahat yönetimini "bilet ve otel rezervasyonu" olarak görür. Oysa profesyonel seyahat yönetimi; politika tasarımı, acente governance, maliyet kontrolü, duty of care (bakım yükümlülüğü) ve çalışan deneyimini kapsayan bütünsel bir disiplindir.

Türkiye'de çoğu şirket seyahat acentesi ile çalışır ancak acente performansını sistematik olarak ölçmez. Komisyon oranı görüşmesi yapılır, ancak gerçek tasarruf fırsatları (advance booking, en düşük fiyat politikası, kullanılmayan bilet yönetimi, otel kontrat optimizasyonu) değerlendirilmez.

Bu alan, idari işler fonksiyonunun en fazla değer üretebileceği ancak en az yapılandırılmış bırakılan alanlardan biridir.`,
    },
    sections: [
      {
        title: 'Seyahat Politikası Tasarımı ve Uyum Yönetimi',
        content: `Etkin bir seyahat politikası yalnızca "business class yasağı" veya "otel fiyat limiti" listesi değildir. Kapsamlı bir seyahat politikası şu bileşenleri içermelidir:

Seyahat Sınıfları ve Haklar: Pozisyon bazlı uçuş sınıfı, otel kategorisi ve günlük harcırah kuralları. Uçuş süresine göre business class eşik değeri (örn: 4 saat üstü).

Advance Booking Kuralları: Önceden rezervasyon teşvikleri. Araştırmalar, 14 gün önceden yapılan uçuş rezervasyonlarının ortalama %20-35 daha ucuz olduğunu göstermektedir.

İstisna Yönetimi: Politika dışı taleplerin onay akışı, yetki matrisi ve eskalasyon prosedürü. İstisnaların ölçülmesi ve raporlanması.

Preferred Supplier Programı: Kontrat yapılmış oteller ve havayolları ile hacim bazlı indirim anlaşmaları.`,
        items: [
          'Pozisyon bazlı yetki ve hak matrisi',
          'Advance booking teşvik ve kontrol mekanizması',
          'Politika ihlali izleme ve raporlama',
          'İstisna onay akışı ve yetki eşikleri',
          'Preferred supplier kontrat yönetimi',
          'Online booking tool (OBT) kullanım zorunluluğu',
        ],
        highlight: 'İyi yönetilen seyahat programları, yönetilmeyenlere kıyasla %15-30 arasında maliyet tasarrufu sağlayabilir.',
      },
      {
        title: 'TMC (Seyahat Acentesi) Governance Modeli',
        content: `Seyahat acentesi (TMC) yönetimi, çoğu şirketin en zayıf olduğu alandır. Acente seçimi yapılır, komisyon oranı belirlenir ve sonrasında ilişki "sipariş ver - fatura al" döngüsüne dönüşür.

Profesyonel TMC governance şu unsurları içerir:

Performans KPI'ları:
- Ortalama bilet maliyeti (rota bazlı)
- Online booking oranı
- Advance booking oranı
- Politika uyum oranı
- Kullanılmayan bilet oranı ve recovery süresi
- İlk arama çözüm oranı
- Rezervasyon hata oranı

Periyodik İş Gözden Geçirme (QBR):
- Üçer aylık performans değerlendirme toplantıları
- Maliyet trend analizi
- Tasarruf fırsat raporları
- Hizmet kalitesi değerlendirmesi`,
        items: [
          'TMC performans skor kartı tasarımı',
          'Aylık/çeyreklik iş gözden geçirme toplantıları',
          'Maliyet benchmark ve trend analizi',
          'Kullanılmayan bilet yönetimi prosedürü',
          'Otel RFP ve kontrat yönetimi',
          'Duty of care uyumluluk takibi',
        ],
      },
      {
        title: 'Görünmeyen Seyahat Maliyetleri',
        content: `Seyahat bütçesinin görünen kısmı (bilet + otel + harcırah) toplam maliyetin sadece bir bölümünü oluşturur. Görünmeyen maliyetler şunlardır:

Kullanılmayan Biletler: İptal edilen seyahatlerde biletlerin iade edilmemesi veya geç iade edilmesi nedeniyle kaybedilen tutar. Ortalama şirketlerde bu oran toplam bilet harcamasının %3-8'ine ulaşabilir.

Yanlış Kanal Kullanımı: Çalışanların online booking tool yerine doğrudan acente araması veya kişisel kanallardan rezervasyon yapması. Bu durum hem maliyet kontrolünü hem veri görünürlüğünü zayıflatır.

Son Dakika Rezervasyonları: Plansız seyahatler nedeniyle yüksek fiyatlı bilet ve otel rezervasyonları.

Politika İhlalleri: Yetkilendirilenden yüksek sınıf uçuş veya otel kullanımı. Global araştırmalar, şirketlerin ortalama %40'ının seyahat politikası ihlali yaşadığını göstermektedir.

Kanal Sızıntısı (Off-Channel Leakage): Çalışanların TMC yerine doğrudan tüketici sitelerinden rezervasyon yapması. Sektör ortalaması %20-40 oranında sızıntı. Bu kanaldan yapılan rezervasyonlar, yönetilen kanaldan %15-30 daha pahalıdır.

KDV / Vergi İadesi Kayıpları: Uluslararası seyahatlerde önemli miktarda iade alınabilir KDV oluşur (bazı AB ülkelerinde %25'e kadar). Sistematik program olmadan iade oranı %0-20; profesyonel programla %60-85.

Duty of Care Eksikliği: Seyahat eden çalışanların konumlarının ve risklerinin takip edilmemesi. ISO 31030:2021 seyahat risk yönetimi standardı, işverenlerin sorumluluklarını net tanımlar. Kriz durumlarında (doğal afet, salgın, politik istikrarsızlık) çalışanlara ulaşılamaması ciddi yasal sorumluluk doğurur.`,
        highlight: 'Kullanılmayan biletlerin sistematik takibi ve recovery prosedürü, tek başına yıllık seyahat bütçesinden %3-5 tasarruf sağlayabilir.',
      },
    ],
    blindSpots: {
      title: 'Seyahat Yönetiminde Görünmeyen Kayıplar',
      items: [
        {
          title: 'Acente Bağımlılığı',
          description: 'Tek acenteye bağımlılık, fiyat karşılaştırma ve performans kıyaslama imkanını ortadan kaldırır. Acente değişikliği korkusu, verimsiz ilişkilerin sürmesine neden olur.',
        },
        {
          title: 'Veri Sahipliği Sorunu',
          description: 'Seyahat verilerinin acentede kalması, şirketin kendi harcama analizini yapamamasına neden olur. Veri sahipliği sözleşmede netleştirilmezse, acente değişikliğinde geçmiş veriler kaybedilir.',
        },
        {
          title: 'Traveller Profile Yönetimi',
          description: 'Çalışan seyahat profillerinin güncel tutulmaması, sadakat programı puanlarının kaybedilmesi ve kişisel tercihlerin yönetilememesi.',
        },
        {
          title: 'Approval Workflow Boşlukları',
          description: 'Seyahat onay süreçlerinin yavaşlığı veya tutarsızlığı, çalışanları politika dışı kanallara yönlendirir. Onay mekanizması caydırıcı değil, kolaylaştırıcı olmalıdır.',
        },
      ],
    },
    framework: {
      title: 'LEMARS Seyahat Yönetimi Çerçevesi',
      subtitle: 'Kurumsal seyahatte maliyet kontrolü, politika uyumu ve çalışan deneyimi için bütünsel yaklaşım.',
      steps: [
        { number: '01', title: 'Seyahat Harcama Analizi', description: 'Son 12 aylık seyahat verisinin rota, sınıf, acente, advance booking ve politika uyumu boyutlarında analizi.' },
        { number: '02', title: 'Politika Revizyonu', description: 'Mevcut seyahat politikasının benchmark\'a göre güncellenmesi, istisna yönetimi ve onay akışı tasarımı.' },
        { number: '03', title: 'TMC Governance Kurulumu', description: 'Acente performans KPI\'ları, QBR takvimi, maliyet raporlama standardı ve SLA tanımlama.' },
        { number: '04', title: 'Kayıp Tespiti ve Recovery', description: 'Kullanılmayan biletler, yanlış kanal kullanımı ve politika ihlallerinin ölçülmesi ve düzeltici aksiyonlar.' },
        { number: '05', title: 'Sürekli İyileştirme Döngüsü', description: 'Aylık maliyet takibi, çeyreklik performans değerlendirmesi ve yıllık program gözden geçirmesi.' },
      ],
    },
    ctaMessage: 'Seyahat yönetim programınızı birlikte optimize edelim ve görünmeyen maliyetleri ortaya çıkaralım.',
  },

  // ============================================================
  // 4. FACILITY MANAGEMENT
  // ============================================================
  {
    slug: 'tesis-yonetimi',
    category: 'Tesis Yönetimi',
    icon: 'building',
    title: 'Çok Lokasyonlu Tesis Yönetiminde Operasyonel Mükemmellik',
    subtitle: 'Tesis yönetimi, çalışan deneyiminin fiziksel altyapısıdır. Çalışma ortamının kalitesi, verimliliği, sağlığı ve memnuniyeti doğrudan etkiler. Çok lokasyonlu yapılarda bu etki katlanır.',
    heroStats: [
      { value: '$1.3T', label: 'Global FM Pazar Büyüklüğü' },
      { value: '%7.8', label: 'Yıllık Büyüme Oranı (CAGR)' },
      { value: '%30', label: 'Verimlilik Farkı (İyi vs. Kötü FM)' },
      { value: 'ISO 41001', label: 'FM Yönetim Sistemi Standardı' },
    ],
    overview: {
      title: 'Modern Tesis Yönetimi Yaklaşımı',
      content: `Global tesis yönetimi pazarı 2025 yılında 1.3 trilyon dolara ulaşmış olup, yıllık %7-8 oranında büyümektedir. Bu büyümenin arkasında, şirketlerin tesis yönetimini maliyet merkezi olmaktan çıkarıp stratejik bir değer alanı olarak görmeye başlaması yatmaktadır.

IFMA (International Facility Management Association) ve RICS (Royal Institution of Chartered Surveyors) araştırmaları, iyi yönetilen tesislerin çalışan verimliliğini %30'a kadar artırabileceğini göstermektedir.

ISO 41001:2018 Tesis Yönetimi Standartı, FM süreçlerinin sistematik yönetimi için uluslararası çerçeveyi tanımlar. Bu standart, Türkiye'de de giderek daha fazla benimsenmektedir.

Çok lokasyonlu şirketler için tesis yönetiminin en büyük zorluğu, merkez ile saha arasındaki kalite farkını kapatmak ve tutarlı bir deneyim sunmaktır.`,
    },
    sections: [
      {
        title: 'Çok Lokasyonlu FM\'in Temel Zorlukları',
        content: `Tek lokasyonlu bir şirkette tesis yönetimi göreceli olarak basittir; yönetici tesisin durumunu gözlemleyebilir, sorunları hızla tespit edebilir. Çok lokasyonlu yapılarda ise durum tamamen farklıdır:

Standardizasyon Zorluğu: Her lokasyonda farklı tedarikçiler, farklı hizmet kaliteleri ve farklı beklentiler. Merkez ofiste kabul edilemez olan bir durum, saha lokasyonunda "normal" sayılabilir.

Uzaktan Denetim: Merkezden tüm lokasyonları eşit kalitede denetlemek fiziksel olarak mümkün değildir. Bu durumda sistematik denetim araçları devreye girmelidir.

Yerel Uyumluluk: Her lokasyonun farklı belediye düzenlemeleri, çevre kuralları ve bina yönetmelikleri olabilir.

Tedarikçi Yönetimi Karmaşıklığı: Ulusal tedarikçi mi, yerel tedarikçiler mi sorusu stratejik bir karardır. Her iki modelin avantaj ve dezavantajları farklıdır.`,
        items: [
          'Lokasyon bazlı hizmet kalitesi standart tanımlama',
          'Uzaktan denetim ve kontrol mekanizması',
          'Yerel mevzuat uyumluluk takibi',
          'Merkez-saha iletişim ve eskalasyon prosedürü',
          'Tedarikçi model seçimi (ulusal vs. yerel)',
          'Lokasyonlar arası benchmark ve kıyaslama',
        ],
      },
      {
        title: 'FM\'de Sürdürülebilirlik ve ESG Entegrasyonu',
        content: `Tesis yönetimi, şirketlerin ESG (Environmental, Social, Governance) hedeflerinin en somut uygulama alanıdır:

Enerji Yönetimi: Bina enerji tüketiminin izlenmesi, LED dönüşümü, HVAC optimizasyonu ve yenilenebilir enerji entegrasyonu. Enerji maliyetleri tesis bütçesinin %30-40'ını oluşturabilir.

Atık Yönetimi: Geri dönüşüm oranlarının takibi, sıfır atık hedefleri ve atık tedarikçi yönetimi.

Su Yönetimi: Su tüketimi izleme, gri su geri dönüşümü ve su verimliliği projeleri.

Karbon Ayak İzi: Scope 1 ve Scope 2 emisyonlarının tesis bazında hesaplanması ve raporlanması.

Yeşil Bina Sertifikaları: LEED, BREEAM veya yerel yeşil bina standartlarına uyum.

Bu alanlar, idari işler fonksiyonunun şirketin sürdürülebilirlik hedeflerine doğrudan katkı sağlayabileceği stratejik alanlardır.`,
        items: [
          'Enerji tüketimi izleme ve raporlama',
          'Atık yönetimi ve geri dönüşüm takibi',
          'Su tüketimi analizi ve optimizasyonu',
          'Karbon emisyonu hesaplama ve raporlama',
          'Yeşil bina sertifikası uyumluluk değerlendirmesi',
          'ESG raporlama için FM veri toplama',
        ],
        highlight: 'Etkin enerji yönetimi programları, tesis enerji maliyetlerini %15-25 oranında azaltabilmektedir.',
      },
      {
        title: 'Çalışma Ortamı ve Çalışan Deneyimi',
        content: `Tesis yönetiminin en az değerlendirilen boyutu, çalışma ortamının çalışan deneyimine etkisidir. Araştırmalar şunu göstermektedir:

- Ofis sıcaklığı, havalandırma ve aydınlatma kalitesi doğrudan verimliliği etkiler
- Temizlik ve hijyen standartları çalışan sağlığını ve devamsızlık oranlarını etkiler
- Ortak alanların kalitesi (kafeterya, toplantı odaları, dinlenme alanları) çalışan memnuniyetinin önemli bir bileşenidir
- Güvenlik ve erişim yönetimi çalışan güven duygusunu etkiler

Bu bağlantı, tesis yönetimini İK hedefleriyle doğrudan ilişkilendirir. FM ekibinin yalnızca "binaları çalışır tutmak" değil, "çalışanlar için en iyi ortamı yaratmak" misyonuyla hareket etmesi gerekir.`,
      },
    ],
    blindSpots: {
      title: 'Tesis Yönetiminde Görünmeyen Kayıplar',
      items: [
        {
          title: 'Reaktif vs. Proaktif Bakım',
          description: 'Çoğu FM operasyonu "bozulunca tamir et" modunda çalışır. Planlı bakım oranının düşüklüğü, acil müdahale maliyetlerini 3-5 kat artırır ve çalışan deneyimini bozar.',
        },
        {
          title: 'Alan Kullanım Verimsizliği',
          description: 'Hibrit çalışma döneminde ofis doluluk oranları %40-60 arasında seyreder. Alan optimizasyonu yapılmadan tüm alanlar için eşit seviyede hizmet sunulmaya devam edilir.',
        },
        {
          title: 'FM Veri Görünürlüğü Eksikliği',
          description: 'İş emri süreleri, tedarikçi yanıt süreleri, bakım maliyeti trendleri ve çalışan şikayetleri arasında veri bağlantısı kurulmuyor.',
        },
        {
          title: 'Mevzuat Uyumluluk Riski',
          description: 'Yangın güvenliği, asansör muayenesi, elektrik tesisatı kontrolü ve çevre izinleri gibi yasal gerekliliklerin periyodik takibinde boşluklar.',
        },
      ],
    },
    framework: {
      title: 'LEMARS Tesis Yönetimi Çerçevesi',
      subtitle: 'Çok lokasyonlu yapılarda tesis yönetimi kalitesini yükseltmek için yapılandırılmış yaklaşım.',
      steps: [
        { number: '01', title: 'Tesis Durum Değerlendirmesi', description: 'Tüm lokasyonlarda fiziksel durum, hizmet kalitesi, mevzuat uyumu ve çalışan memnuniyeti analizi.' },
        { number: '02', title: 'Hizmet Katalogu ve SLA', description: 'Tesis hizmetlerinin standardize edilmesi, hizmet seviye anlaşmaları ve performans göstergeleri tanımlama.' },
        { number: '03', title: 'Planlı Bakım Sistemi', description: 'Reaktif bakımdan proaktif bakıma geçiş, periyodik bakım takvimi ve iş emri yönetimi.' },
        { number: '04', title: 'Tedarikçi Performans Yönetimi', description: 'FM tedarikçileri için skor kartı, periyodik denetim ve düzeltici aksiyon mekanizması.' },
        { number: '05', title: 'ESG ve Deneyim Entegrasyonu', description: 'Sürdürülebilirlik metrikleri, çalışan deneyimi geri bildirimi ve sürekli iyileştirme döngüsü.' },
      ],
    },
    ctaMessage: 'Tesis yönetim kalitenizi çok lokasyonlu yapıda standartlaştırmak ve çalışan deneyimini yükseltmek için birlikte çalışalım.',
  },

  // ============================================================
  // 5. VENDOR GOVERNANCE
  // ============================================================
  {
    slug: 'tedarikci-yonetimi',
    category: 'Tedarikçi Yönetimi',
    icon: 'shield',
    title: 'İdari Hizmetlerde Tedarikçi Performans Yönetimi ve Governance',
    subtitle: 'Tedarikçi yönetimi, idari işlerin en kritik ve en az yapılandırılmış alanıdır. Yorum bazlı değerlendirmeden veri bazlı performans yönetimine geçiş, hizmet kalitesini ve maliyet kontrolünü kökten değiştirir.',
    heroStats: [
      { value: '%70', label: 'İdari Hizmet Dış Kaynak Oranı' },
      { value: '12', label: 'Temel Kontrol Noktası' },
      { value: '%25', label: 'Maliyet Tasarruf Potansiyeli' },
      { value: '360°', label: 'Performans Değerlendirme' },
    ],
    overview: {
      title: 'Tedarikçi Yönetiminde Paradigma Değişimi',
      content: `İdari işler fonksiyonunda hizmetlerin %60-80'i dış kaynaklı tedarikçiler tarafından sağlanır. Temizlik, güvenlik, catering, ulaşım, peyzaj, pest kontrol — tüm bu hizmetlerin kalitesi, tedarikçi performansıyla doğrudan ilişkilidir.

Ancak çoğu şirkette tedarikçi yönetimi şu döngüde sıkışır:
1. İhale yapılır, en uygun fiyat teklifi seçilir
2. Sözleşme imzalanır
3. Sorun çıktığında şikayet edilir
4. Ciddi sorunlarda yeni ihale sürecine girilir

Bu döngüde eksik olan: sistematik performans ölçümü, proaktif denetim, veri bazlı değerlendirme ve sürekli iyileştirme mekanizması. Tedarikçiyle ilişki, "kontrol et ve yönet" değil "al ve unut" modunda sürer.`,
    },
    sections: [
      {
        title: 'Tedarikçi Performans Skor Kartı Tasarımı',
        content: `Etkin bir tedarikçi skor kartı, subjektif değerlendirmeleri nesnel ölçümlere dönüştürür. LEMARS yaklaşımında skor kartı 5 boyutta değerlendirilir:

Kalite Boyutu (%30): Hizmet kalitesi standartlarına uyum, denetim sonuçları, kalite sapma oranı.

Uyumluluk Boyutu (%20): Yasal gereklilikler, sözleşme şartları, SLA uyumu, raporlama zamanlaması.

Maliyet Boyutu (%20): Bütçe uyumu, maliyet trend analizi, fiyat/performans oranı, ek maliyet kontrolü.

İnsan Boyutu (%15): Personel devir oranı, eğitim kayıtları, saha personeli kalitesi, iletişim ve yanıt süresi.

İnovasyon Boyutu (%15): İyileştirme önerileri, teknoloji kullanımı, proaktif sorun çözümü, sürdürülebilirlik katkısı.`,
        items: [
          'Kalite: Denetim skoru, sapma oranı, müşteri memnuniyeti',
          'Uyumluluk: SLA karşılama, raporlama zamanlaması, yasal uyum',
          'Maliyet: Bütçe sapması, birim maliyet trendi, ek maliyet',
          'İnsan: Personel devir, eğitim, yanıt süresi, iletişim kalitesi',
          'İnovasyon: İyileştirme önerisi, teknoloji, sürdürülebilirlik',
        ],
        highlight: 'Veri bazlı tedarikçi yönetimine geçen şirketler, hizmet kalitesinde %20-30 iyileşme ve maliyetlerde %10-15 düşüş raporlamaktadır.',
      },
      {
        title: 'Denetim ve Kontrol Mekanizması',
        content: `Denetim, cezalandırma aracı değil; iyileştirme aracıdır. Etkin bir denetim sistemi şu bileşenleri içermelidir:

Planlı Denetimler: Önceden takvime alınmış, standardize checkliste dayalı periyodik denetimler. Lokasyon bazlı frekans belirlenmelidir.

Habersiz Denetimler: Planlı denetimlere ek olarak, gerçek performansı ölçen habersiz saha ziyaretleri.

Self-Assessment: Tedarikçinin kendi öz değerlendirmesini yapması ve raporlaması. Bu, tedarikçinin kalite sahipliği almasını sağlar.

Düzeltici Aksiyon Yönetimi: Denetimde tespit edilen uygunsuzluklar için yapılandırılmış düzeltici aksiyon süreci. Her bulgu için sorumlu, termin ve doğrulama tanımlanmalıdır.

Eskalasyon Mekanizması: Tekrarlayan uygunsuzluklar veya kritik bulgular için yönetsel eskalasyon ve yaptırım prosedürü.`,
        items: [
          'Denetim checklisti standardizasyonu',
          'Planlı ve habersiz denetim takvimi',
          'Düzeltici aksiyon takip sistemi',
          'Eskalasyon matrisi ve yaptırım prosedürü',
          'Denetim bulguları trend analizi',
          'Tedarikçi self-assessment prosedürü',
        ],
      },
      {
        title: 'SLA Tasarımı ve Yönetimi',
        content: `SLA (Service Level Agreement), tedarikçi ilişkisinin omurgasıdır. Ancak çoğu SLA genel ifadelerle yazılır ve ölçülebilir değildir.

İyi bir SLA şu özellikleri taşımalıdır:

Ölçülebilirlik: Her madde için sayısal hedef ve ölçüm yöntemi tanımlı olmalıdır. "İyi hizmet" yerine "şikayet oranı <%2" gibi somut hedefler.

Gerçekçilik: Hedeflerin ulaşılabilir olması. Gerçekçi olmayan SLA'lar, ölçüm motivasyonunu yok eder.

İzlenebilirlik: SLA performansının düzenli olarak ölçülüp raporlanması. Ölçülmeyen SLA yoktur.

Yaptırım ve Teşvik: SLA ihlallerinde uygulanan yaptırımlar ve hedef aşımında tedarikçi teşvikleri. Yalnızca ceza değil, ödül de olmalıdır.`,
      },
    ],
    blindSpots: {
      title: 'Tedarikçi Yönetiminde Kör Noktalar',
      items: [
        {
          title: 'Fiyat Odaklı Seçim Tuzağı',
          description: 'İhale sürecinde en düşük fiyat teklifi seçilir, ancak düşük fiyatın hizmet kalitesi, personel kalitesi ve uyumluluk risklerine etkisi değerlendirilmez.',
        },
        {
          title: 'Kontrat Sonrası İlgi Kaybı',
          description: 'İhale süreci yoğun geçer, kontrat imzalanır, sonrasında performans takibine ayrılan kaynak ve zaman dramatik biçimde düşer.',
        },
        {
          title: 'Tek Tedarikçi Riski',
          description: 'Kritik hizmetlerde tek tedarikçiye bağımlılık, pazarlık gücünü ve alternatif planı ortadan kaldırır. Tedarikçi performansı düşse bile değişiklik maliyeti caydırıcıdır.',
        },
        {
          title: 'Alt Yüklenici Görünmezliği',
          description: 'Ana tedarikçi kontrol altında tutulurken, alt yüklenicilerin kalite ve uyumluluğu gözetim dışında kalır.',
        },
      ],
    },
    framework: {
      title: 'LEMARS Tedarikçi Governance Çerçevesi',
      subtitle: 'İdari hizmetlerde tedarikçi performansını yönetmek için sistematik yaklaşım.',
      steps: [
        { number: '01', title: 'Tedarikçi Portföy Analizi', description: 'Mevcut tedarikçi ilişkilerinin risk, maliyet ve performans boyutlarında değerlendirmesi.' },
        { number: '02', title: 'Skor Kartı ve SLA Tasarımı', description: 'Her hizmet kategorisi için ölçülebilir performans göstergeleri ve hizmet seviye anlaşmaları.' },
        { number: '03', title: 'Denetim Sistemi Kurulumu', description: 'Planlı ve habersiz denetim prosedürü, checkliste ve düzeltici aksiyon yönetim sistemi.' },
        { number: '04', title: 'Periyodik İş Gözden Geçirme', description: 'Tedarikçilerle aylık/çeyreklik performans toplantısı formatı ve eskalasyon mekanizması.' },
        { number: '05', title: 'Sürekli İyileştirme ve Benchmark', description: 'Tedarikçi performans trend analizi, pazar benchmark ve yıllık stratejik değerlendirme.' },
      ],
    },
    ctaMessage: 'Tedarikçi yönetim sisteminizi veri bazlı, ölçülebilir ve sürdürülebilir bir yapıya birlikte dönüştürelim.',
  },

  // ============================================================
  // 6. DIGITAL TRANSFORMATION
  // ============================================================
  {
    slug: 'dijital-donusum',
    category: 'Dijital Dönüşüm',
    icon: 'chart',
    title: 'İdari İşlerde Mevcut Sistemlerle Akıllı Dijitalleşme',
    subtitle: 'Dijitalleşme, yeni yazılım satın almak demek değildir. Önce mevcut sistemlerle süreç disiplini ve veri görünürlüğü kurulur; yeni araç ihtiyacı ancak net ROI ile değerlendirilir.',
    heroStats: [
      { value: '%40', label: 'Manuel Efor Azaltma Potansiyeli' },
      { value: '4+', label: 'Mevcut Sistem Entegrasyonu' },
      { value: '%80', label: 'Veri Görünürlüğü Artışı' },
      { value: '<6 ay', label: 'ROI Geri Dönüş Süresi' },
    ],
    overview: {
      title: 'Mevcut Sistem Önceliği Yaklaşımı',
      content: `Çoğu şirket, idari işlerdeki dijitalleşme eksikliğini "doğru yazılıma sahip olmamak" olarak tanımlar. Oysa gerçek sorun çoğunlukla yazılım değil, süreç disiplini ve veri yönetimi eksikliğidir.

LEMARS yaklaşımının temelinde şu ilke vardır: Önce mevcut sistemlerle nelerin başarılabileceğine bakılır. SAP, HROne, ServiceNow, SharePoint ve Microsoft Forms gibi araçlar çoğu şirkette zaten mevcuttur. Bu araçların idari işler süreçlerine adapte edilmesi, yeni yazılım yatırımından çok daha hızlı ve düşük riskli sonuçlar üretir.

Dijitalleşme katmanları sırasıyla şu şekilde ele alınmalıdır:
1. Süreç disiplini: Önce süreç tanımlansın
2. Veri toplama: Süreç verisi sistematik olarak toplanabilsin
3. Veri görünürlüğü: Toplanan veri yönetsel kararlara kaynak olabilsin
4. Otomasyon: Tekrarlayan süreçler otomatize edilebilsin
5. Analitik: Veri üzerinden trend ve öngörü üretilebilsin`,
    },
    sections: [
      {
        title: 'Mevcut Sistemlerle Hızlı Kazanımlar',
        content: `Her büyük şirketin halihazırda sahip olduğu araçlarla sağlanabilecek dijitalleşme kazanımları:

SharePoint & Teams: Tedarikçi doküman yönetimi, denetim raporları arşivi, onay akışları ve ekip iletişimi. SharePoint listeleri basit bir veri tabanı gibi kullanılabilir.

Microsoft Forms: Çalışan memnuniyeti anketleri, servis geri bildirimi, saha denetim formları ve hizmet talep formları. Forms verileri otomatik olarak Excel'e aktarılabilir.

Power Automate: Onay akışları, hatırlatma e-postaları, form verisi yönlendirme ve basit otomasyon senaryoları. Kod yazmadan iş akışı oluşturulabilir.

Excel / Power BI: Tedarikçi skor kartları, maliyet takibi, SLA performansı ve trend analizleri. Power BI ile görsel dashboard'lar oluşturulabilir.

SAP / HROne: İK verileri ile idari hizmet performansını ilişkilendirme, devamsızlık ve memnuniyet verisi analizi.`,
        items: [
          'SharePoint ile tedarikçi doküman yönetimi',
          'Forms ile saha denetim dijitalleştirme',
          'Power Automate ile onay akışı otomasyonu',
          'Power BI ile FM dashboard tasarımı',
          'Teams ile tedarikçi iletişim yönetimi',
          'Excel ile KPI/SLA performans takibi',
        ],
        highlight: 'Mevcut Microsoft 365 lisansıyla, ek yazılım maliyeti olmadan idari işler süreçlerinin %60-70\'i dijitalleştirilebilir.',
      },
      {
        title: 'Veri Görünürlüğü ve Dashboard Mantığı',
        content: `Yönetsel karar alma sürecinin kalitesi, mevcut verinin görünürlüğüyle doğru orantılıdır. İdari işlerde tipik veri karanlığı alanları:

Maliyet Verisi: Hizmet kategorisi bazında gerçek maliyet, bütçe sapması ve trend. Çoğu şirkette bu veri muhasebede kalır, operasyonel ekip göremez.

Performans Verisi: Tedarikçi SLA karşılama oranları, şikayet sayıları, iş emri süreleri. Bu veriler genellikle dağınık kaynaklarda bulunur.

Deneyim Verisi: Çalışan memnuniyeti skorları, hizmet bazlı şikayet dağılımı, lokasyon bazlı farklar. İK ile idari işler verisi birbirine bağlı değildir.

Dashboard tasarımında temel ilke: Her yönetim seviyesi için farklı detay düzeyi. Üst yönetim özet KPI'lar, operasyonel yönetim detay metrikler, saha ekipleri aksiyon odaklı listeler görmelidir.`,
        items: [
          'Üst yönetim: Özet KPI dashboard',
          'Operasyonel yönetim: Detay performans metrikleri',
          'Saha ekipleri: Aksiyon ve görev listesi',
          'Tedarikçi: Self-servis performans raporu',
          'İK entegrasyonu: Memnuniyet-operasyon korelasyonu',
        ],
      },
      {
        title: 'Manuel Efor Haritalama ve Otomasyon',
        content: `İdari işlerde en büyük kayıp kaynaklarından biri, beyaz yaka çalışanların operasyonel koordinasyona harcadığı zamandır. Bu zamanın büyük bölümü ölçülmez ve hiçbir KPI'da görünmez.

Manuel efor haritalama çalışması, her bir idari işler sürecinde harcanan zamanı, kullanılan aracı ve katma değer oranını ortaya çıkarır:

Yüksek Efor / Düşük Katma Değer: E-posta ile bilgi toplama, Excel'de manuel veri girişi, telefon ile durum takibi, tekrarlayan onay süreçleri. Bu alan otomasyon için en uygun adaydır.

Yüksek Efor / Yüksek Katma Değer: Tedarikçi toplantıları, performans analizi, politika tasarımı. Bu alan için efor korunmalı ancak araçlarla desteklenmelidir.

Düşük Efor / Düşük Katma Değer: Rutin raporlama, arşivleme. Otomatize edilebilir.`,
        highlight: 'Manuel efor haritalama çalışmaları, idari işler koordinasyonuna harcanan beyaz yaka zamanının %30-40\'ının otomasyon veya basit dijitalleşme ile azaltılabileceğini göstermektedir.',
      },
    ],
    blindSpots: {
      title: 'Dijitalleşmede Görünmeyen Tuzaklar',
      items: [
        {
          title: 'Yazılım Çözümü Yanılgısı',
          description: 'Süreç disiplini olmadan yazılım satın almak, düzensizliği dijitalleştirmekten ibaret kalır. Önce süreç, sonra araç.',
        },
        {
          title: 'Veri Silolarında Kaybolmak',
          description: 'Her departmanın kendi Excel dosyası, kendi raporlama formatı. Veri standartlaştırılmadan bütünleşik görünürlük sağlanamaz.',
        },
        {
          title: 'Dashboard ama Aksiyon Yok',
          description: 'Güzel görsel panolar oluşturulur ancak veri aksiyona dönüştürülmez. Dashboard, karar alma aracıdır; dekorasyon değil.',
        },
        {
          title: 'Dijital Yorgunluk',
          description: 'Çok fazla araç ve platform kullanımı, saha ekiplerinde dijital yorgunluk yaratır. Araç sayısını azaltmak, kullanımı artırır.',
        },
      ],
    },
    framework: {
      title: 'LEMARS Dijitalleşme Çerçevesi',
      subtitle: 'İdari işlerde mevcut sistemlerle aşamalı dijitalleşme yaklaşımı.',
      steps: [
        { number: '01', title: 'Mevcut Sistem ve Süreç Envanteri', description: 'Kullanılabilir araçlar, mevcut süreçler ve manuel efor alanlarının haritalanması.' },
        { number: '02', title: 'Hızlı Kazanım Belirleme', description: 'En düşük eforla en yüksek etkiyi sağlayacak dijitalleşme fırsatlarının önceliklendirilmesi.' },
        { number: '03', title: 'Pilot Uygulama', description: 'Seçilen bir süreçte mevcut araçlarla dijitalleşme pilotu ve sonuç ölçümü.' },
        { number: '04', title: 'Dashboard ve Raporlama', description: 'Yönetsel karar desteği için veri görünürlüğü platformu tasarımı ve uygulaması.' },
        { number: '05', title: 'Yaygınlaştırma ve Ölçekleme', description: 'Başarılı pilot uygulamaların diğer süreç ve lokasyonlara yaygınlaştırılması.' },
      ],
    },
    ctaMessage: 'Mevcut sistemlerinizle dijitalleşme fırsatlarını birlikte keşfedelim ve hızlı kazanımlar elde edelim.',
  },
]
