"use client"

import { useState, useEffect } from "react"
import { Star, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "@/types"

interface BettingCardProps {
  site: BettingSite
  rank: number
}

export function BettingCard({ site, rank }: BettingCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const getBadgeConfig = () => {
    switch (rank) {
      case 1:
        return {
          label: "MELHOR ESCOLHA",
          bg: "bg-primary",
          text: "text-primary-foreground",
          border: "border-primary",
          topBorder: "border-t-primary",
          glow: "glow-amber",
          rating: "text-primary",
        }
      case 2:
        return {
          label: "POPULAR",
          bg: "bg-green-500",
          text: "text-white",
          border: "border-green-500",
          topBorder: "border-t-green-500",
          glow: "glow-green",
          rating: "text-green-500",
        }
      case 3:
        return {
          label: "TENDÊNCIA",
          bg: "bg-blue-500",
          text: "text-white",
          border: "border-blue-500",
          topBorder: "border-t-blue-500",
          glow: "",
          rating: "text-blue-500",
        }
      default:
        return {
          label: "",
          bg: "bg-muted",
          text: "text-muted-foreground",
          border: "border-border",
          topBorder: "border-t-border",
          glow: "",
          rating: "text-muted-foreground",
        }
    }
  }

  const config = getBadgeConfig()
  const isTop = rank <= 3

  const RatingStars = ({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fill = Math.min(100, Math.max(0, ((rating - i * 2) / 2) * 100))
          return (
            <div key={i} className="relative">
              <Star className={`${size} text-muted`} />
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className={`${size} text-primary fill-primary`} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className={`
      relative bg-card border-2 border-t-4 rounded-2xl transition-all duration-300 card-hover
      ${isTop ? `${config.border} ${config.topBorder} ${config.glow} overflow-visible mt-4` : "border-border overflow-hidden"}
      ${rank === 1 ? "border-pulse" : ""}
    `}
    >
      {isTop && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <span
            className={`${config.bg} ${config.text} text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg`}
          >
            #{rank} {config.label}
          </span>
        </div>
      )}

      <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
        {/* Desktop Layout */}
        <div className="hidden md:block p-6 pt-6">
          <div className="grid grid-cols-[80px_180px_120px_1fr_160px] items-center gap-6">
            {/* Rank Column - fixed 80px */}
            <div className="flex flex-col items-center justify-center">
              <span className={`text-3xl font-bold ${config.rating}`}>#{rank}</span>
            </div>

            {/* Logo Column - fixed 180px */}
            <div className="bg-black rounded-xl p-4 h-[80px] w-[180px] flex items-center justify-center">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="h-12 max-w-[150px] object-contain"
              />
            </div>

            {/* Rating Column - fixed 120px */}
            <div className="flex flex-col items-center justify-center">
              <p className={`text-3xl font-bold ${config.rating}`}>{site.rating.toFixed(1)}</p>
              <RatingStars rating={site.rating} />
              <p className="text-xs text-muted-foreground mt-1">{site.votes.toLocaleString()} votos</p>
            </div>

            {/* Bonus Column - flexible */}
            <div className="text-center px-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Bónus de Boas-Vindas</p>
              <p className="text-lg font-bold text-foreground">{site.bonus}</p>
              <p className="text-sm text-muted-foreground">{site.welcomeOffer}</p>
            </div>

            {/* CTA Column - fixed 160px */}
            <div className="flex flex-col items-center justify-center gap-2">
              <Button className={`${config.bg} ${config.text} font-bold px-6 py-3 rounded-xl hover:opacity-90 w-full`}>
                OBTER BÓNUS
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <span className="text-xs text-muted-foreground">Visitar Site</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4 pt-6">
          {/* Rank number for non-top cards */}
          {!isTop && <span className={`text-lg font-bold ${config.rating} mb-3 block`}>#{rank}</span>}

          {/* Logo & Bonus Row */}
          <div className="flex gap-4 items-center mb-4">
            <div className="bg-black rounded-xl p-3 flex-shrink-0 w-[100px] h-[50px] flex items-center justify-center">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-8 max-w-[80px] object-contain" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-0.5">Bónus</p>
              <p className="text-base font-bold text-foreground leading-tight">{site.bonus}</p>
            </div>
          </div>

          {/* Rating & CTA Row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`text-2xl font-bold ${config.rating}`}>{site.rating.toFixed(1)}</span>
              <div>
                <RatingStars rating={site.rating} size="w-3 h-3" />
                <p className="text-[10px] text-muted-foreground">{site.votes.toLocaleString()}</p>
              </div>
            </div>
            <Button className={`${config.bg} ${config.text} font-bold px-6 py-2.5 rounded-xl text-sm`}>BÓNUS</Button>
          </div>
        </div>
      </Link>

      {/* Terms Footer */}
      <div className="bg-secondary/50 border-t border-border px-4 md:px-6 py-3">
        <div className={`text-[10px] md:text-xs text-muted-foreground text-center ${!expanded && "line-clamp-1"}`}>
          {site.terms}
        </div>
        {site.terms.length > 120 && (
          <button
            onClick={(e) => {
              e.preventDefault()
              setExpanded(!expanded)
            }}
            className="flex items-center gap-1 text-xs text-primary mx-auto mt-1 hover:underline"
          >
            {expanded ? "Menos" : "Mais"}
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        )}
      </div>
    </div>
  )
}
