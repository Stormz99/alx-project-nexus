# Quick Cart

Quick Cart is a modern e-commerce web application built with **Next.js** and **TypeScript**, featuring modular components, reusable hooks, and seamless integration with a backend API. It provides authentication, product browsing, and shopping cart functionality with a responsive UI.

---

## Table of Contents

- [Project Structure](#project-structure)  
- [Setup & Installation](#setup--installation)  
- [Available Scripts](#available-scripts)  
- [API Endpoints](#api-endpoints)  
- [Technologies](#technologies)  
- [License](#license)  
- [Author](#author)  

---

## Project Structure

```
quick-cart/
├── README.md
├── app/
│   ├── (auth)/
│   ├── (main)/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── SearchBar.tsx
│   └── ShoppingCartIcon.tsx
├── hooks/
│   ├── useCart.ts
│   ├── useFilters.ts
│   └── usePagination.ts
├── lib/
│   └── utils.ts
├── constants/
│   └── page.tsx
├── public/
│   ├── fonts/
│   └── images/
├── next.config.ts
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

---

## Setup & Installation

1. **Clone the repository**:

```bash
git clone <https://github.com/Stormz99/alx-project-nexus>
cd quick-cart
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

- `npm run dev` – Start the development server  
- `npm run build` – Build the project for production  
- `npm start` – Start the production server  
- `npm run lint` – Run linter checks  

---

## API Endpoints

**Local Development:**

- Base: `http://localhost:3000`  
- Sign Up: `http://localhost:3000/auth/sign-up`  
- Sign In: `http://localhost:3000/auth/sign-in`  

**Deployed Backend:**

- Render Base: `https://gocart-backend-oakq.onrender.com/`  
- Render Health Check: `https://gocart-backend-oakq.onrender.com/health`  
- Swagger Docs: `https://gocart-backend-oakq.onrender.com/api-docs`  

---

## Technologies

- Next.js (App Router, TypeScript)  
- React  
- Tailwind CSS  
- Node.js / Express (Backend API)  
- RESTful API  

---

## Author

[Abiodun Ijiola](https://www.linkedin.com/in/abiodun-ijiola/) – Cloud Engineer & Developer

