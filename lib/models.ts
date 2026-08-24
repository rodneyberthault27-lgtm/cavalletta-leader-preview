export type CavallettaModel = {
  slug: string;
  name: string;
  fullName: string;
  category: string;
  image: string;
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
    hoverImage: "/models/gallery/c3-pro-side.webp",
    gallery: ["/models/gallery/c3-pro-01.jpg", "/models/gallery/c3-pro-02.jpg", "/models/gallery/c3-pro-03.jpg", "/models/gallery/c3-pro-04.jpg", "/models/gallery/c3-pro-05.jpg", "/models/gallery/c3-pro-06.jpg"],
    galleryLabels: ["Vista principal", "Perfil urbano", "Ângulo dianteiro", "Detalhe lateral", "Vista traseira", "Acabamento"],
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
    hoverImage: "/models/gallery/t3-rear.webp",
    gallery: ["/models/gallery/t3-01.jpg", "/models/gallery/t3-02.jpg", "/models/gallery/t3-03.jpg", "/models/gallery/t3-04.jpg", "/models/gallery/t3-05.jpg", "/models/gallery/t3-06.jpg"],
    galleryLabels: ["Traseira em perspectiva", "Vista frontal", "Vista lateral", "Vista traseira", "Dianteira em perspectiva", "Dianteira pelo lado oposto"],
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
    hoverImage: "/models/gallery/ae8-profile.webp",
    gallery: ["/models/gallery/ae8-01.jpg", "/models/gallery/ae8-02.jpg", "/models/gallery/ae8-03.jpg", "/models/gallery/ae8-04.jpg", "/models/gallery/ae8-05.jpg", "/models/gallery/ae8-06.jpg"],
    galleryLabels: ["Vista principal", "Ângulo dianteiro", "Perfil lateral", "Vista traseira", "Detalhe do quadro", "Acabamento urbano"],
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
    hoverImage: "/models/gallery/c12-rear.webp",
    gallery: ["/models/gallery/c12-01.png", "/models/gallery/c12-02.png", "/models/gallery/c12-03.png", "/models/gallery/c12-04.png", "/models/gallery/c12-05.png", "/models/gallery/c12-06.png"],
    galleryLabels: ["Vista principal", "Ângulo dianteiro", "Perfil lateral", "Vista traseira", "Detalhe frontal", "Acabamento"],
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
    hoverImage: "/models/gallery/c15-rear.webp",
    gallery: ["/models/gallery/c15-01.jpg", "/models/gallery/c15-02.jpg", "/models/gallery/c15-03.jpg", "/models/gallery/c15-04.jpg", "/models/gallery/c15-05.jpg", "/models/gallery/c15-06.jpg"],
    galleryLabels: ["Vista principal", "Ângulo dianteiro", "Perfil lateral", "Vista traseira", "Detalhe urbano", "Acabamento"],
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
    gallery: ["/models/e16-studio.webp", "/models/e16/e16-side.webp", "/models/e16/e16-headlight.webp", "/models/e16/e16-usb.webp", "/models/e16/e16-ignition.webp", "/models/e16/e16-charging.webp"],
    galleryLabels: ["Visão principal", "Perfil lateral", "Detalhe do farol", "Entrada USB", "Chave e acionamento", "Conector de recarga"],
    range: null,
    specs: ["Ficha em atualização", "Baú traseiro", "Painel digital", "Chegando à loja"],
    colors: ["Preto", "Cinza", "Branco"],
    feature: "Novo lançamento",
    featureText: "Visual urbano, amplo espaço para os pés e baú traseiro integrado.",
  },
];

export const getModelBySlug = (slug: string) => models.find((model) => model.slug === slug);
