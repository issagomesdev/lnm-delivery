import { dataCategories } from "./dataCategories";

export const categories = dataCategories;

export const orderOptions = [
  { id: 'alphabetical', label: 'Ordem alfabética' },
  { id: 'distance', label: 'Menor distância' },
  { id: 'deliveryFee', label: 'Menor taxa de entrega' },
  { id: 'deliveryTime', label: 'Menor tempo de entrega' },
  { id: 'rating', label: 'Melhor avaliado' },
];

export const paymentMethods = [
  'Alelo Refeição', 'AmericanExpress', 'Banricompras Crédito', 'Banricompras Débito',
  'Ben Visa Vale Refeição', 'Cabal Crédito', 'Cabal Débito', 'Dinheiro', 'DinnersClub',
  'Elo Crédito', 'Elo Débito', 'Good Card Crédito', 'Hipercard Crédito',
  'MasterCard Crédito', 'MasterCard Débito', 'Nugo Crédito', 'Pix - QR Code na máquina'
];

export const banners = [
  { id: 1, name: 'Mercado', path: '/images/banners/banner 01.png' },
  { id: 2, name: 'Padaria', path: '/images/banners/banner 02.png' },
  { id: 3, name: 'Refeições', path: '/images/banners/banner 03.png' },
  { id: 4, name: 'Lanches', path: '/images/banners/banner 04.png' },
];

export const shops = Array.from({ length: 50 }, (_, i) => {
  const openingTime = new Date();
  openingTime.setHours(10 + (i % 3) * 2, 0, 0);

  const closingTime = new Date();
  closingTime.setHours(18 + (i % 4), 0, 0);

  return {
    id: i,
    name: i % 2 === 0 ? `Loja Exemplo ${i + 1}` : `Loja Exemplo ${i + 1} Nome Grande`,
    image: "/images/default-store.png",
    cover: "/images/default-store-banner.jpg",
    category: { id: categories[i % categories.length].id, name: categories[i % categories.length].name },
    deliveryTime: 30 + (i % 5) * 10,
    deliveryFee: i % 3 === 0 ? 0 : 5 + (i % 4),
    openingTime,
    closingTime,
    fav: i % 2 === 0 ? true : false,
    rating: 3 + (i % 3) + Math.random(),
    offer: i % 4 === 0 ? 'frete grátis' : i % 5 === 0 ? 'FRETEGRATIS' : '',
    minimum_value_order: i % 4 === 0 ? 19.99 : i % 5 === 0 ? 30 : 0,
    coupon: i % 4 === 0 ? {
      name: '3% OFF',
      discount: '3%',
      rule: 'COMBOS HAMBÚRGUER + FRITAS + REFRI LATA',
      minimum_value: 0
    } : i % 5 === 0 ? {
      name: 'TIOCOX',
      discount: 'R$ 6.00',
      rule: '',
      minimum_value: 0
    } : i % 6 === 0 ? {
      name: 'FRETEGRATIS',
      discount: 'Frete grátis',
      rule: '',
      minimum_value: 30
    } : null,
    fees: [
      { name: "Calhetas", fees: "10.50 "},
      { name: "Camburi", fees: "11.00 "},
      { name: "Paúba", fees: "10.00 "},
    ]
  };
});

export const reviewData = [
  {
    name: 'Eduardo',
    rate: { product: 1, packaging: 5, delivery: 5, costBenefit: 4.5 },
    date: new Date('2025-05-24'),
    review: 'Teste',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Maria',
    rate: { product: 5, packaging: 4, delivery: 5, costBenefit: 5 },
    date: new Date('2025-02-26'),
  },
  {
    name: 'Felipe',
    rate: { product: 4, packaging: 4, delivery: 2, costBenefit: 5 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  },
  {
    name: 'Eduardo',
    rate: { product: 2, packaging: 2, delivery: 2, costBenefit: 1 },
    date: new Date('2025-02-24'),
    review: 'Bom',
  }
];

export const shopCategories = (id: number) => {
  if (id % 5 === 0) {
    return categories.filter(i => i.id % 5 === 0);
  } else if (id % 4 === 0) {
    return categories.filter(i => i.id % 4 === 0);
  } else if (id % 3 === 0) {
    return categories.filter(i => i.id % 3 === 0);
  } else {
    return categories.filter(i => i.id % 3 !== 0 && i.id % 4 !== 0 && i.id % 5 !== 0);
  }
};



