import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://cavalletta-leader.rodead.chatgpt.site";
const whatsappUrl = "https://wa.me/5511925141848";
const instagramUrl = "https://www.instagram.com/cavalletta.leader/";
const storeAddress = "Galeria do Supermercado Extra, Av. Dr. Ricardo Jafet, 1501 - loja 26, São Paulo - SP, Zona Sul";

const faqs = [
  ["Precisa de CNH ou emplacamento?", "Não. Todos os nossos produtos atuais são classificados como equipamentos de mobilidade individual autopropelidos e, por isso, não exigem CNH nem emplacamento."],
  ["Qual é a autonomia das Cavalletta?", "A referência varia conforme o modelo. No catálogo atual, há opções com autonomia informada de até 50 km, 55 km, 65 km, 70 km e 80 km. Peso, velocidade, terreno, calibragem, temperatura e modo de condução podem alterar o alcance real."],
  ["Posso carregar em tomada comum?", "A recarga foi pensada para entrar na rotina. No atendimento, explicamos o carregador compatível, o procedimento correto, o tempo estimado e os cuidados recomendados para cada bateria."],
  ["Como cuidar melhor da bateria?", "Faça a recarga em local seco, ventilado e protegido de calor, sol e chuva. Use o carregador correto, evite deixar a bateria descarregada por longos períodos e siga as orientações entregues com o modelo."],
  ["Vocês fazem manutenção técnica?", "Sim. A Cavalletta Leader oferece avaliação, diagnóstico e orientação de pós-venda. Fale com a equipe antes de levar o veículo para confirmar o atendimento e a disponibilidade."],
  ["Vocês trabalham com peças de reposição?", "Sim. Consultamos componentes compatíveis e disponibilidade conforme o modelo. Envie pelo WhatsApp o nome do modelo e, quando possível, uma foto da peça para agilizar a análise."],
  ["Como saber o estoque e as cores disponíveis?", "O estoque muda conforme as vendas e as chegadas da fábrica. Consulte pelo WhatsApp antes da visita para receber a posição mais recente de modelos e cores."],
  ["Posso fazer um test ride?", "Sim. Você pode fazer o test ride mediante agendamento ou conforme a disponibilidade diretamente na loja. O agendamento ajuda nossa equipe a preparar o modelo desejado para receber você."],
  ["Os preços aparecem no site?", "Não. Modelos, disponibilidade e condições são atendidos diretamente pelo WhatsApp para que a informação esteja atualizada no momento da consulta."],
  ["Onde fica a loja?", "Estamos na Galeria do Supermercado Extra, na Av. Dr. Ricardo Jafet, 1501, loja 26, em São Paulo, Zona Sul."],
];

export const metadata: Metadata = {
  title: "FAQ | Dúvidas sobre Cavalletta, bateria e manutenção",
  description: "Respostas sobre autonomia, bateria, recarga, documentos, test ride, manutenção, peças e estoque da Cavalletta Leader em São Paulo.",
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    title: "FAQ Cavalletta Leader",
    description: "Tire suas dúvidas antes de escolher sua mobilidade elétrica.",
    url: `${siteUrl}/faq`,
    type: "website",
  },
};

export default function FaqPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/faq#faq`,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="faq-page" id="inicio">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="topline"><span>Loja física na Ricardo Jafet</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp +55 11 92514-1848</a></div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Cavalletta Leader - página inicial"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></Link>
        <nav className="main-tabs" aria-label="Navegação principal"><Link href="/#modelos">Modelos</Link><Link href="/#economia">Autonomia</Link><Link href="/#tecnologia">Tecnologia</Link><Link href="/#manutencao">Suporte</Link><Link href="/#blog">Blog</Link><Link className="active" href="/faq" aria-current="page">FAQ</Link></nav>
        <a className="header-cta" href={`${whatsappUrl}?text=${encodeURIComponent("Olá! Vim pelo FAQ da Cavalletta Leader e preciso de ajuda.")}`} target="_blank" rel="noreferrer">Consultar</a>
      </header>

      <section className="faq-page-hero">
        <div><p className="section-label">Central de dúvidas</p><h1>Escolha com<br /><span>mais clareza.</span></h1></div>
        <p>Autonomia, bateria, regras, manutenção e estoque explicados em um só lugar. Se a sua dúvida for específica, a equipe continua a conversa pelo WhatsApp.</p>
      </section>

      <section className="faq-page-content" id="faq">
        <div className="faq-page-heading"><p className="section-label">Perguntas frequentes</p><h2>Respostas diretas.</h2><p>Abra cada pergunta para consultar a orientação. As informações de disponibilidade e especificação devem ser confirmadas no atendimento.</p></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="faq-support">
        <div><p className="section-label">Atendimento da loja</p><h2>Ainda ficou uma dúvida?</h2><p>Fale diretamente com a Cavalletta Leader ou volte para comparar os modelos disponíveis.</p></div>
        <div className="hero-actions"><a className="primary" href={`${whatsappUrl}?text=${encodeURIComponent("Olá! Vim pelo FAQ da Cavalletta Leader e gostaria de tirar uma dúvida.")}`} target="_blank" rel="noreferrer">Perguntar no WhatsApp</a><Link className="secondary" href="/#modelos">Ver modelos</Link></div>
      </section>

      <footer><Link className="footer-brand" href="/"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></Link><nav><Link href="/#modelos">Modelos</Link><Link href="/#economia">Autonomia</Link><Link href="/#tecnologia">Tecnologia</Link><Link href="/#manutencao">Suporte</Link><Link href="/#blog">Blog</Link><Link href="/faq">FAQ</Link></nav><p>{storeAddress}</p><div><a href={instagramUrl} target="_blank" rel="noreferrer">@cavalletta.leader</a><a href={whatsappUrl} target="_blank" rel="noreferrer">+55 11 92514-1848</a></div></footer>
    </main>
  );
}
