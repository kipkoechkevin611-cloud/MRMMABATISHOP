import { Product } from '@/types';

export const products: Product[] = [
  // Roofing Products
  {
    id: 'box-profile',
    name: 'Box Profile Iron Sheet',
    category: 'roofing',
    image: '/images/Box_profile.jpeg',
    pricing: {
      gauge28: 485,
      gauge30: 420,
    },
    pricingType: 'perMeter',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Durable box profile roofing sheets suitable for residential and commercial buildings.',
  },
  {
    id: 'corrugated',
    name: 'Corrugated Iron Sheet',
    category: 'roofing',
    image: '/images/Corrugated.jpeg',
    pricing: {
      gauge28: 420,
      gauge30: 360,
    },
    pricingType: 'perMeter',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Classic corrugated roofing sheets with excellent weather resistance.',
  },
  {
    id: 'versatile',
    name: 'Versatile Iron Sheet',
    category: 'roofing',
    image: '/images/Brick tile AND versatile mabat.jpeg',
    pricing: {
      gauge28: 650,
      gauge30: 550,
    },
    pricingType: 'perMeter',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Versatile roofing solution with modern design and superior durability.',
  },
  {
    id: 'romantile',
    name: 'Roman Tiles Iron Sheet',
    category: 'roofing',
    image: '/images/Roman tile AND elagantile.jpeg',
    pricing: {
      gauge28: 670,
      gauge30: 580,
    },
    pricingType: 'perMeter',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Elegant tile-profile roofing with a romantic aesthetic appeal.',
  },
  {
    id: 'euro-tile',
    name: 'Euro Tile',
    category: 'roofing',
    image: '/images/Euro tile elagantile mabati.jpeg',
    pricing: {
      gauge28: 630,
      gauge30: 550,
    },
    pricingType: 'perMeter',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'European-style tile roofing with exceptional strength and beauty.',
  },
  {
    id: 'zee-tile',
    name: 'Zee Tile Mabati',
    category: 'roofing',
    image: '/images/Zee tile  AND Curve tile mabati.jpeg',
    pricing: {
      gauge28: 600,
      gauge30: 530,
    },
    pricingType: 'perMeter',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Z-shaped tile profile for unique architectural designs.',
  },
  {
    id: 'dumuzaz',
    name: 'Ordinary Iron Sheet',
    category: 'roofing',
    image: '/images/dumuzas.jpeg',
    pricing: {
      gauge28: 320,
      gauge30: 280,
    },
    pricingType: 'perMeter',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Affordable and reliable roofing solution for budget-conscious projects.',
  },
  // Steel Products
  {
    id: 'plain-sheet',
    name: 'Plain Sheet',
    category: 'steel',
    image: '/images/Plainsheet.jpeg',
    pricing: {
      gauge28: 450,
      gauge30: 380,
    },
    pricingType: 'perPiece',
    colors: ['Galvanized', 'Painted'],
    description: 'High-quality plain steel sheets for various construction applications.',
  },
  // Accessories
  {
    id: 'flat-ridges',
    name: 'Flat Ridges',
    category: 'accessories',
    image: '/images/Flat_ridges.jpeg',
    pricing: {
      gauge28: 450,
      gauge30: 450,
    },
    pricingType: 'perPiece',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Flat ridge caps for sealing roof peaks and preventing water infiltration.',
  },
  {
    id: 'glazed-ridges',
    name: 'Glazed Ridges',
    category: 'accessories',
    image: '/images/Glazed_ridges.jpeg',
    pricing: {
      gauge28: 400,
      gauge30: 400,
    },
    pricingType: 'perPiece',
    colors: ['Red', 'Blue', 'Green', 'Brown', 'Grey', 'Black'],
    description: 'Premium glazed ridge caps with enhanced durability and aesthetics.',
  },
  {
    id: 'valley-trays',
    name: 'Valley Trays',
    category: 'accessories',
    image: '/images/Valley_trays.jpeg',
    pricing: {
      gauge28: 400,
      gauge30: 400,
    },
    pricingType: 'perPiece',
    colors: ['Galvanized', 'Painted'],
    description: 'Valley trays for effective water drainage in roof valleys.',
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
