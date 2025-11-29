import Link from "next/link"
import { Clock, Award } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/favicon.ico" alt="logo" width={24} height={24} />
              <span className="text-lg font-bold">
                Apostas<span className="text-primary">Portugueses</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Portal independente de comparação de casas de apostas licenciadas em Portugal. Análises imparciais e bónus
              verificados.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Image src="/srij.svg" alt="SRIJ" width={24} height={12} />
                <span className="text-xs text-muted-foreground">SRIJ Licenciado</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Atualizado Diariamente</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-muted-foreground">Análises Imparciais</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#ranking" className="text-sm text-muted-foreground hover:text-foreground">
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/#metodologia" className="text-sm text-muted-foreground hover:text-foreground">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-xs text-muted-foreground text-center mb-4">Parceiros de Jogo Responsável</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                href: "https://www.srij.turismodeportugal.pt/",
                src: "/srij-new.svg",
                alt: "SRIJ",
                bgColor: "bg-white",
              },
              { href: "https://www.icad.pt/", src: "/icad.png", alt: "SICAD", bgColor: "bg-white" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare", bgColor: "bg-white" },
              {
                href: "https://www.gambleaware.org/",
                src: "/gamble-aware.webp",
                alt: "GambleAware",
                bgColor: "bg-white",
              },
              {
                href: "https://www.jogoresponsavel.pt/",
                src: "/jogo-responsavel-new.png",
                alt: "Jogo Responsável",
                bgColor: "bg-black",
              },
            ].map((partner) => (
              <Link
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${partner.bgColor} hover:opacity-80 rounded-lg p-3 transition-opacity`}
              >
                <div className="relative w-24 h-12">
                  <Image src={partner.src || "/placeholder.svg"} alt={partner.alt} fill className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 apostasportugueses.com. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Feito em Portugal</span>
              <div className="flex gap-0.5">
                <div className="w-3 h-2 bg-green-600 rounded-sm" />
                <div className="w-3 h-2 bg-red-600 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-center">
            <p className="text-destructive text-sm font-semibold mb-1">
              18+ | Apenas jogadores portugueses | O jogo pode causar dependência
            </p>
            <p className="text-xs text-muted-foreground">Se precisar de ajuda, contacte a Linha Vida: 1414</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
