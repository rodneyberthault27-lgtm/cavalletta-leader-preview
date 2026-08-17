const whatsappUrl = "https://wa.me/5511925141848";
const instagramUrl = "https://www.instagram.com/cavalletta.leader/";
const siteUrl = "https://cavalletta-leader.rodead.chatgpt.site";
const storeAddress = "Galeria Extra Ricardo Jafet, Av. Ricardo Jafet, 1501 - loja 26, Sao Paulo";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Galeria%20Extra%20Ricardo%20Jafet%201501%20loja%2026";
const mapsEmbedUrl = "https://maps.google.com/maps?q=Galeria%20Extra%20Ricardo%20Jafet%201501%20loja%2026&t=&z=16&ie=UTF8&iwloc=&output=embed";

const navTabs = [
  ["Nossos produtos", "#produtos"],
  ["Destaques", "#ofertas"],
  ["Lojas", "#lojas"],
  ["Manutencao", "#manutencao"],
  ["Fabrica e estoque", "#fabrica-estoque"],
];

const searchChips = [
  "T3",
  "C3",
  "C12",
  "C15",
  "C3 Pro",
  "Scooter eletrica",
  "Bateria de litio",
  "Moto eletrica",
  "Triciclo eletrico",
  "1000W",
];

const heroSlides = [
  {
    name: "C3 Pro",
    headline: "Controle inteligente pelo app",
    text: "GPS, antifurto e autonomia para quem quer tecnologia de verdade no deslocamento urbano.",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C3proproduct-1.jpg?v=1783566490",
  },
  {
    name: "T3",
    headline: "Onde a familia vive cada viagem",
    text: "Tres rodas, estabilidade e conforto para transformar trajetos em momentos mais seguros.",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/Frame15.jpg?v=1765848580",
  },
  {
    name: "C12",
    headline: "Leve, moderna e pronta",
    text: "A favorita para quem quer estilo, autonomia e economia no mesmo pacote.",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C12white1.png?v=1773131725",
  },
];

const models = [
  {
    name: "C12 Ciclomotor Eletrico",
    tag: "Mais vendida",
    category: "Scooter",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C12white1.png?v=1773131725",
    specs: ["1000W", "75 km", "60V 20Ah", "32 km/h"],
    colors: ["Branco", "Azul", "Caqui", "Preto"],
  },
  {
    name: "C3 Scooter Eletrica",
    tag: "Hot",
    category: "Scooter",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C3-preto5_3c5e875a-2486-4497-9e76-8e7c4951bf8a.jpg?v=1772529411",
    specs: ["800W", "75 km", "Ciclovia", "Litio"],
    colors: ["Preto", "Azul", "Cinza"],
  },
  {
    name: "C15 Scooter Eletrica",
    tag: "Robusta",
    category: "Scooter",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/1000px-1000px-_2.jpg?v=1778833824",
    specs: ["1000W", "65 km", "25 graus", "Disco duplo"],
    colors: ["Preto", "Cinza", "Branco", "Amarela", "Verde", "Azul"],
  },
  {
    name: "C10 NFC Antifurto",
    tag: "Sem CNH",
    category: "Moto eletrica",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C10-white1.png?v=1773130104",
    specs: ["1000W", "65 km", "NFC", "Antifurto"],
    colors: ["Branco", "Verde", "Cinza", "Marrom"],
  },
  {
    name: "C3 Pro App + GPS",
    tag: "New",
    category: "Tecnologia",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C3proproduct-1.jpg?v=1783566490",
    specs: ["App", "GPS", "75 km", "Antifurto"],
    colors: ["Preto", "Azul", "Cinza"],
  },
  {
    name: "C2 Removivel Litio",
    tag: "Entrada",
    category: "Bicicleta eletrica",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/1_31.jpg?v=1784627413",
    specs: ["750W", "65 km", "Removivel", "32 km/h"],
    colors: ["Preto", "Vermelho", "Azul", "Verde"],
  },
  {
    name: "AE8 Mobilidade Urbana",
    tag: "Aventura",
    category: "Bicicleta eletrica",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/AE8_1.jpg?v=1781167662",
    specs: ["1000W", "80 km", "Disco", "Esportiva"],
    colors: ["Bike style"],
  },
  {
    name: "T3 Triciclo Eletrico",
    tag: "Familia",
    category: "Triciclo eletrico",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/Frame15.jpg?v=1765848580",
    specs: ["3 rodas", "1000W", "Estavel", "Urbano"],
    colors: ["Caqui", "Azul-marinho", "Vermelho"],
  },
];

const categories = [
  ["Scooter", "C3, C10, C12 e C15 para cidade", models[0].image],
  ["Triciclos Eletricos", "T3 com estabilidade e conforto", models[7].image],
  ["Bicicleta Eletrica", "C2 e AE8 para rotina e aventura", models[5].image],
  ["Tecnologia", "App, GPS, NFC e antifurto", models[4].image],
];

const supportItems = [
  ["Manutencao tecnica", "Avaliacao, diagnostico e orientacao para manter sua Cavalletta pronta para a rotina."],
  ["Pecas de reposicao", "Consulte componentes compativeis e disponibilidade diretamente com a equipe da loja."],
  ["Cuidados com a bateria", "Orientacao de recarga, conservacao e uso adequado para preservar desempenho e autonomia."],
  ["Pos-venda local", "Atendimento humano na Ricardo Jafet antes, durante e depois da sua escolha."],
];

const businessProof = [
  ["Vendas realizadas", "Modelos entregues com orientacao de uso, conferencia e suporte direto da equipe Leader."],
  ["Escolha acompanhada", "O cliente compara uso, autonomia, potencia e conforto antes de decidir."],
  ["Entrega responsavel", "Cada venda e conduzida com explicacao dos recursos, bateria e cuidados essenciais."],
];

const factoryStockItems = [
  ["Informacoes da fabrica", "Conheca a tecnologia, a construcao e os diferenciais de cada linha Cavalletta com nossa equipe."],
  ["Estoque consultivo", "Cores e modelos podem variar. Confirmamos a disponibilidade atual antes da sua visita."],
  ["Reposicao e chegada", "Quando um modelo nao estiver disponivel, informamos previsao e alternativas pelo WhatsApp."],
];

const desireSteps = [
  ["Imagine chegar sem barulho", "Voce sai do transito mental de gasolina, posto e manutencao pesada."],
  ["Sinta controle no primeiro toque", "App, GPS, NFC, bateria de litio e modelos com tecnologia antifurto."],
  ["Escolha com menos duvida", "A vitrine compara potencia, autonomia e cores antes da conversa no WhatsApp."],
  ["Compre com seguranca local", "Loja fisica, mapa, test-drive e atendimento humano na Ricardo Jafet."],
];

const trustSignals = [
  ["Resposta rapida", "Atendimento direto pelo WhatsApp da loja."],
  ["Produto real", "Modelos Cavalletta com fotos, especificacoes e cores."],
  ["Sem pressao", "Voce compara online e decide com suporte presencial."],
  ["Decisao inteligente", "Economia, autonomia e tecnologia lado a lado."],
];

const faqs = [
  {
    question: "Onde fica a Cavalletta Leader?",
    answer: "A Cavalletta Leader fica na Galeria Extra Ricardo Jafet, Av. Ricardo Jafet, 1501, loja 26, em Sao Paulo.",
  },
  {
    question: "Como falar com a loja pelo WhatsApp?",
    answer: "O atendimento e feito pelo WhatsApp +55 11 92514-1848 ou pelo link wa.me/5511925141848.",
  },
  {
    question: "Posso fazer test-drive?",
    answer: "Sim. Voce pode chamar no WhatsApp para combinar uma visita e conhecer os modelos disponiveis na loja.",
  },
  {
    question: "Quais modelos Cavalletta aparecem no site?",
    answer: "O site apresenta C2, C3, C3 Pro, C10, C12, C15, AE8 e T3, com foco em scooters, motos, triciclos e bicicletas eletricas.",
  },
  {
    question: "Tem modelo que nao precisa de CNH?",
    answer: "Alguns modelos sao apresentados como sem CNH ou voltados para ciclovia. A loja pode confirmar a regra ideal para seu uso e cidade no atendimento.",
  },
  {
    question: "Como consultar valores e estoque?",
    answer: "Valores, cores e disponibilidade sao informados diretamente pela equipe no WhatsApp, de acordo com o modelo desejado.",
  },
];

const whatsappFor = (subject: string) =>
  `${whatsappUrl}?text=${encodeURIComponent(`Ola! Vim pelo site da Cavalletta Leader e gostaria de saber mais sobre ${subject}.`)}`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#store`,
      name: "Cavalletta Leader",
      url: siteUrl,
      image: "https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500",
      telephone: "+55 11 92514-1848",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Ricardo Jafet, 1501 - loja 26",
        addressLocality: "Sao Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: [instagramUrl, whatsappUrl],
      hasMap: mapsUrl,
      areaServed: "Sao Paulo",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Cavalletta Leader",
      url: siteUrl,
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/#produtos?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#produtos`,
      name: "Modelos Cavalletta Leader",
      itemListElement: models.map((model, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: model.name,
          image: model.image,
          brand: { "@type": "Brand", name: "Cavalletta" },
          category: model.category,
          description: `${model.name} com ${model.specs.join(", ")}. Cores: ${model.colors.join(", ")}.`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="topline">
        <span>Loja fisica Cavalletta Leader</span>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp +55 11 92514-1848</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cavalletta Leader">
          <img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" />
          <span>leader</span>
        </a>
        <nav className="main-tabs" aria-label="Abas principais">
          {navTabs.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="ghost-action" href="#busca" aria-label="Buscar modelos">Buscar</a>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>
      </header>

      <section className="search-cloud" id="busca" aria-label="Pesquisas populares">
        <strong>Sempre pesquise</strong>
        <div>
          {searchChips.map((chip) => <a href="#produtos" key={chip}>{chip}</a>)}
        </div>
      </section>

      <section className="hero-store" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Cavalletta Leader</p>
          <h1>Scooters e motos eletricas Cavalletta com atitude.</h1>
          <p className="hero-text">
            Escolha sua Cavalletta com tecnologia, test-drive, mapa da loja e atendimento direto pelo WhatsApp na Ricardo Jafet.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#produtos">Ver produtos</a>
            <a className="secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          </div>
        </div>

        <div className="hero-stage" aria-label="Produtos em destaque">
          {heroSlides.map((slide, index) => (
            <article className={`hero-card hero-card-${index + 1}`} key={slide.name}>
              <div>
                <span>{slide.name}</span>
                <h2>{slide.headline}</h2>
                <p>{slide.text}</p>
              </div>
              <img src={slide.image} alt={slide.name} />
            </article>
          ))}
        </div>
      </section>

      <section className="ticker" aria-label="Destaques Cavalletta">
        <div>
          <span>Sem CNH em modelos selecionados</span>
          <span>Bateria de litio</span>
          <span>App + GPS</span>
          <span>Test-drive na loja</span>
          <span>Atendimento por WhatsApp</span>
          <span>Autonomia ate 80 km</span>
        </div>
      </section>

      <section className="decision-strip" aria-label="Motivos para escolher a Cavalletta Leader">
        {trustSignals.map(([title, text]) => (
          <article key={title}>
            <strong>{title}</strong>
            <span>{text}</span>
          </article>
        ))}
      </section>

      <section className="promo-duo" id="ofertas">
        <article className="promo-card dark">
          <div>
            <p className="eyebrow">Destaque tecnologico</p>
            <h2>Conheca o Novo C3 Pro</h2>
            <p>Tecnologia, estilo, controle inteligente pelo app, GPS e antifurto.</p>
            <a className="primary" href={whatsappFor("o C3 Pro")} target="_blank" rel="noreferrer">Consultar no WhatsApp</a>
          </div>
          <img src={models[4].image} alt="Cavalletta C3 Pro" />
        </article>
        <article className="promo-card light">
          <div>
            <p className="eyebrow">Familia e conforto</p>
            <h2>Onde a familia vive cada viagem</h2>
            <p>Cavalletta T3 com estabilidade, presenca e liberdade no trajeto.</p>
            <a className="secondary" href={whatsappFor("o T3 Triciclo Eletrico")} target="_blank" rel="noreferrer">Consultar T3</a>
          </div>
          <img src={models[7].image} alt="Cavalletta T3" />
        </article>
      </section>

      <section className="section categories" id="explorar">
        <div className="section-head compact">
          <p className="eyebrow">Categoria</p>
          <h2>Compre pelo tipo de uso.</h2>
        </div>
        <div className="category-grid">
          {categories.map(([title, text, image]) => (
            <article key={title}>
              <img src={image} alt={title} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={whatsappFor(title)} target="_blank" rel="noreferrer">Consultar modelos</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section products" id="produtos">
        <div className="section-head">
          <div>
            <p className="eyebrow">Produtos populares</p>
            <h2>Todos os modelos em uma vitrine moderna.</h2>
          </div>
          <p>Fotos, cores e especificacoes para escolher com seguranca. Valores e disponibilidade sao informados pela equipe no WhatsApp.</p>
        </div>
        <div className="product-grid">
          {models.map((model) => (
            <article className="product-card" key={model.name}>
              <div className="product-media">
                <span className="photo-label">Foto do modelo</span>
                <img src={model.image} alt={model.name} />
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <span>{model.category}</span>
                  <strong>{model.tag}</strong>
                </div>
                <h3>{model.name}</h3>
                <ul>
                  {model.specs.map((spec) => <li key={spec}>{spec}</li>)}
                </ul>
                <div className="swatches" aria-label={`Cores de ${model.name}`}>
                  {model.colors.slice(0, 6).map((color) => <span key={color}>{color}</span>)}
                </div>
                <a className="quick-buy" href={whatsappFor(model.name)} target="_blank" rel="noreferrer">Consultar no WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-showcase" id="manutencao">
        <div className="service-intro">
          <p className="eyebrow">Manutencao e reposicao</p>
          <h2>Sua Cavalletta cuidada por quem entende do produto.</h2>
          <p>Conte com orientacao tecnica, pecas de reposicao e atendimento pos-venda para manter sua mobilidade eletrica funcionando com confianca.</p>
          <a className="primary" href={whatsappFor("manutencao tecnica ou pecas de reposicao")} target="_blank" rel="noreferrer">Falar com a assistencia</a>
        </div>
        <div className="service-grid">
          {supportItems.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="business-section" id="fabrica-estoque">
        <div className="business-heading">
          <p className="eyebrow">Confianca para decidir</p>
          <h2>Vendas realizadas, fabrica e estoque.</h2>
          <p>Informacao clara em cada etapa, da escolha do modelo ao suporte depois da entrega.</p>
        </div>
        <div className="business-columns">
          <div>
            <span className="column-kicker">Experiencia de venda</span>
            {businessProof.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div>
            <span className="column-kicker">Informacao atualizada</span>
            {factoryStockItems.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
            <a className="secondary dark" href={whatsappFor("informacoes da fabrica e disponibilidade em estoque")} target="_blank" rel="noreferrer">Consultar fabrica e estoque</a>
          </div>
        </div>
      </section>

      <section className="neuro-panel" aria-label="Experiencia de compra Cavalletta Leader">
        <div>
          <p className="eyebrow">Sistema de decisao</p>
          <h2>O cliente nao compra so transporte. Ele compra liberdade, status e controle.</h2>
          <p>
            Por isso a pagina guia o olhar por desejo, prova, comparacao e acao. Primeiro cria imaginacao, depois reduz risco e finalmente convida para o WhatsApp.
          </p>
          <a className="primary" href={whatsappUrl} target="_blank" rel="noreferrer">Quero minha Cavalletta</a>
        </div>
        <div className="desire-grid">
          {desireSteps.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lifestyle">
        <div>
          <p className="eyebrow">Mais do que mobilidade</p>
          <h2>Uma forma de viver com menos custo e mais liberdade.</h2>
        </div>
        <div className="metrics">
          <article><strong>+20</strong><span>anos de inovacao global</span></article>
          <article><strong>+100</strong><span>paises atendidos</span></article>
          <article><strong>0</strong><span>emissao local no seu trajeto</span></article>
          <article><strong>80 km</strong><span>autonomia em modelos selecionados</span></article>
        </div>
      </section>

      <section className="test-drive" id="lojas">
        <div className="test-panel">
          <p className="eyebrow">Liberdade eletrica, em qualquer lugar</p>
          <h2>TEST DRIVE</h2>
          <p>Experimente a emocao de andar de Cavalletta. Fale pelo WhatsApp e combine sua visita na Galeria Extra Ricardo Jafet.</p>
          <a className="primary" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
        </div>
        <div className="address-card">
          <span>Cavalletta Leader</span>
          <strong>Loja 26</strong>
          <p>Galeria Extra Ricardo Jafet - 1501</p>
          <a className="secondary dark" href={mapsUrl} target="_blank" rel="noreferrer">
            Abrir no mapa
          </a>
        </div>
        <div className="map-card" aria-label="Mapa da loja Cavalletta Leader">
          <iframe
            title="Mapa da Cavalletta Leader na Galeria Extra Ricardo Jafet"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-head compact">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Respostas rapidas para quem esta perto de decidir.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="community">
        <p className="eyebrow">A voz da comunidade Cavalletta</p>
        <h2>Cliente quer ver produto real, resposta rapida e decisao facil.</h2>
        <div className="social-row">
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="#produtos">Produtos</a>
        </div>
      </section>

      <footer>
        <img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" />
        <p>cavalletta.leader - {storeAddress}</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">+55 11 92514-1848</a>
        <a href={instagramUrl} target="_blank" rel="noreferrer">@cavalletta.leader</a>
      </footer>
    </main>
  );
}
