# 🛋️ Furniture Store

A full-stack web application for furniture enthusiasts to browse, create, and manage furniture listings. Built with modern JavaScript technologies following MVC architecture on the backend and SPA architecture on the frontend.

## 📋 Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Features](#features)
- [Data Models](#data-models)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication & Authorization](#authentication--authorization)
- [Error Handling](#error-handling)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Furniture Store is a comprehensive full-stack workshop project demonstrating client-server architecture with separate frontend and backend applications. Users can browse furniture items, create new listings, manage their publications, and interact with content through a secure authentication system. The project features a RESTful API backend and a single-page application (SPA) frontend.

## 💻 Technologies Used

### Backend Core
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web framework for building REST APIs
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose 8.18.3** - ODM for MongoDB schema validation
- **CORS** - Cross-origin resource sharing middleware

### Backend Security
- **bcrypt 6.0.0** - Password hashing library
- **jsonwebtoken 9.0.2** - JWT implementation for stateless authentication
- **dotenv** - Environment variables management

### Frontend Core
- **lit-html 1.3.0** - Lightweight templating library for rendering
- **page 1.11.6** - Client-side routing library
- **Vite 6.4.1** - Build tool and development server

### Development Tools
- **Vite** - Fast build tool with hot module replacement

## 🏗 Architecture

The project follows a **client-server architecture** with:

### Backend: MVC Pattern
- **Model Layer** - Mongoose schemas for database interaction
- **Controller Layer** - Request handlers and business logic
- **Service Layer** - Core business operations
- **Middleware Layer** - Authentication, error handling, CORS

### Frontend: SPA Pattern
- **Router** - Client-side navigation with page.js
- **Views** - Lit-html templates for each route
- **API Service** - Centralized data fetching
- **State Management** - Session storage for auth state

````bash
┌─────────────────────────────────────────────────────────────────────────────┐
│ FRONTEND (SPA) │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ Router │───▶│ Views │───▶│ Lit-html │ │
│ │ (page.js) │ │ (Templates) │ │ Renderer │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │ │ │ │
│ └──────────────────┼──────────────────┘ │
│ │ │
│ ┌───────▼───────┐ │
│ │ API Layer │ │
│ │ (data.js) │ │
│ └───────┬───────┘ │
└────────────────────────────┼────────────────────────────────────────────────┘
│ HTTP Requests (REST API)
▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ BACKEND (Express) │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ MIDDLEWARE STACK │ │
│ │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │ │
│ │ │ CORS │───▶│ JSON │───▶│ Auth │───▶│ Error │ │ │
│ │ │ │ │ Parser │ │ Middle │ │ Handler │ │ │
│ │ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │ │
│ ▼ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ROUTING LAYER │ │
│ │ ┌──────────────────────┐ ┌──────────────────────┐ │ │
│ │ │ /data/catalog │ │ /users │ │ │
│ │ │ Furniture Routes │ │ User Routes │ │ │
│ │ └──────────┬───────────┘ └──────────┬───────────┘ │ │
│ └─────────────┼────────────────────────────┼──────────────────────────┘ │
│ │ │ │
│ ▼ ▼ │
│ ┌─────────────────────────┐ ┌─────────────────────────┐ │
│ │ Furniture Controller │ │ User Controller │ │
│ │ • GET / │ │ • POST /register │ │
│ │ • GET /:id │ │ • POST /login │ │
│ │ • POST / │ │ • GET /logout │ │
│ │ • PUT /:id │ └──────────┬──────────────┘ │
│ │ • DELETE /:id │ │ │
│ └──────────┬──────────────┘ │ │
│ │ │ │
│ ▼ ▼ │
│ ┌─────────────────────────┐ ┌─────────────────────────┐ │
│ │ Furniture Service │ │ User Service │ │
│ │ • CRUD Operations │ │ • Register Logic │ │
│ │ • Filter Queries │ │ • Login Logic │ │
│ └──────────┬──────────────┘ │ • Token Generation │ │
│ │ └──────────┬──────────────┘ │
│ ▼ ▼ │
│ ┌─────────────────────────┐ ┌─────────────────────────┐ │
│ │ Furniture Model │ │ User Model │ │
│ │ • Make, Model, Year │ │ • Email │ │
│ │ • Price, Material │ │ • Password (hashed) │ │
│ │ • Owner Reference │ └──────────┬──────────────┘ │
│ └──────────┬──────────────┘ │ │
└─────────────┼──────────────────────────────┼───────────────────────────────┘
│ │
└──────────────┬───────────────┘
▼
┌─────────────────────────────────┐
│ MONGODB │
│ ┌─────────────┐ ┌───────────┐ │
│ │ furniture │ │ users │ │
│ │ collection │ │collection │ │
│ └─────────────┘ └───────────┘ │
└─────────────────────────────────┘
````


## 📁 Project Structure

```bash
📁 furniture-store/
├── 📁 server/                        # Backend application
│   ├── 📁 src/
│   │   ├── 📁 config/                # Configuration files
│   │   ├── 📁 controllers/           # Request handlers
│   │   │   ├── furnitureController.js
│   │   │   └── userController.js
│   │   ├── 📁 models/                # Database schemas
│   │   │   ├── Furniture.js
│   │   │   └── User.js
│   │   ├── 📁 services/              # Business logic
│   │   │   ├── furnitureService.js
│   │   │   └── userService.js
│   │   ├── 📁 middlewares/           # Express middleware
│   │   │   ├── authMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── 📁 utils/                 # Utility functions
│   │   │   ├── errorUtils.js
│   │   │   └── tokenUtils.js
│   │   ├── routes.js                 # Route definitions
│   │   └── index.js                  # Server entry point
│   ├── .env                          # Environment variables
│   └── package.json                  # Backend dependencies
│
├── 📁 client/                        # Frontend application
│   ├── 📁 src/
│   │   ├── 📁 api/                   # API communication layer
│   │   │   ├── api.js                # HTTP request wrapper
│   │   │   └── data.js               # Data endpoints
│   │   ├── 📁 views/                 # Page components
│   │   │   ├── 📁 common/
│   │   │   │   └── item.js           # Reusable item template
│   │   │   ├── dashboard.js          # Home page
│   │   │   ├── details.js            # Item details
│   │   │   ├── create.js             # Create furniture form
│   │   │   ├── edit.js               # Edit furniture form
│   │   │   ├── myFurniture.js        # User's listings
│   │   │   ├── login.js              # Login form
│   │   │   └── register.js           # Registration form
│   │   ├── app.js                    # SPA entry point
│   │   └── style.css                 # Global styles
│   ├── index.html                    # Main HTML file
│   └── package.json                  # Frontend dependencies
│
└── README.md                         # Project documentation
````

📋 USER MANAGEMENT
├── 🔐 Registration
│   └── Create new account with email and password
├── 🔑 Login
│   └── Secure authentication with JWT tokens
├── 🚪 Logout
│   └── Session termination
└── 🛡️ Protected Routes
    └── Authentication required for certain actions

🪑 FURNITURE MANAGEMENT
├── 📚 Browse Furniture
│   └── View all furniture items on dashboard
├── 🔍 View Details
│   └── See detailed information about specific items
├── ✨ Create Listing
│   └── Add new furniture with validation
├── ✏️ Edit Listing
│   └── Update existing furniture information
├── 🗑️ Delete Listing
│   └── Remove furniture (owner only)
└── 📄 My Publications
    └── View user's own listings

🔎 FILTERING & QUERIES
├── 🏷️ Owner-based filtering
│   └── Using MongoDB where clauses
└── 🔗 URL-encoded query parameter support

⚡ SPA FEATURES
├── 🧭 Client-side routing
│   └── with page.js
├── 🎨 Dynamic content rendering
│   └── with lit-html
├── 💾 Persistent authentication state
└── 📱 Responsive navigation
    └── based on auth status

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 DATA MODELS

┌─────────────────────────────────────────────────────────────┐
│  👤 USER MODEL (Backend)                                    │
├─────────────────────────────────────────────────────────────┤
│  {                                                          │
│    email: String (required),                               │
│    password: String (required, hashed with bcrypt)         │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  🪑 FURNITURE MODEL (Backend)                               │
├─────────────────────────────────────────────────────────────┤
│  {                                                          │
│    make: String (required, minLength: 4),                  │
│    model: String (required, minLength: 4),                 │
│    year: Number (required, min: 1950, max: 2050),          │
│    description: String (required, minLength: 10),          │
│    price: Number (required, min: 0),                       │
│    img: String (required, URL),                            │
│    material: String (optional),                            │
│    _ownerId: ObjectId (reference to User)                  │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 INSTALLATION

📋 PREREQUISITES
├── Node.js (v18 or higher)
├── MongoDB (local or cloud instance)
└── npm or yarn package manager

📦 SETUP STEPS

1️⃣ Clone the repository
   └── git clone https://github.com/your-username/furniture-store.git
   └── cd furniture-store

2️⃣ Install backend dependencies
   └── cd server
   └── npm install

3️⃣ Install frontend dependencies
   └── cd ../client
   └── npm install

4️⃣ Configure environment variables
   └── Create a .env file in the server directory:
   
   ┌─────────────────────────────────┐
   │  JWT_SECRET=your_super_secret   │
   │  PORT=3030                      │
   │  MONGODB_URI=mongodb://localhost│
   │  DB_NAME=furniture-project      │
   └─────────────────────────────────┘

5️⃣ Start MongoDB
   └── mongod

6️⃣ Start the backend server
   └── cd server
   └── npm run dev

7️⃣ Start the frontend development server
   └── cd client
   └── npm run dev

8️⃣ Access the application
   ├── Frontend: http://localhost:5173
   └── Backend API: http://localhost:3030

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 ENVIRONMENT VARIABLES

Backend (.env)

┌─────────────┬──────────────────────────────┬──────────┬─────────────────────┐
│ Variable    │ Description                  │ Required │ Default             │
├─────────────┼──────────────────────────────┼──────────┼─────────────────────┤
│ JWT_SECRET  │ Secret key for JWT signing   │ Yes      │ None                │
├─────────────┼──────────────────────────────┼──────────┼─────────────────────┤
│ PORT        │ Server port number           │ No       │ 3030                │
├─────────────┼──────────────────────────────┼──────────┼─────────────────────┤
│ MONGODB_URI │ MongoDB connection string    │ No       │ mongodb://localhost │
├─────────────┼──────────────────────────────┼──────────┼─────────────────────┤
│ DB_NAME     │ Database name                │ No       │ furniture-project   │
└─────────────┴──────────────────────────────┴──────────┴─────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎮 USAGE

👤 USER WORKFLOWS

┌─────────────────────────────────────────────────────────────┐
│  1️⃣ REGISTER & LOGIN                                       │
├─────────────────────────────────────────────────────────────┤
│  • Navigate to /register to create an account              │
│  • Login at /login to access protected features            │
│  • Navigation updates automatically based on auth state    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  2️⃣ BROWSE FURNITURE                                       │
├─────────────────────────────────────────────────────────────┤
│  • Visit dashboard / to see all furniture items            │
│  • Click "Details" on any card to view full information    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  3️⃣ CREATE LISTING (Authenticated users only)              │
├─────────────────────────────────────────────────────────────┤
│  • Click "Create Furniture" in navigation                  │
│  • Fill out the form with make, model, year, description   │
│  • Add price and image URL (Material field is optional)    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  4️⃣ MANAGE LISTINGS (Owner only)                           │
├─────────────────────────────────────────────────────────────┤
│  • View "My Publications" to see your listings             │
│  • Edit or delete buttons appear on your own items         │
│  • Changes reflect immediately                             │
└─────────────────────────────────────────────────────────────┘

🔧 API TESTING

The backend REST API can be tested with tools like Postman or curl:

┌─────────────────────────────────────────────────────────────┐
│  # Get all furniture                                        │
│  curl http://localhost:3030/data/catalog                   │
│                                                             │
│  # Get user's furniture                                     │
│  curl "http://localhost:3030/data/catalog?where=_ownerId%  │
│       3D%22USER_ID%22"                                     │
│                                                             │
│  # Login                                                    │
│  curl -X POST http://localhost:3030/users/login \          │
│    -H "Content-Type: application/json" \                   │
│    -d '{"email":"user@example.com","password":"123456"}'   │
└─────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛣 API ENDPOINTS

🔐 AUTHENTICATION ROUTES

┌──────────┬─────────────────┬─────────────────────┐
│ Method   │ Endpoint        │ Description         │
├──────────┼─────────────────┼─────────────────────┤
│ POST     │ /users/register │ Register new user   │
├──────────┼─────────────────┼─────────────────────┤
│ POST     │ /users/login    │ Login user          │
├──────────┼─────────────────┼─────────────────────┤
│ GET      │ /users/logout   │ Logout user         │
└──────────┴─────────────────┴─────────────────────┘

🪑 FURNITURE ROUTES

┌──────────┬──────────────────────────────────────┬─────────────────────┬───────────────┐
│ Method   │ Endpoint                             │ Description         │ Auth Required │
├──────────┼──────────────────────────────────────┼─────────────────────┼───────────────┤
│ GET      │ /data/catalog                        │ Get all furniture   │ No            │
├──────────┼──────────────────────────────────────┼─────────────────────┼───────────────┤
│ GET      │ /data/catalog?where=_ownerId%3D%22id│ Get user's furniture │ No            │
├──────────┼──────────────────────────────────────┼─────────────────────┼───────────────┤
│ GET      │ /data/catalog/:furnitureId           │ Get single furniture │ No            │
├──────────┼──────────────────────────────────────┼─────────────────────┼───────────────┤
│ POST     │ /data/catalog                        │ Create furniture    │ Yes           │
├──────────┼──────────────────────────────────────┼─────────────────────┼───────────────┤
│ PUT      │ /data/catalog/:furnitureId           │ Update furniture    │ Yes (Owner)   │
├──────────┼──────────────────────────────────────┼─────────────────────┼───────────────┤
│ DELETE   │ /data/catalog/:furnitureId           │ Delete furniture    │ Yes (Owner)   │
└──────────┴──────────────────────────────────────┴─────────────────────┴───────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔒 AUTHENTICATION & AUTHORIZATION

🔑 JWT TOKEN FLOW

┌─────────────────────────────────────────────────────────────┐
│  1. User registers/logs in                                  │
│     └── Server validates credentials                       │
│                                                             │
│  2. Server generates JWT                                    │
│     └── Contains user ID and email                         │
│     └── Expires in 2 hours                                 │
│                                                             │
│  3. Token stored in sessionStorage on frontend             │
│                                                             │
│  4. Token sent in X-Authorization header                   │
│     └── For authenticated requests                         │
│                                                             │
│  5. Auth middleware verifies token                         │
│     └── On protected routes                                │
└─────────────────────────────────────────────────────────────┘

💾 FRONTEND AUTH STATE

├── User data stored in sessionStorage
├── Navigation automatically updates based on userId presence
└── Logout clears sessionStorage and redirects to home

✅ OWNER VERIFICATION

├── Edit and delete operations verify _ownerId matches authenticated user
└── Frontend conditionally renders edit/delete buttons based on ownership

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ ERROR HANDLING

🔧 BACKEND ERROR HANDLING

├── Validation Errors
│   └── Mongoose validation with custom messages
├── Authentication Errors
│   └── 401 status with descriptive messages
└── Centralized Error Handler
    └── Catches and formats all errors

🎨 FRONTEND ERROR HANDLING

├── API errors caught and displayed via alert
├── Form validation before submission
├── Empty field detection
└── Password confirmation matching

🔄 ERROR FLOW

┌────────────┐    ┌────────────┐    ┌────────────┐    ┌────────────┐
│   Error    │───▶│getError    │───▶│   HTTP     │───▶│  Frontend  │
│   Occurs   │    │Message()   │    │ Response   │    │   Alert    │
└────────────┘    └────────────┘    └────────────┘    └────────────┘
                                                           │
                                                           ▼
                                                    ┌────────────┐
                                                    │   User     │
                                                    │Notification│
                                                    └────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗄 DATABASE SCHEMA

📚 MONGODB COLLECTIONS

┌─────────────────────────────────────────────────────────────┐
│  👤 USERS COLLECTION                                        │
├─────────────────────────────────────────────────────────────┤
│  • Stores user credentials with bcrypt-hashed passwords    │
│  • Automatic password hashing on save                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  🪑 FURNITURES COLLECTION                                   │
├─────────────────────────────────────────────────────────────┤
│  • Main furniture collection                                │
│  • _ownerId reference to users collection                  │
│  • Full validation on all required fields                  │
└─────────────────────────────────────────────────────────────┘

🔗 RELATIONSHIPS

┌─────────────────────────────────────────────────────────────┐
│  User → Furniture                                           │
│  └── One-to-Many (User can own multiple furniture items)   │
│                                                             │
│  Furniture → User                                           │
│  └── Many-to-One (Furniture belongs to a single user)      │
└─────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 CLIENT-SERVER COMMUNICATION

📤 REQUEST FLOW EXAMPLE (Create Furniture)

┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  create.js                                                          │   │
│  │  onSubmit() → Collects form data → createRecord(data)              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  data.js                                                            │   │
│  │  createRecord() → api.post('/data/catalog', data)                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  api.js                                                             │   │
│  │  post() → fetch(url, {                                              │   │
│  │    method: 'POST',                                                  │   │
│  │    headers: { 'X-Authorization': token,                            │   │
│  │               'Content-Type': 'application/json' },                 │   │
│  │    body: JSON.stringify(data)                                       │   │
│  │  })                                                                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────┬───────────────────────────────────────┘
                                      │ HTTP POST Request
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              SERVER                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  index.js                                                           │   │
│  │  Express receives request                                           │   │
│  │  → CORS Middleware → JSON Parser → Auth Middleware (verifies JWT)  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  routes.js                                                          │   │
│  │  Matches /data/catalog → furnitureController                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  furnitureController.js                                             │   │
│  │  POST / → Extracts data and userId                                 │   │
│  │  → furnitureService.create(data, ownerId)                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  furnitureService.js                                                │   │
│  │  create() → Adds _ownerId → Furniture.create()                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Furniture.js (Model)                                               │   │
│  │  Validates data → Saves to MongoDB                                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Response                                                           │   │
│  │  res.status(201).json(furniture)                                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────┬───────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Browser Redirect to Dashboard                                              │
└─────────────────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 FRONTEND ROUTING STRUCTURE

┌─────────────────────────────────────────────────────────────┐
│  // SPA Routes (page.js)                                   │
├─────────────────────────────────────────────────────────────┤
│  '/'              → dashboardPage (All furniture)          │
│  '/my-furniture'  → myPage (User's listings)               │
│  '/details/:id'   → detailsPage (Single item view)         │
│  '/create'        → createPage (Create form)               │
│  '/edit/:id'      → editPage (Edit form)                   │
│  '/register'      → registerPage (Registration form)       │
│  '/login'         → loginPage (Login form)                 │
└─────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 TESTING THE APPLICATION

🔧 BACKEND TESTING

┌─────────────────────────────────────────────────────────────┐
│  # Test API with curl                                       │
│  curl http://localhost:3030/data/catalog                   │
│                                                             │
│  # Test authenticated endpoint                              │
│  curl -H "X-Authorization: YOUR_TOKEN" \                   │
│       http://localhost:3030/data/catalog                   │
└─────────────────────────────────────────────────────────────┘

🎨 FRONTEND TESTING

├── Run both servers simultaneously
├── Navigate through all routes
├── Test CRUD operations with different user accounts
└── Verify owner-only restrictions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤝 CONTRIBUTING

┌─────────────────────────────────────────────────────────────┐
│  1. Fork the repository                                     │
│  2. Create a feature branch                                 │
│     └── git checkout -b feature/AmazingFeature             │
│  3. Commit changes                                          │
│     └── git commit -m 'Add some AmazingFeature'            │
│  4. Push to branch                                          │
│     └── git push origin feature/AmazingFeature             │
│  5. Open a Pull Request                                     │
└─────────────────────────────────────────────────────────────┘

📋 DEVELOPMENT GUIDELINES

├── Follow MVC pattern on backend
├── Use lit-html for all frontend templates
├── Maintain RESTful API conventions
├── Handle errors gracefully on both ends
└── Validate all user inputs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 LICENSE

This project is licensed under the ISC License.

🙏 ACKNOWLEDGMENTS

├── SoftUni JavaScript Back-End course
├── Express.js team for the web framework
├── MongoDB team for the database solution
├── Lit-html team for the templating library
└── Page.js team for client-side routing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 CONTACT

Project Link: https://github.com/your-username/furniture-store

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Built with ❤️ as part of JavaScript Back-End Workshop
