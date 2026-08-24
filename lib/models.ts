export type CavallettaModel = {
  slug: string;
  name: string;
  fullName: string;
  category: string;
  image: string;
  hoverImage: string;
  gallery: string[];
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
    hoverImage: "/models/c3-pro-official.jpg",
    gallery: ["/models/c3-pro-studio.webp", "/models/c3-pro-official.jpg"],
    video: "/videos/c3-pro.mp4",
    range: 70,
    specs: ["800 W", "Até 70 km", "48V 24Ah", "Carga 140 kg"],
    colors: ["Cores sob consulta"],
    feature: "App inteligente",
    featureText: "Mobilidade conectada com controle direto pelo celular.",
  },
  {
    slug: "t3",
    name: "T3",
    fullName: "T3 Triciclo Elétrico",
    category: "Triciclo elétrico",
    image: "/models/t3-studio.webp",
    hoverImage: "/models/t3-official.jpg",
    gallery: ["/models/t3-studio.webp", "/models/t3-official.jpg"],
    range: 50,
    specs: ["1000 W", "Até 50 km", "60V 20Ah", "Carga 150 kg"],
    colors: ["Cores sob consulta"],
    feature: "Três rodas",
    featureText: "Configuração de triciclo para uma rotina elétrica mais estável.",
  },
  {
    slug: "ae8",
    name: "AE8",
    fullName: "AE8 Bicicleta Elétrica",
    category: "Bicicleta elétrica",
    image: "/models/ae8-studio.webp",
    hoverImage: "/models/ae8-official.jpg",
    gallery: ["/models/ae8-studio.webp", "/models/ae8-official.jpg"],
    video: "/videos/ae8.mp4",
    range: 80,
    specs: ["1000 W", "Até 80 km", "48V 15Ah", "Carga 150 kg"],
    colors: ["Cores sob consulta"],
    feature: "Maior alcance",
    featureText: "Até 80 km de autonomia informada para trajetos mais longos.",
  },
  {
    slug: "c12",
    name: "C12",
    fullName: "C12 Bicicleta Elétrica",
    category: "Scooter urbana",
    image: "/models/c12-studio.webp",
    hoverImage: "/models/c12-official.png",
    gallery: ["/models/c12-studio.webp", "/models/c12-official.png"],
    video: "/videos/c12.mp4",
    range: 65,
    specs: ["1000 W", "Até 65 km", "60V 20Ah", "32 km/h"],
    colors: ["Cores sob consulta"],
    feature: "Rotina urbana",
    featureText: "Formato prático e autonomia para os deslocamentos da cidade.",
  },
  {
    slug: "c15",
    name: "C15",
    fullName: "C15 Bicicleta Elétrica",
    category: "Scooter urbana",
    image: "/models/c15-studio.webp",
    hoverImage: "/models/c15-official.jpg",
    gallery: ["/models/c15-studio.webp", "/models/c15-official.jpg"],
    video: "/videos/c15.mp4",
    range: 55,
    specs: ["1000 W", "Até 55 km", "60V 20Ah", "Carga 160 kg"],
    colors: ["Cores sob consulta"],
    feature: "Uso versátil",
    featureText: "Potência e capacidade para diferentes necessidades do dia a dia.",
  },
  {
    slug: "e16",
    name: "E16",
    fullName: "E16 Scooter Elétrica",
    category: "Novo modelo",
    image: "/models/e16-studio.webp",
    hoverImage: "/models/e16/e16-side.webp",
    gallery: ["/models/e16-studio.webp", "/models/e16/e16-side.webp", "/models/e16/e16-headlight.webp"],
    range: null,
    specs: ["Ficha em atualização", "Baú traseiro", "Painel digital", "Chegando à loja"],
    colors: ["Preto", "Cinza", "Branco"],
    feature: "Novo lançamento",
    featureText: "Visual urbano, amplo espaço para os pés e baú traseiro integrado.",
  },
];

export const getModelBySlug = (slug: string) => models.find((model) => model.slug === slug);
