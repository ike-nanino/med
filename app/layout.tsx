import type { Metadata, Viewport } from 'next'
import './globals.css'

import Navbar       from '@/components/Navbar'
import Footer       from '@/components/Footer'
import EmergencyBar from '@/components/EmergencyBar'

export const metadata: Metadata = {
  title: {
    default:  'MedAir Global | Medical Transport & Air Ambulance Services',
    template: '%s | MedAir Global',
  },
  description:
    'World-class medical transport — air ambulance planes, helicopters, ground ambulance, commercial medical escorts and international patient repatriation. Available 24/7 across 150+ countries.',
  keywords: [
    'air ambulance',
    'medical transport',
    'ground ambulance',
    'medical escort',
    'patient repatriation',
    'international repatriation',
    'air ambulance helicopter',
    'stretcher flight',
    'CAMTS accredited',
  ],
  authors:  [{ name: 'MedAir Global' }],
  creator:  'MedAir Global',
  metadataBase: new URL('https://www.medairglobal.com'),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://www.medairglobal.com',
    siteName:    'MedAir Global',
    title:       'MedAir Global | Medical Transport & Air Ambulance Services',
    description: 'World-class medical transport available 24/7 across 150+ countries.',
  },
}

export const viewport: Viewport = {
  themeColor: '#C0392B',
  width:      'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FDF8F2] text-[#1C1C1E] antialiased overflow-x-hidden">
        {/* Sticky emergency top bar */}
        <EmergencyBar />
        {/* Sticky navbar — sits just below emergency bar */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}