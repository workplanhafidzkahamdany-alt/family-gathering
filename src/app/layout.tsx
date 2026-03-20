import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Family Gathering 2025 — Eid Al-Fitr',
  description: 'Our beloved family gathering celebration — Minal Aidin Wal Faizin!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
