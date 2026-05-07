'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navKeys } from '@/services/portfolioData'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './Navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()
  const { lang, toggle, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        {/* Wordmark */}
        <Link href="/" className={styles.wordmark} aria-label="Melissa Contreras — Home">
          <span className={styles.wordmarkName}>MELISSA CONTRERAS</span>
          <span className={styles.wordmarkDivider} aria-hidden="true" />
          <span className={styles.wordmarkRole}>Software Engineer</span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {navKeys.map((item) => {
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${active ? styles.linkActive : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {t(item.key)}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right — lang toggle + CTA */}
        <div className={styles.right}>
          {/* Language Toggle */}
          <button
            className={styles.langToggle}
            onClick={toggle}
            aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
            id="lang-toggle"
          >
            <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            <span className={styles.langBar} aria-hidden="true" />
            <span className={lang === 'es' ? styles.langActive : styles.langInactive}>ES</span>
          </button>

          <Link href="/connect" className={`btn btn-outline ${styles.cta}`} id="nav-cta">
            {t('nav.cta')}
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
      >
        <ul role="list">
          {navKeys.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.drawerLink} ${pathname === item.href ? styles.drawerLinkActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.drawerCode}>{item.code}</span>
                <span>{t(item.key)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.drawerBottom}>
          <button className={styles.langToggleMobile} onClick={toggle} id="lang-toggle-mobile">
            <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            <span className={styles.langBar} aria-hidden="true" />
            <span className={lang === 'es' ? styles.langActive : styles.langInactive}>ES</span>
          </button>
          <Link href="/connect" className="btn btn-solid" onClick={() => setMenuOpen(false)}>
            {t('nav.cta')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
