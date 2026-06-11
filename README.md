# MRM Roofing & Steel Website

A Next.js-based e-commerce website for roofing materials, steel products, and accessories in Kenya.

## Features

- **Product Catalog**: Browse roofing products, steel products, and accessories
- **Dynamic Pricing**: Select gauge (28/30), color, meters (1-6m), and quantity
- **Shopping Cart**: Real-time cart updates with localStorage persistence
- **WhatsApp Integration**: Orders sent via WhatsApp to +254750918945
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Smooth animations using Framer Motion
- **Category Filtering**: Filter products by Roofing, Steel, or Accessories

## Technologies Used

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **State Management**: React Context API

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── cart/              # Shopping cart page
│   ├── products/          # Product catalog page
│   ├── layout.tsx         # Root layout with CartProvider
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── ProductCard.tsx   # Product card with selection
│   ├── Footer.tsx         # Footer component
│   └── FloatingButtons.tsx # WhatsApp and cart buttons
├── context/               # React Context
│   └── CartContext.tsx    # Cart state management
├── data/                  # Data files
│   └── products.ts        # Product data
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── public/images/         # Image assets
```

## Adding Product Images

Place product images in the `public/images/` directory with the following filenames:

- `hero-bg.jpg` - Hero background
- `box-profile.jpg` - Box Profile Mabati
- `corrugated.jpg` - Corrugated Mabati
- `versatile.jpg` - Versatile Mabati
- `romantile.jpg` - Romantile
- `euro-tile.jpg` - Euro Tile
- `zee-tile.jpg` - Zee Tile Mabati
- `dumuzaz.jpg` - Dumuzaz Mabati
- `plain-sheet.jpg` - Plain Sheet
- `flat-ridges.jpg` - Flat Ridges
- `glazed-ridges.jpg` - Glazed Ridges
- `valley-trays.jpg` - Valley Trays
- `placeholder.jpg` - Fallback image

See `public/images/README.md` for detailed specifications.

## Customization

### Update Products

Edit `data/products.ts` to add, remove, or modify products.

### Change WhatsApp Number

Update the WhatsApp number in:
- `components/Hero.tsx` (line 48)
- `components/FloatingButtons.tsx` (line 13)
- `app/cart/page.tsx` (line 52)

### Modify Pricing

Update pricing in `data/products.ts` for each product's gauge28 and gauge30 values.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
npm run build
```

Then follow Vercel's deployment instructions.

## Contact

- Phone: 0750918945
- WhatsApp: 254750918945
