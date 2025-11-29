"use client"

import { HeroSection } from "@/components/hero-section"
import { BettingList } from "@/components/betting-list"
import { ContentSection } from "@/components/content-section"
import { CookieBanner } from "@/components/cookie-banner"
import { PromoModal } from "@/components/promo-modal"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  return (
    <>
      <SiteHeader />
      <div
        className="w-full min-h-screen relative"
        style={{
          backgroundImage: isDesktop ? `url('/portugal-sports-celebration-background.jpg')` : "none",
          backgroundColor: isDesktop ? "transparent" : "#0a0a0a",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for the entire page - only on desktop */}
        {isDesktop && (
          <div className="absolute inset-0 bg-black/40 pointer-events-none" style={{ position: "fixed" }} />
        )}

        <div className="relative z-10">
          <HeroSection />
          <div className="container mx-auto px-4 max-w-6xl py-8">
            <BettingList />
            <ContentSection />
          </div>
        </div>
      </div>

      <CookieBanner />
      <PromoModal />
      <SiteFooter />
    </>
  )
}
