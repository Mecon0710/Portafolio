'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './page.module.css'

const CHANNELS = [
  { id: 'email', icon: '✉', label: 'Email', value: 'melissacon10@gmail.com', href: 'mailto:melissacon10@gmail.com', color: '#00f0d4' },
  { id: 'linkedin', icon: 'in', label: 'LinkedIn', value: 'in/melissa-lizeth-contreras-rojas', href: 'https://linkedin.com/in/melissa-lizeth-contreras-rojas', color: '#c06cff' },
  { id: 'github', icon: '</>', label: 'GitHub', value: 'Mecon0710', href: 'https://github.com/Mecon0710', color: '#ffc850' },
]

type FormState = 'idle' | 'loading' | 'success'

export default function ConnectPage() {
  const { t } = useLanguage()
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    await new Promise(r => setTimeout(r, 1400))
    setState('success')
  }

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
                <p className="t-label" style={{ marginBottom: 24 }}>{t('connect.form.label')}</p>
                {state === 'success' ? (
                  <div className={`card ${styles.success}`}>
                    <div className={styles.successIcon}>✓</div>
                    <h2 className="t-h3">{t('connect.success.title')}</h2>
                    <p className="t-body">{t('connect.success.desc')}</p>
                    <button className="btn btn-ghost" onClick={() => { setState('idle'); setForm({ name: '', email: '', type: '', message: '' }) }}>
                      {t('connect.success.btn')}
                    </button>
                  </div>
                ) : (
                  <form className={`card ${styles.form}`} onSubmit={handleSubmit} noValidate>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="name" className="t-mono">{t('connect.name')}</label>
                        <input id="name" name="name" type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className={styles.input} placeholder="Your name" required />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="email" className="t-mono">{t('connect.email')}</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className={styles.input} placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="type" className="t-mono">{t('connect.type')}</label>
                      <select id="type" name="type" value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} className={styles.select} required>
                        <option value="">{t('connect.type.ph')}</option>
                        <option value="project">{t('connect.type.1')}</option>
                        <option value="research">{t('connect.type.2')}</option>
                        <option value="job">{t('connect.type.3')}</option>
                        <option value="consulting">{t('connect.type.4')}</option>
                        <option value="other">{t('connect.type.5')}</option>
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="message" className="t-mono">{t('connect.message')}</label>
                      <textarea id="message" name="message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className={styles.textarea} placeholder={t('connect.message.ph')} rows={5} required />
                    </div>
                    <button type="submit" className={`btn btn-solid ${styles.submit}`} disabled={state === 'loading'} id="submit-contact">
                      {state === 'loading' ? t('connect.loading') : t('connect.submit')}
                    </button>
                  </form>
                )}
              </div>

              <div className={styles.rightCol}>
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
