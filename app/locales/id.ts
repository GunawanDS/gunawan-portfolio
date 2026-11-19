
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
    subtitle: 'Kumpulan kontribusi profesional dan proyek pribadi dalam pengembangan aplikasi, peningkatan sistem, dan eksplorasi teknologi.',
    labels: {
      context: 'Konteks',
      challenge: 'Tantangan',
      approach: 'Pendekatan',
      contribution: 'Kontribusi Saya',
    },
    items: [
      {
        title: 'Hospital Information System (SIMRS)',
        category: 'Healthcare Information System',
        status: 'Professional Contribution',
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
      },
      {
        title: 'Enterprise Application & IT Planning',
        category: 'Enterprise IT',
        status: 'Professional Contribution',
        context:
          'Berkontribusi dalam pengembangan aplikasi internal, integrasi data, laporan pemantauan, dan kegiatan implementasi IT di lingkungan enterprise.',
        challenge:
          'Tim operasional membutuhkan aplikasi internal yang andal dan informasi yang dapat mendukung pemantauan dan kegiatan sehari-hari.',
        approach:
          'Mendukung peningkatan aplikasi, memahami alur data antar sistem, dan membantu kegiatan perencanaan dan implementasi IT.',
        contribution: [
          'Mendukung pengembangan dan peningkatan aplikasi web internal.',
          'Mengerjakan integrasi data antar sistem informasi.',
          'Mendukung laporan pemantauan operasional dan IT.',
          'Membantu kegiatan perencanaan dan implementasi IT.',
          'Memelihara fungsionalitas aplikasi yang ada.',
        ],
        technologies: [
          'Express.js',
          'React.js',
          'Next.js',
          'Docker',
          'CI/CD',
        ],
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
