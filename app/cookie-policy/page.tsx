import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          Voltar ao Inicio
        </Link>

        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Politica de Cookies</h1>
          <p className="text-muted-foreground mb-8">
            Ultima atualizacao:{" "}
            {new Date().toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">O Que Sao Cookies</h2>
              <p className="leading-relaxed">
                Cookies sao pequenos ficheiros de texto que sao armazenados no seu dispositivo quando visita o
                apostasportugueses.com. Estes ficheiros permitem que o nosso portal reconheca o seu dispositivo e
                memorize informacoes sobre as suas preferencias, melhorando a sua experiencia de navegacao.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Tipos de Cookies Utilizados</h2>
              <div className="space-y-4">
                <div className="bg-black/40 rounded-lg p-5 border-l-2 border-green-500">
                  <h3 className="font-medium text-foreground mb-2">Cookies Essenciais</h3>
                  <p className="text-sm text-muted-foreground">
                    Necessarios para o funcionamento basico do portal. Permitem a navegacao e utilizacao de
                    funcionalidades essenciais. Nao podem ser desativados sem comprometer a funcionalidade do site.
                  </p>
                </div>
                <div className="bg-black/40 rounded-lg p-5 border-l-2 border-blue-500">
                  <h3 className="font-medium text-foreground mb-2">Cookies de Desempenho</h3>
                  <p className="text-sm text-muted-foreground">
                    Recolhem informacoes anonimas sobre como os visitantes utilizam o portal. Ajudam-nos a compreender
                    quais as paginas mais populares e a identificar eventuais problemas de navegacao.
                  </p>
                </div>
                <div className="bg-black/40 rounded-lg p-5 border-l-2 border-purple-500">
                  <h3 className="font-medium text-foreground mb-2">Cookies de Funcionalidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Permitem que o portal memorize escolhas que fez anteriormente, como o idioma preferido ou a regiao
                    onde se encontra, proporcionando uma experiencia mais personalizada.
                  </p>
                </div>
                <div className="bg-black/40 rounded-lg p-5 border-l-2 border-amber-500">
                  <h3 className="font-medium text-foreground mb-2">Cookies de Marketing</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizados para rastrear a sua atividade de navegacao e apresentar conteudo relevante. Incluem
                    cookies de afiliados que permitem rastrear visitas a casas de apostas parceiras.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Cookies de Terceiros</h2>
              <p className="leading-relaxed">
                Utilizamos servicos de terceiros que podem colocar cookies no seu dispositivo, incluindo ferramentas de
                analise como o Google Analytics para compreender o comportamento dos utilizadores, e sistemas de
                rastreamento de afiliados das casas de apostas parceiras licenciadas pelo SRIJ.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Gestao de Cookies</h2>
              <p className="leading-relaxed mb-4">
                Pode controlar e gerir cookies atraves das definicoes do seu navegador. A maioria dos navegadores
                permite bloquear ou eliminar cookies. Note que desativar certos cookies pode afetar a funcionalidade do
                portal.
              </p>
              <div className="bg-black/40 rounded-lg p-5">
                <p className="text-sm text-muted-foreground mb-3">
                  Para gerir cookies, aceda as definicoes de privacidade do seu navegador:
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>- Chrome: Definicoes - Privacidade e seguranca - Cookies</li>
                  <li>- Firefox: Opcoes - Privacidade e Seguranca - Cookies</li>
                  <li>- Safari: Preferencias - Privacidade - Gerir Dados</li>
                  <li>- Edge: Definicoes - Cookies e permissoes do site</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Consentimento</h2>
              <p className="leading-relaxed">
                Ao continuar a navegar no nosso portal apos a apresentacao do aviso de cookies, esta a consentir a
                utilizacao de cookies de acordo com esta politica. Pode retirar o seu consentimento a qualquer momento
                atraves das definicoes do seu navegador ou contactando-nos diretamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Atualizacoes</h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de atualizar esta Politica de Cookies periodicamente. Quaisquer alteracoes serao
                publicadas nesta pagina com a data de atualizacao revista. Recomendamos que consulte esta pagina
                regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contacto</h2>
              <p className="leading-relaxed">
                Para questoes relacionadas com a nossa utilizacao de cookies, contacte-nos atraves do email:
                info@apostasportugueses.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
