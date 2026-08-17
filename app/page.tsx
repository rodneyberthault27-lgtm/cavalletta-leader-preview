const whatsappUrl = "https://wa.me/5511925141848";
const instagramUrl = "https://www.instagram.com/cavalletta.leader/";
const siteUrl = "https://cavalletta-leader.rodead.chatgpt.site";
const storeAddress = "Galeria Extra Ricardo Jafet, Av. Ricardo Jafet, 1501 - loja 26, São Paulo";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Galeria%20Extra%20Ricardo%20Jafet%201501%20loja%2026";
const mapsEmbedUrl = "https://maps.google.com/maps?q=Galeria%20Extra%20Ricardo%20Jafet%201501%20loja%2026&t=&z=16&ie=UTF8&iwloc=&output=embed";

const navTabs = [
  ["Nossos produtos", "#produtos"],
  ["Destaques", "#ofertas"],
  ["Lojas", "#lojas"],
  ["Manutenção", "#manutencao"],
  ["Fábrica e estoque", "#fabrica-estoque"],
];

const searchChips = [
  "AE8",
  "AJ1",
  "E3",
  "E12",
  "C3",
  "C12",
  "C15",
  "T3",
  "A5X",
];

const heroSlides = [
  {
    name: "C3 Pro",
    headline: "Aplicativo inteligente",
    text: "Mobilidade conectada, bateria de íon-lítio e autonomia para a rotina urbana.",
    image: "/models/c3-pro.webp",
  },
  {
    name: "T3",
    headline: "Estabilidade em três rodas",
    text: "Conforto, segurança e praticidade para deslocamentos urbanos com até 50 km de autonomia.",
    image: "/models/t3.webp",
  },
  {
    name: "A5X",
    headline: "Potência para o trabalho",
    text: "Triciclo elétrico de carga com motor de 2000 W, alta capacidade e autonomia de até 150 km.",
    image: "/models/a5x.png",
  },
];

const models = [
  {
    name: "AE8 Bicicleta Elétrica",
    tag: "Até 80 km",
    category: "Bicicleta elétrica",
    image: "/models/ae8.webp",
    specs: ["1000 W", "Até 80 km", "48V 15Ah", "32 km/h"],
    colors: ["Branco", "Vermelho", "Caqui", "Azul", "Verde"],
  },
  {
    name: "AJ1 Série Leve",
    tag: "Novidade",
    category: "Bicicleta elétrica",
    image: "/models/aj1.webp",
    specs: ["Série leve", "Confortável", "Sem CNH", "Consulte detalhes"],
    colors: ["Grafite", "Cinza", "Creme", "Rosa"],
  },
  {
    name: "E3 Elétrica Urbana",
    tag: "Vida com qualidade",
    category: "Scooter",
    image: "/models/e3.webp",
    specs: ["800 W", "Até 50 km", "48V 24Ah", "32 km/h"],
    colors: ["Laranja", "Creme", "Verde", "Vermelho"],
  },
  {
    name: "E12 NFC Antifurto",
    tag: "NFC",
    category: "Scooter",
    image: "/models/e12.webp",
    specs: ["1000 W", "Até 65 km", "60V 24Ah", "NFC"],
    colors: ["Grafite", "Marrom", "Cinza", "Creme"],
  },
  {
    name: "C3 Pro Aplicativo Inteligente",
    tag: "App inteligente",
    category: "Tecnologia",
    image: "/models/c3-pro.webp",
    specs: ["800 W", "Até 50 km", "48V 24Ah", "App"],
    colors: ["Preto", "Branco", "Azul-claro"],
  },
  {
    name: "C12 Bicicleta Elétrica",
    tag: "Até 65 km",
    category: "Bicicleta elétrica",
    image: "/models/c12.webp",
    specs: ["1000 W", "Até 65 km", "60V 20Ah", "32 km/h"],
    colors: ["Preto", "Branco", "Caqui", "Azul-claro"],
  },
  {
    name: "C15 Bicicleta Elétrica",
    tag: "Carga até 160 kg",
    category: "Bicicleta elétrica",
    image: "/models/c15.webp",
    specs: ["1000 W", "Até 55 km", "60V 20Ah", "32 km/h"],
    colors: ["Preto", "Branco", "Cinza", "Creme", "Azul"],
  },
  {
    name: "T3 Triciclo Elétrico",
    tag: "Estabilidade",
    category: "Triciclo elétrico",
    image: "/models/t3.webp",
    specs: ["1000 W", "Até 50 km", "60V 20Ah", "30 km/h"],
    colors: ["Azul", "Preto", "Branco", "Cinza", "Vermelho"],
  },
  {
    name: "A5X Triciclo de Carga",
    tag: "Carga profissional",
    category: "Triciclo elétrico",
    image: "/models/a5x.png",
    specs: ["2000 W", "Até 150 km", "72V 96Ah", "Carga 500 kg"],
    colors: ["Verde", "Branco"],
  },
];

const categories = [
  ["Scooters urbanas", "E3, E12 e C3 Pro para a rotina", models[3].image],
  ["Triciclos elétricos", "T3 para conforto e A5X para carga", models[8].image],
  ["Bicicletas elétricas", "AE8, AJ1, C12 e C15", models[0].image],
  ["Tecnologia", "Aplicativo, NFC, alarme e bateria de íon-lítio", models[4].image],
];

const supportItems = [
  ["Manutenção técnica", "Avaliação, diagnóstico e orientação para manter sua Cavalletta pronta para a rotina."],
  ["Peças de reposição", "Consulte componentes compatíveis e disponibilidade diretamente com a equipe da loja."],
  ["Cuidados com a bateria", "Orientação de recarga, conservação e uso adequado para preservar desempenho e autonomia."],
  ["Pós-venda local", "Atendimento humano na Ricardo Jafet antes, durante e depois da sua escolha."],
];

const businessProof = [
  ["Vendas realizadas", "Modelos entregues com orientação de uso, conferência e suporte direto da equipe Leader."],
  ["Escolha acompanhada", "O cliente compara uso, autonomia, potência e conforto antes de decidir."],
  ["Entrega responsável", "Cada venda é conduzida com explicação dos recursos, bateria e cuidados essenciais."],
];

const factoryStockItems = [
  ["Informações da fábrica", "Conheça a tecnologia, a construção e os diferenciais de cada linha Cavalletta com nossa equipe."],
  ["Estoque consultivo", "Cores e modelos podem variar. Confirmamos a disponibilidade atual antes da sua visita."],
  ["Reposição e chegada", "Quando um modelo não estiver disponível, informamos previsão e alternativas pelo WhatsApp."],
];

const desireSteps = [
  ["Imagine chegar sem barulho", "Você sai do trânsito mental de gasolina, posto e manutenção pesada."],
  ["Sinta controle no primeiro toque", "Aplicativo, NFC, bateria de lítio e modelos com tecnologia antifurto."],
  ["Escolha com menos dúvida", "A vitrine compara potência, autonomia e cores antes da conversa no WhatsApp."],
  ["Compre com segurança local", "Loja física, mapa, test-drive e atendimento humano na Ricardo Jafet."],
];

const trustSignals = [
  ["Resposta rápida", "Atendimento direto pelo WhatsApp da loja."],
  ["Produto real", "Modelos Cavalletta com fotos, especificações e cores."],
  ["Sem pressão", "Você compara online e decide com suporte presencial."],
  ["Decisão inteligente", "Economia, autonomia e tecnologia lado a lado."],
];

const faqs = [
  {
    question: "Onde fica a Cavalletta Leader?",
    answer: "A Cavalletta Leader fica na Galeria Extra Ricardo Jafet, Av. Ricardo Jafet, 1501, loja 26, em São Paulo.",
  },
  {
    question: "Como falar com a loja pelo WhatsApp?",
    answer: "O atendimento é feito pelo WhatsApp +55 11 92514-1848 ou pelo link wa.me/5511925141848.",
  },
  {
    question: "Posso fazer test-drive?",
    answer: "Sim. Você pode chamar no WhatsApp para combinar uma visita e conhecer os modelos disponíveis na loja.",
  },
  {
    question: "Quais modelos Cavalletta aparecem no site?",
    answer: "A vitrine atual apresenta AE8, AJ1, E3, E12, C3 Pro, C12, C15, T3 e A5X, conforme o portfólio disponível da loja.",
  },
  {
    question: "Tem modelo que não precisa de CNH?",
    answer: "Alguns modelos são apresentados como sem CNH ou voltados para ciclovia. A loja pode confirmar a regra ideal para seu uso e cidade no atendimento.",
  },
  {
    question: "Como consultar valores e estoque?",
    answer: "Valores, cores e disponibilidade são informados diretamente pela equipe no WhatsApp, de acordo com o modelo desejado.",
  },
];

const whatsappFor = (subject: string) =>
  `${whatsappUrl}?text=${encodeURIComponent(`Olá! Vim pelo site da Cavalletta Leader e gostaria de saber mais sobre ${subject}.`)}`;

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
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: [instagramUrl, whatsappUrl],
      hasMap: mapsUrl,
      areaServed: "São Paulo",
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
          image: model.image.startsWith("http") ? model.image : `${siteUrl}${model.image}`,
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
        <span>Loja física Cavalletta Leader</span>
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
          <h1>Scooters e motos elétricas Cavalletta com atitude.</h1>
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
          <span>Bateria de lítio</span>
          <span>Aplicativo inteligente</span>
          <span>Test-drive na loja</span>
          <span>Atendimento por WhatsApp</span>
          <span>Autonomia de até 150 km</span>
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
            <p className="eyebrow">Destaque tecnológico</p>
            <h2>Conheça o Novo C3 Pro</h2>
            <p>Tecnologia, estilo e controle inteligente pelo aplicativo Cavalletta.</p>
            <a className="primary" href={whatsappFor("o C3 Pro")} target="_blank" rel="noreferrer">Consultar no WhatsApp</a>
          </div>
          <img src={models[4].image} alt="Cavalletta C3 Pro" />
        </article>
        <article className="promo-card light">
          <div>
            <p className="eyebrow">Família e conforto</p>
            <h2>Onde a família vive cada viagem</h2>
            <p>Cavalletta T3 com estabilidade, presença e liberdade no trajeto.</p>
            <a className="secondary" href={whatsappFor("o T3 Triciclo Elétrico")} target="_blank" rel="noreferrer">Consultar T3</a>
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
            <p className="eyebrow">Portfólio disponível</p>
            <h2>Os modelos disponíveis agora na loja.</h2>
          </div>
          <p>Fotos, cores e especificações para escolher com segurança. Valores e disponibilidade são informados pela equipe no WhatsApp.</p>
        </div>
        <div className="product-grid">
          {models.map((model) => (
            <article className="product-card" key={model.name}>
              <div className="product-media">
                <span className="photo-label">Disponível agora</span>
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
          <p className="eyebrow">Manutenção e reposição</p>
          <h2>Sua Cavalletta cuidada por quem entende do produto.</h2>
          <p>Conte com orientação técnica, peças de reposição e atendimento pós-venda para manter sua mobilidade elétrica funcionando com confiança.</p>
          <a className="primary" href={whatsappFor("manutenção técnica ou peças de reposição")} target="_blank" rel="noreferrer">Falar com a assistência</a>
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
          <p className="eyebrow">Confiança para decidir</p>
          <h2>Vendas realizadas, fábrica e estoque.</h2>
          <p>Informação clara em cada etapa, da escolha do modelo ao suporte depois da entrega.</p>
        </div>
        <div className="business-columns">
          <div>
            <span className="column-kicker">Experiência de venda</span>
            {businessProof.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div>
            <span className="column-kicker">Informação atualizada</span>
            {factoryStockItems.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
            <a className="secondary dark" href={whatsappFor("informações da fábrica e disponibilidade em estoque")} target="_blank" rel="noreferrer">Consultar fábrica e estoque</a>
          </div>
        </div>
      </section>

      <section className="neuro-panel" aria-label="Experiência de compra Cavalletta Leader">
        <div>
          <p className="eyebrow">Sistema de decisão</p>
          <h2>O cliente não compra só transporte. Ele compra liberdade, status e controle.</h2>
          <p>
            Por isso a página guia o olhar por desejo, prova, comparação e ação. Primeiro cria imaginação, depois reduz risco e finalmente convida para o WhatsApp.
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
          <article><strong>+20</strong><span>anos de inovação global</span></article>
          <article><strong>+100</strong><span>países atendidos</span></article>
          <article><strong>0</strong><span>emissão local no seu trajeto</span></article>
          <article><strong>150 km</strong><span>autonomia máxima no portfólio atual</span></article>
        </div>
      </section>

      <section className="test-drive" id="lojas">
        <div className="test-panel">
          <p className="eyebrow">Liberdade elétrica, em qualquer lugar</p>
          <h2>TEST DRIVE</h2>
          <p>Experimente a emoção de andar de Cavalletta. Fale pelo WhatsApp e combine sua visita na Galeria Extra Ricardo Jafet.</p>
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
          <h2>Respostas rápidas para quem está perto de decidir.</h2>
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
        <h2>Cliente quer ver produto real, resposta rápida e decisão fácil.</h2>
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
