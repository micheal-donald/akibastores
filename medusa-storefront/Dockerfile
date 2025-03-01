FROM node:22-alpine

WORKDIR /app

# Install dependencies first (caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]