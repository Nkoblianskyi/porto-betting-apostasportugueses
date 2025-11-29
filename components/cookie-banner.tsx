"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) setVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Utilizamos cookies para melhorar a sua experiência. Ao continuar, concorda com a nossa política de cookies.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Recusar
          </Button>
          <Button size="sm" onClick={handleAccept} className="bg-primary text-primary-foreground">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
