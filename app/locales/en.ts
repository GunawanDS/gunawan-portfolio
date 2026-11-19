
export default {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    certifications: 'Certifications',
    contact: 'Contact',
  },

  hero: {
    status: 'FULLSTACK DEVELOPMENT & SYSTEM ANALYSIS',
    greeting: "Hello, I'm",
    role: 'Fullstack Developer',
    headline: 'Building digital solutions through',
    headlineHighlight: 'technology and problem solving.',
    description:
      'I develop and maintain web applications, work with information systems, and solve technical challenges through system analysis, application development, and integration.',
    viewProjects: 'Explore My Work',
    contactMe: "Let's Connect",
    downloadCV: 'Download CV',

    overview: 'PROFESSIONAL OVERVIEW',

    services: [
      {
        title: 'Application Development',
        description:
          'Developing and maintaining web applications tailored to business requirements and user needs.',
      },
      {
        title: 'System Integration',
        description:
          'Connecting applications, APIs, and information systems to support efficient data exchange.',
      },
      {
        title: 'Analysis & Problem Solving',
        description:
          'Analyzing business processes, identifying technical issues, and delivering practical solutions.',
      },
    ],

    location: 'BASED IN BANDUNG, INDONESIA',
    specialty: 'WEB DEVELOPMENT',
  },


  about: {
    eyebrow: 'ABOUT ME',

    title: 'Bridging technology, systems, and business needs.',

    paragraphs: [
      'I am an Information Systems graduate with professional experience in web application development, IT operations, and information system improvement.',

      'My experience includes developing and maintaining Hospital Information Systems (HIS/SIMRS), handling application issues, supporting system integrations, and improving features based on operational requirements.',

      'I am also interested in understanding business processes and translating requirements into practical technology solutions. I enjoy combining analytical thinking with hands-on development to solve real-world problems.',
    ],

    stats: {
      yearsExp: 'Years Exp.',
      projects: 'Projects Built',
      certifications: 'Certifications',
      tech: 'Tech Stacks',
    },

    highlights: [
      {
        title: 'System Development',
        description:
          'Building, maintaining, and improving web-based information systems.',
      },
      {
        title: 'Technical Problem Solving',
        description:
          'Investigating application issues and implementing solutions based on system requirements.',
      },
      {
        title: 'Business & System Analysis',
        description:
          'Understanding operational workflows and identifying opportunities for system improvement.',
      },
    ],
  },


  experience: {
    viewProof: 'View Employment Letter',
    eyebrow: 'CAREER JOURNEY',
    title: 'Professional Experience',
    subtitle: 'My professional journey in software development, IT operations, and system improvement.',
    items: [
      {
        company: 'PT Terakorp Indonesia',
        logo: '/images/companies/terakorp.png',
        position: 'Junior Programmer / Fullstack Developer',
        period: 'December 2025 — Present',
        type: 'Professional Experience',
        description:
          'Contributing to the development and maintenance of Hospital Information System (SIMRS) applications to support hospital operational processes.',
        responsibilities: [
          'Developing and enhancing SIMRS features based on incoming development and improvement tickets.',
          'Investigating application issues, debugging code, and implementing solutions to resolve technical problems.',
          'Maintaining and improving features across pharmacy, warehouse, electronic medical records, finance, billing, and other hospital modules.',
          'Supporting integrations with external healthcare services, including SATUSEHAT and BPJS.',
          'Adjusting application functionality to meet hospital-specific operational requirements.',
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
        period: 'July 2024 — December 2025',
        type: 'Professional Experience',
        proof: '/documents/experience/kai-lrt.pdf',
        description:
          'Designed and developed backend services, integrated frontend interfaces, and built CI/CD pipelines for internal applications at KAI Division LRT Jabodebek.',
        responsibilities: [
          'Designed and developed backend services with Express.js, using indexing, partitioning, and paginated APIs for scalability and performance.',
          'Integrated dynamic frontend interfaces with React.js and Next.js, collaborating with UI teams for seamless API connectivity.',
          'Implemented automated CI/CD pipelines using GitLab CI, Jenkins, and SonarQube to improve deployment efficiency and code quality.',
          'Used Docker to streamline development environments and keep them consistent across teams.',
          'Contributed to system architecture planning and backend optimization aligned with business growth.',
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
        period: 'June 2022 — April 2024',
        type: 'Professional Experience',
        description:
          'Providing technical support and assisting users in maintaining reliable IT operations.',
        responsibilities: [
          'Handling user-reported technical issues and troubleshooting.',
          'Providing technical assistance for application and system operations.',
          'Monitoring incidents and following up on reported problems.',
          'Documenting issues and coordinating escalation when necessary.',
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
    eyebrow: 'SELECTED PROJECTS',
    title: 'Work and projects that reflect how I solve problems.',
    subtitle: 'A selection of professional contributions and personal work across application development, system improvement, and technology exploration.',
    labels: {
      context: 'Context',
      challenge: 'Challenge',
      approach: 'Approach',
      contribution: 'My Contribution',
    },
    items: [
      {
        title: 'Hospital Information System (SIMRS)',
        category: 'Healthcare Information System',
        status: 'Professional Contribution',
        context:
          'Contributing to the development and maintenance of a Hospital Information System that supports hospital operational workflows.',
        challenge:
          'Hospital operations involve interconnected modules and different requirements. Feature requests, application issues, and workflow adjustments need to be handled while maintaining existing functionality.',
        approach:
          'Review reported tickets, understand the affected workflow, trace the related application logic, and identify the changes needed before implementation.',
        contribution: [
          'Developing and enhancing application features based on incoming tickets.',
          'Debugging and resolving issues reported by users or identified during development.',
          'Maintaining features across pharmacy, warehouse, medical records, finance, billing, and other modules.',
          'Adjusting application behavior to accommodate hospital-specific operational requirements.',
          'Supporting integrations with healthcare services such as SATUSEHAT and BPJS.',
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
          'Contributing to internal application development, data integration, monitoring reports, and IT implementation activities in an enterprise environment.',
        challenge:
          'Operational teams need reliable internal applications and information that can support monitoring and day-to-day activities.',
        approach:
          'Support application improvements, understand data flows between systems, and assist with IT planning and implementation activities.',
        contribution: [
          'Supporting the development and improvement of internal web applications.',
          'Working on data integration between information systems.',
          'Supporting operational and IT monitoring reports.',
          'Assisting IT planning and implementation activities.',
          'Maintaining existing application functionality.',
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
    eyebrow: 'MY TECHNICAL STACK',
    title: 'Technologies & Tools',
    subtitle: 'A collection of technologies and tools I use to develop, integrate, test, and maintain software applications.',
    learningEyebrow: 'CONTINUOUS DEVELOPMENT',
    learningTitle: 'Currently Exploring',
    learningTag: 'BACKEND DEVELOPMENT',
    categories: [
      {
        title: 'Programming Languages',
        description: 'Languages used to build application logic and backend systems.',
        technologies: [
          { name: 'PHP', icon: 'devicon-php-plain colored' },
          { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
          { name: 'Java', icon: 'devicon-java-plain colored' },
          { name: 'SQL', symbol: 'SQL' },
        ],
      },
      {
        title: 'Frameworks & Libraries',
        description: 'Frameworks and libraries for modern web development.',
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
        title: 'Databases',
        description: 'Relational database management and data handling.',
        technologies: [
          { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
          { name: 'MySQL', icon: 'devicon-mysql-original colored' },
        ],
      },
      {
        title: 'DevOps & CI/CD',
        description: 'Containerization, automation, and deployment workflows.',
        technologies: [
          { name: 'Docker', icon: 'devicon-docker-plain colored' },
          { name: 'Jenkins', icon: 'devicon-jenkins-line colored' },
          { name: 'SonarQube', icon: 'devicon-sonarqube-original colored' },
          { name: 'CI/CD', symbol: 'CI/CD' },
        ],
      },
      {
        title: 'API Development & Testing',
        description: 'API integration, request testing, and service communication.',
        technologies: [
          { name: 'Postman', icon: 'devicon-postman-plain colored' },
          { name: 'REST API', symbol: 'API' },
          { name: 'API Integration', symbol: '{ }' },
        ],
      },
      {
        title: 'Version Control & Collaboration',
        description: 'Source code management and team collaboration.',
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
        description: 'Developing backend services and exploring scalable application architecture.',
      },
    ],
  },

  certifications: {
    eyebrow: 'PROFESSIONAL DEVELOPMENT',
    title: 'Certifications & Training',
    subtitle: 'A collection of professional training, certifications, and learning experiences throughout my technical journey.',
    viewLabel: 'View Certificate',
    badge: 'CERTIFICATION',
    competenciesEyebrow: 'CORE COMPETENCIES',
    competenciesTitle: 'Professional Skills',
    languagesEyebrow: 'COMMUNICATION',
    languagesTitle: 'Languages',
    items: [
      {
        name: 'Fundamental Artificial Intelligence (AI)',
        issuer: 'Dicoding Indonesia',
        date: 'October 2025',
        logo: '/images/certifications/dicoding.png',
        file: '/documents/certificates/dicoding-ai.pdf',
        logoAlt: 'Dicoding logo',
      },
      {
        name: 'Fundamental Fullstack Developer',
        issuer: 'DumbWays.id',
        date: 'July 2024',
        logo: '/images/certifications/dumbways.png',
        file: '/documents/certificates/dumbways-fullstack.pdf',
        logoAlt: 'DumbWays logo',
      },
      {
        name: 'Junior Web Programming',
        issuer: 'Disnaker Bandung / BNSP',
        date: 'December 2021',
        logo: '/images/certifications/bnsp.png',
        file: '/documents/certificates/bnsp-web.pdf',
        logoAlt: 'BNSP logo',
      },
      {
        name: 'TOEIC Prediction Test – Score 735',
        issuer: 'Merry English',
        date: 'March 2025',
        logo: '/images/certifications/ets.png',
        file: '/documents/certificates/toeic-b.pdf',
        logoAlt: 'ETS logo',
      },
      {
        name: 'MikroTik Certified Network Associate (MTCNA)',
        issuer: 'Institut Digital Ekonomi LPKIA Bandung',
        date: 'July 2019',
        logo: '/images/certifications/mikrotik.png',
        file: '/documents/certificates/mikrotik-mtcna.pdf',
        logoAlt: 'MikroTik logo',
      },
      {
        name: 'Microsoft Technology Associate – Database Administrator',
        issuer: 'Institut Digital Ekonomi LPKIA Bandung',
        date: 'February 2019',
        logo: '/images/certifications/microsoft.png',
        file: '/documents/certificates/microsoft-mta.pdf',
        logoAlt: 'Microsoft logo',
      },
      {
        name: 'Java Programming',
        issuer: 'Oracle Academy – Institut Digital Ekonomi LPKIA',
        date: 'July 2018',
        logo: '/images/certifications/oracle-academy.png',
        file: '/documents/certificates/oracle-java.pdf',
        logoAlt: 'Oracle Academy logo',
      },
    ],
    professionalSkills: [
      'Problem Solving & Analytical Thinking',
      'Detail-Oriented & Decision Making',
      'Team Collaboration & Communication',
    ],
    languages: [
      { name: 'Bahasa Indonesia', level: 'Fluent' },
      { name: 'English', level: 'Proficient' },
    ],
  },

  education: {
    eyebrow: 'EDUCATION',
    title: 'Academic background and learning foundation.',
    viewDiploma: 'View Diploma',
    items: [
      {
        institution: 'Institut Digital Ekonomi LPKIA Bandung',
        degree: 'Bachelor of Information Systems',
        description:
          'Studied information systems, combining technology, information management, and business processes.',
        achievement: 'GPA: 3.15 / 4.00',
        proof: '/documents/education/ijazah-s1.pdf',
      },
      {
        institution: 'SMK Pasundan 1 Bandung',
        degree: 'Computer and Network Engineering',
        description:
          'Developed foundational knowledge of computer systems, networking, and information technology.',
      },
    ],
  },

  contact: {
    title: 'Get In Touch',
    eyebrow: 'GET IN TOUCH',
    heading: "Have a project or opportunity in mind? Let's connect.",
    description: "I'm open to discussing web development projects, system improvement opportunities, technical collaboration, and professional opportunities.",
    cta: 'Start a Conversation',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    send: 'Send Message',
  },

  viewer: {
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    reset: 'Reset zoom',
    close: 'Close',
    loading: 'Loading document…',
    error: 'The document could not be loaded.',
    notice: 'View only · Use + / − or Ctrl + scroll to zoom',
  },

  footer: {
    rights: 'All rights reserved.',
    backTop: 'Back to top',
  },
}
