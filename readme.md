# 🚀 Creator Dashboard

A modern web app for content creators to manage profiles, earn engagement credits, and interact with aggregated content feeds. Built with React, Node.js, and MongoDB, with Docker support for seamless deployment.

## ✨ Core Features

### 🔐 Authentication
- JWT-based user registration/login
- Role-based access control (User/Admin)

### 💰 Smart Credit System

#### 🔄 Earn Credits by Engaging
| Interaction Type | Credits |
|------------------|---------|
| Like a post      | +2      |
| Save to library  | +3      |
| Report content   | +5      |
| Daily login      | +10     |
| Profile complete | +70     |

#### 📊 Credit Tracking
- Real-time balance widget

- 🕵️ Transaction Tracking:

  - View credit history

  - Detailed logs for every earned credit event

### 📰 Smart Feed Aggregator
- Fetches posts from multiple APIs:
  - ✅ Reddit
  - ✅ Twitter/X (optional)
  
- User interactions:
  - Save favorite posts
  - Share content
  - Report inappropriate items

### 📊 Dashboard Analytics
- **User View**:
  - Credit balance history
  - Saved content
  - Activity log
- **Admin View**:
  - User engagement metrics
  - Content moderation tools

## 🛠️ Tech Stack

| Category       | Technologies                          |
|---------------|---------------------------------------|
| **Frontend**  | React.js, Tailwind CSS, Vercel        |
| **Backend**   | Node.js, Express.js, Render           |
| **Database**  | MongoDB Atlas, Prisma ORM             |
| **APIs**      | Reddit API, Twitter/X API (optional)  |
| **DevOps**    | Docker, Docker Compose                |

## 🌐 Live Deployment

- **Frontend**: [Vercel](https://vertxxai.vercel.app)
- **Backend API**: [Render](https://vai-lzlb.onrender.com)
- **Database**: MongoDB Atlas

## 🐳 Docker Setup (Recommended)

```bash
# 1. Clone repository
git clone https://github.com/Akasho09/vAI
cd vAI

# 2. Configure environment
cp .env.example .env
# Add your MongoDB Atlas URI to .env

# 3. Build and launch
docker-compose build
docker-compose up

5. Visit the app in your browser

Frontend: http://localhost:5173

Backend API: http://localhost:3000


## 🧪 Local Development (Without Docker)

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start


## 📥 Load Sample Posts into Database  [EXTRA]

To fetch and save random posts from Reddit or Twitter into your database:

1. Go to:

```bash
   vAI/backend/src/utils/posts.ts
```
Open the file and uncomment the fetchAndStorePosts() function:

// fetchAndStorePosts(); // or fetchAndSaveTwitterPosts();

npx ts-node backend/src/utils/posts.ts 


## 🛠️ Tech Stack

### Frontend
- **React.js** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **Vercel** – Frontend deployment

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **JWT** – Authentication and authorization
- **Render** – Backend deployment

### Database
- **MongoDB Atlas** – Cloud-hosted NoSQL database
- **Prisma** – ORM to model and interact with MongoDB

### APIs
- **Reddit API** – Feed aggregation
- **Twitter/X API** – Feed aggregation (optional)
- **LinkedIn API** – (if applicable)

### DevOps
- **Docker** – Containerization
- **Docker Compose** – Multi-service setup
