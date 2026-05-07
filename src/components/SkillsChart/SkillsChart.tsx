'use client'

import { useEffect, useRef } from 'react'
import type { Skill } from '@/types/portfolio'
import styles from './SkillsChart.module.css'

interface Props { skills: Skill[] }

const CATEGORY_COLORS: Record<string, string> = {
  frontend: '#00f0d4',
  ux:       '#c06cff',
  research: '#9bbbff',
  backend:  '#ffc850',
  tools:    '#7a9690',
}

const LABELS = ['Frontend', 'UX Design', 'Research', 'Backend', 'Tools']
const CATS   = ['frontend', 'ux', 'research', 'backend', 'tools']

export default function SkillsChart({ skills }: Props) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const importD3 = async () => {
      const d3   = await import('d3')
      const svg  = d3.select(svgRef.current)
      const W    = 400
      const H    = 400
      const cx   = W / 2
      const cy   = H / 2
      const r    = 150
      const n    = CATS.length
      const step = (2 * Math.PI) / n

      svg.selectAll('*').remove()
      svg.attr('viewBox', `0 0 ${W} ${H}`)

      const g = svg.append('g').attr('transform', `translate(${cx},${cy})`)

      // Grid rings
      const RINGS = [0.25, 0.5, 0.75, 1]
      RINGS.forEach(f => {
        const pts = CATS.map((_, i) => {
          const a = i * step - Math.PI / 2
          return [Math.cos(a) * r * f, Math.sin(a) * r * f]
        })
        g.append('polygon')
          .attr('points', pts.map(p => p.join(',')).join(' '))
          .attr('fill', 'none')
          .attr('stroke', 'rgba(255,255,255,0.05)')
          .attr('stroke-width', 1)
      })

      // Axes
      CATS.forEach((_, i) => {
        const a = i * step - Math.PI / 2
        g.append('line')
          .attr('x2', Math.cos(a) * r)
          .attr('y2', Math.sin(a) * r)
          .attr('stroke', 'rgba(255,255,255,0.06)')
          .attr('stroke-width', 1)
      })

      // Compute data polygon
      const avgByCategory: Record<string, number> = {}
      CATS.forEach(cat => {
        const catSkills = skills.filter(s => s.category === cat)
        avgByCategory[cat] = catSkills.length
          ? catSkills.reduce((sum, s) => sum + s.level, 0) / catSkills.length / 100
          : 0
      })

      const dataPoints = CATS.map((cat, i) => {
        const a = i * step - Math.PI / 2
        const v = avgByCategory[cat]
        return [Math.cos(a) * r * v, Math.sin(a) * r * v]
      })

      // Filled area
      g.append('polygon')
        .attr('points', dataPoints.map(p => p.join(',')).join(' '))
        .attr('fill', 'rgba(0,240,212,0.06)')
        .attr('stroke', 'rgba(0,240,212,0.4)')
        .attr('stroke-width', 1.5)

      // Dots per category
      CATS.forEach((cat, i) => {
        const a = i * step - Math.PI / 2
        const v = avgByCategory[cat]
        const color = CATEGORY_COLORS[cat]
        g.append('circle')
          .attr('cx', Math.cos(a) * r * v)
          .attr('cy', Math.sin(a) * r * v)
          .attr('r', 5)
          .attr('fill', color)
          .attr('filter', `drop-shadow(0 0 6px ${color})`)
      })

      // Labels
      CATS.forEach((cat, i) => {
        const a = i * step - Math.PI / 2
        const lx = Math.cos(a) * (r + 24)
        const ly = Math.sin(a) * (r + 24)
        g.append('text')
          .attr('x', lx)
          .attr('y', ly)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('fill', CATEGORY_COLORS[cat])
          .attr('font-size', '10px')
          .attr('font-family', 'Inter, sans-serif')
          .attr('letter-spacing', '0.08em')
          .attr('font-weight', '500')
          .text(LABELS[i].toUpperCase())
      })
    }

    importD3()
  }, [skills])

  return (
    <div className={styles.wrapper}>
      <svg ref={svgRef} className={styles.svg} role="img" aria-label="Skills radar chart" />
    </div>
  )
}
