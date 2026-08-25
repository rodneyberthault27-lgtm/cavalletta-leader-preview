export type CavallettaModel = {
  slug: string;
  name: string;
  fullName: string;
  category: string;
  image: string;
  heroImage: string;
  hoverImage: string;
  gallery: string[];
  galleryLabels: string[];
  video?: string;
  range: number | null;
  specs: string[];
  colors: string[];
  feature: string;
  featureText: string;
};

export const whatsappUrl = "https://wa.me/5511925141848";
export const siteUrl = "https://cavalletta-leader.rodead.chatgpt.site";

export const whatsappFor = (subject: string) =>
  `${whatsappUrl}?text=${encodeURIComponent(`Olá! Vim pelo site da Cavalletta Leader e gostaria de saber mais sobre ${subject}.`)}`;

export const models: CavallettaModel[] = [
  {
    slug: "c3-pro",
    name: "C3 Pro",
    fullName: "C3 Pro Aplicativo Inteligente",
    category: "Mobilidade conectada",
    image: "/models/c3-pro-studio.webp",
    heroImage: "/models/gallery/c3-pro-03.jpg",
    hoverImage: "/models/gallery/c3-pro-side.webp",
    gallery: ["/models/gallery/c3-pro-01.jpg", "/models/gallery/c3-pro-02.jpg", "/models/gallery/c3-pro-03.jpg", "/models/gallery/c3-pro-04.jpg", "/models/gallery/c3-pro-05.jpg", "/models/gallery/c3-pro-06.jpg"],
    galleryLabels: ["Aplicativo inteligente", "Vista frontal", "Dianteira em perspectiva", "Vista lateral", "Vista traseira", "Cesto dianteiro"],
    video: "/videos/c3-pro.mp4",
    range: 70,
    specs: ["800 W", "Até 70 km", "48V 24Ah", "Carga 140 kg"],
    colors: ["Preto", "Azul", "Cinza"],
    feature: "App inteligente",
    featureText: "Mobilidade conectada com controle direto pelo celular.",
  },
  {
    slug: "t3",
    name: "T3",
    fullName: "T3 Triciclo Elétrico",
    category: "Triciclo elétrico",
    image: "/models/t3-studio.webp",
    heroImage: "/models/gallery/t3-03.jpg",
    hoverImage: "/models/gallery/t3-rear.webp",
    gallery: ["/models/gallery/t3-01.jpg", "/models/gallery/t3-02.jpg", "/models/gallery/t3-03.jpg", "/models/gallery/t3-04.jpg", "/models/gallery/t3-05.jpg", "/models/gallery/t3-06.jpg"],
    galleryLabels: ["Cáqui · traseira em perspectiva", "Cáqui · vista frontal", "Azul-marinho · dianteira em perspectiva", "Azul-marinho · vista lateral", "Vermelho · traseira em perspectiva", "Vermelho · dianteira em perspectiva"],
    video: "https://cavalletta.store/cdn/shop/videos/c/vp/59a89575f9a2413ca4b7e9f88627d1e1/59a89575f9a2413ca4b7e9f88627d1e1.HD-1080p-2.5Mbps-82966655.mp4?v=0",
    range: 50,
    specs: ["1000 W", "Até 50 km", "60V 20Ah", "Carga 150 kg"],
    colors: ["Cáqui", "Azul-marinho", "Vermelho"],
    feature: "Três rodas",
    featureText: "Configuração de triciclo para uma rotina elétrica mais estável.",
  },
  {
    slug: "ae8",
    name: "AE8",
    fullName: "AE8 Bicicleta Elétrica",
    category: "Bicicleta elétrica",
    image: "/models/ae8-studio.webp",
    heroImage: "/models/gallery/ae8-02.jpg",
    hoverImage: "/models/gallery/ae8-profile.webp",
    gallery: ["/models/gallery/ae8-01.jpg", "/models/gallery/ae8-02.jpg", "/models/gallery/ae8-03.jpg", "/models/gallery/ae8-04.jpg", "/models/gallery/ae8-05.jpg", "/models/gallery/ae8-06.jpg"],
    galleryLabels: ["Vista lateral", "Dianteira em perspectiva", "Dianteira em ângulo fechado", "Vista superior em perspectiva", "Detalhe do farol", "Freio a disco dianteiro"],
    video: "/videos/ae8.mp4",
    range: 80,
    specs: ["1000 W", "Até 80 km", "48V 15Ah", "Carga 150 kg"],
    colors: ["Sob consulta"],
    feature: "Maior alcance",
    featureText: "Até 80 km de autonomia informada para trajetos mais longos.",
  },
  {
    slug: "c12",
    name: "C12",
    fullName: "C12 Bicicleta Elétrica",
    category: "Scooter urbana",
    image: "/models/c12-studio.webp",
    heroImage: "/models/gallery/c12-02.png",
    hoverImage: "/models/gallery/c12-rear.webp",
    gallery: ["/models/gallery/c12-01.png", "/models/gallery/c12-02.png", "/models/gallery/c12-03.png", "/models/gallery/c12-04.png", "/models/gallery/c12-05.png", "/models/gallery/c12-06.png"],
    galleryLabels: ["Vista frontal", "Dianteira em perspectiva", "Perfil lateral esquerdo", "Perfil lateral direito", "Traseira em perspectiva", "Roda e motor traseiros"],
    video: "/videos/c12.mp4",
    range: 65,
    specs: ["1000 W", "Até 65 km", "60V 20Ah", "32 km/h"],
    colors: ["Branco", "Azul", "Cáqui", "Preto"],
    feature: "Rotina urbana",
    featureText: "Formato prático e autonomia para os deslocamentos da cidade.",
  },
  {
    slug: "c15",
    name: "C15",
    fullName: "C15 Bicicleta Elétrica",
    category: "Scooter urbana",
    image: "/models/c15-studio.webp",
    heroImage: "/models/gallery/c15-01.jpg",
    hoverImage: "/models/gallery/c15-rear.webp",
    gallery: ["/models/gallery/c15-01.jpg", "/models/gallery/c15-02.jpg", "/models/gallery/c15-03.jpg", "/models/gallery/c15-04.jpg", "/models/gallery/c15-05.jpg", "/models/gallery/c15-06.jpg"],
    galleryLabels: ["Dianteira em perspectiva", "Vista frontal", "Traseira em perspectiva", "Vista lateral", "Porta-objetos e ignição", "Painel digital"],
    video: "/videos/c15.mp4",
    range: 55,
    specs: ["1000 W", "Até 55 km", "60V 20Ah", "Carga 160 kg"],
    colors: ["Preto", "Branco", "Cinza", "Amarelo", "Verde", "Azul"],
    feature: "Uso versátil",
    featureText: "Potência e capacidade para diferentes necessidades do dia a dia.",
  },
  {
    slug: "e16",
    name: "E16",
    fullName: "E16 Scooter Elétrica",
    category: "Novo modelo",
    image: "/models/e16-studio.webp",
    heroImage: "/models/e16/e16-side.webp",
    hoverImage: "/models/e16/e16-side.webp",
    gallery: ["/models/e16-studio.webp", "/models/e16/e16-side.webp", "/models/e16/e16-headlight.webp", "/models/e16/e16-usb.webp", "/models/e16/e16-ignition.webp", "/models/e16/e16-charging.webp"],
    galleryLabels: ["Dianteira em perspectiva", "Vista lateral", "Farol dianteiro aceso", "Porta USB e porta-objetos", "Chave de ignição e controles", "Conector de recarga"],
    range: null,
    specs: ["Ficha em atualização", "Baú traseiro", "Painel digital", "Chegando à loja"],
    colors: ["Preto", "Cinza", "Branco"],
    feature: "Novo lançamento",
    featureText: "Visual urbano, amplo espaço para os pés e baú traseiro integrado.",
  },
];

export const getModelBySlug = (slug: string) => models.find((model) => model.slug === slug);
