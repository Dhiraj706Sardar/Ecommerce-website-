# E-Commerce Product Search Application

## Overview
A full-stack e-commerce application built with Java Spring Boot backend and React.js frontend, featuring product search and detailed view functionality.

## Technologies
- Backend: Java Spring Boot, H2 Database, Spring Data JPA
- Frontend: React.js, React Router, Tailwind CSS, Axios
- Containerization: Docker, Docker Compose

## Features
- Search products by name or brand
- View product details
- Responsive mobile-first design
- Error handling with toast notifications
- Loading spinners

## Prerequisites
- Java 17
- Node.js 16+
- Docker (optional)

## Local Development

### Backend
1. Navigate to backend directory
2. Run `mvn spring-boot:run`
3. Access Swagger UI at `http://localhost:8080/swagger-ui.html`

### Frontend
1. Navigate to frontend directory
2. Run `npm install`
3. Run `npm start`
4. Access app at `http://localhost:3000`

## Docker Deployment
1. Run `docker-compose up --build`
2. Access app at `http://localhost:3000`

## Project Structure
- `backend/`: Spring Boot application
- `frontend/`: React.js application
- `docker-compose.yml`: Container orchestration

## License
MIT License
