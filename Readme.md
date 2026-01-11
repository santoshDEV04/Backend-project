# 🎬 StreamHub Backend – YouTube Clone API

A scalable backend system for a YouTube-like video streaming platform built with Node.js, Express, and MongoDB.

This project handles secure authentication, user channel profiles, watch history tracking, file uploads, and follows a clean MVC architecture.

---

## 🚀 Features

- 🔐 JWT Authentication with Refresh Tokens
- 🔄 Access Token Rotation System
- 🔑 Secure Password Change Flow
- 👤 User Channel Profile Retrieval
- 📺 Watch History Tracking
- 🛡 Protected Routes with Middlewares
- ☁ File Upload using Multer + Cloudinary
- 📦 MongoDB Atlas Integration
- 🧱 MVC Architecture for Scalability

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer + Cloudinary
- RESTful APIs

---

## 📁 Folder Structure

```
├── 📁 public
├── 📁 src
│   ├── 📁 config
│   │   └── 📄 env.js
│   ├── 📁 controllers
│   │   └── 📄 user.controller.js
│   ├── 📁 db
│   │   └── 📄 index.js
│   ├── 📁 middlewares
│   │   ├── 📄 auth.middleware.js
│   │   └── 📄 multer.middleware.js
│   ├── 📁 models
│   │   ├── 📄 subscription.model.js
│   │   ├── 📄 user.model.js
│   │   └── 📄 video.model.js
│   ├── 📁 routes
│   │   └── 📄 user.routes.js
│   ├── 📁 utils
│   │   ├── 📄 ApiError.js
│   │   ├── 📄 ApiResponse.js
│   │   ├── 📄 asyncHandler.js
│   │   └── 📄 cloudinary.js
│   ├── 📄 app.js
│   ├── 📄 constants.js
│   └── 📄 index.js
├── ⚙️ .gitignore
├── ⚙️ .prettierignore
├── ⚙️ .prettierrc
├── 📝 Readme.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```


---

## 🔑 Core API Endpoints

| Method | Endpoint | Description |
|-------|---------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | User login |
| POST | /api/auth/refresh-token | Generate new access token |
| GET | /api/user/current | Get current logged-in user |
| PUT | /api/user/change-password | Change account password |
| GET | /api/user/watch-history | Retrieve user watch history |

---

## ⚙ Setup Locally

```bash
git clone https://github.com/santoshDEV04/Backend-project
cd Backend-project
npm install
npm run dev
