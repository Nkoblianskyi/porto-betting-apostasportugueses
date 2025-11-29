"use client"

import { Shield, Star, Lock, Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const getCurrentDate = () => {
    const now = new Date()
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
    return `${months[now.getMonth()]} ${now.getFullYear()}`
  }

  return (
    <section className="relative overflow-hidden">
      <div className="md:hidden absolute inset-0">
        <Image
          src="/portuguese-team-victory-celebration.jpg"
          alt="Celebração da vitória"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="hidden md:block absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Desktop Hero - max 400px height */}
        <div className="hidden md:flex items-center justify-between py-12 min-h-[350px] max-h-[400px]">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-primary">Atualizado {getCurrentDate()}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-balance drop-shadow-lg">
              Melhores Casas de Apostas
              <span className="block text-primary">Portugal 2025</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 max-w-xl drop-shadow">
              Rankings imparciais das plataformas licenciadas pelo SRIJ. Análises detalhadas e bónus verificados.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Licença</p>
                  <p className="text-xs text-gray-300">SRIJ Portugal</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Segurança</p>
                  <p className="text-xs text-gray-300">Dados Protegidos</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Responsabilidade</p>
                  <p className="text-xs text-gray-300">Jogo Consciente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[200px]">
              <p className="text-4xl font-bold text-primary mb-1">8+</p>
              <p className="text-sm text-gray-300">Sites Analisados</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold text-green-400 mb-1">100%</p>
              <p className="text-sm text-gray-300">Licenciados SRIJ</p>
            </div>
          </div>
        </div>

        {/* Mobile Hero - compact */}
        <div className="md:hidden py-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1 mb-4">
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs font-medium text-primary">{getCurrentDate()}</span>
          </div>

          <h1 className="text-2xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
            Melhores Casas de Apostas
            <span className="block text-primary">Portugal 2025</span>
          </h1>

          <p className="text-sm text-gray-200 mb-6 drop-shadow">
            Rankings das plataformas licenciadas SRIJ com bónus verificados.
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
              <Image src="/srij.svg" alt="SRIJ" width={46} height={46} className="w-8 h-4 mx-auto mb-1" />
              <p className="text-xs font-medium text-white">Licença</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
              <Image src="/flag.png" alt="SRIJ" width={46} height={46} className="w-6 h-4 mx-auto mb-1" />
              <p className="text-xs font-medium text-white">Segurança</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
              <Heart className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xs font-medium text-white">Responsabilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
