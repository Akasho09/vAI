FROM node:18-alpine

WORKDIR /app/backend

# 1. Install global dependencies
RUN npm install -g typescript @types/node

# 2. Copy package files first for better caching
COPY package*.json ./
COPY tsconfig*.json ./
# COPY /.env ./
COPY prisma ./prisma  

# 3. Install dependencies and generate Prisma client FIRST
RUN npm install --include=dev
RUN npx prisma generate  # Generate before build

# 4. Copy source code
COPY src ./src

# 5. Build the project
RUN npm run build

# 6. Install only production dependencies for runtime
RUN npm prune --production

EXPOSE 3000

CMD ["node", "dist/index.js"]