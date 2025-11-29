import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          Voltar ao Inicio
        </Link>

        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Sobre o ApostasPortugueses</h1>
          <p className="text-muted-foreground mb-8">
            Portal independente de comparacao de casas de apostas em Portugal
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Quem Somos</h2>
              <p className="leading-relaxed">
                O apostasportugueses.com e um portal portugues dedicado a analise e comparacao de casas de apostas
                desportivas online licenciadas em Portugal. A nossa equipa e composta por especialistas em apostas
                desportivas com vasta experiencia no mercado portugues, unidos pelo objetivo de ajudar os apostadores a
                fazer escolhas informadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">A Nossa Missao</h2>
              <p className="leading-relaxed">
                Fornecemos informacao imparcial, atualizada e rigorosa sobre as casas de apostas licenciadas pelo SRIJ
                em Portugal. Acreditamos que cada apostador merece acesso a analises transparentes baseadas em testes
                reais, permitindo escolher a plataforma que melhor se adapta as suas necessidades.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Metodologia de Avaliacao</h2>
              <p className="leading-relaxed mb-4">
                Cada casa de apostas passa por um processo de avaliacao abrangente que inclui:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Verificacao da licenca SRIJ e conformidade regulamentar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Analise de seguranca e protecao de dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Avaliacao das odds e variedade de mercados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Teste dos bonus de boas-vindas e promocoes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Verificacao dos metodos de pagamento portugueses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Avaliacao do suporte ao cliente em portugues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Teste da experiencia mobile e apostas ao vivo</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Compromisso com a Transparencia</h2>
              <p className="leading-relaxed">
                Somos transparentes quanto ao nosso modelo de negocio. Recebemos comissoes de afiliados quando os
                utilizadores se registam atraves dos nossos links. No entanto, isto nunca influencia as nossas
                avaliacoes. As nossas classificacoes baseiam-se exclusivamente na qualidade dos servicos oferecidos
                pelos operadores, garantindo sempre a independencia editorial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Jogo Responsavel</h2>
              <p className="leading-relaxed">
                Promovemos ativamente praticas de jogo responsavel. Recomendamos que defina limites de deposito, nunca
                aposte mais do que pode perder, e procure ajuda se sentir que o jogo esta a afetar negativamente a sua
                vida. Em Portugal, pode contactar a Linha Vida atraves do numero 1414 para apoio gratuito e
                confidencial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Atualizacao Continua</h2>
              <p className="leading-relaxed">
                O mercado de apostas desportivas esta em constante evolucao. Por isso, atualizamos regularmente as
                nossas analises e rankings para refletir alteracoes nos servicos, novas promocoes, e mudancas no
                panorama regulamentar portugues.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contacte-nos</h2>
              <p className="leading-relaxed">
                Valorizamos o feedback dos nossos leitores. Para sugestoes, questoes ou parcerias, contacte-nos atraves
                do email: info@apostasportugueses.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
