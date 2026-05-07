import type { Project, Skill, Experience } from '@/types/portfolio'

/* ══════════════════════════════════════════
   NAV (dynamic labels from i18n)
   ══════════════════════════════════════════ */
export const navKeys = [
  { key: 'nav.home', href: '/', code: '01' },
  { key: 'nav.work', href: '/work', code: '02' },
  { key: 'nav.research', href: '/research', code: '03' },
  { key: 'nav.identity', href: '/identity', code: '04' },
  { key: 'nav.connect', href: '/connect', code: '05' },
]

/* ══════════════════════════════════════════
   PROJECTS (bilingual descriptions)
   ══════════════════════════════════════════ */
export const projects: Project[] = [
  {
    id: 'vr-cognitive-assessment',
    title: 'Thakira — VR Cognitive Assessment System',
    category: 'XR Research · Springer Publication',
    tags: ['Unity', 'C#', 'Meta Quest 2', 'OpenAI', 'Virtual Reality', 'Cognitive Assessment', 'Interactive Avatar'],
    year: '2024',
    description: {
      en: 'Lead author of "Using Virtual Reality to Detect Memory Loss: An Exploratory Study" (Springer Nature, 17CCC). Thakira is a VR program for Meta Quest 2 set in a natural environment with flying invertebrates and an interactive character. It conducts the three-word recall test (R3P) through AI-simulated conversations powered by OpenAI, enabling early detection of verbal memory impairment.',
      es: 'Primera autora de "Using Virtual Reality to Detect Memory Loss: An Exploratory Study" (Springer Nature, 17CCC). Thakira es un programa VR para Meta Quest 2 ambientado en un entorno natural con animales invertebrados voladores y un personaje interactivo. Realiza el test de recuerdo de tres palabras (R3P) mediante conversaciones simuladas con IA de OpenAI, habilitando la detección temprana de deterioro de memoria verbal.',
    },
    status: 'completed',
    metrics: [
      { label: 'Publisher', value: 'Springer' },
      { label: 'Platform', value: 'Unity' },
      { label: 'Conference', value: '17CCC' },
    ],
    color: '#c06cff',
    image: '/ThakiraScene.jpeg',
    featured: true,
  },
  {
    id: 'valu-platform',
    title: 'VALU — Learning & Valuation Platform',
    category: 'Full-Stack Engineering',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript', 'SCRUM', 'REST APIs', 'Go'],
    year: '2025',
    description: {
      en: 'Core contributor to VALU at UBITS — implemented new features and resolved production issues both before and after a corporate acquisition. Contributed to system stability, technical adaptation, and continuous product evolution.',
      es: 'Contribución central a VALU en UBITS — implementó nuevas funcionalidades y resolvió incidentes en producción tanto antes como después de la adquisición corporativa. Contribuyó a la estabilidad del sistema, la adaptación técnica y la evolución continua del producto.',
    },
    status: 'completed',
    metrics: [
      { label: 'Platform', value: 'VALU' },
      { label: 'Pre & Post-acquisition', value: '✓' },
    ],
    color: '#00f0d4',
    image: '/VALU.png',
    featured: true,
  },
  {
    id: 'tul-web-mobile',
    title: 'TUL — Web & Mobile Engineering',
    category: 'Web · Mobile Engineering',
    tags: ['Flutter', 'Dart', 'Go', 'REST APIs', 'SCRUM', 'Performance', 'PostgreSQL', 'Docker'],
    year: '2025',
    description: {
      en: 'Developed features for web and mobile applications using Flutter (Dart) and Golang, improving performance and supporting scalable system growth. Contributed to code migrations and collaborated with product and design teams to deliver business-aligned solutions.',
      es: 'Desarrolló funcionalidades para aplicaciones web y móviles usando Flutter (Dart) y Golang, mejorando el rendimiento y apoyando el crecimiento escalable del sistema. Contribuyó a migraciones de código y colaboró con equipos de producto y diseño.',
    },
    status: 'completed',
    metrics: [
      { label: 'Stack', value: 'Go + Flutter' },
      { label: 'Scale', value: 'LATAM B2B' },
      { label: 'Migrations', value: '✓' },
    ],
    color: '#ffc850',
    image: '/TUL.png',
    featured: true,
  },
  {
    id: 'mercadolibre',
    title: 'Mercado Libre — Systems Reliability',
    category: 'Backend · Infrastructure',
    tags: ['SQL Optimization', 'DB Migration', 'Messaging Systems', 'Java', 'Internal Tooling'],
    year: '2024 – 2025',
    description: {
      en: 'Software Intern at the largest e-commerce company in Latin America. Optimized SQL queries, ensured internal systems reliability, participated in database and messaging system migrations in production environments, and improved technical documentation.',
      es: 'Intern de Software en la empresa de e-commerce más grande de Latinoamérica. Optimizó queries SQL, aseguró la confiabilidad de sistemas internos, participó en migraciones de bases de datos y sistemas de mensajería en producción, y mejoró la documentación técnica.',
    },
    status: 'completed',
    color: '#9bbbff',
    featured: false,
  },
  {
    id: 'ml-libraries',
    title: 'ML Libraries — Image Processing & Data Analysis',
    category: 'Machine Learning · Tools',
    tags: ['Python', 'Computer Vision', 'Machine Learning', 'NLP', 'Data Processing'],
    year: '2023 – 2024',
    description: {
      en: 'Developed software libraries for image processing, data analysis, and text processing using machine learning tools in collaborative academic environments. Also participated in programming competitions focused on efficient and scalable solutions.',
      es: 'Desarrolló librerías de software para procesamiento de imágenes, análisis de datos y texto usando herramientas de machine learning en entornos académicos colaborativos. Participó en competencias de programación orientadas a soluciones eficientes y escalables.',
    },
    status: 'completed',
    color: '#7a9690',
    featured: false,
  },
]

/* ══════════════════════════════════════════
   SKILLS
   ══════════════════════════════════════════ */
export const skills: Skill[] = [
  { name: 'React / Next.js', level: 78, category: 'frontend' },
  { name: 'TypeScript / JavaScript', level: 80, category: 'frontend' },
  { name: 'HTML & CSS', level: 85, category: 'frontend' },

  { name: 'Flutter / Dart', level: 76, category: 'frontend' },

  { name: 'Golang', level: 70, category: 'backend' },
  { name: 'Node.js', level: 72, category: 'backend' },
  { name: 'Python', level: 74, category: 'backend' },
  { name: 'Java / C#', level: 65, category: 'backend' },

  { name: 'Product Design', level: 45, category: 'ux' },

  { name: 'XR / VR', level: 78, category: 'research' },
  { name: 'Computer Vision', level: 58, category: 'research' },
  { name: 'HCI Research', level: 52, category: 'research' },

  { name: 'PostgreSQL / Firebase', level: 72, category: 'tools' },
  { name: 'Docker / CI-CD', level: 60, category: 'tools' },
  { name: 'Git / Jira / Agile', level: 82, category: 'tools' },
]

/* ══════════════════════════════════════════
   EXPERIENCE — exact CV dates, bilingual
   ══════════════════════════════════════════ */
export const experience: Experience[] = [
  {
    company: 'TUL',
    role: 'Full-Stack Developer',
    period: 'Aug 2025 – Dec 2025',
    description: {
      en: 'Developed features for web and mobile applications using Flutter (Dart) and Golang, improving performance and supporting scalable system growth. Contributed to code migrations and collaborated with product and design teams to deliver business-aligned solutions.',
      es: 'Desarrolló funcionalidades para aplicaciones web y móviles con Flutter (Dart) y Golang, mejorando el rendimiento y apoyando la escalabilidad. Contribuyó a migraciones de código y colaboró con equipos de producto y diseño.',
    },
    tags: ['Flutter', 'Dart', 'Golang', 'REST APIs', 'Agile', 'Code Migration'],
  },
  {
    company: 'UBITS',
    role: 'Full-Stack Developer — VALU Platform',
    period: 'Feb 2025 – Jun 2025',
    description: {
      en: 'Worked on the VALU platform, implementing new features and resolving production issues. Contributed to system stability and adaptation after acquisition, supporting continuous product evolution.',
      es: 'Trabajó en la plataforma VALU implementando nuevas funcionalidades y resolviendo incidentes en producción. Contribuyó a la estabilidad del sistema y su adaptación tras la adquisición, apoyando la evolución continua del producto.',
    },
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Production', 'Post-acquisition'],
  },
  {
    company: 'Mercado Libre',
    role: 'Software Intern',
    period: 'Aug 2024 – Feb 2025',
    description: {
      en: 'Optimized SQL queries and supported internal systems, ensuring reliability and efficient issue resolution. Participated in database and messaging migrations in production environments. Improved system understanding through clear technical documentation.',
      es: 'Optimizó queries SQL y dio soporte a sistemas internos, asegurando confiabilidad y resolución eficiente de incidentes. Participó en migraciones de bases de datos y sistemas de mensajería en producción. Mejoró la comprensión del sistema mediante documentación técnica clara.',
    },
    tags: ['SQL Optimization', 'Java', 'DB Migration', 'Messaging Systems', 'Technical Documentation'],
  },
  {
    company: 'Globalink Research Internship',
    role: 'Research Intern — XR & Affective Computing',
    period: 'May 2024 – Jul 2024',
    description: {
      en: 'Developed Thakira — a VR program for Meta Quest 2 integrating OpenAI services to conduct the three-word recall test (R3P) through AI-simulated conversations. Research resulted in a lead-author publication in Springer Nature, presented at the 17th Colombian Computing Conference (17CCC).',
      es: 'Desarrolló Thakira — un programa VR para Meta Quest 2 que integra servicios de OpenAI para realizar el test de recuerdo de tres palabras (R3P) mediante conversaciones simuladas con IA. La investigación resultó en una publicación como primera autora en Springer Nature, presentada en la 17CCC.',
    },
    tags: ['Meta Quest 2', 'OpenAI', 'Virtual Reality', 'Cognitive Assessment', 'Springer'],
  },
  {
    company: 'Universidad de los Andes',
    role: 'Teaching Assistant — Data Structures & Algorithms',
    period: 'Jan 2023 – Jun 2023',
    description: {
      en: 'Supported Data Structures course, helping students solve complex problems and strengthen programming fundamentals at one of Latin America\'s top universities.',
      es: 'Apoyó el curso de Estructuras de Datos, ayudando a los estudiantes a resolver problemas complejos y fortalecer los fundamentos de programación en una de las mejores universidades de Latinoamérica.',
    },
    tags: ['Data Structures', 'Algorithms', 'Teaching', 'Java', 'Problem Solving'],
  },
  {
    company: 'Universidad de los Andes',
    role: 'Teaching Assistant — Introduction to Programming',
    period: 'Aug 2020 – Nov 2020',
    description: {
      en: 'Supported Introduction to Programming course, helping students solve complex problems and strengthen programming fundamentals.',
      es: 'Apoyó el curso de Introducción a la Programación, ayudando a los estudiantes a resolver problemas complejos y fortalecer los fundamentos de programación.',
    },
    tags: ['Programming Fundamentals', 'Teaching', 'Python', 'Student Support'],
  },
]

/* ══════════════════════════════════════════
   RESEARCH (bilingual)
   ══════════════════════════════════════════ */
export const researchTopics = [
  {
    id: 'springer-vr-memory',
    title: {
      en: '"Using VR to Detect Memory Loss" — Springer Nature',
      es: '"Using VR to Detect Memory Loss" — Springer Nature',
    },
    status: 'Published',
    statusColor: 'cyan' as const,
    abstract: {
      en: 'Software that leverages virtual reality (VR) and OpenAI services to assess and detect early cognitive impairments, especially in verbal memory. The Thakira program, created for the Meta Quest 2, presents a natural environment with flying invertebrate animals and an interactive character. Through AI-simulated conversations, the three-word recall test (R3P) is carried out. This approach could help identify verbal memory impairment in people with neurocognitive disorders and alert them to the need for early professional attention.',
      es: 'Software que utiliza realidad virtual (VR) y servicios de OpenAI para evaluar y detectar tempranamente deterioro cognitivo, especialmente en memoria verbal. El programa Thakira, creado para Meta Quest 2, presenta un entorno natural con animales invertebrados voladores y un personaje interactivo. Mediante conversaciones simuladas con IA, se realiza el test de recuerdo de tres palabras (R3P). Este enfoque puede ayudar a identificar deterioro de memoria verbal en personas con trastornos neurocognitivos.',
    },
    tags: ['Virtual Reality', 'Meta Quest 2', 'OpenAI', 'Cognitive Assessment', 'Verbal Memory', 'R3P Test', 'Springer Nature', '17CCC'],
    progress: 100,
  },
  {
    id: 'xr-emotional-avatars',
    title: {
      en: 'Real-Time Emotional Recognition in Immersive XR',
      es: 'Reconocimiento Emocional en Tiempo Real en XR',
    },
    status: 'Completed',
    statusColor: 'amber' as const,
    abstract: {
      en: 'Development of a real-time emotion recognition pipeline integrated into an immersive VR environment. The system processes AI-generated conversational signals and generates avatar responses enabling closed-loop affective feedback for early cognitive assessment.',
      es: 'Desarrollo de una pipeline de reconocimiento emocional en tiempo real integrada en un entorno VR inmersivo. El sistema procesa señales conversacionales generadas por IA y genera respuestas de avatar habilitando retroalimentación afectiva de bucle cerrado para evaluación cognitiva temprana.',
    },
    tags: ['Meta Quest 2', 'OpenAI', 'Emotion Recognition', 'Real-time Systems', 'Avatar Interaction', 'Thakira'],
    progress: 100,
  },
  {
    id: 'spatial-interfaces-hci',
    title: {
      en: 'Spatial Interfaces & New Interaction Paradigms',
      es: 'Interfaces Espaciales y Nuevos Paradigmas de Interacción',
    },
    status: 'Active',
    statusColor: 'purple' as const,
    abstract: {
      en: 'Exploration of interaction paradigms for mixed and spatial computing environments. Research on how gestural models and adaptive interfaces can reduce cognitive load and improve user efficiency in XR environments.',
      es: 'Exploración de paradigmas de interacción para entornos de computación mixta y espacial. Investigación sobre cómo los modelos gestuales e interfaces adaptativas pueden reducir la carga cognitiva y mejorar la eficiencia del usuario en entornos XR.',
    },
    tags: ['HCI', 'Spatial Computing', 'Mixed Reality', 'Gestural Interfaces', 'UX Research'],
    progress: 55,
  },
]

/* ══════════════════════════════════════════
   TECH STACK (marquee)
   ══════════════════════════════════════════ */
export const techStack = [
  'React', 'Next.js', 'TypeScript', 'Flutter', 'Dart',
  'Golang', 'Node.js', 'Python', 'Java', 'C#',
  'PostgreSQL', 'Firebase', 'MongoDB', 'Docker',
  'WebXR', 'Meta Quest Pro', 'Computer Vision',
  'REST APIs', 'CI/CD', 'Agile', 'Springer Published',
]
