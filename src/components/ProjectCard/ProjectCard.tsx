'use client'

import Link from 'next/link'
import type { Project } from '@/types/portfolio'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  index: number
  featured?: boolean
}

const STATUS_CONFIG = {
  active: { label: 'ACTIVE', color: 'cyan' },
  completed: { label: 'COMPLETED', color: 'amber' },
  research: { label: 'RESEARCH', color: 'purple' },
}

export default function ProjectCard({ project, index, featured = false }: Props) {
  const { lang } = useLanguage()
  const status = STATUS_CONFIG[project.status]

  return (
    <article
      className={`${styles.card} ${featured ? styles.cardFeatured : ''} card-hover glass`}
      style={{ '--accent': project.color } as React.CSSProperties}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={`label-mono ${styles.index}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`chip chip-${status.color === 'cyan' ? 'cyan' : status.color === 'amber' ? 'amber' : 'purple'}`}>
            <span className="pulse-dot" />
            {status.label}
          </span>
        </div>
        <span className={`label-mono ${styles.year}`}>{project.year}</span>
      </div>

      {/* Category */}
      <p className={`label-mono ${styles.category}`}>{project.category}</p>

      {/* Title */}
      <h3 className={`${featured ? 'headline-md' : 'headline-sm'} ${styles.title}`}>
        {project.title}
      </h3>

      {/* Description */}
      <p className={`body-md ${styles.description}`}>{project.description[lang]}</p>

      {/* Tags */}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={`label-mono ${styles.tag}`}>{tag}</span>
        ))}
      </div>

      {/* Metrics */}
      {project.metrics && (
        <div className={styles.metrics}>
          {project.metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={`label-mono ${styles.metricLabel}`}>{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className={styles.footer}>
        <Link href={`/work/${project.id}`} className={`btn-ghost ${styles.viewBtn}`} id={`project-${project.id}`}>
          View Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Accent glow border top */}
      <div className={styles.accentLine} />
    </article>
  )
}
