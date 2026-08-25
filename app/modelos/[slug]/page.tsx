import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModelBySlug, models, siteUrl, whatsappFor } from "../../../lib/models";
import ModelGallery from "../ModelGallery";

type ModelPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const model = getModelBySlug((await params).slug);
  if (!model) return {};
  const description = `${model.fullName}: ${model.featureText} Veja fotos, especificações e consulte disponibilidade na Cavalletta Leader.`;
  return {
    title: model.fullName,
    description,
    alternates: { canonical: `/modelos/${model.slug}` },
    openGraph: { title: `${model.fullName} | Cavalletta Leader`, description, url: `/modelos/${model.slug}`, images: [{ url: model.image, alt: model.fullName }] },
    twitter: { card: "summary_large_image", title: `${model.fullName} | Cavalletta Leader`, description, images: [model.image] },
  };
}

export default async function ModelPage({ params }: ModelPageProps) {
  const model = getModelBySlug((await params).slug);
  if (!model) notFound();
  const relatedModels = models.filter((item) => item.slug !== model.slug).slice(0, 3);
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: model.fullName,
    image: model.gallery.map((image) => `${siteUrl}${image}`),
    description: model.featureText,
    category: model.category,
    brand: { "@type": "Brand", name: "Cavalletta" },
    url: `${siteUrl}/modelos/${model.slug}`,
  };

  return (
    <main className="model-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} />
      <div className="topline"><span>Loja física na Ricardo Jafet</span><a href="https://wa.me/5511925141848" target="_blank" rel="noreferrer">WhatsApp +55 11 92514-1848</a></div>
      <header className="site-header model-detail-header">
        <Link className="brand" href="/#inicio" aria-label="Cavalletta Leader - início"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></Link>
        <nav className="main-tabs" aria-label="Navegação principal"><Link href="/#modelos">Modelos</Link><Link href="/#economia">Autonomia</Link><Link href="/#tecnologia">Tecnologia</Link><Link href="/#manutencao">Suporte</Link><Link href="/#blog">Blog</Link><Link href="/faq">FAQ</Link></nav>
        <a className="header-cta" href={whatsappFor(model.fullName)} target="_blank" rel="noreferrer">Consultar</a>
      </header>

      <section className="model-detail-hero">
        <div className="model-detail-copy">
          <Link className="model-back" href="/#modelos">← Voltar aos modelos</Link>
          <p className="section-label">{model.category}</p>
          <h1>{model.name}</h1>
          <h2>{model.fullName}</h2>
          <p>{model.featureText} Conheça os detalhes, compare com sua rotina e fale com a equipe para confirmar cores e disponibilidade.</p>
          <div className="model-detail-colors"><span>Cores disponíveis</span><div>{model.colors.map((color) => <i data-color={color.toLocaleLowerCase("pt-BR")} title={color} key={color} />)}</div><strong>{model.colors.join(" · ")}</strong><a href={whatsappFor(`as cores disponíveis da ${model.name}`)} target="_blank" rel="noreferrer">Consultar cores atuais</a></div>
          <div className="model-detail-actions"><a className="primary" href={whatsappFor(model.fullName)} target="_blank" rel="noreferrer">Consultar no WhatsApp</a><Link className="secondary" href="/#economia">Comparar autonomia</Link></div>
          <small>Sem preços expostos. Atendimento e condições diretamente com a loja.</small>
        </div>
        <div className="model-detail-stage"><img src={model.heroImage} alt={`${model.fullName} em perspectiva`} /><span>{model.range ? `Até ${model.range} km de autonomia informada` : "Ficha técnica em atualização"}</span></div>
      </section>

      <section className="model-detail-specs" aria-label={`Especificações da ${model.name}`}>
        {model.specs.map((spec, index) => <article key={spec}><span>{String(index + 1).padStart(2, "0")}</span><strong>{spec}</strong></article>)}
      </section>

      <section className="model-detail-gallery" id="galeria-modelo">
        <div className="model-detail-section-copy"><p className="section-label">Veja de perto</p><h2>Mais ângulos. Mais segurança para escolher.</h2><p>As imagens mostram formato, acabamento e proporções do modelo. No test ride, a equipe ajuda a confirmar conforto e adaptação à sua rotina.</p></div>
        <ModelGallery images={model.gallery} labels={model.galleryLabels} modelName={model.fullName} />
      </section>

      {model.video && <section className="model-detail-video"><div><p className="section-label">Modelo em movimento</p><h2>Observe os detalhes reais.</h2><p>Veja acabamento, iluminação e presença antes de agendar sua visita.</p></div><video controls playsInline preload="metadata" poster={model.heroImage}><source src={model.video} type="video/mp4" /></video></section>}

      <section className="model-detail-advisory"><div><p className="section-label">Autonomia e uso real</p><h2>O percurso também influencia.</h2></div><p>A autonomia depende do peso total dos condutores, do modo de condução, do tipo de terreno, das inclinações e das condições gerais do percurso. Essas variações são normais e não caracterizam falha ou defeito do produto.</p></section>

      <section className="related-models"><div className="section-heading"><div><p className="section-label">Continue comparando</p><h2>Outros modelos da linha.</h2></div><Link href="/#modelos">Ver todos os modelos</Link></div><div>{relatedModels.map((item) => <Link href={`/modelos/${item.slug}`} key={item.slug}><img src={item.image} alt={item.fullName} /><span>{item.category}</span><strong>{item.name}</strong><small>{item.range ? `Até ${item.range} km` : "Novo modelo"}</small></Link>)}</div></section>

      <footer className="model-detail-footer"><Link className="footer-brand" href="/#inicio"><img src="https://cavalletta.store/cdn/shop/files/logo-RGB-04.png?v=1733727732&width=500" alt="Cavalletta" /><span>leader</span></Link><p>Galeria do Supermercado Extra, Av. Dr. Ricardo Jafet, 1501 - loja 26, São Paulo - SP, Zona Sul</p><a href={whatsappFor(model.fullName)} target="_blank" rel="noreferrer">Consultar {model.name}</a></footer>
    </main>
  );
}
