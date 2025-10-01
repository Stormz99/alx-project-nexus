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

## License

This project is licensed under the **MIT License**. By using this project, you agree to the following terms:

```
MIT License

Copyright (c) 2025 Abiodun Ijiola

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Author

[Abiodun Ijiola](https://www.linkedin.com/in/abiodun-ijiola/) – Cloud Engineer & Developer

