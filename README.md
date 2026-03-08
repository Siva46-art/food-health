# Healthy Food Store (React + Vite + Tailwind)

This is a minimal, modern e-commerce scaffold built with React, Vite and Tailwind CSS. It includes pages for products, product details, cart, authentication (mock), and contact page.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Project structure

- `src/components/` — reusable UI components
- `src/pages/` — application pages
- `src/context/` — Cart and Auth context
- `src/data/products.js` — sample product data

Notes
- Cart persists to `localStorage`.
- Auth is mocked in `AuthContext.jsx` and ready for Firebase integration in `services/authService.js`.

Extending
- Add product images to `src/assets` and replace placeholder URLs.
- Hook real backend or Firebase in `services/` and swap auth context implementations.
