"use client";

import { useMemo, useState } from "react";

const whatsappUrl = "https://wa.me/5511925141848";
const instagramUrl = "https://www.instagram.com/cavalletta.leader/";
const siteUrl = "https://cavalletta-leader.rodead.chatgpt.site";
const storeAddress = "Galeria Extra Ricardo Jafet, Av. Ricardo Jafet, 1501 - loja 26, São Paulo";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Galeria%20Extra%20Ricardo%20Jafet%201501%20loja%2026";
const mapsEmbedUrl = "https://maps.google.com/maps?q=Galeria%20Extra%20Ricardo%20Jafet%201501%20loja%2026&t=&z=16&ie=UTF8&iwloc=&output=embed";

const models = [
  { name: "C3 Pro", fullName: "C3 Pro Aplicativo Inteligente", category: "Mobilidade conectada", image: "/models/c3-pro-official.jpg", range: 70, specs: ["800 W", "Até 70 km", "48V 24Ah", "Carga 140 kg"], colors: ["Cores sob consulta"] },
  { name: "T3", fullName: "T3 Triciclo Elétrico", category: "Triciclo elétrico", image: "/models/t3-official.jpg", range: 50, specs: ["1000 W", "Até 50 km", "60V 20Ah", "Carga 150 kg"], colors: ["Cores sob consulta"] },
  { name: "AE8", fullName: "AE8 Bicicleta Elétrica", category: "Bicicleta elétrica", image: "/models/ae8-official.jpg", range: 80, specs: ["1000 W", "Até 80 km", "48V 15Ah", "Carga 150 kg"], colors: ["Cores sob consulta"] },
  { name: "C12", fullName: "C12 Bicicleta Elétrica", category: "Scooter urbana", image: "/models/c12-official.png", range: 65, specs: ["1000 W", "Até 65 km", "60V 20Ah", "32 km/h"], colors: ["Cores sob consulta"] },
  { name: "C15", fullName: "C15 Bicicleta Elétrica", category: "Scooter urbana", image: "/models/c15-official.jpg", range: 55, specs: ["1000 W", "Até 55 km", "60V 20Ah", "Carga 160 kg"], colors: ["Cores sob consulta"] },
];

const faqs = [
  ["Precisa de CNH ou emplacamento?", "A exigência depende da classificação e das características do modelo. Nossa equipe confirma a orientação adequada para a Cavalletta escolhida e para o seu tipo de uso."],
  ["Quanto dura a bateria?", "A autonomia varia conforme modelo, peso, velocidade, terreno e modo de condução. Na vitrine você encontra a referência de cada modelo disponível."],
  ["Posso carregar em tomada comum?", "A recarga é pensada para fazer parte da rotina. A equipe explica o carregador, o tempo de recarga e os cuidados corretos da bateria no atendimento."],
  ["Vocês fazem manutenção e vendem peças?", "Sim. A Cavalletta Leader oferece orientação técnica, consulta de peças de reposição e atendimento pós-venda."],
  ["Como saber o estoque e as cores disponíveis?", "A disponibilidade muda conforme as vendas e chegadas da fábrica. Consulte o modelo desejado pelo WhatsApp antes da visita."],
  ["Onde fica a loja?", "Estamos na Galeria Extra Ricardo Jafet, Av. Ricardo Jafet, 1501, loja 26, em São Paulo."],
];

const blogArticles = [
  {
    category: "Cavalletta no Ipiranga",
    date: "19 jun 2026",
    title: "A Cavalletta chega à Ricardo Jafet com experiência e test ride",
    excerpt: "A abertura da unidade no Ipiranga aproximou do público paulistano modelos como C3 Pro, C15, T3 e AE8, com atendimento presencial e experimentação na loja.",
    image: "/models/c3-pro-official.jpg",
    source: "Encontra Ipiranga",
    url: "https://www.encontraipiranga.com/a-segunda-loja-franqueada-da-cavalletta-chega-ao-bairro-ipiranga-em-sao-paulo/",
  },
  {
    category: "Expansão no Brasil",
    date: "30 jul 2026",
    title: "Marca estrutura rede, pós-venda e futura fábrica brasileira",
    excerpt: "A expansão prevê novas franquias e uma operação local apoiada por centro de armazenagem, assistência pós-venda, equipe comercial e avanço da futura fábrica no país.",
    image: "/models/ae8-official.jpg",
    source: "Showmetech",
    url: "https://www.showmetech.com.br/cavalletta-inaugura-primeira-loja-franqueada-no-estado-de-sao-paulo/",
  },
  {
    category: "Tecnologia",
    date: "Atualizado em 2026",
    title: "C3 Pro leva controle, localização e proteção para o aplicativo",
    excerpt: "A evolução conectada da linha C3 reúne funções de travamento remoto, localização do veículo e recursos antifurto para uma rotina urbana mais controlada.",
    image: "/models/c3-pro-official.jpg",
    source: "Showmetech",
    url: "https://www.showmetech.com.br/cavalletta-inaugura-primeira-loja-franqueada-no-estado-de-sao-paulo/",
  },
  {
    category: "Guia de escolha",
    date: "24 out 2025",
    title: "C3, C12 ou C15: o uso diário deve orientar a escolha",
    excerpt: "O guia oficial compara autonomia, potência, capacidade e perfil de uso. A recomendação central é cruzar distância, terreno e necessidade de carga antes do test ride.",
    image: "/models/c12-official.png",
    source: "Cavalletta Oficial",
    url: "https://cavalletta.store/blogs/guias/guia-de-compra-bicicleta-eletrica",
  },
  {
    category: "Bateria e recarga",
    date: "Revisado em 17 ago 2026",
    title: "Boas práticas ajudam a preservar a bateria no dia a dia",
    excerpt: "A orientação oficial é recarregar em local protegido de calor, sol, chuva e umidade, evitar descarga total recorrente e não prolongar a carga além do recomendado.",
    image: "/models/c3-pro-official.jpg",
    source: "FAQ Cavalletta",
    url: "https://cavalletta.store/pages/faq",
  },
  {
    category: "Regras de circulação",
    date: "Resolução vigente",
    title: "Bicicleta elétrica, autopropelido ou ciclomotor: entenda a diferença",
    excerpt: "A Resolução CONTRAN 996/2023 define critérios técnicos e obrigações diferentes. A classificação depende das características de cada veículo e deve ser confirmada antes do uso em via pública.",
    image: "/models/c15-official.jpg",
    source: "Ministério dos Transportes",
    url: "https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9962023.pdf",
  },
];

const whatsappFor = (subject: string) => `${whatsappUrl}?text=${encodeURIComponent(`Olá! Vim pelo site da Cavalletta Leader e gostaria de saber mais sobre ${subject}.`)}`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "LocalBusiness", "@id": `${siteUrl}/#store`, name: "Cavalletta Leader", url: siteUrl, telephone: "+55 11 92514-1848", address: { "@type": "PostalAddress", streetAddress: "Av. Ricardo Jafet, 1501 - loja 26", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" }, sameAs: [instagramUrl, whatsappUrl], hasMap: mapsUrl },
    { "@type": "ItemList", "@id": `${siteUrl}/#modelos`, name: "Modelos Cavalletta disponíveis", itemListElement: models.map((model, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Product", name: model.fullName, image: `${siteUrl}${model.image}`, brand: { "@type": "Brand", name: "Cavalletta" }, category: model.category } })) },
    { "@type": "FAQPage", "@id": `${siteUrl}/#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

export default function Home() {
  const [dailyDistance, setDailyDistance] = useState(24);
  const [selectedModel, setSelectedModel] = useState("AE8");
  const activeModel = models.find((model) => model.name === selectedModel) ?? models[0];
  const activeRange = activeModel.range ?? 50;
  const monthlyDistance = Math.max(0, dailyDistance) * 30;
  const routineDays = useMemo(() => Math.max(1, Math.floor(activeRange / Math.max(1, dailyDistance))), [activeRange, dailyDistance]);

  return (
    <main id="inicio">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="topline"><span>Loja física na Ricardo Jafet</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp +55 11 92514-1848</a></div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Cavalletta Leader - início"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></a>
        <nav className="main-tabs" aria-label="Navegação principal"><a href="#modelos">Modelos</a><a href="#economia">Autonomia</a><a href="#tecnologia">Tecnologia</a><a href="#blog">Blog</a><a href="#manutencao">Suporte</a></nav>
        <a className="header-cta" href={whatsappFor("uma Cavalletta")} target="_blank" rel="noreferrer">Consultar</a>
      </header>

      <section className="hero-store" aria-label="Cavalletta C3 Pro em movimento pela cidade">
        <div className="hero-copy">
          <p className="section-label">Mobilidade elétrica Cavalletta</p>
          <h1>Autonomia real.<br /><span>Atitude elétrica.</span></h1>
          <p className="hero-text">Modelos para cidade, trabalho e liberdade. Conheça, compare e agende seu test ride com atendimento direto da loja.</p>
          <div className="hero-actions"><a className="primary" href={whatsappFor("agendar um test ride")} target="_blank" rel="noreferrer">Agendar test ride</a><a className="secondary" href="#economia">Ver autonomia</a></div>
          <div className="hero-proof"><strong>5 modelos</strong><span>Fotos oficiais e especificações do catálogo atual</span></div>
        </div>
        <div className="hero-scene-note"><span>C3 Pro</span><strong>Cidade em movimento.<br />Energia em silêncio.</strong></div>
      </section>

      <section className="spec-strip" aria-label="Destaques do portfólio"><article><strong>Até 80 km</strong><span>de autonomia no catálogo atual</span></article><article><strong>Até 1000 W</strong><span>para diferentes rotinas</span></article><article><strong>5 modelos</strong><span>confirmados no estoque da loja</span></article><article><strong>Loja física</strong><span>test ride e suporte local</span></article></section>

      <section className="decision-tools" id="economia">
        <article className="tool-panel calculator-panel"><p className="section-label">Calculadora de rotina</p><h2>Quanto você pode rodar no elétrico?</h2><p>Informe sua distância diária e veja a mobilidade que cabe no seu mês.</p><label htmlFor="daily-distance">Quilômetros por dia</label><div className="input-row"><input id="daily-distance" type="number" min="1" max="300" value={dailyDistance} onChange={(event) => setDailyDistance(Number(event.target.value))} /><span>km/dia</span></div><div className="tool-result"><strong>{monthlyDistance.toLocaleString("pt-BR")} km/mês</strong><span>de deslocamento que pode entrar na sua rotina elétrica</span></div></article>
        <article className="tool-panel reach-panel"><p className="section-label">Visualizador de alcance</p><h2>Até onde você chega?</h2><label htmlFor="range-model">Escolha um modelo</label><select id="range-model" value={selectedModel} onChange={(event) => setSelectedModel(event.target.value)}>{models.filter((model) => model.range).map((model) => <option key={model.name} value={model.name}>{model.name}</option>)}</select><div className="range-meter" aria-label={`Autonomia de até ${activeRange} quilômetros`}><span style={{ width: `${Math.max(16, (activeRange / 150) * 100)}%` }} /></div><div className="range-number"><strong>até {activeRange} km</strong><span>por carga</span></div><p className="range-context">Para uma rotina de {dailyDistance || 0} km/dia, uma carga representa aproximadamente <strong>{routineDays} {routineDays === 1 ? "dia" : "dias"}</strong> de deslocamento.</p></article>
      </section>

      <section className="recharge-band" id="recarga"><div><p className="section-label">Recarga simples</p><h2>Carregue em casa. Saia pronto para a cidade.</h2><p>A equipe explica a recarga, os cuidados com a bateria e o melhor modelo para a distância da sua rotina.</p></div><div className="recharge-steps" aria-label="Etapas da recarga"><span><b>01</b> Conecte</span><span><b>02</b> Recarregue</span><span><b>03</b> Siga seu caminho</span></div></section>

      <section className="models-section" id="modelos">
        <div className="section-heading"><div><p className="section-label">Modelos disponíveis</p><h2>Escolha pelo seu jeito de usar.</h2></div><p>Sem preços expostos. Consulte disponibilidade, cores e condições diretamente com a equipe pelo WhatsApp.</p></div>
        <div className="model-grid">{models.map((model) => <article className="model-card" key={model.name}><div className="model-image"><span>{model.category}</span><img src={model.image} alt={model.fullName} /></div><div className="model-content"><div className="model-title"><h3>{model.name}</h3><span>{model.range ? `até ${model.range} km` : "série leve"}</span></div><p>{model.fullName}</p><ul>{model.specs.map((spec) => <li key={spec}>{spec}</li>)}</ul><div className="color-list" aria-label={`Cores de ${model.name}`}>{model.colors.slice(0, 5).map((color) => <span key={color}>{color}</span>)}</div><a className="card-cta" href={whatsappFor(model.fullName)} target="_blank" rel="noreferrer">Consultar {model.name}</a></div></article>)}</div>
      </section>

      <section className="technology-section" id="tecnologia"><div className="technology-copy"><p className="section-label">Tecnologia que reduz dúvidas</p><h2>Controle, proteção e informação na sua mão.</h2><p>O C3 Pro reúne aplicativo inteligente e recursos conectados pensados para tornar a mobilidade elétrica mais simples na rotina urbana.</p><a className="primary" href={whatsappFor("a tecnologia do C3 Pro")} target="_blank" rel="noreferrer">Conhecer o C3 Pro</a></div><div className="technology-feature"><img src="/models/c3-pro-official.jpg" alt="Cavalletta C3 Pro com aplicativo inteligente" /><div><span>App inteligente</span><strong>C3 Pro</strong><p>Mobilidade conectada com controle direto pelo celular.</p></div></div></section>

      <section className="blog-section" id="blog">
        <div className="section-heading">
          <div><p className="section-label">Blog Cavalletta Leader</p><h2>Mobilidade elétrica com contexto.</h2></div>
          <p>Pesquisa editorial revisada em 17 de agosto de 2026. Notícias da marca, tecnologia, cuidados e regras explicados com fontes identificadas.</p>
        </div>
        <article className="blog-featured">
          <div className="blog-featured-image"><span>Notícia em destaque</span><img src={blogArticles[0].image} alt="Cavalletta C3 Pro, destaque da loja no Ipiranga" /></div>
          <div className="blog-featured-copy"><div className="article-meta"><span>{blogArticles[0].category}</span><time>{blogArticles[0].date}</time></div><h3>{blogArticles[0].title}</h3><p>{blogArticles[0].excerpt}</p><a href={blogArticles[0].url} target="_blank" rel="noreferrer">Ler matéria na fonte · {blogArticles[0].source}</a></div>
        </article>
        <div className="blog-grid">
          {blogArticles.slice(1).map((article) => (
            <article className="blog-card" key={article.title}>
              <div className="blog-card-image"><img src={article.image} alt="" /></div>
              <div className="article-meta"><span>{article.category}</span><time>{article.date}</time></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a href={article.url} target="_blank" rel="noreferrer">Fonte: {article.source}</a>
            </article>
          ))}
        </div>
        <p className="research-note"><strong>Nota editorial:</strong> dados de autonomia e desempenho variam conforme peso, terreno, temperatura e modo de condução. A classificação legal depende das especificações do veículo; confirme o enquadramento do modelo e as regras locais antes de circular.</p>
      </section>

      <section className="support-section" id="manutencao"><div className="section-heading"><div><p className="section-label">Suporte local</p><h2>Da escolha ao pós-venda.</h2></div><p>Atendimento humano para comprar com mais clareza e continuar rodando com confiança.</p></div><div className="support-grid"><article><span>01</span><h3>Manutenção técnica</h3><p>Avaliação, diagnóstico e orientação para manter sua Cavalletta pronta.</p></article><article><span>02</span><h3>Peças de reposição</h3><p>Consulta de componentes compatíveis e disponibilidade com a equipe.</p></article><article><span>03</span><h3>Fábrica e estoque</h3><p>Informações sobre tecnologia, novas chegadas, modelos e cores.</p></article><article><span>04</span><h3>Vendas realizadas</h3><p>Entrega com orientação de uso, conferência e suporte direto da Leader.</p></article></div><a className="secondary" href={whatsappFor("manutenção, peças ou estoque")} target="_blank" rel="noreferrer">Falar com o suporte</a></section>

      <section className="proof-section"><article><p className="section-label">Sustentabilidade prática</p><h2>Zero emissão local no trajeto.</h2><p>Mobilidade silenciosa e elétrica para reduzir a dependência de combustível no dia a dia.</p><strong>0</strong><span>emissão local durante o uso</span></article><article><p className="section-label">Confiança perto de você</p><h2>Produto real. Loja real.</h2><p>Compare os modelos online e venha conhecer de perto na Ricardo Jafet.</p><strong>Loja 26</strong><span>Galeria Extra Ricardo Jafet</span></article></section>

      <section className="visit-section" id="loja"><div className="visit-copy"><p className="section-label">Agende sua experiência</p><h2>Faça um test ride.</h2><p>Veja o acabamento, compare o conforto e descubra qual Cavalletta combina com sua rotina.</p><address>{storeAddress}</address><div className="hero-actions"><a className="primary" href={whatsappFor("agendar um test ride")} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a><a className="secondary" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa</a></div></div><div className="map-card"><iframe title="Mapa da Cavalletta Leader na Galeria Extra Ricardo Jafet" src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>

      <section className="faq-section" id="faq"><div className="section-heading"><div><p className="section-label">Perguntas frequentes</p><h2>Decida sem dúvida.</h2></div><p>Regras, bateria, recarga, estoque e suporte em respostas objetivas.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <footer><a className="footer-brand" href="#inicio"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></a><nav><a href="#modelos">Modelos</a><a href="#tecnologia">Tecnologia</a><a href="#blog">Blog</a><a href="#manutencao">Suporte</a><a href="#faq">FAQ</a></nav><p>{storeAddress}</p><div><a href={instagramUrl} target="_blank" rel="noreferrer">@cavalletta.leader</a><a href={whatsappUrl} target="_blank" rel="noreferrer">+55 11 92514-1848</a></div></footer>
      <aside className="sticky-conversion" aria-label="Ações rápidas"><span>Pronto para conhecer sua Cavalletta?</span><a href={whatsappFor("consultar um modelo")} target="_blank" rel="noreferrer">Consultar modelo</a><a href={whatsappFor("agendar um test ride")} target="_blank" rel="noreferrer">Agendar test ride</a><a href={mapsUrl} target="_blank" rel="noreferrer">Ver localização</a></aside>
    </main>
  );
}
