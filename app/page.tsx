const models = [
  {
    name: "Cavalletta C2",
    tag: "Entrada inteligente",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/1_31.jpg?v=1784627413",
    price: "R$ 5.027",
    oldPrice: "R$ 6.097",
    specs: ["750W", "65 km", "32 km/h", "Bateria removivel"],
    colors: ["Preto", "Vermelho", "Azul", "Verde"],
    copy: "Para rotina urbana com baixo custo, agilidade e recarga simples.",
  },
  {
    name: "Cavalletta C3",
    tag: "Melhor custo",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C3-preto5_3c5e875a-2486-4497-9e76-8e7c4951bf8a.jpg?v=1772529411",
    price: "R$ 6.099",
    oldPrice: "R$ 6.999",
    specs: ["800W", "75 km", "32 km/h", "Uso em ciclovia"],
    colors: ["Preto", "Azul", "Cinza"],
    copy: "Scooter eletrica para quem quer economia sem abrir mao de presenca.",
  },
  {
    name: "Cavalletta C3 Pro",
    tag: "Mais tech",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C3proproduct-1.jpg?v=1783566490",
    price: "R$ 6.599",
    oldPrice: "R$ 7.999",
    specs: ["App", "GPS", "75 km", "Antifurto"],
    colors: ["Preto", "Azul", "Cinza"],
    copy: "Controle pelo app, rastreamento e recursos de seguranca para a cidade.",
  },
  {
    name: "Cavalletta C10",
    tag: "NFC antifurto",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C10-white1.png?v=1773130104",
    price: "R$ 7.999",
    oldPrice: "R$ 8.699",
    specs: ["1000W", "65 km", "NFC", "Sem CNH"],
    colors: ["Branco", "Verde", "Cinza", "Marrom"],
    copy: "Design limpo, partida moderna e potencia para deslocamentos diarios.",
  },
  {
    name: "Cavalletta AE8",
    tag: "Aventura urbana",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/AE8_1.jpg?v=1781167662",
    price: "R$ 7.999",
    oldPrice: "R$ 8.990",
    specs: ["1000W", "80 km", "32 km/h", "Freio a disco"],
    colors: ["Estilo bike"],
    copy: "Para quem quer uma pegada mais esportiva sem perder praticidade.",
  },
  {
    name: "Cavalletta C12",
    tag: "Mais vendida",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C12white1.png?v=1773131725",
    price: "R$ 8.999",
    oldPrice: "R$ 9.999",
    specs: ["1000W", "75 km", "60V 20Ah", "32 km/h"],
    colors: ["Branco", "Azul", "Caqui", "Preto"],
    copy: "Elegancia, autonomia e conforto para quem quer chegar melhor.",
  },
  {
    name: "Cavalletta C15",
    tag: "Robusta",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/1000px-1000px-_2.jpg?v=1778833824",
    price: "R$ 9.999",
    oldPrice: "R$ 10.999",
    specs: ["1000W", "65 km", "25 graus", "Disco duplo"],
    colors: ["Preto", "Cinza", "Branco", "Amarela", "Verde", "Azul"],
    copy: "Mais corpo, mais presenca e mais confianca para subir o nivel.",
  },
  {
    name: "Cavalletta T3",
    tag: "Triciclo premium",
    image: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/Frame15.jpg?v=1765848580",
    price: "R$ 11.999",
    oldPrice: "R$ 13.999",
    specs: ["3 rodas", "1000W", "Urbano", "Estavel"],
    colors: ["Caqui", "Azul-marinho", "Vermelho"],
    copy: "Estabilidade extra para quem busca seguranca, conforto e estilo.",
  },
];

const benefits = [
  ["Economia visivel", "Troque gasolina, app e onibus por uma rotina eletrica previsivel."],
  ["Compra sem friccao", "Modelos organizados por uso, autonomia e tecnologia para decidir rapido."],
  ["Confiança local", "Atendimento presencial na Galeria Extra Ricardo Jafet, loja 26."],
  ["Desejo imediato", "Design branco, verde e preto com uma pegada premium de mobilidade limpa."],
];

const whatsappUrl = "https://wa.me/5511925141848";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cavalletta Leader">
          <img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" />
          <span>leader</span>
        </a>
        <nav aria-label="Navegacao principal">
          <a href="#modelos">Modelos</a>
          <a href="#economia">Economia</a>
          <a href="#localizacao">Localizacao</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Loja Cavalletta Leader</p>
          <h1>Mobilidade eletrica com presenca, economia e tecnologia.</h1>
          <p className="hero-text">
            Scooters e bikes eletricas Cavalletta para transformar o caminho diario em uma decisao mais leve, inteligente e desejavel.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#modelos">Ver modelos</a>
            <a className="secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          </div>
          <div className="proof-strip" aria-label="Destaques">
            <span><strong>32 km/h</strong> velocidade urbana</span>
            <span><strong>ate 80 km</strong> autonomia</span>
            <span><strong>sem CNH</strong> em modelos selecionados</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Cavalletta C12 em destaque">
          <div className="glass-panel">
            <span className="live-dot">Pronta entrega</span>
            <img src="https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C12white1.png?v=1773131725" alt="Cavalletta C12 branca" />
            <div className="panel-row">
              <span>C12 Leader Edition</span>
              <strong>R$ 8.999</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-band" aria-label="Indicadores da loja">
        <div><strong>0 emissao local</strong><span>mais silencio, menos custo</span></div>
        <div><strong>1000W</strong><span>potencia em modelos premium</span></div>
        <div><strong>loja fisica</strong><span>test-drive e atendimento humano</span></div>
        <div><strong>bateria de litio</strong><span>recarga facil para o dia a dia</span></div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">Neurodesign aplicado</p>
          <h2>Clareza para escolher. Desejo para agir. Segurança para comprar.</h2>
        </div>
        <p>
          A pagina conduz o visitante por prova, comparacao e acao: primeiro mostra liberdade, depois organiza os modelos, reforca economia e fecha com localizacao simples.
        </p>
      </section>

      <section className="benefits-grid" aria-label="Beneficios">
        {benefits.map(([title, text]) => (
          <article key={title}>
            <span></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section models-section" id="modelos">
        <div className="section-head">
          <p className="eyebrow">Catalogo completo</p>
          <h2>Todos os modelos Cavalletta para comparar em segundos.</h2>
          <p>Cards diretos, foco em autonomia, potencia, tecnologia e cores disponiveis.</p>
        </div>
        <div className="model-grid">
          {models.map((model) => (
            <article className="model-card" key={model.name}>
              <div className="model-media">
                <span>{model.tag}</span>
                <img src={model.image} alt={model.name} />
              </div>
              <div className="model-body">
                <div className="model-title">
                  <h3>{model.name}</h3>
                  <div>
                    <del>{model.oldPrice}</del>
                    <strong>{model.price}</strong>
                  </div>
                </div>
                <p>{model.copy}</p>
                <ul>
                  {model.specs.map((spec) => <li key={spec}>{spec}</li>)}
                </ul>
                <div className="color-list">
                  {model.colors.map((color) => <span key={color}>{color}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="calculator" id="economia">
        <div className="calc-copy">
          <p className="eyebrow">Economia percebida</p>
          <h2>Mostre o custo invisivel de continuar como esta.</h2>
          <p>
            A troca fica mais facil quando o cliente enxerga gasolina, transporte por app, estacionamento e tempo perdido como uma unica conta mensal.
          </p>
        </div>
        <div className="calc-panel">
          <div className="calc-line"><span>Transporte atual</span><strong>R$ 780/mes</strong></div>
          <div className="calc-line green"><span>Energia estimada</span><strong>R$ 25/mes</strong></div>
          <div className="calc-line"><span>Manutencao media</span><strong>baixo custo</strong></div>
          <div className="saving">
            <span>Economia potencial</span>
            <strong>ate R$ 755/mes</strong>
          </div>
          <a className="primary full" href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero simular meu trajeto
          </a>
        </div>
      </section>

      <section className="support">
        <div>
          <p className="eyebrow">Pos-venda</p>
          <h2>Compra com suporte, pecas e orientacao.</h2>
        </div>
        <div className="support-grid">
          <article><strong>Test-drive</strong><span>Experimente antes de decidir.</span></article>
          <article><strong>Entrega orientada</strong><span>Aprenda uso, recarga e cuidados.</span></article>
          <article><strong>Atendimento local</strong><span>Loja fisica para conversar pessoalmente.</span></article>
        </div>
      </section>

      <section className="location" id="localizacao">
        <div>
          <p className="eyebrow">Onde encontrar</p>
          <h2>Galeria Extra Ricardo Jafet</h2>
          <p>Av. Ricardo Jafet, 1501 - loja 26. Atendimento para conhecer modelos, tirar duvidas e escolher sua Cavalletta.</p>
        </div>
        <div className="address-card">
          <span>Cavalletta Leader</span>
          <strong>Loja 26</strong>
          <p>Galeria Extra Ricardo Jafet - 1501</p>
          <a className="secondary dark" href="https://www.google.com/maps/search/?api=1&query=Galeria%20Extra%20Ricardo%20Jafet%201501%20loja%2026" target="_blank" rel="noreferrer">
            Abrir no mapa
          </a>
        </div>
      </section>

      <footer>
        <img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" />
        <p>cavalletta.leader - mobilidade eletrica premium.</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">+55 11 92514-1848</a>
        <a href="https://www.instagram.com/cavalletta.leader/" target="_blank" rel="noreferrer">@cavalletta.leader</a>
      </footer>
    </main>
  );
}
