# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/

# Expose the port Nginx will run on
EXPOSE 8000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
