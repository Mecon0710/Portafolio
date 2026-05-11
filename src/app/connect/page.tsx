'use client'

import Navigation from '@/components/Navigation/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './page.module.css'

const CHANNELS = [
  { id: 'email', icon: '✉', label: 'Email', value: 'melissacon10@gmail.com', href: 'mailto:melissacon10@gmail.com', color: '#00f0d4' },
  { id: 'linkedin', icon: 'in', label: 'LinkedIn', value: 'in/melissa-lizeth-contreras-rojas', href: 'https://linkedin.com/in/melissa-lizeth-contreras-rojas', color: '#c06cff' },
  { id: 'github', icon: '</>', label: 'GitHub', value: 'Mecon0710', href: 'https://github.com/Mecon0710', color: '#ffc850' },
]

export default function ConnectPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className={styles.header}>
          <div className="container">
            <p className="t-label">{t('connect.label')}</p>
            <h1 className={`t-display ${styles.title}`}>
              {t('connect.title1')}<br /><em>{t('connect.title2')}</em>
            </h1>
            <p className={`t-body-lg ${styles.subtitle}`}>{t('connect.subtitle')}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.grid}>
              <div>
                <p className="t-label" style={{ marginBottom: 24 }}>{t('connect.channels.label')}</p>
                <div className={styles.channels}>
                  {CHANNELS.map(ch => (
                    <a key={ch.id} href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`card ${styles.channel}`} id={`channel-${ch.id}`}
                      style={{ '--accent': ch.color } as React.CSSProperties}
                    >
                      <div className={styles.channelIcon} style={{ color: ch.color, borderColor: `${ch.color}30` }}>
                        {ch.icon}
                      </div>
                      <div>
                        <p className={`t-h3 ${styles.channelLabel}`}>{ch.label}</p>
                        <p className="t-body">{ch.value}</p>
                      </div>
                      <span className={styles.channelArrow}>→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.rightCol}>
                <div className={`card ${styles.avail}`}>
                  <div className={styles.availHead}>
                    <span className="badge badge-cyan"><span className="pulse" />AVAILABLE</span>
                  </div>
                  <h3 className="t-h3" style={{ margin: '8px 0' }}>{t('connect.avail.title')}</h3>
                  <p className="t-body">{t('connect.avail.text')}</p>
                  <div className={styles.availMeta}>
                    <div>
                      <span className="t-mono">{t('connect.response')}</span>
                      <span className="t-body" style={{ color: 'var(--white)' }}>&lt;24h</span>
                    </div>
                    <div>
                      <span className="t-mono">{t('connect.timezone')}</span>
                      <span className="t-body" style={{ color: 'var(--white)' }}>COT (UTC-5)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
