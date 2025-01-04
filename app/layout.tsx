import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biogas Minichmair',
  description: 'Energie Minichmair GmbH - Ihr Experte für Biogas in Ried. Innovative Lösungen für nachhaltige Energiegewinnung und Reststoffverwertung.',
  keywords: 'Energie Minichmair, Biogas Ried, Werner Minichmair, nachhaltige Energie, Reststoffverwertung, Biogasanlage',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
