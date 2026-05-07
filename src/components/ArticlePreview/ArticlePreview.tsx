'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import styles from './ArticlePreview.module.css'

interface ArticlePreviewProps {
  title: string
  abstract: { en: string; es: string }
  doi: string
  url: string
  publisher: string
  conference: string
  year: string
  authors: string[]
  tags: string[]
  platform: string
}

export default function ArticlePreview({
  title, abstract, doi, url, publisher, conference,
  year, authors, tags, platform,
}: ArticlePreviewProps) {
  const { lang } = useLanguage()

  return (
    <div className={styles.wrap}>

      {/* Top publisher bar */}
      <div className={styles.publisherBar}>
        <div className={styles.publisherLeft}>
          <div className={styles.springerLogo}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#ff6600" strokeWidth="2"/>
              <path d="M8 12h8M12 8v8" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className={styles.publisherName}>{publisher}</span>
            <span className={styles.publisherSub}>Advances in Computing</span>
          </div>
        </div>
        <div className={styles.publisherRight}>
          <span className={styles.yearBadge}>{year}</span>
          <span className={styles.confBadge}>{conference}</span>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.body}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <div className={styles.titleIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12h6M9 16h6M9 8h6M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
              </svg>
            </div>
            <div>
              <p className={styles.articleLabel}>
                {lang === 'en' ? 'Research Article' : 'Artículo de Investigación'}
              </p>
              <h2 className={styles.articleTitle}>{title}</h2>
            </div>
          </div>

          {/* Authors */}
          <div className={styles.authors}>
            <span className={styles.authorLabel}>
              {lang === 'en' ? 'Authors' : 'Autoras'}:
            </span>
            {authors.map((a, i) => (
              <span key={a} className={`${styles.author} ${i === 0 ? styles.authorLead : ''}`}>
                {a}{i === 0 && <span className={styles.leadBadge}>Lead Author</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Abstract */}
        <div className={styles.abstractWrap}>
          <p className={styles.abstractLabel}>
            {lang === 'en' ? 'Abstract' : 'Resumen'}
          </p>
          <p className={styles.abstractText}>{abstract[lang]}</p>
        </div>

        {/* Platform / method highlight */}
        <div className={styles.methodRow}>
          <div className={styles.methodCard}>
            <span className={styles.methodIcon}>🥽</span>
            <div>
              <p className={styles.methodLabel}>{lang === 'en' ? 'Platform' : 'Plataforma'}</p>
              <p className={styles.methodVal}>{platform}</p>
            </div>
          </div>
          <div className={styles.methodCard}>
            <span className={styles.methodIcon}>🧠</span>
            <div>
              <p className={styles.methodLabel}>{lang === 'en' ? 'AI Engine' : 'Motor IA'}</p>
              <p className={styles.methodVal}>OpenAI API</p>
            </div>
          </div>
          <div className={styles.methodCard}>
            <span className={styles.methodIcon}>📋</span>
            <div>
              <p className={styles.methodLabel}>{lang === 'en' ? 'Clinical Test' : 'Test Clínico'}</p>
              <p className={styles.methodVal}>R3P (3-Word Recall)</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        {/* Footer — DOI + link */}
        <div className={styles.footer}>
          <div className={styles.doiRow}>
            <span className={styles.doiLabel}>DOI</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.doi}
              id="article-doi-link"
            >
              {doi}
            </a>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.readBtn}
            id="article-springer-link"
          >
            {lang === 'en' ? 'Read on Springer ↗' : 'Leer en Springer ↗'}
          </a>
        </div>
      </div>
    </div>
  )
}
