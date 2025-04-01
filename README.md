# Food Delivery System (Microservices)

## Overview

The **Food Delivery System** is a microservices-based application designed to efficiently manage restaurants, customers, and orders. The system ensures seamless communication between services and provides a scalable architecture for handling food delivery operations.

## Features

- **Restaurant Management**: Add, update, and retrieve restaurant details.
- **Customer Management**: Register customers and manage their details.
- **Order Processing**: Place, track, and view order history.
- **Microservices Architecture**: Independently scalable services for better performance.
- **API Gateway**: Centralized API management and routing.
- **Database Management**: Efficient data storage and retrieval using MongoDB.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Microservices**: Docker, Kubernetes
- **Authentication**: JWT (JSON Web Tokens)
- **API Gateway**: Express-HTTP-Proxy
- **Containerization**: Docker
- **Orchestration**: Kubernetes

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js & npm
- Docker & Docker Compose
- Kubernetes (Minikube or any other setup)
- MongoDB

### Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/AbdulMoiz2493/Food-delivery-system-Microservices.git
   cd Food-delivery-system-Microservices
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Setup Environment Variables** Create a `.env` file in the root directory and configure the necessary environment variables.

4. **Run Services using Docker Compose**

   ```sh
   docker-compose up --build
   ```

5. **Access the Application** Open your browser and visit `http://localhost:3000` (or the configured port).

## Microservices Structure

- **Restaurant Service**: Manages restaurants and their availability.
- **Customer Service**: Handles customer details and preferences.
- **Order Service**: Manages food orders and tracks status.
- **API Gateway**: Serves as a single entry point for clients.

## Business Logic

- Customers can register and manage their profiles.
- Restaurants can be added and retrieved through the API.
- Orders are placed after verifying restaurant availability and customer details.
- Orders can be tracked and viewed in history.

## API Endpoints

### Restaurant Service

- `POST /restaurants` - Add a new restaurant.
- `GET /restaurants/:restaurantId` - Retrieve a restaurant’s details.
- `GET /restaurants` - List all available restaurants.

#### Database Structure:

```json
{
  "restaurantId": "string",
  "name": "string",
  "location": "string",
  "menu": [
    { "item": "string", "price": "number" }
  ]
}
```

### Customer Service

- `POST /customers` - Register a new customer.
- `GET /customers/:customerId` - Retrieve a customer’s details.
- `PUT /customers/:customerId` - Update customer preferences.

#### Database Structure:

```json
{
  "customerId": "string",
  "name": "string",
  "email": "string",
  "preferences": "array"
}
```

### Order Service

- `POST /orders` - Place a new order.
- `GET /orders/:orderId` - Track order status.
- `GET /orders/customer/:customerId` - View customer order history.

#### Database Structure:

```json
{
  "orderId": "string",
  "customerId": "string",
  "restaurantId": "string",
  "items": [
    { "item": "string", "quantity": "number" }
  ],
  "status": "pending | completed | canceled"
}
```

## Inter-Service Communication

Uses HTTP REST APIs for inter-service communication.

### Order Service → Restaurant Service:

- Before placing an order:
  - `GET /restaurants/:restaurantId` to verify restaurant availability.

### Order Service → Customer Service:

- Before placing an order:
  - `GET /customers/:customerId` to validate customer details.

## API Gateway

The API Gateway serves as a single entry point for clients to interact with all the microservices. It simplifies routing, hides service details, and forwards requests to the appropriate service. The **express-http-proxy** library is used to forward client requests to the appropriate microservice.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to your branch: `git push origin feature-branch`
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any queries, reach out to [**Abdul Moiz**](https://github.com/AbdulMoiz2493), Email: abdulmoiz8895@gmail.com

