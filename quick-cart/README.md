# Quick Cart Frontend

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abiodun%20Ijiola-blue?logo=linkedin)](https://www.linkedin.com/in/abiodun-ijiola/)

## Overview

Quick Cart is a modern e-commerce frontend built using Next.js and Tailwind CSS. This project showcases my ability to create a performant, responsive, and scalable frontend application that integrates seamlessly with backend APIs.

## Features

- **User Authentication**: Sign-up and sign-in functionality.
- **Product Browsing**: View and filter products efficiently.
- **Shopping Cart**: Add/remove items and view cart totals dynamically.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Reusable Components**: Buttons, Navbar, Hero section, SearchBar, ShoppingCartIcon.
- **Custom Hooks**: `useCart`, `useFilters`, `usePagination` for state management and functionality.

## Project Structure

```
quick-cart/
├── app/             # Next.js app routes and layout
├── components/      # Reusable UI components
├── constants/       # Constants and static data
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── public/          # Fonts, images, and assets
├── package.json     # Project dependencies
├── tsconfig.json    # TypeScript configuration
├── next.config.ts   # Next.js configuration
└── globals.css      # Global styles
```

## API Endpoints

These endpoints are used for frontend-backend communication:

- Local Backend:
  - `http://localhost:3000`
  - `http://localhost:3000/auth/sign-up`
  - `http://localhost:3000/auth/sign-in`

- Render Backend:
  - `https://gocart-backend-oakq.onrender.com/`
  - Health Check: `https://gocart-backend-oakq.onrender.com/health`
  - Swagger Docs: `https://gocart-backend-oakq.onrender.com/api-docs`

## Technologies Used

- **Frontend Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **TypeScript**: Strongly-typed components and hooks
- **State Management**: React hooks and context API
- **Version Control**: Git and GitHub

## Installation

```bash
# Clone the repository
git clone <https://github.com/Stormz99/alx-project-nexus>
cd quick-cart

# Install dependencies
npm install

# Run the development server
npm run dev
```

## Contributing

I welcome contributions from anyone interested in improving this project. Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

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
