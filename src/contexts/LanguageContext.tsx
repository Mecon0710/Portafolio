'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Lang = 'en' | 'es'

interface LanguageContextType {
  lang: Lang
  toggle: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

/* ── Full dictionary ─────────────────────────────── */
const dict: Record<Lang, Record<string, string>> = {
  en: {
    /* Nav */
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.research': 'Research',
    'nav.identity': 'Identity',
    'nav.connect': 'Connect',
    'nav.cta': 'Get in Touch',

    /* Hero */
    'hero.label': 'Available for opportunities',
    'hero.title1': 'Engineering',
    'hero.title2': 'Intuitive',
    'hero.words': 'Interfaces.,Architectures.,Experiences.,Systems.',
    'hero.subtitle': 'Software Engineer with experience in frontend and full-stack development. Focused on scalable systems, performance, and reliable software delivery. Interested in interactive systems, XR, and human-centered technology — published author in Springer Nature.',
    'hero.cta.work': 'View Selected Works',
    'hero.cta.connect': 'Get in Touch',
    'hero.card.label': 'Featured Research Node',
    'hero.card.title': 'VR Cognitive Assessment',
    'hero.card.desc': '"Using Virtual Reality to Detect Memory Loss" — Lead author, Springer Nature. Presented at 17CCC.',
    'hero.card.btn': 'Explore Research →',

    /* Stats */
    'stat.0.n': '1.5', 'stat.0.l': 'Years of Experience',
    'stat.1.n': '4', 'stat.1.l': 'Companies & Labs',
    'stat.2.n': '1', 'stat.2.l': 'Springer Nature Publication',
    'stat.3.n': 'B2', 'stat.3.l': 'English Level',

    /* Sections */
    'section.work.label': 'Selected Works',
    'section.work.title': 'Projects & Research',
    'section.work.more': 'View all →',
    'section.activity.label': 'Telemetry',
    'section.activity.title': 'Research Activity',
    'section.activity.desc': 'Tracking engineering output across core disciplines over the last year.',
    'section.exp.label': 'Trajectory',
    'section.exp.title': 'Career Log',
    'section.cta.label': 'Initiate',
    'section.cta.title1': "Let's Build",
    'section.cta.title2': 'Better Digital Experiences.',
    'section.cta.desc': "Whether it's a scalable application, an interactive system, or a research-driven idea — I enjoy building technology that is reliable, intuitive, and meaningful.",
    'section.cta.btn1': 'Open a Channel',
    'section.cta.btn2': 'View Full CV',

    /* Footer */
    'footer.copy': '© 2026 Melissa Lizeth Contreras Rojas',

    /* Work page */
    'work.label': 'The Laboratory',
    'work.title1': 'Selected',
    'work.title2': 'Works',
    'work.subtitle': 'A curated selection of engineering and research projects spanning full-stack systems, XR experiences, and interactive applications.',
    'work.featured': 'Featured Research Nodes',
    'work.archive': 'Archive Nodes',
    'work.btn': 'View Case Study →',

    /* Identity page */
    'id.label': 'Identity & Practice',
    'id.role': 'Software Engineer · Frontend & Full Stack · XR Researcher · Springer Author',
    'id.bio1': 'Software Engineer graduated from Systems and Computing Engineering at Universidad de los Andes (2020–2024). My experience spans frontend and full-stack development, scalable systems, and interactive technologies, with a growing interest in XR and human-centered digital experiences.',
    'id.bio2': 'I have worked in high-impact environments such as Mercado Libre, TUL, and UBITS, contributing to scalable applications, migrations, SQL optimization, production support, and full-stack feature development. I also conducted virtual reality research using Meta Quest Pro published in Springer Nature and served as a Teaching Assistant at Universidad de los Andes.',
    'id.cv': 'Download CV ↓',
    'id.linkedin': 'LinkedIn ↗',
    'id.location': 'Colombia 🇨🇴',
    'id.education': 'B.Sc. Systems & Computing Eng. — U. Andes (2020–2024)',
    'id.focus': 'Frontend · Full Stack · Scalable Systems · XR',
    'id.languages': 'Spanish (native) · English B2',
    'id.avail.label': 'AVAILABILITY',
    'id.matrix.label': 'The Matrix',
    'id.matrix.title': 'Capability Map',
    'id.traj.label': 'Trajectory',
    'id.traj.title': 'Career Chronology',
    'id.dossier.label': 'The Dossier',
    'id.dossier.title': 'Download CV Archive',
    'id.dossier.desc': 'Full curriculum vitae including research publications, project details, and references.',
    'id.dossier.en': 'CV (English) ↓',
    'id.dossier.es': 'CV (Español) ↓',

    /* Research page */
    'research.label': 'Computational Inquiry',
    'research.title1': 'Research',
    'research.title2': 'Lab',
    'research.subtitle': 'Research projects exploring XR, cognition, and interactive digital experiences, including published work with Springer Nature.',
    'research.manifesto.label': 'The Research Directive',
    'research.manifesto.title': 'The most powerful interfaces are the ones that',
    'research.manifesto.accent': 'disappear.',
    'research.manifesto.text': 'I am interested in how people interact with technology and how digital experiences can become more intuitive, immersive, and accessible. My work explores these ideas through XR and interactive systems.',

    /* Connect page */
    'connect.label': 'Connect & Collaborate',
    'connect.title1': "Let's Build the Future",
    'connect.title2': 'of Interaction.',
    'connect.subtitle': "Open to software engineering opportunities and projects involving scalable systems, frontend experiences, XR, and interactive technologies.",
    'connect.form.label': 'Transmission Protocol',
    'connect.form.title': 'Send a Message',
    'connect.name': 'NAME',
    'connect.email': 'EMAIL',
    'connect.type': 'TYPE',
    'connect.type.ph': '— Select transmission type —',
    'connect.type.1': 'Project Collaboration',
    'connect.type.2': 'Research Partnership',
    'connect.type.3': 'Job Opportunity',
    'connect.type.4': 'Consulting Inquiry',
    'connect.type.5': 'Other',
    'connect.message': 'MESSAGE',
    'connect.message.ph': 'Describe your project, question, or idea...',
    'connect.submit': 'Transmit Signal →',
    'connect.loading': 'Transmitting…',
    'connect.success.title': 'Signal Received',
    'connect.success.desc': "Transmission confirmed. I'll respond within 24 hours.",
    'connect.success.btn': 'Send Another',
    'connect.channels.label': '05B / Direct Channels',
    'connect.channels.title': 'Direct Access',
    'connect.avail.title': 'Open to Opportunities',
    'connect.avail.text': 'Exploring frontend, full-stack, and XR engineering roles. Also open to consulting and research collaborations.',
    'connect.response': 'RESPONSE',
    'connect.timezone': 'TIMEZONE',

    /* Badges / status */
    'status.active': 'ACTIVE',
    'status.completed': 'COMPLETED',
    'status.research': 'RESEARCH',
    'status.published': 'PUBLISHED',
  },

  es: {
    /* Nav */
    'nav.home': 'Inicio',
    'nav.work': 'Trabajo',
    'nav.research': 'Investigación',
    'nav.identity': 'Identidad',
    'nav.connect': 'Contacto',
    'nav.cta': 'Contáctame',

    /* Hero */
    'hero.label': 'Disponible para oportunidades',
    'hero.title1': 'Construyendo',
    'hero.title2': 'Interfaces',
    'hero.words': 'Intuitivas.,Escalables.,Memorables.,del Futuro.',
    'hero.subtitle': 'Ingeniera de Software con experiencia en desarrollo full stack. Enfocada en sistemas escalables, rendimiento y entrega confiable de software. Interesada en sistemas interactivos, XR y tecnología centrada en las personas — autora publicada en Springer Nature.',
    'hero.cta.work': 'Ver Trabajos',
    'hero.cta.connect': 'Contactar',
    'hero.card.label': 'Nodo de Investigación',
    'hero.card.title': 'Evaluación Cognitiva con VR',
    'hero.card.desc': '"Using Virtual Reality to Detect Memory Loss: An Exploratory Study" — Primera autora, Springer Nature. Presentado en 17CCC.',
    'hero.card.btn': 'Explorar Investigación →',

    /* Stats */
    'stat.0.n': '1.5', 'stat.0.l': 'Años de Experiencia',
    'stat.1.n': '4', 'stat.1.l': 'Empresas & Laboratorios',
    'stat.2.n': '1', 'stat.2.l': 'Publicación en Springer Nature',
    'stat.3.n': 'B2', 'stat.3.l': 'Nivel de Inglés',

    /* Sections */
    'section.work.label': 'Trabajos Seleccionados',
    'section.work.title': 'Proyectos & Investigación',
    'section.work.more': 'Ver todos →',
    'section.activity.label': 'Telemetría',
    'section.activity.title': 'Actividad de Investigación',
    'section.activity.desc': 'Seguimiento del trabajo de ingeniería en disciplinas clave durante el último año.',
    'section.exp.label': 'Trayectoria',
    'section.exp.title': 'Historial Profesional',
    'section.cta.label': 'Iniciar',
    'section.cta.title1': 'Construyamos',
    'section.cta.title2': 'Mejores Experiencias Digitales.',
    'section.cta.desc': 'Ya sea una aplicación escalable, un sistema interactivo o una idea impulsada por investigación — disfruto construir tecnología que sea confiable, intuitiva y significativa.',
    'section.cta.btn1': 'Abrir un Canal',
    'section.cta.btn2': 'Ver CV Completo',

    /* Footer */
    'footer.copy': '© 2026 Melissa Lizeth Contreras Rojas',

    /* Work page */
    'work.label': 'El Laboratorio',
    'work.title1': 'Trabajos',
    'work.title2': 'Seleccionados',
    'work.subtitle': 'Una selección curada de proyectos de ingeniería e investigación que abarcan desarrollo frontend, sistemas full stack, experiencias XR y aplicaciones interactivas.',
    'work.featured': 'Nodos Destacados',
    'work.archive': 'Nodos de Archivo',
    'work.btn': 'Ver Caso de Estudio →',

    /* Identity page */
    'id.label': 'Identidad & Práctica',
    'id.role': 'Ingeniera de Software · Frontend & Full Stack · Investigadora XR · Autora Springer',
    'id.bio1': 'Ingeniera de Sistemas y Computación egresada de la Universidad de los Andes (2020–2024). Mi experiencia abarca desarrollo full stack, sistemas escalables y tecnologías interactivas, con un interés creciente en XR y experiencias digitales centradas en las personas.',
    'id.bio2': 'He trabajado en entornos de alto impacto como Mercado Libre, TUL y UBITS, contribuyendo a aplicaciones escalables, migraciones, optimización SQL, soporte productivo y desarrollo full stack. También conduje una investigación en realidad virtual utilizando Meta Quest Pro publicada en Springer Nature y fui monitora en la Universidad de los Andes.',
    'id.cv': 'Descargar CV ↓',
    'id.linkedin': 'LinkedIn ↗',
    'id.location': 'Colombia 🇨🇴',
    'id.education': 'Ing. Sistemas y Computación — U. Andes (2020–2024)',
    'id.focus': 'Frontend · Full Stack · Scalable Systems · XR',
    'id.languages': 'Español (nativo) · Inglés B2',
    'id.avail.label': 'DISPONIBILIDAD',
    'id.matrix.label': 'La Matriz',
    'id.matrix.title': 'Mapa de Capacidades',
    'id.traj.label': 'Trayectoria',
    'id.traj.title': 'Cronología Profesional',
    'id.dossier.label': 'El Dossier',
    'id.dossier.title': 'Descarga el Archivo CV',
    'id.dossier.desc': 'Currículum vitae completo con publicaciones, detalle de proyectos y referencias.',
    'id.dossier.en': 'CV (English) ↓',
    'id.dossier.es': 'CV (Español) ↓',

    /* Research page */
    'research.label': 'Investigación Computacional',
    'research.title1': 'Laboratorio de',
    'research.title2': 'Investigación',
    'research.subtitle': 'Proyectos de investigación que exploran XR, cognición y experiencias digitales interactivas, incluyendo trabajo publicado en Springer Nature.',
    'research.manifesto.label': 'Mi Directiva de Investigación',
    'research.manifesto.title': 'Las interfaces más poderosas son las que',
    'research.manifesto.accent': 'desaparecen.',
    'research.manifesto.text': 'Me interesa cómo las personas interactúan con la tecnología y cómo las experiencias digitales pueden volverse más intuitivas, inmersivas y accesibles. Mi trabajo explora estas ideas a través de XR y sistemas interactivos.',

    /* Connect page */
    'connect.label': 'Conectar & Colaborar',
    'connect.title1': 'Construyamos el Futuro',
    'connect.title2': 'de la Interacción.',
    'connect.subtitle': 'Abierta a oportunidades en ingeniería de software y proyectos relacionados con sistemas escalables, experiencias frontend, XR y tecnologías interactivas.',
    'connect.form.label': 'Protocolo de Transmisión',
    'connect.form.title': 'Enviar un Mensaje',
    'connect.name': 'NOMBRE',
    'connect.email': 'EMAIL',
    'connect.type': 'TIPO',
    'connect.type.ph': '— Selecciona el tipo de transmisión —',
    'connect.type.1': 'Colaboración en Proyecto',
    'connect.type.2': 'Alianza en Investigación',
    'connect.type.3': 'Oportunidad Laboral',
    'connect.type.4': 'Consultoría',
    'connect.type.5': 'Otro',
    'connect.message': 'MENSAJE',
    'connect.message.ph': 'Describe tu proyecto, pregunta o idea...',
    'connect.submit': 'Transmitir Señal →',
    'connect.loading': 'Transmitiendo…',
    'connect.success.title': 'Señal Recibida',
    'connect.success.desc': 'Transmisión confirmada. Responderé en menos de 24 horas.',
    'connect.success.btn': 'Enviar Otro',
    'connect.channels.label': 'Canales Directos',
    'connect.channels.title': 'Acceso Directo',
    'connect.avail.title': 'Disponible para Oportunidades',
    'connect.avail.text': 'Explorando roles de frontend, full stack e ingeniería XR. También abierta a consultoría y colaboraciones de investigación.',
    'connect.response': 'RESPUESTA',
    'connect.timezone': 'ZONA HORARIA',

    /* Badges / status */
    'status.active': 'ACTIVO',
    'status.completed': 'COMPLETADO',
    'status.research': 'INVESTIGACIÓN',
    'status.published': 'PUBLICADO',
  },
}

/* ── Provider ────────────────────────────────────── */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('ml-lang') as Lang | null
    if (saved === 'en' || saved === 'es') setLang(saved)
  }, [])

  const toggle = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'es' : 'en'
      localStorage.setItem('ml-lang', next)
      return next
    })
  }

  const t = (key: string): string => dict[lang][key] ?? dict['en'][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

/* ── Hook ────────────────────────────────────────── */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
