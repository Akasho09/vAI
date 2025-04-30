# 🛠️ Backend Build
FROM node:18-alpine AS backend

WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY backend ./backend
WORKDIR /app/backend
RUN npx prisma generate
RUN npm run build   # optional, if you have a build step for backend

# 🛠️ Frontend Build
FROM node:18-alpine AS frontend

WORKDIR /app

COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

COPY frontend ./frontend
WORKDIR /app/frontend
RUN npm run build

# ✅ Final Production Image
FROM node:18-alpine

WORKDIR /app

# Copy built backend
COPY --from=backend /app/backend /app/backend

# Copy built frontend (static files)
COPY --from=frontend /app/frontend/dist /app/backend/public

# Set working dir to backend
WORKDIR /app/backend

# Optional: install production deps only
RUN npm install --production

# Prisma Client is already generated in the backend stage

# Expose backend port (Express serves frontend from /public)
EXPOSE 3000

# 🏁 Start the server (assumes your Express app serves static files from "public")
CMD ["node", "index.js"]
