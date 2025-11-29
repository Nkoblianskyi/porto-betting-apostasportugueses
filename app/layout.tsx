import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Apostas Portugueses - Melhores Casas de Apostas Portugal 2025",
  description:
    "Descubra as melhores casas de apostas licenciadas em Portugal. Comparações detalhadas, bónus exclusivos e análises especializadas para apostadores portugueses.",
  keywords: "apostas Portugal, casas de apostas, bónus apostas, apostas desportivas, SRIJ Portugal",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="antialiased min-h-screen bg-background">
        <main>{children}</main>
      </body>
    </html>
  )
}
