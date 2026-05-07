'use client'

import Navigation from '@/components/Navigation/Navigation'
import { projects } from '@/services/portfolioData'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './page.module.css'
import Link from 'next/link'

const STATUS_CLASS: Record<string, string> = {
  active: 'badge-cyan', completed: 'badge-amber', research: 'badge-purple',
}

export default function WorkPage() {
  const { t, lang } = useLanguage()
  const featured = projects.filter(p => p.featured)
  const archive  = projects.filter(p => !p.featured)

  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className={styles.header}>
          <div className="container">
            <p className="t-label">{t('work.label')}</p>
            <h1 className={`t-display ${styles.title}`}>
              {t('work.title1')} <em>{t('work.title2')}</em>
            </h1>
            <p className={`t-body-lg ${styles.subtitle}`}>{t('work.subtitle')}</p>
          </div>
        </section>


        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <p className={`t-label ${styles.gridLabel}`}>{t('work.featured')}</p>
            <div className={styles.grid}>
              {featured.map((p, i) => (
                <article key={p.id} className={`card card-lift ${styles.card}`} style={{ '--accent': p.color } as React.CSSProperties}>
                  <div className={styles.cardTopLine} />
                  <div className={styles.cardImg} style={!p.image ? { background: `linear-gradient(135deg, var(--bg-raised), ${p.color}18)` } : undefined}>
                    {p.image
                      ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      : <span className={styles.cardNum}>{String(i+1).padStart(2,'0')}</span>
                    }
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className="t-label" style={{ color: p.color }}>{p.category}</span>
                      <span className={`badge ${STATUS_CLASS[p.status]}`}>
                        <span className="pulse" />{t(`status.${p.status}`)}
                      </span>
                    </div>
                    <h2 className={`t-h3 ${styles.cardTitle}`}>{p.title}</h2>
                    <p className="t-body">{p.description[lang]}</p>
                    {p.metrics && (
                      <div className={styles.cardMetrics}>
                        {p.metrics.map(m => (
                          <div key={m.label} className={styles.cardMetric}>
                            <span className={styles.cardMetricVal} style={{ color: p.color }}>{m.value}</span>
                            <span className="t-mono">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className={styles.cardTags}>
                      {p.tags.map(tag => <span key={tag} className={styles.cardTag}>{tag}</span>)}
                    </div>
                    {p.id === 'vr-cognitive-assessment' && (
                      <Link href="/research" className={`btn btn-ghost ${styles.cardBtn}`} id={`work-${p.id}`}>
                        {t('work.btn')}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {archive.length > 0 && (
              <>
                <hr className="rule" style={{ margin: '80px 0 48px' }} />
                <p className={`t-label ${styles.gridLabel}`}>{t('work.archive')}</p>
                <div className={styles.gridSmall}>
                  {archive.map(p => (
                    <article key={p.id} className={`card card-lift ${styles.cardSmall}`} style={{ '--accent': p.color } as React.CSSProperties}>
                      <div className={styles.cardTopLine} />
                      <div className={styles.cardBody} style={{ padding: 24 }}>
                        <div className={styles.cardMeta}>
                          <span className="t-label" style={{ color: p.color }}>{p.category}</span>
                          <span className={`badge ${STATUS_CLASS[p.status]}`}>{t(`status.${p.status}`)}</span>
                        </div>
                        <h3 className={`t-h3 ${styles.cardTitle}`} style={{ fontSize: 18 }}>{p.title}</h3>
                        <p className="t-body">{p.description[lang]}</p>
                        <div className={styles.cardTags} style={{ marginTop: 12 }}>
                          {p.tags.slice(0,3).map(tag => <span key={tag} className={styles.cardTag}>{tag}</span>)}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
