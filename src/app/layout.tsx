import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Melissa Lizeth Contreras Rojas — Software Engineer & XR Researcher',
  description: 'Software Engineer with experience in frontend and full-stack development. Published author in Springer Nature. Specialized in React, Flutter, Golang and Virtual Reality.',
  keywords: ['Software Engineer', 'Frontend Developer', 'Flutter', 'Golang', 'XR Research', 'HCI', 'Virtual Reality', 'Springer'],
  authors: [{ name: 'Melissa Lizeth Contreras Rojas' }],
  openGraph: {
    title: 'Melissa Lizeth Contreras Rojas — Software Engineer & XR Researcher',
    description: 'Software Engineer · Frontend & Full Stack · Published Author at Springer Nature',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
