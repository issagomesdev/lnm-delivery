export const categories = [
  { id: 1, name: 'Mercado', path: '/images/categories/01 Mercado.png' },
  { id: 2, name: 'Padaria', path: '/images/categories/02 Padaria.png' },
  { id: 3, name: 'Refeições', path: '/images/categories/03 Refeições.png' },
  { id: 4, name: 'Lanches', path: '/images/categories/04 Lanches.png' },
  { id: 5, name: 'Hot Dog', path: '/images/categories/05 Hot Dog.png' },
  { id: 6, name: 'Pizza', path: '/images/categories/06 Pizza.png' },
  { id: 7, name: 'Esfiha', path: '/images/categories/07 Esfiha.png' },
  { id: 8, name: 'Oriental', path: '/images/categories/08 Oriental.png' },
  { id: 9, name: 'Açaí e Sorvete', path: '/images/categories/09 Açaí e Sorvete.png' },
  { id: 10, name: 'Bebidas', path: '/images/categories/10 Bebidas.png' },
  { id: 11, name: 'Bolos e Doces', path: '/images/categories/11 Bolos e Doces.png' },
  { id: 12, name: 'Café', path: '/images/categories/12 Café.png' },
  { id: 13, name: 'Salgados', path: '/images/categories/13 Salgados.png' },
  { id: 14, name: 'Pastel', path: '/images/categories/14 Pastel.png' },
  { id: 15, name: 'Batata', path: '/images/categories/15 Batata.png' },
  { id: 16, name: 'Frango', path: '/images/categories/16 Frango.png' },
  { id: 17, name: 'Carnes', path: '/images/categories/17 Carnes.png' },
  { id: 18, name: 'Frutos do Mar', path: '/images/categories/18 Frutos do Mar.png' },
  { id: 19, name: 'Massas', path: '/images/categories/19 Massas.png' },
  { id: 20, name: 'Vegan e Veggie', path: '/images/categories/20 Vegan e Veggie.png' },
  { id: 21, name: 'Árabe', path: '/images/categories/21 Árabe.png' },
  { id: 22, name: 'Mexicana', path: '/images/categories/22 Mexicana.png' },
  { id: 23, name: 'Petiscaria', path: '/images/categories/23 Petiscaria.png' },
  { id: 24, name: 'Congelados', path: '/images/categories/24 Congelados.png' },
  { id: 25, name: 'Conveniência', path: '/images/categories/25 Conveniência.png' },
  { id: 26, name: 'Suplementos', path: '/images/categories/26 Suplementos.png' },
  { id: 27, name: 'Açougue', path: '/images/categories/27 Açougue.png' },
  { id: 28, name: 'Hortifruti', path: '/images/categories/28 Hortifruti.png' },
  { id: 29, name: 'Peixaria', path: '/images/categories/29 Peixaria.png' },
];

export const banners = [
  { id: 1, name: 'Mercado', path: '/images/banners/banner 01.png' },
  { id: 2, name: 'Padaria', path: '/images/banners/banner 02.png' },
  { id: 3, name: 'Refeições', path: '/images/banners/banner 03.png' },
  { id: 4, name: 'Lanches', path: '/images/banners/banner 04.png' },
];

export const shops = Array.from({ length: 30 }, (_, i) => {
  const openingTime = new Date();
  openingTime.setHours(9 + (i % 3) * 2, 0, 0);

  const closingTime = new Date();
  closingTime.setHours(20 + (i % 4), 0, 0);

  return {
    name: `Loja Exemplo ${i + 1}`,
    image: i % 5 === 0 ? `/images/stores/store${(i % 5) + 1}.png` : '',
    category: categories[i % categories.length].name,
    deliveryTime: 30 + (i % 5) * 10,
    deliveryFee: i % 3 === 0 ? 0 : 5 + (i % 4),
    openingTime,
    closingTime,
    rating: 3 + (i % 3) + Math.random(),
    offer: i % 4 === 0 ? 'frete grátis' : i % 5 === 0 ? 'Combo espetos + porção + refrigerante' : '',
  };
});

