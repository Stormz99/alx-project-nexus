# Quick Cart Backend

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abiodun%20Ijiola-blue)](https://www.linkedin.com/in/abiodun-ijiola/)

This repository contains the **backend** for the Quick Cart e-commerce application. The backend is built to provide a robust API for user authentication, product management, and order processing. It is designed for scalability, security, and seamless integration with the frontend.

## Table of Contents
- [Project Overview](#project-overview)
- [Implemented Features](#implemented-features)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Overview
The backend serves as the core engine of Quick Cart. It handles:
- User registration and authentication
- CRUD operations for products
- Order management
- Integration with frontend via REST APIs

It is designed to work with **Next.js frontend** for a full-stack e-commerce experience.

## Implemented Features
- **User Authentication**: Sign-up, Sign-in, JWT-based secure sessions.
- **Product Management**: Add, update, delete, and fetch products.
- **Order Management**: Place orders, track order status.
- **API Documentation**: Swagger integration for easy testing and documentation.
- **Health Checks**: `/health` endpoint to monitor server status.
- **Secure Configuration**: Environment variables, password hashing, and input validation.

## API Endpoints

### Local Development
- Base URL: `http://localhost:3000`
- Sign-up: `http://localhost:3000/auth/sign-up`
- Sign-in: `http://localhost:3000/auth/sign-in`

### Render Deployment
- Base URL: `https://gocart-backend-oakq.onrender.com/`
- Health Check: `https://gocart-backend-oakq.onrender.com/health`
- Swagger Documentation: `https://gocart-backend-oakq.onrender.com/api-docs`

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/Stormz99/alx-project-nexus>
cd quick-cart-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with the following keys:
```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Run the server:
```bash
npm run dev
```

## Usage
Once running, use Postman or any API client to test endpoints. You can also connect your Next.js frontend to this backend.

## Project Structure
```
quick-cart-backend/
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── utils
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

## Technologies Used
- Node.js & Express
- MongoDB / PostgreSQL (depending on your implementation)
- JWT Authentication
- Swagger for API Documentation
- Render for Deployment

## License

```
MIT License

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
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OU