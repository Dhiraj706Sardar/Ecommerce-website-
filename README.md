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

## Application Screenshots

### Home Page
![Home Page](screenshots/Screenshot%202025-05-05%20014748.png)

### Product Details
![Product Details](screenshots/Screenshot%202025-05-05%20014817.png)

### Product Category
![Product Search](screenshots/Screenshot%202025-05-05%20014837.png)

### Swagger API
![Swagger API](screenshots/Screenshot%202025-05-05%20014952.png)

### H2 Database
![H2 Database](screenshots/Screenshot%202025-05-05%20015009.png)

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


## Project Structure
- `backend/`: Spring Boot application
- `frontend/`: React.js application
- `screenshots/`: Application screenshots

## Application Configuration

### Backend Configuration (`application.properties`)

#### Database Configuration
```properties
# H2 In-Memory Database
spring.datasource.url=jdbc:h2:mem:ecommercedb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# H2 Console Configuration
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

#### JPA and Hibernate Configuration
```properties
# JPA Settings
spring.jpa.defer-datasource-initialization=true
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

#### Logging Configuration
```properties
# Logging Levels
logging.level.org.springframework=INFO
logging.level.com.ecommerce=DEBUG
```

#### Swagger Configuration
```properties
# Swagger/OpenAPI Path
springdoc.swagger-ui.path=/swagger-ui.html
```

### Key Configuration Points
- Uses H2 in-memory database for development
- Automatic schema creation and drop
- Enabled SQL logging for debugging
- Integrated Swagger for API documentation
- Configurable logging levels

