<div align="center">

# KENAKATA

**A modern, responsive e-commerce web application built with Next.js and TypeScript.**

</div>

---

## Overview

KENAKATA is a full-featured storefront that delivers a complete shopping experience — product browsing, searching, filtering, sorting, cart management, authentication, registration, and checkout. It is built on Next.js, TypeScript, and Tailwind CSS, with form handling powered by React Hook Form and Zod, and product data served by the Platzi Fake Store API.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Install dependencies](#2-install-dependencies)
  - [3. Configure environment variables](#3-configure-environment-variables)
  - [4. Run the development server](#4-run-the-development-server)
- [Roadmap](#roadmap)

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | Next.js, React, TypeScript, Tailwind CSS |
| **Forms & Validation** | React Hook Form, Zod, `@hookform/resolvers` |
| **State Management** | React Context API, LocalStorage |
| **Data Source** | Platzi Fake Store API |

---

## Features

### Catalog & Discovery

- Product listing with infinite scrolling
- Product search
- Category filtering and sorting
- Product details page with image gallery
- Related product suggestions

### Cart & Checkout

- Add to cart with a slide-out cart drawer
- Quantity management and automatic total calculation
- Cart persistence via LocalStorage
- Protected checkout route
- Checkout form validation
- Mock order placement

### Authentication

- User registration and login
- Logout and authentication state management

### Interface & Experience

- Responsive layout across devices
- Responsive navigation with a sticky header and footer
- Loading states, error handling, and a custom not-found page

---

## Getting Started

Follow the steps below to run KENAKATA locally.

### Prerequisites

Make sure the following are installed:

- **Node.js** 18 or later
- **npm**
- **Git**

Verify your versions:

```bash
node -v
npm -v
```

### 1. Clone the repository

```bash
git clone https://github.com/Fail2/kenakata.git
cd kenakata
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and define the API base URL:

```bash
NEXT_PUBLIC_API_URL=<your-api-base-url>
```

### 4. Run the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## Roadmap

Planned enhancements for future releases:

**Commerce**

- Admin dashboard for managing products and users
- Product create, update, and delete functionality
- Order history and order tracking
- Wishlist functionality
- Product reviews and ratings
- Real payment gateway integration
- Advanced product filtering and pagination

**Accounts & Security**

- User profile and account management
- Improved authentication and token management
- Email notifications for orders and account activity

**Quality & Performance**

- Automated testing with Vitest or Jest
- End-to-end testing
- Product image optimization
- Improved accessibility
- Dark mode support