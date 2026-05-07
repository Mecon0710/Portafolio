'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation/Navigation'
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview'
import { researchTopics } from '@/services/portfolioData'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './page.module.css'

/* ── Research node specs ────────────────────────── */
const AVATAR_SPECS = {
  en: {
    title: 'Interactive Avatar System',
    items: [
      { label: 'Platform', value: 'Meta Quest 2 Pro' },
      { label: 'AI Engine', value: 'OpenAI API' },
      { label: 'Protocol', value: 'Three-Word Recall (R3P)' },
    ],
    desc: 'Developed for the Thakira project — an immersive VR environment where an AI-powered avatar conducts the R3P cognitive test through natural conversation, enabling non-invasive early detection of verbal memory impairment.',
  },
  es: {
    title: 'Sistema de Avatar Interactivo',
    items: [
      { label: 'Plataforma', value: 'Meta Quest 2' },
      { label: 'Motor IA', value: 'OpenAI API' },
      { label: 'Protocolo', value: 'Test R3P (3 palabras)' },
    ],
    desc: 'Desarrollado para el proyecto Thakira — un entorno VR inmersivo donde un avatar impulsado por IA conduce el test cognitivo R3P mediante conversación natural, habilitando la detección temprana no invasiva del deterioro de memoria verbal.',
  },
}

export default function ResearchPage() {
  const { t, lang } = useLanguage()
  const specs = AVATAR_SPECS[lang]

  return (
    <>
      <Navigation />
      <main id="main-content">

        {/* ── HEADER ───────────────────────────────────── */}
        <section className={styles.header}>
          <div className="container">
            <p className="t-label">{t('research.label')}</p>
            <h1 className={`t-display ${styles.title}`}>
              {t('research.title1')}<br /><em>{t('research.title2')}</em>
            </h1>
            <p className={`t-body-lg ${styles.subtitle}`}>
              {lang === 'en'
                ? 'Exploring the intersections of human cognition and spatial computing. A rigorous examination of how immersive technologies redefine learning, interaction, and accessibility.'
                : 'Explorando las intersecciones de la cognición humana y la computación espacial. Un examen riguroso de cómo las tecnologías inmersivas redefinen el aprendizaje, la interacción y la accesibilidad.'}
            </p>
          </div>
        </section>

        {/* ── PUBLICATION BLOCK ────────────────────────── */}
        <section className={`section-sm ${styles.pubSection}`}>
          <div className="container">
            <div className={styles.pubBlock}>

              {/* Left — metadata + abstract */}
              <div className={styles.pubLeft}>
                <div className={styles.springerBrand}>
                  <span>Springer Nature</span>
                </div>

                <h2 className={styles.pubTitle}>
                  Using Virtual Reality to<br />Detect Memory Loss:<br />An Exploratory Study
                </h2>

                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-031-47372-2_33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.doiLink}
                  id="doi-link"
                >
                  DOI: 10.1007/978-3-031-47372-2_33 ↗
                </a>

                <div className={styles.abstractBlock}>
                  <p className={styles.abstractLabel}>Abstract</p>
                  <p className={styles.abstractText}>
                    {lang === 'en'
                      ? 'This article presents software that leverages virtual reality and OpenAI services to assess and detect early cognitive impairments, especially in verbal memory. The Thakira program, created for the Meta Quest 2, presents a natural environment with flying invertebrate animals and an interactive character. Through AI-simulated conversations, the three-word recall test (R3P) is carried out. This approach could help identify verbal memory impairment in people with neurocognitive disorders and alert them to the need for early professional attention.'
                      : 'Este artículo presenta un software que utiliza realidad virtual y servicios de OpenAI para evaluar y detectar tempranamente deterioro cognitivo, especialmente en memoria verbal. El programa Thakira, creado para Meta Quest 2, presenta un entorno natural con animales invertebrados voladores y un personaje interactivo. Mediante conversaciones simuladas con IA, se realiza el test de recuerdo de tres palabras (R3P). Este enfoque puede ayudar a identificar deterioro de memoria verbal en personas con trastornos neurocognitivos.'}
                  </p>
                </div>

                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-031-47372-2_33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readBtn}
                  id="read-paper-btn"
                >
                  {lang === 'en' ? 'Read the Paper ↗' : 'Leer el Artículo ↗'}
                </a>
              </div>

              {/* Right — paper cover image */}
              <div className={styles.pubRight}>
                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-031-47372-2_33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.paperThumb}
                  id="paper-thumbnail"
                  aria-label="Open paper on Springer"
                >
                  <div className={styles.paperThumbInner}>
                    <Image
                      src="/Springer-photo.png"
                      alt="Advances in Computing — Springer Nature, 17CCC 2023"
                      width={300}
                      height={415}
                      className={styles.paperImage}
                      priority
                    />
                    <div className={styles.paperOverlay}>
                      <span>↗</span>
                    </div>
                  </div>
                </a>
                <p className={styles.paperCaption}>
                  Advances in Computing<br />Springer Nature<br />
                  <span>17CCC · Medellín, 2023</span>
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── RESEARCH NODE — Avatar System ────────────── */}
        <section className={`section ${styles.nodeSection}`}>
          <div className="container">
            <div className={styles.nodeGrid}>

              {/* Cinematic image */}
              <div className={styles.paperThumbInner}>
                <Image
                  src="/ThakiraScene.jpeg"
                  alt=""
                  width={784}
                  height={436}
                  className={styles.paperImage}
                  priority
                />
                <div className={styles.paperOverlay}>
                  <span>↗</span>
                </div>
              </div>

              {/* Info card */}
              <div className={`card ${styles.nodeCard}`}>
                <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 12 }}>
                  {lang === 'en' ? 'Research Node' : 'Nodo de Investigación'}
                </p>
                <h3 className={`t-h3 ${styles.nodeTitle}`}>{specs.title}</h3>

                <div className={styles.nodeSpecs}>
                  {specs.items.map(item => (
                    <div key={item.label} className={styles.nodeSpec}>
                      <span className={styles.nodeSpecLabel}>{item.label}</span>
                      <span className={styles.nodeSpecVal}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <p className="t-body" style={{ marginTop: 20, lineHeight: 1.7 }}>{specs.desc}</p>

                <div className={styles.nodeTags}>
                  {['Meta Quest 2', 'OpenAI', 'R3P Test', 'Thakira'].map(tag => (
                    <span key={tag} className={styles.nodeTag}>{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── COLIVRI DIGITAL TWIN ─────────────────────── */}
        <section className={`section ${styles.twinSection}`}>
          <div className="container">

            <div className={styles.twinHeader}>
              <div>
                <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 8 }}>
                  {lang === 'en' ? 'Degree Project · Universidad de los Andes' : 'Proyecto de Grado · Universidad de los Andes'}
                </p>
                <h2 className={`t-h2 ${styles.twinTitle}`}>Colivri Digital Twin</h2>
                <p className="t-body" style={{ marginTop: 12, maxWidth: 600, opacity: 0.8 }}>
                  {lang === 'en'
                    ? 'A Unity-based digital replica of the Colivri laboratory at Universidad de los Andes, enabling experimentation with VR, AR, simulators, and human-robot interfaces. Developed as a group degree project within the Systems Engineering program.'
                    : 'Réplica digital del laboratorio Colivri de la Universidad de los Andes en Unity, que permite experimentar con VR, AR, simuladores e interfaces humano-robot. Desarrollado como proyecto de grado grupal en el programa de Ingeniería de Sistemas.'}
                </p>
              </div>
              <a
                href="https://github.com/imagine-uniandes/ColivriDigitalTwin"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.twinGithub}
                id="colivri-github"
              >
                GitHub ↗
              </a>
            </div>

            <div className={styles.twinGrid}>

              {/* Image card */}
              <div className={`card ${styles.twinCard}`} style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="/ColivriDigitalTwin.jpeg"
                  alt="Colivri Digital Twin — Laboratory virtual replica"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Tech + Team */}
              <div className={styles.twinRight}>
                <div className={`card ${styles.twinCard}`}>
                  <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 16 }}>
                    {lang === 'en' ? 'Tech Stack' : 'Stack Tecnológico'}
                  </p>
                  <div className={styles.twinTags}>
                    {['Unity', 'C#', 'Vive Pro Eye', 'AR/VR/XR', 'React Unity WebGL', 'Human-Robot Interfaces'].map(tag => (
                      <span key={tag} className={styles.twinTag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={`card ${styles.twinCard}`} style={{ marginTop: 2, flex: 1 }}>
                  <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 16 }}>
                    {lang === 'en' ? 'Development Team' : 'Equipo de Desarrollo'}
                  </p>
                  <div className={styles.twinTeam}>
                    {[
                      'Pablo Figueroa Forero', 'Vivian Gómez Cubillos', 'Juan E. Rodríguez',
                      'Melissa L. Contreras Rojas', 'Juan S. Alegría Zúñiga', 'Julian C. Mora Valbuena',
                      'Nicolas Falla Bernal', 'Valentina Uribe', 'Abel Arismendy',
                    ].map(name => (
                      <span key={name} className={`${styles.twinMember} ${name.includes('Melissa') ? styles.twinMemberHighlight : ''}`}>
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="t-mono" style={{ fontSize: 10, color: 'var(--ink-faint)', marginTop: 16 }}>
                    MIT · © 2023 Grupo Imagine Uniandes
                  </p>
                </div>
              </div>

            </div>

            {/* Key Capabilities — full width below grid */}
            <div className={`card ${styles.twinCapCard}`}>
              <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 20 }}>
                {lang === 'en' ? 'Key Capabilities' : 'Capacidades Clave'}
              </p>
              <div className={styles.twinCapRow}>
                {(lang === 'en' ? [
                  { icon: '🏗️', label: 'Virtual Replica', desc: 'Precise 3D model of Colivri Lab' },
                  { icon: '🖥️', label: 'Control Center', desc: 'Interactive TV screens as monitoring hub' },
                  { icon: '🥽', label: 'Multi-platform XR', desc: 'VR, AR, and mixed reality integration' },
                  { icon: '🤖', label: 'Human-Robot', desc: 'Interfaces for robotic interaction' },
                  { icon: '🎓', label: 'Simulation', desc: 'Learning environment for students' },
                ] : [
                  { icon: '🏗️', label: 'Réplica Virtual', desc: 'Modelo 3D preciso del Lab Colivri' },
                  { icon: '🖥️', label: 'Centro de Control', desc: 'Pantallas interactivas como hub de monitoreo' },
                  { icon: '🥽', label: 'XR Multiplataforma', desc: 'Integración VR, AR y realidad mixta' },
                  { icon: '🤖', label: 'Humano-Robot', desc: 'Interfaces de interacción robótica' },
                  { icon: '🎓', label: 'Simulación', desc: 'Entorno de aprendizaje para estudiantes' },
                ]).map((cap, i) => (
                  <div key={i} className={styles.twinCap}>
                    <span className={styles.twinCapIcon}>{cap.icon}</span>
                    <div>
                      <span className={styles.twinCapLabel}>{cap.label}</span>
                      <span className={styles.twinCapDesc}>{cap.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* ── MITACS — FACIAL EXPRESSION RECOGNITION ───── */}
        <section className={`section ${styles.twinSection}`}>
          <div className="container">

            <div className={styles.twinHeader}>
              <div>
                <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 8 }}>
                  {lang === 'en' ? 'Mitacs Globalink Research Internship · 2024' : 'Pasantía de Investigación Mitacs Globalink · 2024'}
                </p>
                <h2 className={`t-h2 ${styles.twinTitle}`}>
                  {lang === 'en' ? 'Facial Expression Recognition in VR' : 'Reconocimiento de Expresiones Faciales en VR'}
                </h2>
                <p className="t-body" style={{ marginTop: 12, maxWidth: 600, opacity: 0.8 }}>
                  {lang === 'en'
                    ? 'Research internship exploring real-time facial expression recognition within immersive VR environments. The project integrates emotion detection algorithms with multiplayer Unity scenes, enabling avatars to reflect users\' emotional states through AI-powered analysis.'
                    : 'Pasantía de investigación que explora el reconocimiento de expresiones faciales en tiempo real dentro de entornos VR inmersivos. El proyecto integra algoritmos de detección de emociones con escenas multijugador en Unity, permitiendo que los avatares reflejen los estados emocionales de los usuarios mediante análisis impulsado por IA.'}
                </p>
              </div>
            </div>

            {/* Personal Contribution */}
            <div className={`card ${styles.twinFeatureCard}`}>
              <div className={styles.twinFeatureBadge}>
                <span className={styles.twinFeatureDot} style={{ background: '#ff6b6b', boxShadow: '0 0 8px #ff6b6b' }} />
                {lang === 'en' ? 'Key Contributions' : 'Contribuciones Clave'}
              </div>
              <div className={styles.twinFeatureContent}>
                <div>
                  <h3 className={`t-h3 ${styles.twinFeatureTitle}`}>
                    {lang === 'en' ? 'Emotion-Aware Multiplayer VR System' : 'Sistema VR Multijugador con Detección de Emociones'}
                  </h3>
                  <p className="t-body" style={{ marginTop: 10, opacity: 0.85 }}>
                    {lang === 'en'
                      ? 'Integrated a realistic first-person avatar (Aura) in Unity with real-time emotion recognition via a custom UDP server. Built multiplayer functionality with Photon Fusion 2, including room creation, avatar selection, and an on-screen keyboard for room codes. Developed a camera-to-server pipeline that captures frames, analyzes facial expressions, and displays detected emotions next to avatars using TextMeshPro.'
                      : 'Integré un avatar realista en primera persona (Aura) en Unity con reconocimiento de emociones en tiempo real mediante un servidor UDP personalizado. Construí funcionalidad multijugador con Photon Fusion 2, incluyendo creación de salas, selección de avatar y teclado en pantalla para códigos de sala. Desarrollé un pipeline cámara-a-servidor que captura frames, analiza expresiones faciales y muestra las emociones detectadas junto a los avatares usando TextMeshPro.'}
                  </p>
                </div>
                <div className={styles.twinFeatureTags}>
                  {['Unity', 'Photon Fusion 2', 'UDP Server', 'Emotion AI'].map(tag => (
                    <span key={tag} className={styles.twinTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.twinGrid}>

              {/* Tech Stack + Research Areas */}
              <div className={styles.twinRight} style={{ height: 'auto' }}>
                <div className={`card ${styles.twinCard}`}>
                  <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 16 }}>
                    {lang === 'en' ? 'Tech Stack' : 'Stack Tecnológico'}
                  </p>
                  <div className={styles.twinTags}>
                    {['Unity', 'C#', 'Meta Quest', 'Photon Fusion 2', 'UDP/HTTP Server', 'TextMeshPro', 'Machine Learning', 'VR/XR', 'Facial Tracking'].map(tag => (
                      <span key={tag} className={styles.twinTag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={`card ${styles.twinCard}`} style={{ marginTop: 2 }}>
                  <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 16 }}>
                    {lang === 'en' ? 'Research Areas' : 'Áreas de Investigación'}
                  </p>
                  <div className={styles.twinTags}>
                    {(lang === 'en'
                      ? ['Real-time FER', 'Multiplayer VR', 'Avatar Emotion Mapping', 'Human-Computer Interaction', 'Social VR', 'Therapeutic Applications']
                      : ['FER en tiempo real', 'VR Multijugador', 'Mapeo emocional de avatares', 'Interacción Humano-Computador', 'VR Social', 'Aplicaciones terapéuticas']
                    ).map(tag => (
                      <span key={tag} className={styles.twinTag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* System Features */}
              <div className={`card ${styles.twinCard}`}>
                <p className="t-label" style={{ color: 'var(--cyan)', marginBottom: 16 }}>
                  {lang === 'en' ? 'System Features' : 'Funcionalidades del Sistema'}
                </p>
                <div className={styles.twinCapGrid}>
                  {(lang === 'en' ? [
                    { icon: '🎭', label: 'Aura Avatar', desc: 'Realistic first-person avatar with facial gesture simulation' },
                    { icon: '🧠', label: 'Emotion Detection', desc: 'Real-time facial expression analysis via custom server' },
                    { icon: '🌐', label: 'Multiplayer', desc: 'Photon Fusion 2 rooms with avatar selection & keyboard input' },
                    { icon: '📡', label: 'UDP Pipeline', desc: 'Camera frame capture → server analysis → avatar emotion display' },
                    { icon: '🎮', label: 'VR Menu System', desc: 'In-headset session creation and room management' },
                  ] : [
                    { icon: '🎭', label: 'Avatar Aura', desc: 'Avatar realista en primera persona con simulación de gestos faciales' },
                    { icon: '🧠', label: 'Detección de Emociones', desc: 'Análisis de expresiones faciales en tiempo real vía servidor' },
                    { icon: '🌐', label: 'Multijugador', desc: 'Salas Photon Fusion 2 con selección de avatar y teclado' },
                    { icon: '📡', label: 'Pipeline UDP', desc: 'Captura de frames → análisis en servidor → emociones en avatar' },
                    { icon: '🎮', label: 'Menú VR', desc: 'Creación de sesiones y gestión de salas desde el headset' },
                  ]).map((cap, i) => (
                    <div key={i} className={styles.twinCap}>
                      <span className={styles.twinCapIcon}>{cap.icon}</span>
                      <div>
                        <span className={styles.twinCapLabel}>{cap.label}</span>
                        <span className={styles.twinCapDesc}>{cap.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  )
}
