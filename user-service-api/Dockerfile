FROM node:24.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD  ["node", "index.js"]