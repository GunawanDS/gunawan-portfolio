
export default {
  nav: {
    home: 'Beranda',
    about: 'Tentang Saya',
    experience: 'Pengalaman',
    projects: 'Proyek',
    skills: 'Keahlian',
    education: 'Pendidikan',
    certifications: 'Sertifikasi',
    contact: 'Kontak',
  },

  hero: {
    status: 'PENGEMBANGAN FULLSTACK & ANALISIS SISTEM',
    greeting: 'Halo, saya',
    role: 'Fullstack Developer',
    headline: 'Membangun solusi digital melalui',
    headlineHighlight: 'teknologi dan pemecahan masalah.',
    description:
      'Saya mengembangkan dan memelihara aplikasi web, bekerja dengan sistem informasi, serta menyelesaikan tantangan teknis melalui analisis sistem, pengembangan aplikasi, dan integrasi.',
    viewProjects: 'Jelajahi Proyek',
    contactMe: 'Hubungi Saya',
    downloadCV: 'Unduh CV',

    overview: 'RINGKASAN PROFESIONAL',

    services: [
      {
        title: 'Pengembangan Aplikasi',
        description:
          'Mengembangkan dan memelihara aplikasi web sesuai kebutuhan bisnis dan pengguna.',
      },
      {
        title: 'Integrasi Sistem',
        description:
          'Menghubungkan aplikasi, API, dan sistem informasi untuk mendukung pertukaran data yang efisien.',
      },
      {
        title: 'Analisis & Pemecahan Masalah',
        description:
          'Menganalisis proses bisnis, mengidentifikasi kendala teknis, dan memberikan solusi yang tepat.',
      },
    ],

    location: 'BERDOMISILI DI BANDUNG, INDONESIA',
    specialty: 'PENGEMBANGAN WEB',
  },


  about: {
    eyebrow: 'TENTANG SAYA',

    title: 'Menghubungkan teknologi, sistem, dan kebutuhan bisnis.',

    paragraphs: [
      'Saya merupakan lulusan Sistem Informasi dengan pengalaman profesional dalam pengembangan aplikasi web, operasional IT, dan peningkatan sistem informasi.',

      'Pengalaman saya mencakup pengembangan dan pemeliharaan Hospital Information System (HIS/SIMRS), penanganan kendala aplikasi, dukungan integrasi sistem, serta pengembangan fitur berdasarkan kebutuhan operasional.',

      'Saya juga memiliki ketertarikan dalam memahami proses bisnis dan menerjemahkan kebutuhan menjadi solusi teknologi yang tepat guna. Saya senang menggabungkan kemampuan analitis dengan pengembangan aplikasi untuk menyelesaikan permasalahan nyata.',
    ],

    stats: {
      yearsExp: 'Tahun Pengalaman',
      projects: 'Proyek Dibuat',
      certifications: 'Sertifikasi',
      tech: 'Tech Stack',
    },

    highlights: [
      {
        title: 'Pengembangan Sistem',
        description:
          'Membangun, memelihara, dan meningkatkan kualitas sistem informasi berbasis web.',
      },
      {
        title: 'Pemecahan Masalah Teknis',
        description:
          'Menganalisis kendala aplikasi dan menerapkan solusi berdasarkan kebutuhan sistem.',
      },
      {
        title: 'Analisis Bisnis & Sistem',
        description:
          'Memahami alur kerja operasional dan mengidentifikasi peluang peningkatan sistem.',
      },
    ],
  },


  experience: {
    eyebrow: 'PERJALANAN KARIR',
    title: 'Pengalaman Profesional',
    subtitle: 'Perjalanan profesional saya dalam pengembangan perangkat lunak, operasional IT, dan peningkatan sistem.',
    items: [
      {
        company: 'PT Terakorp Indonesia',
        logo: '/images/companies/terakorp.png',
        position: 'Junior Programmer / Fullstack Developer (HIS)',
        period: 'Desember 2025 — Sekarang',
        type: 'Kontrak — Pengalaman Profesional',
        description:
          'Mengembangkan dan memelihara aplikasi Hospital Information System (HIS / SIMRS) mencakup bridging voucher vendor, integrasi SATUSEHAT Kemenkes (FHIR) & BPJS, modul operasional farmasi, gudang, rekam medis elektronik (RME), dan billing.',
        responsibilities: [
          'Mengembangkan dan memelihara aplikasi Hospital Information System (HIS/SIMRS) menggunakan PHP Native, Laravel, JavaScript, jQuery, AJAX, PostgreSQL, dan Git.',
          'Mengimplementasikan dan meningkatkan integrasi bridging SATUSEHAT Kemenkes (standar FHIR) dan BPJS Kesehatan untuk mendukung interoperabilitas data kesehatan dan pelayanan rumah sakit.',
          'Membangun sistem bridging voucher dan integrasi API bersama vendor eksternal untuk memperlancar transaksi dan promo layanan faskes.',
          'Mengembangkan modul operasional mencakup Rekam Medis Elektronik (RME), Farmasi, Manajemen Inventaris Gudang, Keuangan, Billing, dan Dokumentasi Klinis.',
          'Membangun fitur farmasi dan gudang untuk manajemen stok, pelacakan inventaris (stock movement), serta monitoring transaksi obat.',
          'Mengembangkan dokumentasi kesehatan digital: form rekam medis, laporan klinis, dokumen elektronik, serta integrasi digital signature.',
          'Melakukan analisis sistem, troubleshooting, debugging, dan bug fixing untuk meningkatkan performa aplikasi, keandalan, dan akurasi data transaksi.',
          'Berkolaborasi erat dengan tim Helpdesk dan stakeholder rumah sakit guna menindaklanjuti kebutuhan bisnis dan penyelesaian tiket dukungan.',
          'Secara konsisten menyelesaikan target man-days dan deadline rilis produksi dalam lingkungan regulasi kesehatan yang dinamis.',
        ],
        technologies: [
          'PHP Native',
          'Laravel',
          'JavaScript',
          'jQuery',
          'AJAX',
          'PostgreSQL',
          'REST API (Bridging)',
          'SATUSEHAT (FHIR)',
          'BPJS Integration',
          'Git',
        ],
      },
      {
        company: 'KAI LRT Jabodebek',
        logo: '/images/companies/kai.png',
        position: 'IT Planning & Development',
        period: 'Juli 2024 — Desember 2025',
        type: 'Pengalaman Profesional',
        description:
          'Merancang dan mengembangkan layanan backend, mengintegrasikan antarmuka frontend, serta membangun pipeline CI/CD untuk aplikasi internal di KAI Divisi LRT Jabodebek.',
        responsibilities: [
          'Merancang dan mengembangkan layanan backend dengan Express.js, menggunakan indexing, partitioning, dan paginated API untuk skalabilitas dan performa.',
          'Mengintegrasikan antarmuka frontend dinamis dengan React.js dan Next.js, berkolaborasi dengan tim UI agar koneksi API berjalan mulus.',
          'Mengimplementasikan pipeline CI/CD otomatis dengan GitLab CI, Jenkins, dan SonarQube untuk efisiensi deployment dan kualitas kode.',
          'Menggunakan Docker untuk menyederhanakan lingkungan pengembangan dan menjaga konsistensi antar tim.',
          'Berkontribusi pada perencanaan arsitektur sistem dan optimasi backend sesuai pertumbuhan bisnis.',
        ],
        technologies: [
          'Express.js',
          'React.js',
          'Next.js',
          'REST API',
          'Docker',
          'GitLab CI',
          'Jenkins',
          'SonarQube',
        ],
      },
      {
        company: 'PT Value Stream International',
        logo: '/images/companies/valuestream.png',
        position: 'IT Helpdesk',
        period: 'Juni 2022 — April 2024',
        type: 'Pengalaman Profesional',
        description:
          'Memberikan dukungan teknis dan membantu pengguna dalam menjaga kelancaran operasional IT.',
        responsibilities: [
          'Menangani masalah teknis yang dilaporkan pengguna dan melakukan pemecahan masalah.',
          'Memberikan bantuan teknis untuk operasional aplikasi dan sistem.',
          'Memantau insiden dan menindaklanjuti masalah yang dilaporkan.',
          'Mendokumentasikan masalah dan mengkoordinasikan eskalasi bila diperlukan.',
        ],
        technologies: [
          'IT Support',
          'Troubleshooting',
          'Incident Management',
          'Technical Support',
        ],
      },
    ],
  },

  projects: {
    eyebrow: 'PROYEK PILIHAN',
    title: 'Proyek yang mencerminkan cara saya memecahkan masalah.',
    subtitle: 'Dokumentasi kontribusi profesional dalam pengembangan aplikasi enterprise, sistem monitoring, web CMS, dan aplikasi mobile di lingkungan KAI LRT Jabodebek dan Healthcare.',
    labels: {
      context: 'Konteks',
      challenge: 'Tantangan',
      approach: 'Pendekatan',
      contribution: 'Kontribusi Saya',
      viewDetail: 'Lihat Detail Proyek',
      closeModal: 'Tutup Detail',
      role: 'Peran',
      techStack: 'Tech Stack',
      backendContribution: 'Kontribusi Backend',
      frontendContribution: 'Kontribusi Frontend',
      mobileContribution: 'Kontribusi Mobile',
      dataManagement: 'Pengelolaan Data & Database',
      systemArchitecture: 'Arsitektur Sistem',
      dataFlow: 'Alur Data (Data Flow)',
      systemLayers: 'Tanggung Jawab Layer',
    },
    items: [
      {
        id: 'immax',
        title: 'IMMAX',
        category: 'Mobile Application / Web CMS / Fullstack Development',
        status: 'Professional Experience — KAI LRT Jabodebek',
        role: 'Fullstack Developer (Mobile, Backend & CMS)',
        shortDescription:
          'Ekosistem aplikasi multi-platform di lingkungan KAI LRT Jabodebek yang terdiri dari Mobile Application (React Native), Web-based CMS (Next.js), dan Backend Service (Node.js & Express.js).',
        context:
          'IMMAX merupakan ekosistem aplikasi yang dikembangkan di lingkungan KAI LRT Jabodebek untuk memfasilitasi interaksi pengguna melalui perangkat mobile serta pengelolaan data dan konten operasional melalui web CMS, dengan backend terintegrasi.',
        challenge:
          'Menghubungkan dua platform client yang berbeda (Mobile React Native dan Web CMS Next.js) ke dalam satu arsitektur backend yang konsisten, menjaga konsistensi format request/response, serta memproses logika bisnis dan pengelolaan data tanpa konflik.',
        approach:
          'Membangun backend REST API modular dengan Node.js dan Express.js sebagai pusat pertukaran data, merancang routing dan middleware yang terstruktur, mengintegrasikan data fetching di aplikasi mobile React Native, dan menyediakan dashboard data management pada CMS Next.js.',
        contribution: [
          'Mengembangkan antarmuka dan screen flow pada aplikasi mobile menggunakan React Native.',
          'Membangun endpoint REST API, routing, middleware, dan request processing pada backend Node.js & Express.js.',
          'Mengembangkan halaman Web CMS dan interface pengelolaan data menggunakan Next.js.',
          'Mengimplementasikan validasi data dan penanganan response JSON terstruktur untuk konsumsi mobile dan CMS.',
          'Melakukan debugging, troubleshooting, dan perbaikan alur komunikasi data antar layer aplikasi.',
        ],
        mobileDetails: [
          'Pengembangan antarmuka layar (screen development) dan komponen UI mobile dengan React Native.',
          'Implementasi navigasi dan screen flow yang intuitif untuk kemudahan interaksi pengguna.',
          'Integrasi API: pengiriman HTTP request ke backend Express.js dan pemrosesan response data.',
          'Penanganan form handling, input validation di sisi mobile, dan pengelolaan state aplikasi.',
          'Implementasi error handling dan debugging pada aplikasi mobile untuk menjaga stabilitas.',
        ],
        backendDetails: [
          'Pengembangan backend application dan penyediaan REST API terpusat dengan Node.js & Express.js.',
          'Implementasi routing modular, endpoint controllers, dan middleware pemrosesan request/response.',
          'Pemrosesan logika bisnis (business logic) dan server-side data processing.',
          'Pengelolaan interaksi database dan eksekusi query data sesuai kebutuhan fungsionalitas sistem.',
          'Penanganan validasi data masukan dari mobile dan CMS serta error handling terpusat.',
        ],
        frontendDetails: [
          'Pengembangan dashboard interface dan halaman Web CMS menggunakan Next.js.',
          'Pembuatan komponen antarmuka yang reusable untuk visualisasi dan pengelolaan data.',
          'Integrasi API: data fetching dan konsumsi endpoint backend Express.js untuk kebutuhan CMS.',
          'Implementasi data management interface, form input, dan pemrosesan aksi pengguna.',
          'Peningkatan responsivitas UI dan perbaikan bug antarmuka web.',
        ],
        architecture: {
          diagram: [
            'Mobile App (React Native)',
            'Web CMS (Next.js)',
            'Backend REST API (Node.js & Express.js)',
            'Database Storage',
          ],
          layers: [
            {
              title: 'Mobile Application Layer (React Native)',
              tech: 'React Native',
              responsibilities: [
                'Menyajikan antarmuka mobile yang responsif dan interaktif bagi pengguna.',
                'Menangani interaksi pengguna, form submission, dan navigasi layar.',
                'Mengirim request data dan memproses response dari backend Express.js.',
              ],
            },
            {
              title: 'Web CMS Layer (Next.js)',
              tech: 'Next.js / React',
              responsibilities: [
                'Menyediakan portal berbasis web untuk kebutuhan pengelolaan data dan konten sistem.',
                'Menyajikan dashboard informasi operasional yang mudah dikelola administrator.',
                'Melakukan data fetching dan konsumsi API dari backend service.',
              ],
            },
            {
              title: 'Backend Service Layer (Express.js)',
              tech: 'Node.js & Express.js',
              responsibilities: [
                'Menerima dan memproses HTTP request dari mobile app dan web CMS.',
                'Menjalankan business logic, validasi data, dan server-side processing.',
                'Melakukan query, penyimpanan, dan pengambilan data dari database.',
              ],
            },
            {
              title: 'Database Layer',
              tech: 'Database System',
              responsibilities: [
                'Menyimpan dan mengelola persistensi data aplikasi secara terstruktur.',
                'Menjamin ketersediaan data untuk diproses dan diambil oleh backend service.',
              ],
            },
          ],
        },
        dataFlow: [
          {
            flowTitle: 'Alur Data Aplikasi Mobile',
            steps: [
              'Pengguna berinteraksi melalui antarmuka mobile React Native.',
              'Aplikasi mobile mengirimkan request HTTP ke backend Express.js.',
              'Backend memvalidasi request dan memproses logika bisnis.',
              'Backend berinteraksi dengan database untuk query atau penyimpanan data.',
              'Backend mengirimkan response terstruktur kembali ke aplikasi mobile.',
              'Aplikasi mobile memproses response dan memperbarui tampilan kepada pengguna.',
            ],
          },
          {
            flowTitle: 'Alur Data Web CMS',
            steps: [
              'Administrator mengakses halaman antarmuka Web CMS Next.js.',
              'Melakukan aksi pengelolaan data atau peninjauan konten pada dashboard.',
              'Web CMS mengirimkan API request ke backend Express.js.',
              'Backend menjalankan server-side logic dan mengakses database.',
              'Backend mengembalikan status proses atau data terformat ke CMS.',
              'Web CMS menyajikan data hasil pembaruan secara visual kepada pengguna.',
            ],
          },
        ],
        technologies: [
          'React Native',
          'Next.js',
          'Node.js',
          'Express.js',
          'REST API',
          'Git',
        ],
        techCategories: {
          mobile: ['React Native'],
          frontend: ['Next.js', 'React'],
          backend: ['Node.js', 'Express.js', 'REST API'],
          tools: ['Git'],
        },
      },
      {
        id: 'customer-satisfaction-survey',
        title: 'Customer Satisfaction Survey',
        category: 'Survey Application / Web Application / Data Management',
        status: 'Professional Experience — KAI LRT Jabodebek',
        role: 'Fullstack / Web Developer',
        shortDescription:
          'Aplikasi Survey Kepuasan Pelanggan berbasis web di lingkungan KAI LRT Jabodebek untuk mengumpulkan, mengelola, dan mengolah feedback pelanggan dalam rangka pengukuran kualitas layanan.',
        context:
          'Proyek ini dikembangkan di lingkungan KAI LRT Jabodebek untuk mendukung digitalisasi proses survey pelanggan, memudahkan proses pengumpulan feedback secara langsung, serta memfasilitasi pengelolaan data survey terpusat.',
        challenge:
          'Merancang antarmuka kuesioner yang ringan dan mudah digunakan oleh pelanggan di berbagai perangkat, sambil memastikan setiap pengiriman data survey divalidasi dan tersimpan secara aman tanpa data yang duplikat atau corrupt.',
        approach:
          'Membangun antarmuka survey yang responsif dan user-friendly, mengimplementasikan endpoint backend untuk validasi data submission, serta menyusun pengelolaan data survey yang terstruktur.',
        contribution: [
          'Mengembangkan antarmuka formulir survey yang interaktif dan responsif untuk kemudahan pengisian kuesioner oleh pelanggan.',
          'Mengimplementasikan validasi input di sisi frontend untuk mencegah kesalahan pengisian dan memastikan kelengkapan data.',
          'Membangun logika backend untuk menangani pengiriman data (data submission handling) dan validasi data survey.',
          'Mengelola interaksi database untuk penyimpanan respon survey secara terstruktur dan aman.',
          'Mendukung pengolahan dan penarikan data survey untuk kebutuhan peninjauan hasil feedback.',
        ],
        frontendDetails: [
          'Pengembangan antarmuka formulir survey (survey form UI) yang jelas dan mudah dinavigasi oleh responden.',
          'Penyajian pertanyaan kuesioner secara bertahap dan intuitif.',
          'Validasi interaktif pada form pengisian sebelum data dikirimkan ke server.',
          'Integrasi API pengiriman data dan penanganan indikator status (berhasil/gagal).',
          'Pengoptimalan tampilan antarmuka agar dapat diakses dengan nyaman di perangkat mobile maupun desktop.',
        ],
        backendDetails: [
          'Penyediaan endpoint API untuk penerimaan payload data respon survey dari frontend.',
          'Validasi integritas data survey di sisi server sebelum proses penyimpanan ke database.',
          'Implementasi query database untuk pencatatan dan pengelolaan rekaman respon pelanggan.',
          'Penanganan error handling dan response handling untuk menjaga keandalan proses pengumpulan survey.',
          'Pemrosesan logika pengambilan data untuk kebutuhan rekapitulasi data survey.',
        ],
        dataManagement: [
          'Penyimpanan data respon kuesioner secara terstruktur.',
          'Pemisahan data pertanyaan dan data tanggapan responden untuk integritas informasi.',
          'Pengelolaan query penyimpanan dan penarikan data yang aman.',
        ],
        technologies: [
          'Web Application',
          'Backend API',
          'Data Management',
          'Form Processing',
          'REST API',
          'Git',
        ],
        techCategories: {
          frontend: ['Responsive Web UI', 'Survey Form Interface'],
          backend: ['Backend API', 'Submission Handling', 'Data Validation'],
          tools: ['Git'],
        },
      },
      {
        id: 'ats-monitoring',
        title: 'ATS Monitoring (Automatic Train Supervision)',
        category: 'Monitoring System / Operational Software / Data Visualization',
        status: 'Professional Experience — KAI LRT Jabodebek',
        role: 'IT Developer (Software & Interface)',
        shortDescription:
          'Aplikasi software monitoring di lingkungan KAI LRT Jabodebek untuk menyajikan dan memvisualisasikan informasi status operasional Automatic Train Supervision (ATS) bagi tim IT & operasional.',
        context:
          'Dalam operasional KAI LRT Jabodebek, pemantauan status sistem merupakan kebutuhan penting. Proyek ini berfokus pada pengembangan aplikasi perangkat lunak untuk visualisasi dan pemrosesan data monitoring agar informasi status operasional ATS dapat diakses dan dipantau dengan jelas oleh tim terkait.',
        challenge:
          'Menyajikan data informasi operasional yang kompleks ke dalam antarmuka monitoring yang mudah dibaca tanpa mengorbankan kejelasan status dan kemudahan pemantauan oleh tim operasional.',
        approach:
          'Mengembangkan aplikasi monitoring berbasis antarmuka visual yang terstruktur, membangun layanan backend untuk mengolah dan menyediakan data status operasional, serta menerapkan tata letak dashboard yang informatif.',
        contribution: [
          'Mengembangkan antarmuka monitoring (monitoring dashboard) untuk menyajikan status informasi operasional secara visual.',
          'Membangun layanan backend dan endpoint API untuk pemrosesan, pengambilan, dan penyediaan data monitoring.',
          'Mengimplementasikan penyajian visual status dan tabel pemantauan untuk keterbacaan data yang optimal.',
          'Menerapkan filter dan logika antarmuka untuk memudahkan peninjauan informasi operasional tertentu.',
          'Melakukan troubleshooting dan pemeliharaan fungsionalitas software monitoring.',
        ],
        frontendDetails: [
          'Pengembangan monitoring interface dan dashboard visual yang fokus pada kejelasan indikator informasi.',
          'Penyajian status operasional dalam format visual dan tabel data yang terstruktur.',
          'Implementasi data fetching untuk menarik data status operasional dari backend service.',
          'Penerapan fitur filtering dan navigasi data untuk mempermudah pencarian status operasional spesifik.',
          'Perancangan antarmuka responsif dan perbaikan tampilan visual untuk kenyamanan pemantauan.',
        ],
        backendDetails: [
          'Pengembangan backend service untuk memproses dan menyediakan data status monitoring.',
          'Implementasi API endpoint untuk kebutuhan penyaluran data ke antarmuka monitoring frontend.',
          'Eksekusi query dan pengambilan data operasional dari media penyimpanan sistem.',
          'Penanganan logika server-side untuk validasi dan penyesuaian format data sebelum disajikan.',
          'Pemeliharaan performa dan debugging backend service guna menjaga ketersediaan layanan.',
        ],
        technologies: [
          'Monitoring Interface',
          'Data Visualization',
          'Backend API',
          'Dashboard UI',
          'REST API',
          'Git',
        ],
        techCategories: {
          frontend: ['Monitoring Dashboard', 'Data Visualization UI', 'Status Display'],
          backend: ['Data Processing Service', 'Backend API', 'Data Retrieval'],
          tools: ['Git'],
        },
      },
      {
        id: 'simrs',
        title: 'Hospital Information System (HIS / SIMRS)',
        category: 'Healthcare Information System / Fullstack & Integration',
        status: 'Professional Experience — PT Terakorp Indonesia',
        role: 'Junior Programmer / Fullstack Developer (HIS)',
        shortDescription:
          'Pengembangan dan pemeliharaan sistem informasi rumah sakit (HIS/SIMRS) terintegrasi yang mencakup bridging voucher vendor, integrasi SATUSEHAT Kemenkes (FHIR) & BPJS, serta modul operasional Farmasi, Gudang, Rekam Medis Elektronik (RME), Billing, dan Keuangan.',
        context:
          'SIMRS teraMedik (PT Terakorp Indonesia) merupakan sistem enterprise rumah sakit skala penuh yang mengelola seluruh alur klinis dan operasional faskes. Dalam peran ini, saya bertanggung jawab mengembangkan fitur baru, modul operasional rumah sakit, serta integrasi eksternal vital seperti bridging voucher bersama vendor dan standardisasi data rekam medis nasional SATUSEHAT.',
        challenge:
          'Mengintegrasikan sistem dengan berbagai pihak ketiga (API vendor voucher eksternal dan platform nasional SATUSEHAT FHIR) dengan standar payload dan keamanan ketat, serta menjaga integritas data antar modul rumah sakit yang sangat saling bergantung (Farmasi, Gudang, RME, Billing) tanpa mengganggu pelayanan 24/7.',
        approach:
          'Merancang arsitektur bridging API yang modular dan andal, menerapkan validasi transaksi ketat sebelum persistensi ke PostgreSQL, menelusuri logika multi-modul berdasarkan tiket Helpdesk, serta mengimplementasikan antarmuka interaktif menggunakan JavaScript/jQuery/AJAX pada backend PHP Native & Laravel.',
        contribution: [
          'Mengembangkan dan memelihara aplikasi HIS/SIMRS menggunakan PHP Native, Laravel, JavaScript, jQuery, AJAX, PostgreSQL, dan Git.',
          'Mengimplementasikan bridging voucher dan integrasi API bersama vendor eksternal untuk klaim voucher dan transaksi promosi layanan faskes.',
          'Mengembangkan dan meningkatkan integrasi data SATUSEHAT Kemenkes berbasis standar FHIR serta integrasi sistem BPJS Kesehatan.',
          'Membangun dan memelihara modul operasional utama: Rekam Medis Elektronik (RME), Farmasi, Manajemen Inventaris Gudang, Billing, dan Keuangan.',
          'Mengembangkan fitur farmasi dan gudang untuk pelacakan stok otomatis, inventory movement, dan monitoring transaksi obat.',
          'Mengembangkan fitur dokumentasi kesehatan digital: form rekam medis, laporan klinis, dokumen elektronik, dan integrasi digital signature.',
          'Melakukan analisis sistem, troubleshooting, dan bug fixing intensif untuk menjaga keandalan dan akurasi data transaksi medis.',
          'Berkolaborasi aktif dengan tim Helpdesk dan stakeholder faskes guna menyelesaikan kebutuhan bisnis dan tiket dukungan sesuai target man-days.',
        ],
        backendDetails: [
          'Pengembangan layanan backend dan business logic menggunakan PHP Native dan framework Laravel.',
          'Implementasi integrasi bridging REST API untuk vendor voucher eksternal dan SATUSEHAT (FHIR).',
          'Pemrosesan transaksi database relasional kompleks dan optimasi query PostgreSQL untuk modul Billing, Farmasi, dan Gudang.',
          'Penanganan validasi data klinis, logging transaksi, dan mekanisme penanganan error pada komunikasi API eksternal.',
          'Penerapan logika otomatisasi pergerakan inventaris obat (stock movement) dan verifikasi status voucher.',
        ],
        frontendDetails: [
          'Pengembangan antarmuka dinamis modul RME, Billing, dan Farmasi menggunakan JavaScript, jQuery, dan AJAX.',
          'Pembuatan form digital kesehatan yang interaktif, validasi input pengguna, dan alur konfirmasi klaim voucher.',
          'Implementasi antarmuka pelaporan klinis, dokumen elektronik rekam medis, dan integrasi komponen digital signature.',
          'Pengoptimalan UX antarmuka agar staf medis dan kasir dapat menginput data secara cepat dan minim kesalahan.',
          'Perbaikan bug visual dan penyesuaian fungsionalitas antarmuka berdasarkan tiket feedback pengguna faskes.',
        ],
        architecture: {
          diagram: [
            'Client Modules (RME, Farmasi, Billing, Gudang)',
            'Vendor Voucher & SATUSEHAT (FHIR) / BPJS',
            'Backend Application (PHP Native / Laravel)',
            'Database PostgreSQL',
          ],
          layers: [
            {
              title: 'Client & Operational Module Layer',
              tech: 'JavaScript, jQuery, AJAX, HTML5/CSS',
              responsibilities: [
                'Menyajikan antarmuka pengguna untuk modul RME, Farmasi, Billing, Gudang, dan Keuangan.',
                'Menangani interaksi form rekam medis, verifikasi voucher vendor, dan pencarian inventaris obat via AJAX.',
                'Menyediakan antarmuka digital signature dan pratinjau dokumen klinis elektronik.',
              ],
            },
            {
              title: 'Integration & Bridging Layer',
              tech: 'REST API, JSON, HTTP Client',
              responsibilities: [
                'Menghubungkan SIMRS dengan API vendor voucher eksternal untuk verifikasi dan penukaran voucher.',
                'Melakukan pertukaran data klinis dengan SATUSEHAT Kemenkes menggunakan spesifikasi FHIR.',
                'Menangani interoperabilitas data layanan dan verifikasi rujukan dengan BPJS Kesehatan.',
              ],
            },
            {
              title: 'Backend & Business Logic Layer',
              tech: 'PHP Native, Laravel',
              responsibilities: [
                'Menjalankan logika bisnis perhitungan billing, transaksi farmasi, dan pergerakan stok gudang.',
                'Memvalidasi payload integrasi eksternal dan mengelola otentikasi serta audit trail transaksi.',
                'Memproses data form rekam medis dan mengelola alur dokumen klinis terintegrasi.',
              ],
            },
            {
              title: 'Database & Persistence Layer',
              tech: 'PostgreSQL',
              responsibilities: [
                'Menyimpan data rekam medis elektronik (RME), riwayat pasien, dan data klinis secara aman.',
                'Mengelola tabel transaksi inventaris obat, log pergerakan stok gudang, dan pembukuan keuangan.',
                'Menyimpan riwayat penukaran voucher vendor dan log sinkronisasi SATUSEHAT.',
              ],
            },
          ],
        },
        dataFlow: [
          {
            flowTitle: 'Alur Bridging Voucher Vendor',
            steps: [
              'Petugas kasir/pendaftaran memasukkan kode voucher yang dibawa pasien ke antarmuka SIMRS.',
              'Frontend mengirimkan request verifikasi ke modul backend PHP Native / Laravel via AJAX.',
              'Backend menghubungi REST API vendor voucher eksternal untuk memverifikasi validitas, nominal, dan masa aktif voucher.',
              'Setelah verifikasi vendor berhasil, backend memotong nominal tagihan di modul billing dan mencatat transaksi ke database PostgreSQL.',
              'Status voucher diperbarui menjadi "terpakai" di sistem vendor dan bukti potong diskon tercetak pada kwitansi SIMRS.',
            ],
          },
          {
            flowTitle: 'Alur Integrasi SATUSEHAT (FHIR)',
            steps: [
              'Dokter atau staf medis mengisi data pemeriksaan pasien pada modul Rekam Medis Elektronik (RME).',
              'Sistem backend memetakan data klinis lokal ke dalam format resource terstandar HL7 FHIR (seperti Encounter, Condition, Medication).',
              'Backend SIMRS mengirimkan payload data FHIR terenkripsi ke endpoint API SATUSEHAT Kementerian Kesehatan.',
              'Response ID resource dari SATUSEHAT disimpan ke database PostgreSQL sebagai referensi audit sinkronisasi.',
            ],
          },
        ],
        technologies: [
          'PHP Native',
          'Laravel',
          'JavaScript',
          'jQuery',
          'AJAX',
          'PostgreSQL',
          'REST API (Bridging)',
          'SATUSEHAT (FHIR)',
          'BPJS Integration',
          'Digital Signature',
          'Git',
        ],
        techCategories: {
          frontend: ['JavaScript', 'jQuery', 'AJAX', 'Digital Signature UI'],
          backend: ['PHP Native', 'Laravel', 'REST API (Bridging)'],
          database: ['PostgreSQL'],
          tools: ['Git', 'SATUSEHAT (FHIR)', 'BPJS Integration'],
        },
      },
    ],
  },

  skills: {
    eyebrow: 'TECH STACK SAYA',
    title: 'Teknologi & Alat',
    subtitle: 'Kumpulan teknologi dan alat yang saya gunakan untuk mengembangkan, mengintegrasikan, menguji, dan memelihara aplikasi perangkat lunak.',
    learningEyebrow: 'PENGEMBANGAN BERKELANJUTAN',
    learningTitle: 'Sedang Dipelajari',
    learningTag: 'PENGEMBANGAN BACKEND',
    categories: [
      {
        title: 'Bahasa Pemrograman',
        description: 'Bahasa yang digunakan untuk membangun logika aplikasi dan sistem backend.',
        technologies: [
          { name: 'PHP', icon: 'devicon-php-plain colored' },
          { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
          { name: 'Python', icon: 'devicon-python-plain colored' },
          { name: 'Go', icon: 'devicon-go-original-wordmark colored' },
          { name: 'Java', icon: 'devicon-java-plain colored' },
          { name: 'SQL', symbol: 'SQL' },
        ],
      },
      {
        title: 'Framework & Library',
        description: 'Framework dan library untuk pengembangan web dan mobile modern.',
        technologies: [
          { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
          { name: '.NET', icon: 'devicon-dotnetcore-plain colored' },
          { name: 'NestJS', icon: 'devicon-nestjs-original colored' },
          { name: 'Express.js', icon: 'devicon-express-original' },
          { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
          { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain colored' },
          { name: 'React.js', icon: 'devicon-react-original colored' },
          { name: 'React Native', icon: 'devicon-react-original colored' },
          { name: 'Next.js', icon: 'devicon-nextjs-plain' },
          { name: 'jQuery', icon: 'devicon-jquery-plain colored' },
        ],
      },
      {
        title: 'Database',
        description: 'Manajemen database relasional dan penanganan data.',
        technologies: [
          { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
          { name: 'MySQL', icon: 'devicon-mysql-original colored' },
          { name: 'MariaDB', icon: 'devicon-mariadb-original colored' },
          { name: 'Oracle', icon: 'devicon-oracle-original colored' },
        ],
      },
      {
        title: 'DevOps & CI/CD',
        description: 'Kontainerisasi, otomasi, dan alur kerja deployment.',
        technologies: [
          { name: 'Docker', icon: 'devicon-docker-plain colored' },
          { name: 'Jenkins', icon: 'devicon-jenkins-line colored' },
          { name: 'SonarQube', icon: 'devicon-sonarqube-original colored' },
          { name: 'CI/CD', symbol: 'CI/CD' },
        ],
      },
      {
        title: 'Pengembangan & Pengujian API',
        description: 'Integrasi API, pengujian request, dan komunikasi layanan.',
        technologies: [
          { name: 'Postman', icon: 'devicon-postman-plain colored' },
          { name: 'REST API', symbol: 'API' },
          { name: 'API Integration', symbol: '{ }' },
        ],
      },
      {
        title: 'Version Control & Kolaborasi',
        description: 'Manajemen kode sumber dan kolaborasi tim.',
        technologies: [
          { name: 'Git', icon: 'devicon-git-plain colored' },
          { name: 'GitHub', icon: 'devicon-github-original' },
          { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
        ],
      },
    ],
    learning: [
      {
        name: 'Go',
        icon: 'devicon-go-original-wordmark colored',
        description: 'Mengembangkan layanan backend dan mengeksplorasi arsitektur aplikasi yang skalabel.',
      },
    ],
  },

  certifications: {
    eyebrow: 'PENGEMBANGAN PROFESIONAL',
    title: 'Sertifikasi & Pelatihan',
    subtitle: 'Kumpulan pelatihan profesional, sertifikasi, dan pengalaman belajar sepanjang perjalanan teknis saya.',
    viewLabel: 'Lihat Sertifikat',
    badge: 'SERTIFIKASI',
    competenciesEyebrow: 'KOMPETENSI INTI',
    competenciesTitle: 'Keahlian Profesional',
    languagesEyebrow: 'KOMUNIKASI',
    languagesTitle: 'Bahasa',
    items: [
      {
        name: 'Fundamental Artificial Intelligence (AI)',
        issuer: 'Dicoding Indonesia',
        date: 'Oktober 2025',
        logo: '/images/certifications/dicoding.png',
        file: '/documents/certificates/dicoding-ai.pdf',
        logoAlt: 'Logo Dicoding',
      },
      {
        name: 'Fundamental Fullstack Developer',
        issuer: 'DumbWays.id',
        date: 'Juli 2024',
        logo: '/images/certifications/dumbways.png',
        file: '/documents/certificates/dumbways-fullstack.pdf',
        logoAlt: 'Logo DumbWays',
      },
      {
        name: 'Junior Web Programming',
        issuer: 'Disnaker Bandung / BNSP',
        date: 'Desember 2021',
        logo: '/images/certifications/bnsp.png',
        file: '/documents/certificates/bnsp-web.pdf',
        logoAlt: 'Logo BNSP',
      },
      {
        name: 'TOEIC Prediction Test – Skor 735',
        issuer: 'Merry English',
        date: 'Maret 2025',
        logo: '/images/certifications/ets.png',
        file: '/documents/certificates/toeic-b.pdf',
        logoAlt: 'Logo ETS',
      },
      {
        name: 'MikroTik Certified Network Associate (MTCNA)',
        issuer: 'Institut Digital Ekonomi LPKIA Bandung',
        date: 'Juli 2019',
        logo: '/images/certifications/mikrotik.png',
        file: '/documents/certificates/mikrotik-mtcna.pdf',
        logoAlt: 'Logo MikroTik',
      },
      {
        name: 'Microsoft Technology Associate – Database Administrator',
        issuer: 'Institut Digital Ekonomi LPKIA Bandung',
        date: 'Februari 2019',
        logo: '/images/certifications/microsoft.png',
        file: '/documents/certificates/microsoft-mta.pdf',
        logoAlt: 'Logo Microsoft',
      },
      {
        name: 'Java Programming',
        issuer: 'Oracle Academy – Institut Digital Ekonomi LPKIA',
        date: 'Juli 2018',
        logo: '/images/certifications/oracle-academy.png',
        file: '/documents/certificates/oracle-java.pdf',
        logoAlt: 'Logo Oracle Academy',
      },
    ],
    professionalSkills: [
      'Pemecahan Masalah & Pemikiran Analitis',
      'Berorientasi Detail & Pengambilan Keputusan',
      'Kolaborasi Tim & Komunikasi',
    ],
    languages: [
      { name: 'Bahasa Indonesia', level: 'Sangat Mahir' },
      { name: 'Bahasa Inggris', level: 'Profesional' },
    ],
  },

  education: {
    eyebrow: 'PENDIDIKAN',
    title: 'Latar belakang akademis dan fondasi belajar.',
    items: [
      {
        institution: 'Institut Digital Ekonomi LPKIA Bandung',
        degree: 'Sarjana Sistem Informasi',
        description:
          'Mempelajari sistem informasi yang menggabungkan teknologi, manajemen informasi, dan proses bisnis.',
        achievement: 'IPK: 3.15 / 4.00',
      },
      {
        institution: 'SMK Pasundan 1 Bandung',
        degree: 'Teknik Komputer dan Jaringan',
        description:
          'Membangun pengetahuan dasar tentang sistem komputer, jaringan, dan teknologi informasi.',
      },
    ],
  },

  contact: {
    title: 'Hubungi Saya',
    eyebrow: 'HUBUNGI SAYA',
    heading: 'Punya proyek atau peluang? Mari terhubung.',
    description: 'Saya terbuka untuk berdiskusi tentang proyek web, peluang peningkatan sistem, kolaborasi teknis, dan peluang profesional.',
    cta: 'Mulai Percakapan',
    name: 'Nama Anda',
    email: 'Email Anda',
    message: 'Pesan Anda',
    send: 'Kirim Pesan',
  },

  viewer: {
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    reset: 'Atur ulang zoom',
    close: 'Tutup',
    loading: 'Memuat dokumen…',
    error: 'Dokumen tidak dapat dimuat.',
    notice: 'Hanya untuk dilihat · Gunakan + / − atau Ctrl + scroll untuk zoom',
  },

  footer: {
    rights: 'Hak cipta dilindungi.',
    backTop: 'Kembali ke atas',
  },
}
