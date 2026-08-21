"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const whatsappUrl = "https://wa.me/5511925141848";
const instagramUrl = "https://www.instagram.com/cavalletta.leader/";
const siteUrl = "https://cavalletta-leader.rodead.chatgpt.site";
const storeAddress = "Galeria do Supermercado Extra, Av. Dr. Ricardo Jafet, 1501 - loja 26, São Paulo - SP, Zona Sul";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Galeria%20do%20Supermercado%20Extra%20Av.%20Dr.%20Ricardo%20Jafet%201501%20loja%2026";
const mapsEmbedUrl = "https://maps.google.com/maps?q=Galeria%20do%20Supermercado%20Extra%20Av.%20Dr.%20Ricardo%20Jafet%201501%20loja%2026&t=&z=16&ie=UTF8&iwloc=&output=embed";

const models = [
  { name: "C3 Pro", fullName: "C3 Pro Aplicativo Inteligente", category: "Mobilidade conectada", image: "/models/c3-pro-studio.webp", range: 70, specs: ["800 W", "Até 70 km", "48V 24Ah", "Carga 140 kg"], colors: ["Cores sob consulta"], feature: "App inteligente", featureText: "Mobilidade conectada com controle direto pelo celular." },
  { name: "T3", fullName: "T3 Triciclo Elétrico", category: "Triciclo elétrico", image: "/models/t3-studio.webp", range: 50, specs: ["1000 W", "Até 50 km", "60V 20Ah", "Carga 150 kg"], colors: ["Cores sob consulta"], feature: "Três rodas", featureText: "Configuração de triciclo para uma rotina elétrica mais estável." },
  { name: "AE8", fullName: "AE8 Bicicleta Elétrica", category: "Bicicleta elétrica", image: "/models/ae8-studio.webp", range: 80, specs: ["1000 W", "Até 80 km", "48V 15Ah", "Carga 150 kg"], colors: ["Cores sob consulta"], feature: "Maior alcance", featureText: "Até 80 km de autonomia informada para trajetos mais longos." },
  { name: "C12", fullName: "C12 Bicicleta Elétrica", category: "Scooter urbana", image: "/models/c12-studio.webp", range: 65, specs: ["1000 W", "Até 65 km", "60V 20Ah", "32 km/h"], colors: ["Cores sob consulta"], feature: "Rotina urbana", featureText: "Formato prático e autonomia para os deslocamentos da cidade." },
  { name: "C15", fullName: "C15 Bicicleta Elétrica", category: "Scooter urbana", image: "/models/c15-studio.webp", range: 55, specs: ["1000 W", "Até 55 km", "60V 20Ah", "Carga 160 kg"], colors: ["Cores sob consulta"], feature: "Uso versátil", featureText: "Potência e capacidade para diferentes necessidades do dia a dia." },
  { name: "E16", fullName: "E16 Scooter Elétrica", category: "Novo modelo", image: "/models/e16-studio.webp", range: null, specs: ["Ficha em atualização", "Baú traseiro", "Painel digital", "Chegando à loja"], colors: ["Preto", "Cinza", "Branco"], feature: "Novo lançamento", featureText: "Visual urbano, amplo espaço para os pés e baú traseiro integrado." },
];

const modelVideos = [
  { name: "C3 Pro", src: "/videos/c3-pro.mp4", poster: "/models/c3-pro-studio.webp", description: "Tecnologia conectada e detalhes pensados para a rotina urbana." },
  { name: "C12", src: "/videos/c12.mp4", poster: "/models/c12-studio.webp", description: "Design clássico, painel digital e acabamento visto de perto." },
  { name: "C15", src: "/videos/c15.mp4", poster: "/models/c15-studio.webp", description: "Presença moderna, iluminação marcante e construção robusta." },
  { name: "AE8", src: "/videos/ae8.mp4", poster: "/models/ae8-studio.webp", description: "Formato versátil e visual urbano para trajetos mais longos." },
];

const blogArticles = [
  {
    category: "Cavalletta no Ipiranga",
    date: "19 jun 2026",
    title: "A Cavalletta chega à Ricardo Jafet com experiência e test ride",
    excerpt: "A abertura da unidade no Ipiranga aproximou do público paulistano modelos como C3 Pro, C15, T3 e AE8, com atendimento presencial e experimentação na loja.",
    image: "/blog/cidade-ipiranga.webp",
    alt: "Cena urbana clara no Ipiranga, em São Paulo",
    source: "Encontra Ipiranga",
    url: "https://www.encontraipiranga.com/a-segunda-loja-franqueada-da-cavalletta-chega-ao-bairro-ipiranga-em-sao-paulo/",
  },
  {
    category: "Expansão no Brasil",
    date: "30 jul 2026",
    title: "Marca estrutura rede, pós-venda e futura fábrica brasileira",
    excerpt: "A expansão prevê novas franquias e uma operação local apoiada por centro de armazenagem, assistência pós-venda, equipe comercial e avanço da futura fábrica no país.",
    image: "/blog/expansao-logistica.webp",
    alt: "Centro de logística moderno e iluminado",
    source: "Showmetech",
    url: "https://www.showmetech.com.br/cavalletta-inaugura-primeira-loja-franqueada-no-estado-de-sao-paulo/",
  },
  {
    category: "Tecnologia",
    date: "Atualizado em 2026",
    title: "C3 Pro leva controle, localização e proteção para o aplicativo",
    excerpt: "A evolução conectada da linha C3 reúne funções de travamento remoto, localização do veículo e recursos antifurto para uma rotina urbana mais controlada.",
    image: "/blog/tecnologia-app.webp",
    alt: "Aplicativo de localização e segurança em um smartphone",
    source: "Showmetech",
    url: "https://www.showmetech.com.br/cavalletta-inaugura-primeira-loja-franqueada-no-estado-de-sao-paulo/",
  },
  {
    category: "Guia de escolha",
    date: "24 out 2025",
    title: "C3, C12 ou C15: o uso diário deve orientar a escolha",
    excerpt: "O guia oficial compara autonomia, potência, capacidade e perfil de uso. A recomendação central é cruzar distância, terreno e necessidade de carga antes do test ride.",
    image: "/blog/guia-escolha.webp",
    alt: "Pessoas planejando uma rota urbana sobre um mapa",
    source: "Cavalletta Oficial",
    url: "https://cavalletta.store/blogs/guias/guia-de-compra-bicicleta-eletrica",
  },
  {
    category: "Bateria e recarga",
    date: "Revisado em 17 ago 2026",
    title: "Boas práticas ajudam a preservar a bateria no dia a dia",
    excerpt: "A orientação oficial é recarregar em local protegido de calor, sol, chuva e umidade, evitar descarga total recorrente e não prolongar a carga além do recomendado.",
    image: "/blog/bateria-recarga.webp",
    alt: "Técnico inspecionando uma bateria em bancada limpa",
    source: "FAQ Cavalletta Leader",
    url: "/faq",
  },
  {
    category: "Regras de circulação",
    date: "Resolução vigente",
    title: "Bicicleta elétrica, autopropelido ou ciclomotor: entenda a diferença",
    excerpt: "A Resolução CONTRAN 996/2023 define critérios técnicos e obrigações diferentes. A classificação depende das características de cada veículo e deve ser confirmada antes do uso em via pública.",
    image: "/blog/regras-circulacao.webp",
    alt: "Travessia urbana segura com sinalização e capacete",
    source: "Ministério dos Transportes",
    url: "https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9962023.pdf",
  },
];

const whatsappFor = (subject: string) => `${whatsappUrl}?text=${encodeURIComponent(`Olá! Vim pelo site da Cavalletta Leader e gostaria de saber mais sobre ${subject}.`)}`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "LocalBusiness", "@id": `${siteUrl}/#store`, name: "Cavalletta Leader", url: siteUrl, telephone: "+55 11 92514-1848", address: { "@type": "PostalAddress", streetAddress: "Av. Dr. Ricardo Jafet, 1501 - loja 26", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" }, sameAs: [instagramUrl, whatsappUrl], hasMap: mapsUrl },
    { "@type": "ItemList", "@id": `${siteUrl}/#modelos`, name: "Modelos Cavalletta disponíveis", itemListElement: models.map((model, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Product", name: model.fullName, image: `${siteUrl}${model.image}`, brand: { "@type": "Brand", name: "Cavalletta" }, category: model.category } })) },
  ],
};

export default function Home() {
  const [dailyDistance, setDailyDistance] = useState(20);
  const [selectedModel, setSelectedModel] = useState("AE8");
  const [riderProfile, setRiderProfile] = useState<"homem" | "mulher">("homem");
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const activeModel = models.find((model) => model.name === selectedModel) ?? models[0];
  const showcaseModel = models[showcaseIndex];
  const activeVideo = modelVideos[videoIndex];
  const activeRange = activeModel.range ?? 0;
  const fitsRoutine = dailyDistance <= activeRange;
  const dailyUsagePercentage = Math.min(100, Math.round((dailyDistance / activeRange) * 100));
  const remainingRange = Math.max(0, activeRange - dailyDistance);
  const coverageDays = activeRange / Math.max(1, dailyDistance);
  const modelsWithConfirmedRange = models.filter((model) => model.range !== null);
  const compatibleModels = modelsWithConfirmedRange.filter((model) => model.range !== null && model.range >= dailyDistance);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setShowcaseIndex((index) => (index + 1) % models.length), 4800);
    return () => window.clearTimeout(timer);
  }, [showcaseIndex]);

  return (
    <main id="inicio">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="topline"><span>Loja física na Ricardo Jafet</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp +55 11 92514-1848</a></div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Cavalletta Leader - início"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></a>
        <nav className="main-tabs" aria-label="Navegação principal"><a href="#modelos">Modelos</a><a href="#economia">Autonomia</a><a href="#tecnologia">Tecnologia</a><a href="#manutencao">Suporte</a><a href="#blog">Blog</a><Link href="/faq">FAQ</Link></nav>
        <details className="mobile-menu"><summary aria-label="Abrir menu de navegação">☰</summary><nav aria-label="Navegação para celular"><a href="#modelos">Modelos</a><a href="#economia">Autonomia</a><a href="#tecnologia">Tecnologia</a><a href="#manutencao">Suporte</a><a href="#blog">Blog</a><Link href="/faq">FAQ</Link></nav></details>
        <a className="header-cta" href={whatsappFor("uma Cavalletta")} target="_blank" rel="noreferrer">Consultar</a>
      </header>

      <section className="hero-store" aria-label="Cavalletta C3 Pro em movimento pela cidade">
        <div className="hero-copy">
          <p className="section-label">Mobilidade elétrica Cavalletta</p>
          <h1>Autonomia real.<br /><span>Atitude elétrica.</span></h1>
          <p className="hero-text">Modelos para cidade, trabalho e liberdade. Conheça, compare e agende seu test ride com atendimento direto da loja.</p>
          <div className="hero-actions"><a className="primary" href={whatsappFor("agendar um test ride")} target="_blank" rel="noreferrer">Agendar test ride</a><a className="secondary" href="#economia">Ver autonomia</a></div>
          <div className="hero-proof"><strong>6 modelos</strong><span>Fotos oficiais e especificações do catálogo atual</span></div>
        </div>
        <div className="hero-scene-note"><span>C3 Pro</span><strong>Cidade em movimento.<br />Energia em silêncio.</strong></div>
      </section>

      <section className="spec-strip" aria-label="Destaques do portfólio"><article><strong>Até 80 km</strong><span>de autonomia no catálogo atual</span></article><article><strong>Até 1000 W</strong><span>para diferentes rotinas</span></article><article><strong>6 modelos</strong><span>disponíveis ou chegando à loja</span></article><article><strong>Loja física</strong><span>test ride e suporte local</span></article></section>

      <section className="decision-tools" id="economia">
        <article className="tool-panel routine-input-panel">
          <p className="section-label">1. Sua rotina</p><h2>Quantos quilômetros você percorre por dia?</h2><p>Considere o trajeto completo de ida e volta. Depois, escolha um modelo para comparar.</p>
          <label htmlFor="daily-distance">Distância total diária</label><input className="distance-slider" id="daily-distance" type="range" min="5" max="100" step="5" value={dailyDistance} onChange={(event) => setDailyDistance(Number(event.target.value))} />
          <div className="distance-value"><strong>{dailyDistance}</strong><span>km por dia</span></div>
          <label htmlFor="range-model">Modelo para comparação</label><select id="range-model" value={selectedModel} onChange={(event) => setSelectedModel(event.target.value)}>{modelsWithConfirmedRange.map((model) => <option key={model.name} value={model.name}>{model.name} · até {model.range} km</option>)}</select>
          <fieldset className="rider-profile"><legend>Quem vai pilotar?</legend><div><button type="button" className={riderProfile === "homem" ? "active" : ""} onClick={() => setRiderProfile("homem")} aria-pressed={riderProfile === "homem"}>Homem</button><button type="button" className={riderProfile === "mulher" ? "active" : ""} onClick={() => setRiderProfile("mulher")} aria-pressed={riderProfile === "mulher"}>Mulher</button></div></fieldset>
        </article>
        <article className={`tool-panel routine-result-panel ${fitsRoutine ? "is-compatible" : "needs-planning"}`}>
          <p className="section-label">2. Seu resultado · {activeModel.name}</p><h2>{fitsRoutine ? `${activeModel.name} atende essa rotina.` : "Esse trajeto precisa de uma recarga."}</h2>
          <div className="simple-journey" aria-label={`${riderProfile === "homem" ? "Homem" : "Mulher"} percorrendo uma linha de ${dailyDistance} quilômetros por dia`}>
            <div className="simple-journey-header"><span>Seu percurso</span><strong>{dailyDistance} km por dia</strong></div>
            <div className="simple-route"><span className="simple-route-used" style={{ width: `${dailyUsagePercentage}%` }} /><i className="route-start" /><i className="route-finish" /><div className="rider-on-route" style={{ left: `${Math.min(72, 4 + dailyUsagePercentage * 0.68)}%` }}><img src={riderProfile === "homem" ? "/interactive/rider-man.webp" : "/interactive/rider-woman.webp"} alt={riderProfile === "homem" ? "Ilustração de homem em bicicleta elétrica" : "Ilustração de mulher em bicicleta elétrica"} /></div></div>
            <div className="simple-route-labels"><span>Partida</span><strong>{fitsRoutine ? "Destino alcançado" : "Recarga necessária"}</strong></div>
          </div>
          <div className="selected-model-result"><img src={activeModel.image} alt={activeModel.fullName} /><div className="selected-model-name"><span>Modelo escolhido</span><strong>{activeModel.name}</strong><small>{activeModel.category}</small></div><div className="result-facts"><span><b>{activeRange} km</b> autonomia</span><span><b>{dailyUsagePercentage}%</b> da carga por dia</span><span><b>{fitsRoutine ? coverageDays.toLocaleString("pt-BR", { maximumFractionDigits: 1 }) : "—"}</b> {fitsRoutine ? (coverageDays === 1 ? "dia por carga" : "dias por carga") : "planeje a recarga"}</span></div></div>
          <p className="range-context">{fitsRoutine ? <>Você ainda terá aproximadamente <strong>{remainingRange} km de margem</strong> depois desse percurso diário.</> : <>Compare outro modelo ou planeje uma recarga durante o trajeto.</>}</p>
          <div className="compatible-models"><span>Modelos que atendem essa distância</span><div>{compatibleModels.length ? compatibleModels.map((model) => <button type="button" className={model.name === selectedModel ? "active" : ""} onClick={() => setSelectedModel(model.name)} key={model.name}>{model.name}</button>) : <p>Nenhum modelo do catálogo atual cobre essa distância em uma única carga.</p>}</div></div>
          <small className="range-disclaimer">Estimativa baseada na autonomia informada em catálogo. O alcance real varia conforme peso, terreno, velocidade, temperatura e modo de condução.</small>
        </article>
      </section>

      <section className="recharge-band" id="recarga"><div><p className="section-label">Recarga simples</p><h2>Carregue em casa. Saia pronto para a cidade.</h2><p>A equipe explica a recarga, os cuidados com a bateria e o melhor modelo para a distância da sua rotina.</p></div><div className="recharge-steps" aria-label="Etapas da recarga"><span><b>01</b> Conecte</span><span><b>02</b> Recarregue</span><span><b>03</b> Siga seu caminho</span></div></section>

      <section className="models-section" id="modelos">
        <div className="section-heading"><div><p className="section-label">Modelos disponíveis</p><h2>Escolha pelo seu jeito de usar.</h2></div><p>Sem preços expostos. Consulte disponibilidade, cores e condições diretamente com a equipe pelo WhatsApp.</p></div>
        <div className="model-grid">{models.map((model) => <article className="model-card" key={model.name}><div className="model-image"><span>{model.category}</span><img src={model.image} alt={model.fullName} /></div><div className="model-content"><div className="model-title"><h3>{model.name}</h3><span>{model.range ? `até ${model.range} km` : "lançamento"}</span></div><p>{model.fullName}</p><ul>{model.specs.map((spec) => <li key={spec}>{spec}</li>)}</ul><div className="color-list" aria-label={`Cores de ${model.name}`}>{model.colors.slice(0, 5).map((color) => <span key={color}>{color}</span>)}</div><a className="card-cta" href={whatsappFor(model.fullName)} target="_blank" rel="noreferrer">Consultar {model.name}</a></div></article>)}</div>
      </section>

      <section className="e16-arrival" aria-labelledby="e16-title">
        <div className="e16-arrival-copy"><p className="section-label">Novidade na loja</p><h2 id="e16-title">Conheça a nova E16.</h2><p>Uma scooter elétrica de presença urbana, com painel digital, iluminação marcante, amplo espaço para os pés e baú traseiro. As especificações finais de autonomia, bateria e potência serão publicadas após a confirmação da ficha do modelo.</p><a className="primary" href={whatsappFor("a chegada da E16")} target="_blank" rel="noreferrer">Quero saber da E16</a></div>
        <div className="e16-arrival-gallery"><figure><img src="/models/e16/e16-side.webp" alt="Cavalletta E16 cinza vista de perfil no estúdio" loading="lazy" /><figcaption>Perfil urbano</figcaption></figure><figure><img src="/models/e16/e16-headlight.webp" alt="Detalhe do farol dianteiro da Cavalletta E16" loading="lazy" /><figcaption>Iluminação dianteira</figcaption></figure></div>
      </section>

      <section className="technology-section" id="tecnologia">
        <div className="technology-copy"><p className="section-label">Tecnologia para cada rotina</p><h2>Uma linha completa em movimento.</h2><p>Conheça os modelos disponíveis, compare alcance e formato e encontre a Cavalletta que combina com o seu dia a dia.</p><a className="primary" href={whatsappFor(showcaseModel.fullName)} target="_blank" rel="noreferrer">Consultar {showcaseModel.name}</a></div>
        <div className="technology-feature" aria-live="polite">
          <div className="technology-model-tabs" aria-label="Escolha um modelo para visualizar">{models.map((model, index) => <button type="button" className={index === showcaseIndex ? "active" : ""} onClick={() => setShowcaseIndex(index)} aria-pressed={index === showcaseIndex} key={model.name}>{model.name}</button>)}</div>
          <img key={showcaseModel.name} src={showcaseModel.image} alt={showcaseModel.fullName} />
          <div className="technology-model-copy"><span>{showcaseModel.feature}</span><strong>{showcaseModel.name}</strong><p>{showcaseModel.featureText}</p><small>{showcaseModel.range ? `Até ${showcaseModel.range} km de autonomia informada` : "Especificações finais em atualização"}</small></div>
        </div>
      </section>

      <section className="video-showcase" aria-labelledby="video-showcase-title">
        <div className="video-showcase-copy">
          <p className="section-label">Modelos em vídeo</p>
          <h2 id="video-showcase-title">Veja os detalhes em movimento.</h2>
          <p>Vídeos reais enviados pela equipe mostram acabamento, iluminação, painel e presença de cada modelo antes do seu test ride.</p>
          <div className="video-model-tabs" aria-label="Escolha o vídeo de um modelo">
            {modelVideos.map((video, index) => <button type="button" className={index === videoIndex ? "active" : ""} onClick={() => setVideoIndex(index)} aria-pressed={index === videoIndex} key={video.name}>{video.name}</button>)}
          </div>
          <div className="video-model-note"><strong>{activeVideo.name}</strong><span>{activeVideo.description}</span></div>
          <a className="primary" href={whatsappFor(`o modelo ${activeVideo.name}`)} target="_blank" rel="noreferrer">Consultar {activeVideo.name}</a>
        </div>
        <div className="video-player-wrap">
          <span className="video-badge">Vídeo real do modelo</span>
          <video key={activeVideo.src} autoPlay muted loop playsInline controls preload="metadata" poster={activeVideo.poster} aria-label={`Vídeo do modelo Cavalletta ${activeVideo.name}`}>
            <source src={activeVideo.src} type="video/mp4" />
          </video>
          <div className="video-player-caption"><span>{String(videoIndex + 1).padStart(2, "0")} / {String(modelVideos.length).padStart(2, "0")}</span><strong>{activeVideo.name}</strong></div>
        </div>
      </section>

      <section className="blog-section" id="blog">
        <div className="section-heading">
          <div><p className="section-label">Blog Cavalletta Leader</p><h2>Mobilidade elétrica com contexto.</h2></div>
          <p>Pesquisa editorial revisada em 17 de agosto de 2026. Notícias da marca, tecnologia, cuidados e regras explicados com fontes identificadas.</p>
        </div>
        <article className="blog-featured">
          <div className="blog-featured-image"><span>Notícia em destaque</span><img src={blogArticles[0].image} alt={blogArticles[0].alt} /></div>
          <div className="blog-featured-copy"><div className="article-meta"><span>{blogArticles[0].category}</span><time>{blogArticles[0].date}</time></div><h3>{blogArticles[0].title}</h3><p>{blogArticles[0].excerpt}</p><a href={blogArticles[0].url} target="_blank" rel="noreferrer">Ler matéria na fonte · {blogArticles[0].source}</a></div>
        </article>
        <div className="blog-grid">
          {blogArticles.slice(1).map((article) => (
            <article className="blog-card" key={article.title}>
              <div className="blog-card-image"><img src={article.image} alt={article.alt} /></div>
              <div className="article-meta"><span>{article.category}</span><time>{article.date}</time></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              {article.url.startsWith("http") ? <a href={article.url} target="_blank" rel="noreferrer">Fonte: {article.source}</a> : <Link href={article.url}>Ler no site: {article.source}</Link>}
            </article>
          ))}
        </div>
        <p className="research-note"><strong>Nota editorial:</strong> dados de autonomia e desempenho variam conforme peso, terreno, temperatura e modo de condução. A classificação legal depende das especificações do veículo; confirme o enquadramento do modelo e as regras locais antes de circular.</p>
      </section>

      <section className="support-section" id="manutencao">
        <div className="section-heading"><div><p className="section-label">Suporte local</p><h2>Da escolha ao pós-venda.</h2></div><p>Atendimento humano para comprar com mais clareza e continuar rodando com confiança.</p></div>
        <div className="support-grid"><article><span>01</span><h3>Manutenção técnica</h3><p>Avaliação, diagnóstico e orientação para manter sua Cavalletta pronta.</p></article><article><span>02</span><h3>Peças de reposição</h3><p>Consulta de componentes compatíveis e disponibilidade com a equipe.</p></article><article><span>03</span><h3>Fábrica e estoque</h3><p>Informações sobre tecnologia, novas chegadas, modelos e cores.</p></article><article><span>04</span><h3>Vendas realizadas</h3><p>Entrega com orientação de uso, conferência e suporte direto da Leader.</p></article></div>
        <div className="maintenance-showcase">
          <div className="maintenance-copy"><p className="section-label">Manutenção técnica real</p><h3>Cuidado em cada detalhe.</h3><p>Montagem, inspeção e ajustes realizados por uma equipe que conhece os componentes e acompanha sua Cavalletta também depois da entrega.</p><ul><li>Conferência de montagem</li><li>Inspeção elétrica e mecânica</li><li>Orientação de uso e pós-venda</li></ul><a className="primary" href={whatsappFor("agendar uma avaliação técnica")} target="_blank" rel="noreferrer">Solicitar atendimento</a></div>
          <div className="maintenance-gallery" aria-label="Equipe Cavalletta em serviços de manutenção técnica">
            <figure><img src="/support/manutencao-visao-geral.webp" alt="Técnico Cavalletta realizando conferência geral em scooter elétrica" loading="lazy" /><figcaption>Conferência geral</figcaption></figure>
            <figure><img src="/support/ajuste-bau.webp" alt="Técnico ajustando o compartimento traseiro de uma Cavalletta" loading="lazy" /><figcaption>Ajuste de componentes</figcaption></figure>
            <figure><img src="/support/inspecao-dianteira.webp" alt="Inspeção técnica da parte dianteira de uma Cavalletta" loading="lazy" /><figcaption>Inspeção mecânica</figcaption></figure>
            <figure><img src="/support/freio-suspensao.webp" alt="Detalhe da revisão de roda, freio e suspensão" loading="lazy" /><figcaption>Freio e suspensão</figcaption></figure>
            <figure><img src="/support/montagem-tecnica.webp" alt="Técnico realizando montagem com ferramenta de precisão" loading="lazy" /><figcaption>Montagem precisa</figcaption></figure>
            <figure><img src="/support/revisao-eletrica.webp" alt="Técnico Cavalletta verificando conexões elétricas dianteiras" loading="lazy" /><figcaption>Revisão elétrica</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="proof-section"><article><p className="section-label">Sustentabilidade prática</p><h2>Zero emissão local no trajeto.</h2><p>Mobilidade silenciosa e elétrica para reduzir a dependência de combustível no dia a dia.</p><strong>0</strong><span>emissão local durante o uso</span></article><article><p className="section-label">Confiança perto de você</p><h2>Produto real. Loja real.</h2><p>Compare os modelos online e venha conhecer de perto na Ricardo Jafet.</p><strong>Loja 26</strong><span>Galeria do Supermercado Extra</span></article></section>

      <section className="visit-section" id="loja"><div className="visit-copy"><p className="section-label">Agende sua experiência</p><h2>Faça um test ride.</h2><p>Veja o acabamento, compare o conforto e descubra qual Cavalletta combina com sua rotina.</p><address>{storeAddress}</address><div className="hero-actions"><a className="primary" href={whatsappFor("agendar um test ride")} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a><a className="secondary" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no mapa</a></div></div><div className="map-card"><iframe title="Mapa da Cavalletta Leader na Galeria do Supermercado Extra" src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>

      <section className="faq-bridge" aria-labelledby="faq-bridge-title"><div><p className="section-label">Central de dúvidas</p><h2 id="faq-bridge-title">Respostas antes do test ride.</h2><p>Consulte bateria, recarga, documentos, manutenção, estoque e atendimento em uma página completa da Cavalletta Leader.</p></div><Link className="primary" href="/faq">Abrir FAQ completo</Link></section>

      <footer><a className="footer-brand" href="#inicio"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></a><nav><a href="#modelos">Modelos</a><a href="#economia">Autonomia</a><a href="#tecnologia">Tecnologia</a><a href="#manutencao">Suporte</a><a href="#blog">Blog</a><Link href="/faq">FAQ</Link></nav><p>{storeAddress}</p><div><a href={instagramUrl} target="_blank" rel="noreferrer">@cavalletta.leader</a><a href={whatsappUrl} target="_blank" rel="noreferrer">+55 11 92514-1848</a></div></footer>
      <aside className="sticky-conversion" aria-label="Ações rápidas"><span>Pronto para conhecer sua Cavalletta?</span><a href={whatsappFor("consultar um modelo")} target="_blank" rel="noreferrer">Consultar modelo</a><a href={whatsappFor("agendar um test ride")} target="_blank" rel="noreferrer">Agendar test ride</a><a href={mapsUrl} target="_blank" rel="noreferrer">Ver localização</a></aside>
    </main>
  );
}
