
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
    eyebrow: 'CAREER JOURNEY',
    title: 'Professional Experience',
    subtitle: 'My professional journey in software development, IT operations, and system improvement.',
    items: [
      {
        company: 'PT Terakorp Indonesia',
        logo: '/images/companies/terakorp.png',
        position: 'Junior Programmer / Fullstack Developer (HIS)',
        period: 'December 2025 — Present',
        type: 'Contract — Professional Experience',
        description:
          'Developing and maintaining Hospital Information System (HIS / SIMRS) applications, including third-party voucher vendor bridging, SATUSEHAT (FHIR) & BPJS integrations, operational modules for Pharmacy, Warehouse Inventory, Electronic Medical Records (EMR), and Billing.',
        responsibilities: [
          'Developed and maintained Hospital Information System (HIS/SIMRS) applications using PHP Native, Laravel, JavaScript, jQuery, AJAX, PostgreSQL, and Git.',
          'Implemented and enhanced SATUSEHAT (FHIR) and BPJS Healthcare integrations to support healthcare interoperability and hospital services.',
          'Built voucher bridging systems and API integrations in collaboration with external vendors to streamline hospital service promotions and transactions.',
          'Developed operational modules including Electronic Medical Records (EMR), Pharmacy, Warehouse Inventory, Finance, Billing, and Clinical Documentation.',
          'Built pharmacy and warehouse features for stock management, inventory tracking, stock movement, and medication transaction monitoring.',
          'Developed digital healthcare documentation features, including medical forms, clinical reports, electronic documents, and digital signature integration.',
          'Performed system analysis, troubleshooting, debugging, and bug fixing to improve application performance, reliability, and data accuracy.',
          'Collaborated with Helpdesk and stakeholders to deliver new features and enhancements based on business requirements and support tickets.',
          'Consistently delivered development tasks within project timelines, man-days targets, and production deadlines in a fast-paced healthcare environment.',
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
        period: 'July 2024 — December 2025',
        type: 'Professional Experience',
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
    subtitle: 'Documentation of professional contributions across enterprise software, monitoring systems, web CMS, and mobile application development in KAI LRT Jabodebek and Healthcare environments.',
    labels: {
      context: 'Context',
      challenge: 'Challenge',
      approach: 'Approach',
      contribution: 'My Contribution',
      viewDetail: 'View Project Details',
      closeModal: 'Close Details',
      role: 'Role',
      techStack: 'Tech Stack',
      backendContribution: 'Backend Contribution',
      frontendContribution: 'Frontend Contribution',
      mobileContribution: 'Mobile Contribution',
      dataManagement: 'Data & Database Management',
      systemArchitecture: 'System Architecture',
      dataFlow: 'Data Flow',
      systemLayers: 'Layer Responsibilities',
    },
    items: [
      {
        id: 'immax',
        title: 'IMMAX',
        category: 'Mobile Application / Web CMS / Fullstack Development',
        status: 'Professional Experience — KAI LRT Jabodebek',
        role: 'Fullstack Developer (Mobile, Backend & CMS)',
        shortDescription:
          'A multi-platform application ecosystem built in KAI LRT Jabodebek consisting of a React Native mobile application, a Next.js web-based CMS, and a Node.js/Express.js backend service.',
        context:
          'IMMAX is an application ecosystem developed at KAI LRT Jabodebek to facilitate user interactions via mobile devices and operational content/data management through a web CMS, backed by a unified backend service.',
        challenge:
          'Connecting two different client platforms (React Native mobile and Next.js web CMS) to a consistent backend architecture, maintaining clean request/response contracts, and processing server-side business logic without conflicts.',
        approach:
          'Engineered a modular REST API backend with Node.js and Express.js as the central communication hub, established structured routing and middlewares, integrated client data fetching in React Native, and built administrative management interfaces in Next.js.',
        contribution: [
          'Developed mobile application user interfaces and navigation screen flows with React Native.',
          'Built REST API endpoints, routing, middleware, and request processing logic using Node.js & Express.js.',
          'Developed Web CMS pages and data management interfaces using Next.js.',
          'Implemented input data validation and structured JSON response handling for mobile and CMS consumption.',
          'Conducted debugging, troubleshooting, and cross-layer communication fixes to maintain system reliability.',
        ],
        mobileDetails: [
          'Mobile screen development and UI component implementation using React Native.',
          'Intuitive navigation and screen flow implementation for seamless user interaction.',
          'API integration: sending HTTP requests to the Express.js backend and processing response payloads.',
          'Form handling, mobile input validation, and application state management.',
          'Mobile debugging and error handling to ensure client stability across devices.',
        ],
        backendDetails: [
          'Backend application development and centralized REST API services with Node.js & Express.js.',
          'Modular route structures, endpoint controllers, and request/response middleware implementation.',
          'Server-side business logic execution and data processing.',
          'Database query execution and interaction handling aligned with functional requirements.',
          'Input validation for mobile/CMS submissions and structured error handling.',
        ],
        frontendDetails: [
          'Dashboard interface development and Web CMS pages built with Next.js.',
          'Reusable UI component creation for operational data management and visualization.',
          'API integration: data fetching and consumption of backend Express.js endpoints.',
          'Data management workflows, form submissions, and administrative user action processing.',
          'UI enhancements, responsive improvements, and frontend bug fixing.',
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
                'Presents an interactive and responsive mobile interface for end users.',
                'Handles user interactions, form submissions, and screen navigation.',
                'Dispatches API requests and processes server responses from Express.js.',
              ],
            },
            {
              title: 'Web CMS Layer (Next.js)',
              tech: 'Next.js / React',
              responsibilities: [
                'Provides a web-based administrative portal for content and operational data management.',
                'Displays operational dashboards for system administrators.',
                'Fetches data and consumes endpoints from the backend service.',
              ],
            },
            {
              title: 'Backend Service Layer (Express.js)',
              tech: 'Node.js & Express.js',
              responsibilities: [
                'Receives and processes incoming HTTP requests from mobile app and web CMS.',
                'Executes business logic, input validation, and server-side computations.',
                'Communicates with database storage for persistent data transactions.',
              ],
            },
            {
              title: 'Database Layer',
              tech: 'Database System',
              responsibilities: [
                'Stores and maintains persistent structured records for the ecosystem.',
                'Ensures reliable data retrieval and storage operations for backend services.',
              ],
            },
          ],
        },
        dataFlow: [
          {
            flowTitle: 'Mobile Application Data Flow',
            steps: [
              'User interacts with the React Native mobile application.',
              'Mobile client dispatches an HTTP request to the Express.js backend API.',
              'Backend validates incoming parameters and executes relevant business logic.',
              'Backend performs database queries or transactions as required.',
              'Backend sends back a structured JSON response to the mobile client.',
              'Mobile application parses the response and updates UI views accordingly.',
            ],
          },
          {
            flowTitle: 'Web CMS Data Flow',
            steps: [
              'Administrator accesses the Next.js Web CMS interface.',
              'Performs management operations or reviews data via dashboard views.',
              'Web CMS issues API calls to the Express.js backend service.',
              'Backend handles server-side logic and queries persistent database storage.',
              'Backend returns operational status and formatted data payloads.',
              'Web CMS presents the updated datasets and confirmation status to the administrator.',
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
          'A web-based Customer Satisfaction Survey application developed at KAI LRT Jabodebek to collect, manage, and process passenger feedback for service quality evaluation.',
        context:
          'Developed within KAI LRT Jabodebek to support the digitalization of passenger feedback collection, enabling structured questionnaire responses and centralized data administration.',
        challenge:
          'Creating a lightweight, user-friendly questionnaire accessible across various mobile and desktop browsers while ensuring submitted survey records are validated and stored reliably without duplicate entries.',
        approach:
          'Engineered a responsive, accessible survey interface, established backend validation endpoints for incoming responses, and structured survey data management for accurate recordkeeping.',
        contribution: [
          'Developed interactive, responsive survey form interfaces for streamlined respondent feedback entry.',
          'Implemented client-side input validation to minimize input errors and ensure survey completeness.',
          'Built backend logic for submission handling, payload validation, and database storage.',
          'Managed database queries to reliably record customer evaluation responses.',
          'Supported survey data retrieval workflows for feedback review and operational summaries.',
        ],
        frontendDetails: [
          'Survey questionnaire UI development with clear, accessible question flows.',
          'Progressive and intuitive question presentation for high completion rates.',
          'Interactive client-side validation prior to dispatching responses to the server.',
          'API integration for survey submission with status indicators (success/error handling).',
          'Responsive design optimizations ensuring seamless operation on smartphones and desktop browsers.',
        ],
        backendDetails: [
          'API endpoints implemented to receive survey response payloads from client forms.',
          'Server-side validation of response structures before database persistence.',
          'Database query implementation for persistent logging of customer evaluation records.',
          'Error handling and response formatting to maintain high availability during surveys.',
          'Data retrieval logic implementation for administrative survey result summaries.',
        ],
        dataManagement: [
          'Structured storage of survey response records.',
          'Logical separation between question configurations and submitted responses.',
          'Safe query implementation for data storage and extraction.',
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
          'An operational software application at KAI LRT Jabodebek built to visualize and present Automatic Train Supervision (ATS) operational status data for IT and monitoring teams.',
        context:
          'Within KAI LRT Jabodebek operations, visibility into system status is essential. This project focused on developing a software application to process, visualize, and present ATS operational monitoring information for authorized operational teams.',
        challenge:
          'Displaying complex operational status parameters into a clean, legible dashboard layout without sacrificing essential monitoring indicators needed by operational personnel.',
        approach:
          'Developed a structured monitoring interface, engineered backend data-handling services to process and supply operational status records, and implemented high-contrast monitoring dashboards.',
        contribution: [
          'Developed monitoring dashboard interfaces to visually present operational status information.',
          'Engineered backend services and API endpoints to retrieve, process, and deliver monitoring data.',
          'Implemented structured status indicators and monitoring tables for optimal readability.',
          'Built filtering and interface logic to allow quick inspection of specific operational data points.',
          'Troubleshot and maintained software stability for continuous monitoring utility.',
        ],
        frontendDetails: [
          'Monitoring dashboard UI development focusing on clean visual status indicators.',
          'Operational status presentation in structured visual components and organized tables.',
          'Client data fetching implementation to retrieve status updates from backend services.',
          'Data filtering capabilities and intuitive navigation for operational review.',
          'Responsive interface engineering for convenient viewing on diverse monitoring displays.',
        ],
        backendDetails: [
          'Backend service development to process and serve operational monitoring datasets.',
          'API endpoint implementation to route monitoring information to frontend client dashboards.',
          'Execution of database retrieval queries from system data storage.',
          'Server-side validation and formatting of operational payloads prior to display.',
          'Service maintenance, troubleshooting, and backend performance monitoring.',
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
          'Development and maintenance of an enterprise Hospital Information System (HIS / SIMRS) covering third-party voucher vendor bridging, SATUSEHAT (FHIR) & BPJS integrations, and operational modules for Pharmacy, Warehouse Inventory, Electronic Medical Records (EMR), Billing, and Finance.',
        context:
          'teraMedik SIMRS (PT Terakorp Indonesia) is a comprehensive enterprise hospital management platform supporting end-to-end clinical and administrative operations. In this role, I was responsible for delivering new features, maintaining mission-critical modules, and implementing vital third-party integrations such as vendor voucher bridging and national electronic medical record compliance via SATUSEHAT.',
        challenge:
          'Integrating with diverse external platforms (third-party voucher vendor APIs and the national SATUSEHAT FHIR platform) adhering to stringent payload formats and data security standards, while ensuring transactional data integrity across interdependent core hospital modules (Pharmacy, Warehouse, EMR, Billing) in an uninterrupted 24/7 healthcare environment.',
        approach:
          'Architected modular and resilient REST API bridging layers, enforced transactional database validation prior to PostgreSQL persistence, traced multi-module dependencies from Helpdesk tickets, and implemented responsive frontend interfaces using JavaScript/jQuery/AJAX on PHP Native & Laravel backends.',
        contribution: [
          'Developed and maintained Hospital Information System (HIS/SIMRS) applications using PHP Native, Laravel, JavaScript, jQuery, AJAX, PostgreSQL, and Git.',
          'Implemented third-party voucher bridging systems and API integrations in collaboration with external vendors for healthcare service promotions and redemption.',
          'Enhanced and maintained national SATUSEHAT healthcare integrations based on HL7 FHIR standards, along with BPJS Healthcare systems.',
          'Built and maintained operational modules including Electronic Medical Records (EMR), Pharmacy, Warehouse Inventory, Finance, Billing, and Clinical Documentation.',
          'Built pharmacy and warehouse features for automated stock management, inventory tracking, stock movements, and medication transaction monitoring.',
          'Developed digital healthcare documentation features including medical forms, clinical reports, electronic documents, and digital signature integration.',
          'Performed systematic analysis, troubleshooting, debugging, and bug fixing to improve application performance, reliability, and transactional data accuracy.',
          'Collaborated closely with Helpdesk teams and hospital stakeholders to deliver new features and resolve support tickets within target man-days.',
        ],
        backendDetails: [
          'Developed backend services and operational business logic using PHP Native and the Laravel framework.',
          'Implemented REST API bridging integrations for external voucher vendors and SATUSEHAT (FHIR).',
          'Handled complex relational database transactions and optimized PostgreSQL queries across Billing, Pharmacy, and Warehouse modules.',
          'Managed clinical data validation, transaction auditing, and resilient error-handling mechanisms for external API communications.',
          'Engineered inventory tracking automation (stock movements) and real-time voucher status verification.',
        ],
        frontendDetails: [
          'Developed dynamic web interfaces for EMR, Billing, and Pharmacy modules utilizing JavaScript, jQuery, and AJAX.',
          'Constructed interactive medical forms, user input validations, and seamless voucher verification flows.',
          'Implemented clinical reporting interfaces, digital medical record previews, and integrated digital signature components.',
          'Optimized UI/UX responsiveness enabling medical personnel and cashiers to process data rapidly with minimal input errors.',
          'Resolved visual and functional bugs across modules based on user feedback and support tickets.',
        ],
        architecture: {
          diagram: [
            'Client Modules (EMR, Pharmacy, Billing, Warehouse)',
            'Vendor Voucher & SATUSEHAT (FHIR) / BPJS',
            'Backend Application (PHP Native / Laravel)',
            'Database PostgreSQL',
          ],
          layers: [
            {
              title: 'Client & Operational Module Layer',
              tech: 'JavaScript, jQuery, AJAX, HTML5/CSS',
              responsibilities: [
                'Presents interactive web interfaces for EMR, Pharmacy, Billing, Warehouse, and Finance modules.',
                'Handles medical form interactions, voucher verification, and real-time inventory search via AJAX.',
                'Provides digital signature interfaces and electronic clinical document previews.',
              ],
            },
            {
              title: 'Integration & Bridging Layer',
              tech: 'REST API, JSON, HTTP Client',
              responsibilities: [
                'Bridges the HIS system with external voucher vendor APIs for validation and redemption.',
                'Standardizes and exchanges clinical healthcare data with SATUSEHAT using HL7 FHIR resources.',
                'Handles healthcare service data interoperability and referral checks with BPJS Kesehatan.',
              ],
            },
            {
              title: 'Backend & Business Logic Layer',
              tech: 'PHP Native, Laravel',
              responsibilities: [
                'Executes business logic for billing calculations, pharmacy dispensing, and warehouse stock movements.',
                'Validates external integration payloads, user authorization, and maintains audit trails.',
                'Processes clinical medical forms and manages integrated healthcare documentation workflows.',
              ],
            },
            {
              title: 'Database & Persistence Layer',
              tech: 'PostgreSQL',
              responsibilities: [
                'Persists Electronic Medical Records (EMR), patient history, and clinical documentation securely.',
                'Manages relational tables for pharmaceutical inventory, stock movements, and financial accounting.',
                'Stores vendor voucher transaction logs and SATUSEHAT synchronization audit records.',
              ],
            },
          ],
        },
        dataFlow: [
          {
            flowTitle: 'Third-Party Vendor Voucher Bridging Flow',
            steps: [
              'Front-office cashier/registration officer enters the patient voucher code into the SIMRS interface.',
              'Frontend initiates an asynchronous verification request to the PHP/Laravel backend via AJAX.',
              'Backend service contacts the external voucher vendor REST API to validate status, discount value, and expiration.',
              'Upon successful vendor validation, the backend applies the discount to the billing module and records the transaction in PostgreSQL.',
              'Voucher status is marked as redeemed with the vendor API and updated receipt details are generated in SIMRS.',
            ],
          },
          {
            flowTitle: 'SATUSEHAT (FHIR) Healthcare Integration Flow',
            steps: [
              'Physician or healthcare worker completes diagnosis and treatment records in the EMR module.',
              'Backend service maps clinical data into standardized HL7 FHIR resources (Encounter, Condition, Medication).',
              'SIMRS securely transmits the FHIR payload via encrypted HTTPS to the Ministry of Health SATUSEHAT endpoint.',
              'SATUSEHAT returns a verified resource ID, which is stored in the PostgreSQL database for synchronization audit.',
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
          { name: 'Python', icon: 'devicon-python-plain colored' },
          { name: 'Go', icon: 'devicon-go-original-wordmark colored' },
          { name: 'Java', icon: 'devicon-java-plain colored' },
          { name: 'SQL', symbol: 'SQL' },
        ],
      },
      {
        title: 'Frameworks & Libraries',
        description: 'Frameworks and libraries for modern web and mobile development.',
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
        title: 'Databases',
        description: 'Relational database management and data handling.',
        technologies: [
          { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
          { name: 'MySQL', icon: 'devicon-mysql-original colored' },
          { name: 'MariaDB', icon: 'devicon-mariadb-original colored' },
          { name: 'Oracle', icon: 'devicon-oracle-original colored' },
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
      { name: 'Bahasa Indonesia', level: 'Highly Proficient' },
      { name: 'English', level: 'Professional' },
    ],
  },

  education: {
    eyebrow: 'EDUCATION',
    title: 'Academic background and learning foundation.',
    items: [
      {
        institution: 'Institut Digital Ekonomi LPKIA Bandung',
        degree: 'Bachelor of Information Systems',
        description:
          'Studied information systems, combining technology, information management, and business processes.',
        achievement: 'GPA: 3.15 / 4.00',
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
