export type BilingualText = { en: string; es: string }

export interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  year: string
  description: BilingualText
  longDescription?: BilingualText
  status: 'active' | 'completed' | 'research'
  metrics?: { label: string; value: string }[]
  color: string
  image?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'ux' | 'research' | 'backend' | 'tools'
}

export interface Experience {
  company: string
  role: string
  period: string
  description: BilingualText
  tags: string[]
}

export interface NavItem {
  label: string
  href: string
  code: string
}
