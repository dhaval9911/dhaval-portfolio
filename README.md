# 🚀 Dhaval Chavda – DevOps Portfolio

A modern, production-ready engineering portfolio built using React, TypeScript, and containerized with Docker using a multi-stage build process.

This project reflects my journey across Site Reliability Engineering, Technical Support Engineering (Splunk Apps & Add-ons), and Observability Engineering — presented through a clean, performance-optimized web interface.

---

## 👨‍💻 About

This portfolio showcases:

- Professional experience
- Technical skills
- Infrastructure-focused projects
- DevOps mindset
- Cloud-native exposure

Built not just as a resume website — but as a containerized, deployment-ready application.

---

## 🛠 Tech Stack

**Frontend**
- React (TypeScript)
- Vite
- Tailwind CSS
- Framer Motion

**Infrastructure**
- Docker (Multi-stage build)
- NGINX (Production runtime)
- Containerized static deployment

---

## 🐳 Containerization

This application uses a multi-stage Docker build:

1. Node.js build stage (`npm ci + build`)
2. NGINX production stage
3. Optimized static asset serving
4. Lightweight runtime image

### Build Docker Image

```bash
docker build -t dhaval-portfolio .
