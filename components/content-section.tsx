"use client"

export function ContentSection() {
  return (
    <div className="mt-16 space-y-12">
      {/* About Section */}
      <section>
        <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Sobre o ApostasPortugueses</h2>
            <p className="text-sm text-gray-400">A sua referência em apostas desportivas</p>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              O ApostasPortugueses.com é o portal de referência para apostadores portugueses que procuram informação
              fiável e atualizada sobre as melhores casas de apostas licenciadas em Portugal. A nossa equipa de
              especialistas analisa cada operador com critérios rigorosos e imparciais.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Desde a legalização das apostas online em Portugal, acompanhamos de perto a evolução do mercado, testando
              pessoalmente cada plataforma para garantir que as nossas recomendações refletem a realidade da experiência
              do utilizador.
            </p>
            <p className="text-gray-300 leading-relaxed">
              O nosso compromisso é com a transparência total. Não aceitamos pagamentos para influenciar rankings e
              todas as nossas análises são baseadas em testes reais e critérios objetivos de avaliação.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="scroll-mt-20">
        <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500/20 to-transparent p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Metodologia de Avaliação</h2>
            <p className="text-sm text-gray-400">Como classificamos as casas de apostas</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Licenciamento SRIJ",
                  weight: "25%",
                  desc: "Verificação de licença válida e conformidade regulamentar",
                },
                { title: "Odds e Margens", weight: "20%", desc: "Comparação de cotações em eventos da Primeira Liga" },
                {
                  title: "Variedade de Mercados",
                  weight: "15%",
                  desc: "Cobertura de desportos e profundidade de apostas",
                },
                { title: "Bónus e Promoções", weight: "15%", desc: "Valor real considerando requisitos de apostas" },
                {
                  title: "Métodos de Pagamento",
                  weight: "10%",
                  desc: "MB Way, Multibanco e outros métodos portugueses",
                },
                { title: "Experiência de Utilizador", weight: "10%", desc: "Navegação, app móvel e apostas ao vivo" },
                { title: "Apoio ao Cliente", weight: "5%", desc: "Suporte em português e eficácia de resposta" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="text-sm font-bold text-primary">{item.weight}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20">
        <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500/20 to-transparent p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Perguntas Frequentes</h2>
            <p className="text-sm text-gray-400">Esclarecemos as suas dúvidas</p>
          </div>
          <div className="p-6 space-y-4">
            {[
              {
                q: "As apostas online são legais em Portugal?",
                a: "Sim, desde que realize apostas em casas licenciadas pelo SRIJ. Todos os operadores no nosso ranking possuem licença válida e operam legalmente em Portugal.",
              },
              {
                q: "Qual a idade mínima para apostar?",
                a: "A idade mínima legal é 18 anos. Os operadores são obrigados a verificar a identidade antes de permitir apostas reais.",
              },
              {
                q: "Como funcionam os bónus de boas-vindas?",
                a: "Os bónus estão sujeitos a requisitos de apostas (rollover). Por exemplo, rollover 5x significa apostar cinco vezes o valor do bónus antes de levantar ganhos.",
              },
              {
                q: "Quanto tempo demora um levantamento?",
                a: "MB Way e carteiras eletrónicas são mais rápidos (até 24h). Cartões demoram 1-3 dias úteis e transferências bancárias 3-5 dias.",
              },
              {
                q: "O que é cash out?",
                a: "Permite encerrar uma aposta antes do fim do evento, garantindo lucro ou minimizando perdas. O valor é calculado com base nas probabilidades atuais.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gaming Notice */}
      <div className="bg-red-950/70 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
        <p className="text-white font-semibold mb-2">
          Deve ter 18 anos ou mais para apostar. Apenas para residentes em Portugal.
        </p>
        <p className="text-sm text-gray-300 mb-2">
          O jogo pode causar dependência. Jogue com responsabilidade e apenas com dinheiro que pode perder.
        </p>
        <p className="text-sm text-gray-300">
          Se precisar de ajuda: Linha Vida 1414 (gratuita, 24h) ou visite sicad.pt
        </p>
      </div>
    </div>
  )
}
