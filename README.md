# Litoral na Mesa — Delivery platform for coastal cities

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000?style=for-the-badge&logo=cssmodules&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Status](https://img.shields.io/badge/status-in_development-yellow?style=for-the-badge)


![Preview do site](https://media.byissa.dev/lnm-delivery/preview.png)

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#structure">Structure</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#cities">Cities</a>
</p>

**Litoral na Mesa** is a food delivery platform focused on coastal cities in São Paulo state — Caraguatatuba, Ilhabela, São Sebastião and Ubatuba. It connects customers to local restaurants and stores, offering a complete ordering experience from browsing to checkout.

This codebase handles the **Frontend** experience, built with **Next.js 15 App Router** + **TypeScript** + **CSS Modules**, and distributed as a **Progressive Web App (PWA)** with adaptive layouts for mobile and desktop.

---

<h2 id="about"> 📌 About</h2>

The platform serves the four main cities of the northern coast of São Paulo, offering users a familiar delivery app experience through any browser — no installation required. The app adapts its layout based on the user's device, delivering a native-like mobile interface and a rich desktop interface side by side from the same codebase.

---

<h2 id="features"> ✨ Features</h2>

### Implemented

- Landing page with sections: hero, features, how it works, meals showcase, cities, footer
- Location selector to choose city before accessing the app
- Adaptive layout: dedicated mobile app shell and desktop web shell from the same codebase
- Shop listing with category filters, advanced filters, and promotional banners
- Shop profile with menu, delivery fees, reviews, and favorites
- Pizza builder with multi-flavor selection (up to 4 flavors with visual split preview)
- Shopping cart with item management and CartBar overlay
- Checkout flow with delivery method selection, payment method selection, and address input
- Order tracking page with status timeline
- My Orders page with order history and rating component
- My Addresses with address form management
- Coupons page
- Favorites page
- My Account page
- Side menu (mobile) and floating menu (desktop)
- Skeleton loading states for images and list items
- PWA support with manifest and service worker via next-pwa
- 29 food and product categories

### Planned

- User authentication and session management
- Real-time order status updates
- Backend API integration
- Push notifications

---

<h2 id="technologies"> 🛠 Technologies</h2>

- Next.js 15 (App Router, Turbopack)
- TypeScript
- CSS Modules
- Framer Motion v12
- next-pwa v5
- React Number Format
- date-fns v4
- Iconify/React
- clsx

---

<h2 id="structure"> 📁 Structure</h2>

```
src/
├── app/                         # Next.js App Router — pages and layouts
│   ├── shops/[shopId]/          # Shop profile and pizza builder
│   ├── meus-pedidos/            # Orders, cart, and tracking
│   ├── meus-enderecos/          # Address management
│   ├── minha-conta/             # User account
│   ├── favoritos/               # Favorites
│   ├── cupons/                  # Coupons
│   ├── politica-de-privacidade/ # Privacy policy
│   └── termos-de-uso/           # Terms of use
├── components/
│   ├── Home/                    # Landing page sections and footer
│   ├── Into/                    # Authenticated app components
│   │   ├── Shops/               # Shop listing, filters, banners, categories
│   │   │   ├── Checkout/        # Checkout flow
│   │   │   ├── Profile/         # Shop profile, reviews, pizza builder
│   │   │   └── ShoppingCart/    # Cart bar, item details, delivery/payment methods
│   │   ├── MyAddresses/         # Address form component
│   │   ├── MyOrders/            # Order details and rating
│   │   └── Skeleton/            # Skeleton loading components
│   ├── Mobile/                  # Mobile app shell and side menu
│   ├── Web/                     # Desktop web shell, header, floating menu
│   └── shared/                  # Shared primitives (Modal, SearchSelector)
├── styles/                      # Global CSS variables and base styles
├── contexts/                    # React contexts (Location, ShopPage, ShoppingCart)
├── controllers/                 # Business logic controllers (Addresses)
├── features/                    # Feature modules (auth types)
└── hooks/                       # Custom hooks (back layers, custom back action)
```

---

<h2 id="getting-started"> 🚀 Getting Started</h2>

### Requirements

- Node.js 18+
- npm or yarn

### Running locally

```bash
# Clone the repository
git clone https://github.com/issagomesdev/lnm-delivery.git
cd lnm-delivery

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run test:pwa   # Build and serve to test PWA behavior
```

---

<h2 id="cities"> 🏖 Cities</h2>

The platform currently covers the following coastal cities:

| City | State |
|---|---|
| Caraguatatuba | São Paulo |
| Ilhabela | São Paulo |
| São Sebastião | São Paulo |
| Ubatuba | São Paulo |
