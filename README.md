# 🚀 Microservices App on Kubernetes (Minikube)

This project demonstrates deploying a basic **microservices-based architecture** on **Kubernetes using Minikube**.

## 🧩 Components

- **Frontend** – Node.js + Express (serves UI and routes to backends)
- **Backend 1** – Users API (port `3001`)
- **Backend 2** – Products API (port `3002`)

All services are containerized and deployed using Kubernetes `Deployment` and `Service` manifests.

---

## 📁 Project Structure

```
project_root/
├── frontend/      # Frontend service
├── backend1/      # Backend service 1 (Users)
├── backend2/      # Backend service 2 (Products)
└── k8s/           # Kubernetes deployment YAML files
```

---

## ⚙️ Setup Instructions

### 1. Start Minikube & Configure Docker
```bash
minikube start
eval $(minikube docker-env)
```

### 2. Build Docker Images
Run these from each respective folder:
```bash
docker build -t abdcodes/backend1 .
docker build -t abdcodes/backend2 .
docker build -t abdcodes/frontend .
```

### 3. Apply Kubernetes Manifests
```bash
cd k8s/
kubectl apply -f .
```

### 4. Access the Application
```bash
minikube service frontend-service
```

Or open in browser using Minikube IP:
```bash
minikube ip
# Example: http://192.168.49.2:30080
```

---

## 🕸️ Internal Communication

The frontend calls backend services via Kubernetes DNS:
- `http://backend1-service:3001`
- `http://backend2-service:3002`

---

## 📦 Exposed Port

| Service   | Type     | NodePort |
|-----------|----------|----------|
| Frontend  | NodePort | `30080`  |

---

## 🔁 Cleanup

```bash
kubectl delete -f .
minikube stop
```

---

## ✍️ Author

**Abhishek**  

