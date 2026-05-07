'use client'

import { useRef, useEffect } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import SkillsChart from '@/components/SkillsChart/SkillsChart'
import { skills, experience } from '@/services/portfolioData'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './page.module.css'

const CATS = [
  { key: 'frontend', label: 'Frontend', color: '#00f0d4' },
  { key: 'ux', label: 'UX Design', color: '#c06cff' },
  { key: 'research', label: 'Research', color: '#9bbbff' },
  { key: 'backend', label: 'Backend', color: '#ffc850' },
  { key: 'tools', label: 'Tools', color: '#7a9690' },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const fillRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && fillRef.current) fillRef.current.style.width = `${level}%`
    }, { threshold: 0.1 })
    if (fillRef.current?.parentElement?.parentElement) obs.observe(fillRef.current.parentElement.parentElement)
    return () => obs.disconnect()
  }, [level])
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillRow}>
        <span className={`t-body ${styles.skillName}`}>{name}</span>
        <span className="t-mono" style={{ color }}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div ref={fillRef} className={styles.skillFill} style={{
          width: 0,
          background: `linear-gradient(to right, ${color}, ${color}66)`,
          boxShadow: `0 0 6px ${color}40`,
          transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
    </div>
  )
}

export default function IdentityPage() {
  const { t, lang } = useLanguage()

  return (
    <>
      <Navigation />
      <main id="main-content">

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <p className="t-label">{t('id.label')}</p>
                <h1 className={`t-display ${styles.title}`}>
                  Melissa Lizeth<br /><em>Contreras Rojas</em>
                </h1>
                <p className={`t-mono ${styles.roleTag}`}>{t('id.role')}</p>
                <p className={`t-body-lg ${styles.bio}`}>{t('id.bio1')}</p>
                <p className={`t-body-lg ${styles.bio}`}>{t('id.bio2')}</p>
                <div className={styles.heroCtas}>
                  <div className={styles.dossierBtns}>
                    <a href="/Resume UX Developer.pdf" className="btn btn-solid" id="dl-cv-full" target="_blank" rel="noopener noreferrer">{t('id.dossier.en')}</a>
                    <a href="/Hoja de Vida UX Developer.pdf" className="btn btn-solid" id="dl-cv-es" target="_blank" rel="noopener noreferrer">{t('id.dossier.es')}</a>
                  </div>
                  <a href="https://www.linkedin.com/in/melissa-lizeth-contreras-rojas/" className="btn btn-outline" id="linkedin-profile" target="_blank" rel="noopener noreferrer">
                    {t('id.linkedin')}
                  </a>
                </div>
              </div>

              <div className={`card ${styles.profileCard}`}>
                <div className={styles.avatar}>
                  <div className={styles.avatarGlow} />
                  <span className={styles.avatarInitials}>ML</span>
                </div>
                <hr className="rule" />
                <div className={styles.profileStats}>
                  {[
                    { lk: 'id.location', vk: 'id.location' },
                    { lk: 'id.education', vk: 'id.education' },
                    { lk: 'id.focus', vk: 'id.focus' },
                    { lk: 'id.languages', vk: 'id.languages' },
                  ].map(s => (
                    <div key={s.lk} className={styles.profileStat}>
                      <span className="t-mono">{s.lk.split('.')[1].toUpperCase()}</span>
                      <span className={`t-body ${styles.profileStatVal}`}>{t(s.vk)}</span>
                    </div>
                  ))}
                  <div className={styles.profileStat}>
                    <span className="t-mono">{t('id.avail.label')}</span>
                    <span className="badge badge-cyan"><span className="pulse" />
                      {lang === 'en' ? 'Open to Offers' : 'Disponible'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education highlight */}
        <section className={`section-xs ${styles.eduSection}`}>
          <div className="container">
            <div className={`card ${styles.eduCard}`}>
              <div className={styles.eduLeft}>
                <p className="t-label" style={{ marginBottom: 8 }}>
                  {lang === 'en' ? 'Education' : 'Educación'}
                </p>
                <h2 className="t-h3" style={{ color: 'var(--white)', marginBottom: 4 }}>
                  B.Sc. Systems and Computing Engineering
                </h2>
                <p className="t-body" style={{ color: 'var(--cyan)' }}>Universidad de los Andes · 2020 – 2024</p>
              </div>
              <div className={styles.eduRight}>
                <p className="t-mono" style={{ marginBottom: 8, opacity: 0.5 }}>
                  {lang === 'en' ? 'RELEVANT COURSEWORK' : 'CURSOS RELEVANTES'}
                </p>
                <div className={styles.courseTags}>
                  {[
                    'Software Engineering in Teams', 'Web Development',
                    'Mixed Reality Applications', 'Images & Vision',
                    'Product Design & Innovation', 'Data Structures & Algorithms',
                    'Algorithm Design & Analysis',
                  ].map(c => <span key={c} className={styles.courseTag}>{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills — The Matrix */}
        <section className={`section ${styles.matrixSection}`} aria-labelledby="matrix-heading">
          <div className="container">
            <p className="t-label">{t('id.matrix.label')}</p>
            <h2 id="matrix-heading" className="t-h1" style={{ margin: '12px 0 56px' }}>{t('id.matrix.title')}</h2>
            <div className={styles.matrixGrid}>
              <div className={`card ${styles.chartWrap}`}><SkillsChart skills={skills} /></div>
              <div className={styles.skillsDetail}>
                {CATS.map(cat => {
                  const catSkills = skills.filter(s => s.category === cat.key)
                  return (
                    <div key={cat.key} className={styles.skillCat}>
                      <div className={styles.skillCatHead}>
                        <span className={styles.skillCatDot} style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}` }} />
                        <span className="t-mono" style={{ color: cat.color, letterSpacing: '0.1em' }}>{cat.label.toUpperCase()}</span>
                      </div>
                      {catSkills.map(s => <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />)}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
