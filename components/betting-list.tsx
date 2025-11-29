"use client"

import { BettingCard } from "./betting-card"
import { bettingSites } from "@/data/betting-data"

export function BettingList() {
  return (
    <section id="ranking" className="scroll-mt-20">
      <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6">

        <div className="space-y-3">
          {bettingSites.map((site, index) => (
            <BettingCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
