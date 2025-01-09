# A simple learning project

Compponents:

- frontend: Vite+Vue.js
- backend: Express.js
- configuration: Docker compose

This setup provides a single endpoint to serve data from an in-memroy sqlite database.

## Local development

```
cd service-frontend
npm i
npm run dev

cd service-backend
npm i
npm run dev
```

Visit http://localhost:8000/

### Docker Compose

Make sure you have Docker on your system. The build will create 3 containers: frontend, backend and nginx. Nginx serves as a reverse proxy. Nginx is also serves the frontend code as it is a single page app.

```
cd service-config
docker-compose up --build
```

Visit http://localhost
