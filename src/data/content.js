export const CONTENT = {
  en: {
    siteName: "KADİR KARAKUŞ",
    hero: {
      label: "A. Kadir Karakuş",
      title: {
        line1: "Building digital",
        line2: "masterpieces."
      },
      description: "A curator of clean code and editorial design. Transforming complex systems into seamless, poetic user experiences.",
      ctaPrimary: "View My Work",
      ctaSecondary: "My Stack"
    },
    about: {
      sectionTitle: "Who am I?",
      heading: "Bridging the gap between engineering and art.",
      paragraphs: [
        "I am a 3rd-year Computer Engineering student dedicated to building digital experiences that feel both profoundly technical and deeply human. My approach merges the strict logic of computer science with the elegant simplicity of editorial design.",
        "Beyond coding, my interests lie in digital minimalism, artificial intelligence, and exploring how robust system architectures can drive aesthetic, high-performing interfaces."
      ],
      details: [
        { label: "Education", value: "B.Sc. Computer Engineering (3rd Year)" },
        { label: "Interests", value: "Minimalism, AI, Generative Art, System Design" },
        { label: "Focus", value: "Frontend, UX/UI, Performance Native" }
      ]
    },
    experience: {
      period: "2020 — Present",
      role: "Computer Engineering Student",
      company: "University & Freelance",
      projects: [
        {
          id: "neural-library-engine",
          title: "Neural Library Engine",
          date: "2024 — Present",
          shortDescription: "An architectural paradigm for semantic indexing, transforming petabytes of unstructured text into a navigable neural atlas.",
          tags: ["PyTorch", "Rust", "CUDA", "Vector DB", "Transformers"],
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBINkUiQs1F33ed6syzeXhGbbolaLDgMIlkEtcWezwR9ONiflK7oI1hXvaAwz3fQV9-ZHysbCnOSqL64YQnBcvQDr2kXMgkBRf84h0PCWa5Zpyu8BEw8NbioKIzU-a57IsvfUhCCb1Auzw3wC_5YVzWLIUTIIt3rhb5amjhLVo4XTXZ5T_iyt2jPKo7ZNpcMrcFq63DByEhNzx6tseJN6dDrAlS6_7_BweFZ8aW-Y_xtX0GcmETjjCfStgivg6_owacKXN-RE-5_hw",
          heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHaHpV3HZhLiKg1xj-SiTEiamM0EiSYYqrX6BKaoBiuMLMezkwrMdKl1f6ONvx1rVdSqhi81rCXLCpgW5rW8nzjNOvbm4_TxlvXNPZ4q_eiB_ki23VDrVRa3-rtKImtu_O1kZf8H5wOrCf1IV3-lIUE59NbpKcqBYvndZwJlJxPq-8tZo9dC-6e9KJ_OCkY7V2EvqXj0ArtzkrBHH8bfrPMLNow7gJ8gywpDwj2HBLU7o1QrCoK0g0I0Zmzhxs6l5ylB6rFw52H2Q",
          details: {
            category: "AI & MACHINE LEARNING",
            longDescription: "Traditional search relies on keyword matching, a process that misses the nuanced relationships within complex texts. The Neural Library Engine utilizes a multi-head attention mechanism to map documents into a high-dimensional vector space.",
            secondaryDescription: "By training on domain-specific corpora, we achieved a 40% increase in retrieval precision compared to off-the-shelf LLM embeddings.",
            metrics: {
              latency: "12ms",
              contextWindow: "128k",
              embeddingDim: "1536"
            },
            techFoundation: "Built with a custom Rust-based inference engine to ensure memory safety and zero-cost abstractions during high-concurrency search queries.",
            performanceWin: "Reduced infrastructure costs by 65% through custom quantization of the embedding layer without sacrificing accuracy.",
            lowLatency: "Sub-millisecond vector lookup across 10 million nodes using a Hierarchical Navigable Small World (HNSW) graph."
          }
        },
        {
          id: "etheria-dashboard",
          title: "Etheria Dashboard",
          date: "2023 — 2024",
          shortDescription: "A high-fidelity data visualization suite for creative agencies focused on minimalist aesthetics.",
          tags: ["Next.js", "TypeScript", "Tailwind"],
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrcGQPCic-BaTl_6bi0POspjun7KZRmj1ziwAaEIvX9WcGQ4o_6Zqx85HeactpQTqmZIqhZSKNlZh9ThO9EOIhNSrMLoMSaGDgxvr8kArBGq6uusvkN1zxUOWhdw9_TdLj67e7X8owoUTkvFMg9I-UhnZSiYH7Sgro5ifc0lVYBI5H7ieSAMKm605vs2YZUj7AireunFMAM35EnGF7M4ilUUwnFNrvmhAT5yX-IG-0wGTTsLXJ25TiBhkGtFCaTLM8jvNyBzf7QM",
          heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrcGQPCic-BaTl_6bi0POspjun7KZRmj1ziwAaEIvX9WcGQ4o_6Zqx85HeactpQTqmZIqhZSKNlZh9ThO9EOIhNSrMLoMSaGDgxvr8kArBGq6uusvkN1zxUOWhdw9_TdLj67e7X8owoUTkvFMg9I-UhnZSiYH7Sgro5ifc0lVYBI5H7ieSAMKm605vs2YZUj7AireunFMAM35EnGF7M4ilUUwnFNrvmhAT5yX-IG-0wGTTsLXJ25TiBhkGtFCaTLM8jvNyBzf7QM",
          details: {
            category: "WEB DEVELOPMENT",
            longDescription: "A fully custom dashboard designed to manage and visualize complex metadata with a focus on editorial soft-minimalism.",
            secondaryDescription: "Eliminated the clutter of traditional dashboards, offering a calm and focused environment for creative directors.",
            metrics: { latency: "40ms", contextWindow: "N/A", embeddingDim: "N/A" },
            techFoundation: "Leveraged Next.js App Router and React Server Components for highly optimized page loads.",
            performanceWin: "Achieved perfect Lighthouse scores across all metrics.",
            lowLatency: "Dynamic edge rendering ensures global fast access."
          }
        },
        {
          id: "bloom-mobile",
          title: "Bloom Mobile",
          date: "2022 — 2023",
          shortDescription: "Redefining boutique e-commerce journeys with a focus on tactile interactions and soft UI.",
          tags: ["React Native", "GraphQL", "Node.js"],
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-NWsAabWmNFpAGjz4KdjY8mqL_7F4CaJ_qizAlXikO_etuPraYfcTw5zdsgwmnPb-UZyuZHoW8ghUE5BQwjBhJLZ8PxPhflaDujo1k7CwwcPUV29FpljyCEl0xpF0HlJgS09xo9_Q6mjK__L_-MHgP04XHku9yHmOLqQfN5ysSVfSAQGuTRBrIHznwnoEurb2Fx0Nau2ClEeYNW0h7OFfmHfg2npUW6QviQHhFLOEimQEZRBiYJBFa2iKRs8-qjvC5ZlYl4XgOT0",
          heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-NWsAabWmNFpAGjz4KdjY8mqL_7F4CaJ_qizAlXikO_etuPraYfcTw5zdsgwmnPb-UZyuZHoW8ghUE5BQwjBhJLZ8PxPhflaDujo1k7CwwcPUV29FpljyCEl0xpF0HlJgS09xo9_Q6mjK__L_-MHgP04XHku9yHmOLqQfN5ysSVfSAQGuTRBrIHznwnoEurb2Fx0Nau2ClEeYNW0h7OFfmHfg2npUW6QviQHhFLOEimQEZRBiYJBFa2iKRs8-qjvC5ZlYl4XgOT0",
          details: {
            category: "MOBILE APP",
            longDescription: "A cross-platform mobile application providing a seamless shopping experience for premium boutique items.",
            secondaryDescription: "Implemented custom gesture-driven interactions to make product discovery fluid and engaging.",
            metrics: { latency: "60fps", contextWindow: "N/A", embeddingDim: "N/A" },
            techFoundation: "Written entirely in React Native with Reanimated for complex gesture handling.",
            performanceWin: "Reduced app bundle size by 30% via aggressive tree-shaking and dynamic imports.",
            lowLatency: "Optimized image loading pipeline for instant visual feedback."
          }
        }
      ]
    },
    certificates: {
      sectionTitle: "Verifications",
      heading: "Certificates & Licenses",
      items: [
        {
          title: "AWS Certified Developer – Associate",
          issuer: "Amazon Web Services",
          date: "2023",
          url: "#"
        },
        {
          title: "Meta Front-End Developer Professional Certificate",
          issuer: "Coursera / Meta",
          date: "2022",
          url: "#"
        },
        {
          title: "Deep Learning Specialization",
          issuer: "DeepLearning.AI",
          date: "2022",
          url: "#"
        }
      ]
    },
    contact: {
      availability: "Available for projects",
      heroTitle: "Let's curate your next <span class=\"text-primary italic\">vision.</span>",
      heroSubtitle: "Based in the intersection of technical precision and aesthetic soul. Currently accepting select opportunities for late 2026.",
      location: "Istanbul, Turkey & Remote",
      email: "mra.kadirkarakus@gmail.com",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_aX8QWPKHTHRaSbcVFUXl427zn3K6RDUb8v0Re0-l4X6CU8alnDlzBXizjmfkoGRCoI2qZDnQan7SYvVnrPNxGoRc1ywSk6xk9MGjySvmVXzl-UxXLIgwiAu3l04sKvngrnP6kmGMEZNMuSnVUNjRmn_s1z63-U2TOJ7YMeJLXYWalbdd8pZ2HYZ0VnjtAuY5TC8i9S8hzK7HZ03xpbUN1-81ErgSNTE3nxJJa6uNPyhtxzDuhet5Lb84uhPyYBwV8zuJMzynZJE"
    },
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kadirkarakus" },
      { name: "GitHub", url: "#" },
      { name: "Dribbble", url: "#" },
      { name: "Twitter", url: "#" }
    ],
    nav: {
      home: "Home",
      experience: "Experience",
      certificates: "Certificates",
      cta: "Get in touch"
    },
    footer: {
      rights: "All rights reserved.",
      designed: "Designed with architectural precision.",
      languageLabel: "Language:"
    }
  },
  tr: {
    siteName: "KADİR KARAKUŞ",
    hero: {
      label: "Kadir Karakuş",
      title: {
        line1: "İnşa ederek",
        line2: "Öğreniyorum."
      },
      description: "Bilgisayarlı görü, yapay zeka ve yazılım geliştirme alanlarına ilgi duyan hevesli bir bilgisayar mühendisliği öğrencisiyim.",
      ctaPrimary: "Projelerim",
      ctaSecondary: "Teknik Yetkinlikler"
    },
    about: {
      sectionTitle: "Hakkımda",
      heading: "Donanım hassasiyeti ile yazılım esnekliğini birleştiriyorum.",
      paragraphs: [
        "TED Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Geliştirme süreçlerimde sadece kodun estetiğine değil, sistemin uçtan uca verimliliğine odaklanıyorum. Nesnelerin İnterneti (IoT) ve mikro denetleyiciler ile fiziksel dünyadan veri topluyor, bu verileri modern backend mimarileriyle işlenebilir hale getiriyorum.",
        "Teknik çalışmalarımın yanı sıra; teorik fizik ve astronomiden aldığım disiplinler arası perspektifi, mühendislik problemlerine çözüm üretirken bir vizyon aracı olarak kullanıyorum. Karmaşıklığı sadeleştirmek ve sürdürülebilir sistemler inşa etmek temel önceliğimdir."
      ],
      details: [
        { label: "Eğitim", value: "TED Üniversitesi - Bilgisayar Mühendisliği" },
        { label: "Uzmanlık", value: "IoT, Gömülü Sistemler, Backend Geliştirme" },
        { label: "Teknoloji Yığını", value: "Java, Python, C#, Docker, PostgreSQL" }
      ]
    },
    experience: {
      period: "2020 — Günümüz",
      role: "Bilgisayar Mühendisliği Öğrencisi",
      company: "Üniversite & Bağımsız Geliştirici",
      projects: [
        {
          id: "proje-besita",
          title: "Proje - Besita",
          date: "2026 — Günümüz",
          shortDescription: "",
          tags: ["PyTorch", "Rust", "CUDA", "Vector DB", "Transformers"],
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBINkUiQs1F33ed6syzeXhGbbolaLDgMIlkEtcWezwR9ONiflK7oI1hXvaAwz3fQV9-ZHysbCnOSqL64YQnBcvQDr2kXMgkBRf84h0PCWa5Zpyu8BEw8NbioKIzU-a57IsvfUhCCb1Auzw3wC_5YVzWLIUTIIt3rhb5amjhLVo4XTXZ5T_iyt2jPKo7ZNpcMrcFq63DByEhNzx6tseJN6dDrAlS6_7_BweFZ8aW-Y_xtX0GcmETjjCfStgivg6_owacKXN-RE-5_hw",
          heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHaHpV3HZhLiKg1xj-SiTEiamM0EiSYYqrX6BKaoBiuMLMezkwrMdKl1f6ONvx1rVdSqhi81rCXLCpgW5rW8nzjNOvbm4_TxlvXNPZ4q_eiB_ki23VDrVRa3-rtKImtu_O1kZf8H5wOrCf1IV3-lIUE59NbpKcqBYvndZwJlJxPq-8tZo9dC-6e9KJ_OCkY7V2EvqXj0ArtzkrBHH8bfrPMLNow7gJ8gywpDwj2HBLU7o1QrCoK0g0I0Zmzhxs6l5ylB6rFw52H2Q",
          details: {
            category: "YAPAY ZEKA",
            longDescription: "Geleneksel arama sistemlerinin kelime eşleşmesine dayandığı bir yapıda kaybolan ilişkileri yakalayan, çok kafalı dikkat mekanizmasına (multi-head attention) sahip kütüphane motoru.",
            secondaryDescription: "Belirli domain kelime dağarcıkları üzerine eğitilerek LLM arama doğruluğu %40 artırıldı.",
            metrics: {
              latency: "12ms",
              contextWindow: "128k",
              embeddingDim: "1536"
            },
            techFoundation: "Yüksek eşzamanlılık gerektiren anlık arama sorgularında güvenliği ve performansı artırmak için özel bir Rust tabanlı çıkarım motoruyla yazıldı.",
            performanceWin: "Embedleme işlemlerinin optimizasyonu ve donanım iyileştirmesi sayesinde %65 altyapı maliyeti düşürüldü.",
            lowLatency: "HNSW grafiği kullanarak 10 milyon düğüm üzerinden milisaniyeden daha düşük vektörel arama süresi."
          }
        },
        {
          id: "staj-albasec",
          title: "Staj - ALBASEC",
          date: "2025",
          shortDescription: "Politika ve güvenlik duvarı kurallarının yönetimini sağlayarak kullanıcı erişilebilirliğini ve deneyimini artırmak amacıyla Trend Micro’nun resmi API’sini kullanan Django tabanlı bir web uygulaması oluşturuldu.",
          tags: ["Next.js", "TypeScript", "Tailwind"],
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrcGQPCic-BaTl_6bi0POspjun7KZRmj1ziwAaEIvX9WcGQ4o_6Zqx85HeactpQTqmZIqhZSKNlZh9ThO9EOIhNSrMLoMSaGDgxvr8kArBGq6uusvkN1zxUOWhdw9_TdLj67e7X8owoUTkvFMg9I-UhnZSiYH7Sgro5ifc0lVYBI5H7ieSAMKm605vs2YZUj7AireunFMAM35EnGF7M4ilUUwnFNrvmhAT5yX-IG-0wGTTsLXJ25TiBhkGtFCaTLM8jvNyBzf7QM",
          heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrcGQPCic-BaTl_6bi0POspjun7KZRmj1ziwAaEIvX9WcGQ4o_6Zqx85HeactpQTqmZIqhZSKNlZh9ThO9EOIhNSrMLoMSaGDgxvr8kArBGq6uusvkN1zxUOWhdw9_TdLj67e7X8owoUTkvFMg9I-UhnZSiYH7Sgro5ifc0lVYBI5H7ieSAMKm605vs2YZUj7AireunFMAM35EnGF7M4ilUUwnFNrvmhAT5yX-IG-0wGTTsLXJ25TiBhkGtFCaTLM8jvNyBzf7QM",
          details: {
            category: "WEB GELİŞTİRME",
            longDescription: "Yaratıcı yöneticiler için tamamen ihtiyaçlara yönelik inşa edilmiş, estetik ve fonksiyonelliği harmanlayan özel dashboard altyapısı.",
            secondaryDescription: "Geleneksel panellerdeki karmaşayı yok eden, minimal ve sade bir kontrol hissi sunar.",
            metrics: { latency: "40ms", contextWindow: "N/A", embeddingDim: "N/A" },
            techFoundation: "Yüksek optimizasyon gerektiren sorgular için Next.js App Router kullanılarak sunucu tarafında oluşturma gücünden tam faydalanıldı.",
            performanceWin: "Arama görünürlüğü, erişilebilirlik ve performans gibi temel web performansında mükemmel puanlar alındı.",
            lowLatency: "Dünya çağında aynı dinamizm ile çalışacak uçta kurgulanmış global veri yayını modeli."
          }
        },
        {
          id: "politika-yonetim",
          title: "Proje - Politika Yönetim Paneli",
          date: "2025",
          shortDescription: "Politika ve güvenlik duvarı kurallarının yönetimini sağlayarak kullanıcı erişilebilirliğini ve deneyimini artırmak amacıyla Trend Micro’nun resmi API’sini kullanan Django tabanlı bir web uygulaması oluşturuldu.",
          tags: ["Next.js", "TypeScript", "Tailwind"],
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrcGQPCic-BaTl_6bi0POspjun7KZRmj1ziwAaEIvX9WcGQ4o_6Zqx85HeactpQTqmZIqhZSKNlZh9ThO9EOIhNSrMLoMSaGDgxvr8kArBGq6uusvkN1zxUOWhdw9_TdLj67e7X8owoUTkvFMg9I-UhnZSiYH7Sgro5ifc0lVYBI5H7ieSAMKm605vs2YZUj7AireunFMAM35EnGF7M4ilUUwnFNrvmhAT5yX-IG-0wGTTsLXJ25TiBhkGtFCaTLM8jvNyBzf7QM",
          heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrcGQPCic-BaTl_6bi0POspjun7KZRmj1ziwAaEIvX9WcGQ4o_6Zqx85HeactpQTqmZIqhZSKNlZh9ThO9EOIhNSrMLoMSaGDgxvr8kArBGq6uusvkN1zxUOWhdw9_TdLj67e7X8owoUTkvFMg9I-UhnZSiYH7Sgro5ifc0lVYBI5H7ieSAMKm605vs2YZUj7AireunFMAM35EnGF7M4ilUUwnFNrvmhAT5yX-IG-0wGTTsLXJ25TiBhkGtFCaTLM8jvNyBzf7QM",
          details: {
            category: "WEB GELİŞTİRME",
            longDescription: "Yaratıcı yöneticiler için tamamen ihtiyaçlara yönelik inşa edilmiş, estetik ve fonksiyonelliği harmanlayan özel dashboard altyapısı.",
            secondaryDescription: "Geleneksel panellerdeki karmaşayı yok eden, minimal ve sade bir kontrol hissi sunar.",
            metrics: { latency: "40ms", contextWindow: "N/A", embeddingDim: "N/A" },
            techFoundation: "Yüksek optimizasyon gerektiren sorgular için Next.js App Router kullanılarak sunucu tarafında oluşturma gücünden tam faydalanıldı.",
            performanceWin: "Arama görünürlüğü, erişilebilirlik ve performans gibi temel web performansında mükemmel puanlar alındı.",
            lowLatency: "Dünya çağında aynı dinamizm ile çalışacak uçta kurgulanmış global veri yayını modeli."
          }
        },
        {
          id: "ciftlik-yonetim-sistemi",
          title: "Proje - Çiftlik Yönetim Sistemi",
          date: "2024",
          shortDescription: "Hayvancılık takibi ve tarım arazisi yönetim süreçlerini otomatize etmek için OOP mimarisiyle C# kullanılarak güçlü bir Windows masaüstü uygulaması tasarlandı ve geliştirildi.",
          tags: ["React Native", "GraphQL", "Node.js"],
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-NWsAabWmNFpAGjz4KdjY8mqL_7F4CaJ_qizAlXikO_etuPraYfcTw5zdsgwmnPb-UZyuZHoW8ghUE5BQwjBhJLZ8PxPhflaDujo1k7CwwcPUV29FpljyCEl0xpF0HlJgS09xo9_Q6mjK__L_-MHgP04XHku9yHmOLqQfN5ysSVfSAQGuTRBrIHznwnoEurb2Fx0Nau2ClEeYNW0h7OFfmHfg2npUW6QviQHhFLOEimQEZRBiYJBFa2iKRs8-qjvC5ZlYl4XgOT0",
          heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-NWsAabWmNFpAGjz4KdjY8mqL_7F4CaJ_qizAlXikO_etuPraYfcTw5zdsgwmnPb-UZyuZHoW8ghUE5BQwjBhJLZ8PxPhflaDujo1k7CwwcPUV29FpljyCEl0xpF0HlJgS09xo9_Q6mjK__L_-MHgP04XHku9yHmOLqQfN5ysSVfSAQGuTRBrIHznwnoEurb2Fx0Nau2ClEeYNW0h7OFfmHfg2npUW6QviQHhFLOEimQEZRBiYJBFa2iKRs8-qjvC5ZlYl4XgOT0",
          details: {
            category: "MOBİL UYGULAMA",
            longDescription: "Pahalı butik ürünlerin sorunsuz alışverişi için hazırlanan çapraz platform mobil uygulama.",
            secondaryDescription: "Ürünlerin daha akıcı ve bağlayıcı olarak incelenmesini sağlayan özel etkileşim detayları ile donatıldı.",
            metrics: { latency: "60fps", contextWindow: "N/A", embeddingDim: "N/A" },
            techFoundation: "Animasyonlarla dolu bir deneyim için tamamen React Native mimarisi kullanıldı.",
            performanceWin: "Dinamik ithalat kullanımı ile uygulama boyutunda yüzde otuzluk azalma.",
            lowLatency: "Eş zamanlı olmayan yüksek görünürlük isteyen görsellerin anlık optimizasyonu."
          }
        }
      ]
    },
    certificates: {
      sectionTitle: "Sertifikalar",
      heading: "Sertifikalar",
      items: [
        {
          title: "Derin Öğrenmeye Giriş",
          issuer: "BTK Akademi  -  Kurs Tamamlama Sertifikası",
          date: "2026",
          url: "#"
        },
        {
          title: "Docker",
          issuer: "Udemy  -  A'dan Z'ye Docker Kursu",
          date: "2026",
          url: "#"
        },
        {
          title: "Trend Micro Deep Security Manager",
          issuer: "Trend Education - Eğitimi Tamamlama Sertifikası",
          date: "2025",
          url: "#"
        },
        {
          title: "C#",
          issuer: "UDEMY - Uygulamalarla C# Eğitimi Tamamlama Sertifikası",
          date: "2022",
          url: "#"
        },
      ]
    },
    contact: {
      availability: "Projeler için müsait",
      heroTitle: "Sıradaki <span class=\"text-primary italic\">vizyonunuzu</span> tasarlayalım.",
      heroSubtitle: "Teknik kusursuzluk ile sanatsal ruhun kesişim noktasındayım. 2026 sonları için yeni projeleri kabul ediyorum.",
      location: "Ankara, Türkiye & Uzaktan",
      email: "mra.kadirkarakus@gmail.com",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_aX8QWPKHTHRaSbcVFUXl427zn3K6RDUb8v0Re0-l4X6CU8alnDlzBXizjmfkoGRCoI2qZDnQan7SYvVnrPNxGoRc1ywSk6xk9MGjySvmVXzl-UxXLIgwiAu3l04sKvngrnP6kmGMEZNMuSnVUNjRmn_s1z63-U2TOJ7YMeJLXYWalbdd8pZ2HYZ0VnjtAuY5TC8i9S8hzK7HZ03xpbUN1-81ErgSNTE3nxJJa6uNPyhtxzDuhet5Lb84uhPyYBwV8zuJMzynZJE"
    },
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kadirkarakus" },
      { name: "E-posta", url: "mailto:mra.kadirkarakus@gmail.com" },
    ],
    nav: {
      home: "Ana Sayfa",
      experience: "Deneyimler",
      certificates: "Sertifikalar",
      cta: "Bana Ulaşın"
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      designed: "Mimar hassasiyetiyle tasarlandı.",
      languageLabel: "Dil:"
    }
  }
};

export const getProjectBySlug = (slug, lang = 'en') => {
  return CONTENT[lang].experience.projects.find(p => p.id === slug);
};

export const getSurroundingProjects = (slug, lang = 'en') => {
  const projects = CONTENT[lang].experience.projects;
  const index = projects.findIndex(p => p.id === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return { prev, next };
};
