export type Product = {
  id: string;
  name: string;
  description: string;
  priceText: string;
  folder: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: 'giga-chad',
    name: 'Giga Chad',
    description: 'Can you hear the silence? Can you see the dark? Can you fix the broken?',
    priceText: 'R$999.999,99!',
    folder: '/assets/imgs/Gigas/',
    images: ['G1.png', 'G2.png', 'G3.png'],
  },
  {
    id: 'sr-cinema',
    name: 'Sr. Cinema',
    description: 'Absolute Cinema.',
    priceText: '1 Oscar',
    folder: '/assets/imgs/Martin/',
    images: ['M1.png', 'M2.png', 'M3.png'],
  },
  {
    id: 'gold-pack',
    name: '(G)old pack',
    description: 'Velinhos que tem lugar nos nossos corações',
    priceText: 'press F',
    folder: '/assets/imgs/(G)old pack/',
    images: ['G1.png', 'G2.png', 'G3.png'],
  },
  {
    id: 'celebrity-pack',
    name: 'Celebrity Pack',
    description: 'Hollywood baby',
    priceText: '1 mundial p palmeiras',
    folder: '/assets/imgs/Celebrity Pack/',
    images: ['C1.png', 'C2.png', 'C3.png'],
  },
  {
    id: 'sam-pack',
    name: 'The SAM pack',
    description: 'COPIA NÃO COMÉDIA',
    priceText: 'R$ 1,00',
    folder: '/assets/imgs/SAM/',
    images: ['S1.png', 'S2.png', 'S3.png', 'S4.png'],
  },
  {
      id: 'sus-pack',
      name: 'The sus pack',
      description: 'Cê anda procurando o que nessa internet ai hein??',
      priceText: '120 118 105 100 101 111 105 115 46 99 111 109 10',
      folder: '/assets/imgs/Duvidosos/',
      images: ['D1.png', 'D2.png', 'D3.png', 'D4.png'],
  },
];