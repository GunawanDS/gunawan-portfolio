
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
    viewProof: 'Lihat Surat Keterangan Kerja',
    eyebrow: 'PERJALANAN KARIR',
    title: 'Pengalaman Profesional',
    subtitle: 'Perjalanan profesional saya dalam pengembangan perangkat lunak, operasional IT, dan peningkatan sistem.',
    items: [
      {
        company: 'PT Terakorp Indonesia',
        logo: '/images/companies/terakorp.png',
        position: 'Junior Programmer / Fullstack Developer',
        period: 'Desember 2025 — Sekarang',
        type: 'Pengalaman Profesional',
        description:
          'Berkontribusi dalam pengembangan dan pemeliharaan aplikasi Hospital Information System (SIMRS) untuk mendukung proses operasional rumah sakit.',
        responsibilities: [
          'Mengembangkan dan meningkatkan fitur SIMRS berdasarkan tiket pengembangan dan perbaikan yang masuk.',
          'Menginvestigasi masalah aplikasi, melakukan debugging, dan mengimplementasikan solusi untuk menyelesaikan masalah teknis.',
          'Memelihara dan meningkatkan fitur di modul farmasi, gudang, rekam medis elektronik, keuangan, billing, dan modul rumah sakit lainnya.',
          'Mendukung integrasi dengan layanan kesehatan eksternal, termasuk SATUSEHAT dan BPJS.',
          'Menyesuaikan fungsionalitas aplikasi untuk memenuhi kebutuhan operasional rumah sakit.',
        ],
        technologies: [
          'PHP Native',
          'Laravel',
          'JavaScript',
          'jQuery',
          'AJAX',
          'PostgreSQL',
          'Git',
        ],
      },
      {
        company: 'KAI LRT Jabodebek',
        logo: '/images/companies/kai.png',
        position: 'IT Planning & Development',
        period: 'Juli 2024 — Desember 2025',
        type: 'Pengalaman Profesional',
        proof: '/documents/experience/kai-lrt.pdf',
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
        proof: '/documents/experience/value-stream.pdf',
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
        title: 'Hospital Information System (SIMRS)',
        category: 'Healthcare Information System',
        status: 'Professional Contribution — PT Terakorp Indonesia',
        role: 'Junior Programmer / Fullstack Developer',
        shortDescription:
          'Pengembangan dan pemeliharaan sistem informasi rumah sakit (SIMRS) komprehensif yang mengelola alur kerja operasional, modul klinis, dan integrasi layanan kesehatan.',
        context:
          'Berkontribusi dalam pengembangan dan pemeliharaan Hospital Information System yang mendukung alur kerja operasional rumah sakit.',
        challenge:
          'Operasi rumah sakit melibatkan modul yang saling terhubung dan kebutuhan yang berbeda-beda. Permintaan fitur, masalah aplikasi, dan penyesuaian alur kerja perlu ditangani sambil mempertahankan fungsionalitas yang ada.',
        approach:
          'Meninjau tiket yang masuk, memahami alur kerja yang terdampak, menelusuri logika aplikasi terkait, dan mengidentifikasi perubahan yang diperlukan sebelum implementasi.',
        contribution: [
          'Mengembangkan dan meningkatkan fitur aplikasi berdasarkan tiket yang masuk.',
          'Melakukan debugging dan menyelesaikan masalah yang dilaporkan pengguna atau ditemukan saat pengembangan.',
          'Memelihara fitur di modul farmasi, gudang, rekam medis, keuangan, billing, dan modul lainnya.',
          'Menyesuaikan perilaku aplikasi untuk mengakomodasi kebutuhan operasional rumah sakit.',
          'Mendukung integrasi dengan layanan kesehatan seperti SATUSEHAT dan BPJS.',
        ],
        technologies: [
          'PHP Native',
          'Laravel',
          'JavaScript',
          'jQuery',
          'AJAX',
          'PostgreSQL',
          'Git',
        ],
        techCategories: {
          frontend: ['JavaScript', 'jQuery', 'AJAX'],
          backend: ['PHP Native', 'Laravel'],
          database: ['PostgreSQL'],
          tools: ['Git'],
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
          { name: 'Java', icon: 'devicon-java-plain colored' },
          { name: 'SQL', symbol: 'SQL' },
        ],
      },
      {
        title: 'Framework & Library',
        description: 'Framework dan library untuk pengembangan web modern.',
        technologies: [
          { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
          { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
          { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain colored' },
          { name: 'jQuery', icon: 'devicon-jquery-plain colored' },
          { name: 'Express.js', icon: 'devicon-express-original' },
          { name: 'React.js', icon: 'devicon-react-original colored' },
          { name: 'Next.js', icon: 'devicon-nextjs-plain' },
        ],
      },
      {
        title: 'Database',
        description: 'Manajemen database relasional dan penanganan data.',
        technologies: [
          { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
          { name: 'MySQL', icon: 'devicon-mysql-original colored' },
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
      { name: 'Bahasa Indonesia', level: 'Fasih' },
      { name: 'English', level: 'Mahir' },
    ],
  },

  education: {
    eyebrow: 'PENDIDIKAN',
    title: 'Latar belakang akademis dan fondasi belajar.',
    viewDiploma: 'Lihat Ijazah',
    items: [
      {
        institution: 'Institut Digital Ekonomi LPKIA Bandung',
        degree: 'Sarjana Sistem Informasi',
        description:
          'Mempelajari sistem informasi yang menggabungkan teknologi, manajemen informasi, dan proses bisnis.',
        achievement: 'IPK: 3.15 / 4.00',
        proof: '/documents/education/ijazah-s1.pdf',
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
