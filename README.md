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

## Docker Compose

Make sure you have Docker on your system. The build will create 3 containers: frontend, backend and nginx. Nginx serves as a reverse proxy. Nginx is also serves the frontend code as it is a single page app.

```
cd service-config
docker-compose up --build
```

Visit http://localhost

## Kubernetes

Make sure you have `kind` and `ingress` controller. `kind` requires go.

Install kind:

```
go install sigs.k8s.io/kind@v0.26.0
```

Create a new cluster

```
kind create cluster
```

Install Ingress controller to the cluster

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

Build images:

```
docker build -t frontend ../service-frontend/
docker build -t backend ../service-backend/
```

Load images:

```
kind load docker-image frontend
kind load docker-image backend
```

Well, this is where things ar egetting complicated :)

```
DONT DO THIS
kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
```

Apply manifests:

```
kubectl apply -f k8s/deployments/
kubectl apply -f k8s/services/
kubectl apply -f k8s/ingress.yaml
```
