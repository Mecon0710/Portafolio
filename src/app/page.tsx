'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation/Navigation'
import { projects, experience, techStack } from '@/services/portfolioData'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './page.module.css'

/* ── Star Field ──────────────────────────────────── */
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    type Star = { x: number; y: number; r: number; o: number; speed: number; color: string }
    const colors = ['#00f0d4', '#ffffff', '#3dd6c0', '#c06cff']
    const stars: Star[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2, o: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.15 + 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color; ctx.globalAlpha = s.o; ctx.fill(); ctx.globalAlpha = 1
        s.y -= s.speed
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width }
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className={styles.starfield} aria-hidden="true" />
}

/* ── Typewriter ──────────────────────────────────── */
function Typewriter({ words }: { words: string[] }) {
  const displayRef = useRef<HTMLSpanElement>(null)
  const state = useRef({ idx: 0, charIdx: 0, deleting: false })
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const { idx, charIdx, deleting } = state.current
      const word = words[idx]
      if (!word) return
      if (!deleting) {
        if (displayRef.current) displayRef.current.textContent = word.slice(0, charIdx + 1)
        if (charIdx + 1 === word.length) { setTimeout(() => { state.current.deleting = true; tick() }, 1800); return }
        state.current.charIdx++
        timer = setTimeout(tick, 90)
      } else {
        if (displayRef.current) displayRef.current.textContent = word.slice(0, charIdx - 1)
        if (charIdx - 1 === 0) {
          state.current = { idx: (idx + 1) % words.length, charIdx: 0, deleting: false }
        } else { state.current.charIdx-- }
        timer = setTimeout(tick, 35)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [words])
  return (
    <span className={styles.typewriterWrap}>
      <span ref={displayRef} />
      <span className={styles.cursor} aria-hidden="true">|</span>
    </span>
  )
}

/* ── Marquee ─────────────────────────────────────── */
function TechMarquee() {
  const items = [...techStack, ...techStack]
  return (
    <div className={styles.marqueeWrap} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {items.map((tech, i) => (
          <span key={i} className={styles.marqueeItem}>
            <span className={styles.marqueeDot} />{tech}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Home ────────────────────────────────────────── */
export default function HomePage() {
  const { t, lang } = useLanguage()
  const featuredProjects = projects.filter(p => p.featured)
  const words = t('hero.words').split(',')

  const STATUS_CLASS: Record<string, string> = {
    active: 'badge-cyan', completed: 'badge-amber', research: 'badge-purple',
  }

  return (
    <>
      <Navigation />
      <main id="main-content">

        {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className={styles.hero} aria-label="Introduction">
          <StarField />
          <div className={styles.heroRule} aria-hidden="true" />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroLeft}>
              <p className={`t-label ${styles.heroLabel}`}>
                <span className={styles.pulseDot} />{t('hero.label')}
              </p>
              <h1 className={`t-display ${styles.heroTitle}`}>
                {t('hero.title1')}<br />
                <em>{t('hero.title2')}</em><br />
                <Typewriter key={lang} words={words} />
              </h1>
              <p className={`t-body-lg ${styles.heroSubtitle}`}>{t('hero.subtitle')}</p>
              <div className={styles.heroCtas}>
                <Link href="/work" className="btn btn-solid" id="cta-work">{t('hero.cta.work')}</Link>
                <Link href="/connect" className="btn btn-outline" id="cta-connect">{t('hero.cta.connect')}</Link>
              </div>
              <div className={styles.heroMeta}>
                <a href="https://www.linkedin.com/in/melissa-lizeth-contreras-rojas/" target="_blank" rel="noopener noreferrer" className={styles.metaLink} id="nav-linkedin">LinkedIn ↗</a>
                <span className={styles.metaSep} />
                <a href="https://github.com/Mecon0710" target="_blank" rel="noopener noreferrer" className={styles.metaLink} id="nav-github">GitHub ↗</a>
                <span className={styles.metaSep} />
                <Link href="/identity" className={styles.metaLink} id="nav-cv">CV Archive</Link>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroCard}>
                <div className={styles.heroCardHeader}>
                  <span className="t-label">{t('hero.card.label')}</span>
                  <span className="badge badge-cyan"><span className="pulse" />Springer</span>
                </div>
                <h2 className={`t-h3 ${styles.heroCardTitle}`}>{t('hero.card.title')}</h2>
                <p className="t-body">{t('hero.card.desc')}</p>
                <div className={styles.heroCardTags}>
                  {['Meta Quest Pro', 'WebXR', 'Springer', 'HCI'].map(tag => (
                    <span key={tag} className={styles.heroCardTag}>{tag}</span>
                  ))}
                </div>
                <Link href="/research" className={`btn btn-ghost ${styles.heroCardBtn}`} id="hero-explore">
                  {t('hero.card.btn')}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.scrollIndicator} aria-hidden="true">
            <div className={styles.scrollLine} />
            <span className="t-mono">scroll</span>
          </div>
        </section>

        {/* ━━━ MARQUEE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className={styles.marqueeSection}><TechMarquee /></div>

        {/* ━━━ STATS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className={`section-xs ${styles.statsSection}`} aria-label="Key metrics">
          <div className="container">
            <div className={styles.statsGrid}>
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={styles.stat}>
                  <span className={`t-h1 ${styles.statNum}`}>{t(`stat.${i}.n`)}</span>
                  <span className={`t-body ${styles.statLabel}`}>{t(`stat.${i}.l`)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ PROJECTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section-sm" aria-labelledby="work-heading">
          <div className="container">
            <header className={styles.sectionHead}>
              <div>
                <p className="t-label">{t('section.work.label')}</p>
                <h2 id="work-heading" className="t-h1">{t('section.work.title')}</h2>
              </div>
              <Link href="/work" className={styles.sectionMore} id="all-works-link">{t('section.work.more')}</Link>
            </header>

            <div className={styles.projectsGrid}>
              {featuredProjects.map((p, i) => (
                <article key={p.id} className={`card card-lift ${styles.projectCard}`} style={{ '--accent': p.color } as React.CSSProperties}>
                  <div className={styles.projectAccent} />
                  <div className={styles.projectImg} style={!p.image ? { background: `linear-gradient(135deg, var(--bg-raised), ${p.color}18)` } : undefined}>
                    {p.image
                      ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      : <span className={styles.projectImgLabel}>{String(i + 1).padStart(2, '0')}</span>
                    }
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectMeta}>
                      <span className="t-label" style={{ color: p.color }}>{p.category}</span>
                      <span className={`badge ${STATUS_CLASS[p.status]}`}>
                        <span className="pulse" />{t(`status.${p.status}`)}
                      </span>
                    </div>
                    <h3 className={`t-h3 ${styles.projectTitle}`}>{p.title}</h3>
                    <div className={styles.projectTags}>
                      {p.tags.slice(0, 2).map(tag => <span key={tag} className={styles.projectTag}>{tag}</span>)}
                    </div>
                    <Link
                      href={p.id === 'vr-cognitive-assessment' ? '/research' : '/work'}
                      className={`btn btn-ghost ${styles.projectBtn}`}
                      id={`project-${p.id}`}
                    >
                      {t('work.btn')}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ EXPERIENCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="section" aria-labelledby="exp-heading" style={{ paddingTop: 48 }}>
          <div className="container">
            <header className={styles.sectionHead} style={{ marginBottom: 64 }}>
              <p className="t-label">{t('section.exp.label')}</p>
              <h2 id="exp-heading" className="t-h1">{t('section.exp.title')}</h2>
            </header>
            <div className={styles.timeline}>
              {experience.map((e, i) => (
                <div key={`${e.company}-${i}`} className={styles.timelineItem}>
                  <div className={styles.timelineLeft}>
                    <span className={`t-mono ${styles.timelineNum}`}>{String(i + 1).padStart(2, '0')}</span>
                    <div className={styles.timelineDot} />
                  </div>
                  <div className={`card ${styles.timelineCard}`}>
                    <div className={styles.timelineHead}>
                      <div>
                        <p className="t-label" style={{ color: 'var(--cyan)' }}>{e.period}</p>
                        <h3 className={`t-h3 ${styles.timelineRole}`}>{e.role}</h3>
                        <p className={`t-body ${styles.timelineCompany}`}>{e.company}</p>
                      </div>
                    </div>
                    <p className="t-body">{e.description[lang]}</p>
                    <div className={styles.timelineTags}>
                      {e.tags.map(tag => <span key={tag} className={styles.timelineTag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className={`section-sm ${styles.ctaSection}`} aria-label="Call to action">
          <div className="container">
            <div className={styles.ctaBox}>
              <p className="t-label" style={{ marginBottom: 16 }}>{t('section.cta.label')}</p>
              <h2 className="t-h1">
                {t('section.cta.title1')}<br />
                <em>{t('section.cta.title2')}</em>
              </h2>
              <p className="t-body-lg" style={{ marginTop: 20, maxWidth: 480 }}>{t('section.cta.desc')}</p>
              <div className={styles.ctaBtns}>
                <Link href="/connect" className="btn btn-solid" id="cta-bottom">{t('section.cta.btn1')}</Link>
                <Link href="/identity" className="btn btn-outline" id="cta-cv">{t('section.cta.btn2')}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <footer className={styles.footer} role="contentinfo">
          <div className="container">
            <hr className="rule" />
            <div className={styles.footerInner}>
              <p className="t-mono">{t('footer.copy')}</p>
              <nav className={styles.footerNav} aria-label="Footer links">
                <a href="https://www.linkedin.com/in/melissa-lizeth-contreras-rojas/" target="_blank" rel="noopener noreferrer" className="t-mono">LinkedIn ↗</a>
                <a href="https://github.com/Mecon0710" target="_blank" rel="noopener noreferrer" className="t-mono">GitHub ↗</a>
                <Link href="/connect" className="t-mono">Contact</Link>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
