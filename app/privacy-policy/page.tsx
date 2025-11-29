import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          Voltar ao Inicio
        </Link>

        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Politica de Privacidade</h1>
          <p className="text-muted-foreground mb-8">
            Ultima atualizacao:{" "}
            {new Date().toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Introducao</h2>
              <p className="leading-relaxed">
                No apostasportugueses.com, a protecao dos seus dados pessoais e uma prioridade fundamental. Esta
                Politica de Privacidade descreve como recolhemos, utilizamos, armazenamos e protegemos as suas
                informacoes quando visita o nosso portal de comparacao de casas de apostas licenciadas em Portugal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Informacoes Recolhidas</h2>
              <p className="leading-relaxed mb-4">
                Recolhemos informacoes de forma automatica e atraves de interacoes voluntarias:
              </p>
              <div className="space-y-3">
                <div className="bg-black/40 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Dados de Navegacao</h3>
                  <p className="text-sm text-muted-foreground">
                    Endereco IP, tipo de navegador, sistema operativo, paginas visitadas, duracao da visita e fonte de
                    referencia.
                  </p>
                </div>
                <div className="bg-black/40 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Dados de Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Preferencias de navegacao, identificadores unicos e dados de sessao para melhorar a sua experiencia.
                  </p>
                </div>
                <div className="bg-black/40 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Dados de Contacto</h3>
                  <p className="text-sm text-muted-foreground">
                    Endereco de email e nome, caso opte por subscrever a nossa newsletter ou entrar em contacto
                    connosco.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Utilizacao dos Dados</h2>
              <p className="leading-relaxed mb-4">Os seus dados sao utilizados para os seguintes fins:</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Melhorar e personalizar a sua experiencia de navegacao no portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Analisar padroes de utilizacao para otimizar o nosso conteudo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Enviar comunicacoes relevantes sobre atualizacoes e promocoes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Processar comissoes de afiliados com operadores licenciados pelo SRIJ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Cumprir obrigacoes legais e regulamentares aplicaveis</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Seguranca dos Dados</h2>
              <p className="leading-relaxed">
                Implementamos medidas tecnicas e organizacionais adequadas para proteger os seus dados pessoais contra
                acesso nao autorizado, perda ou destruicao. Utilizamos encriptacao SSL/TLS em todas as transmissoes de
                dados e mantemos os nossos sistemas atualizados com as mais recentes protecoes de seguranca.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Direitos do Utilizador (RGPD)</h2>
              <p className="leading-relaxed mb-4">
                De acordo com o Regulamento Geral sobre a Protecao de Dados, tem os seguintes direitos:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Direito de acesso aos seus dados pessoais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Direito de retificacao de dados incorretos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Direito ao apagamento dos seus dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Direito a limitacao do tratamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Direito a portabilidade dos dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">-</span>
                  <span>Direito de oposicao ao tratamento</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Partilha de Dados</h2>
              <p className="leading-relaxed">
                Nao vendemos os seus dados pessoais a terceiros. Podemos partilhar informacoes limitadas com casas de
                apostas parceiras para fins de rastreamento de afiliados, fornecedores de servicos tecnologicos que nos
                ajudam a operar o portal, e autoridades competentes quando legalmente exigido.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contacto</h2>
              <p className="leading-relaxed">
                Para exercer os seus direitos ou esclarecer duvidas sobre esta politica, contacte-nos atraves do email:
                info@apostasportugueses.com
              </p>
              <p className="leading-relaxed mt-4 text-sm text-muted-foreground">
                Pode tambem apresentar uma reclamacao a Comissao Nacional de Protecao de Dados (CNPD) caso considere que
                os seus direitos nao foram respeitados.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
