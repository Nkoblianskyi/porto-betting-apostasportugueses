"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { bettingSites } from "@/data/betting-data"

export function PromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!open) return null

  const topSite = bettingSites[0]

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-2 -right-2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-card border-2 border-primary rounded-2xl overflow-hidden glow-amber">
          {/* Badge */}
          <div className="bg-primary text-primary-foreground text-center py-3">
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold">MELHOR ESCOLHA 2025</span>
            </div>
          </div>

          {/* Logo */}
          <div className="bg-black p-8 flex items-center justify-center">
            <img src={topSite.logo || "/placeholder.svg"} alt={topSite.name} className="h-20 w-auto object-contain" />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-primary">{topSite.rating.toFixed(1)}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
            </div>

            {/* Bonus */}
            <div className="bg-secondary/50 rounded-xl p-4 mb-6 border border-border">
              <p className="text-lg font-bold text-foreground">{topSite.bonus}</p>
              <p className="text-sm text-muted-foreground">{topSite.welcomeOffer}</p>
            </div>

            <Link href={topSite.link} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary text-primary-foreground font-bold py-6 text-lg rounded-xl hover:opacity-90">
                OBTER BÓNUS AGORA
              </Button>
            </Link>

            <p className="text-[10px] text-muted-foreground mt-4">{topSite.terms}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
