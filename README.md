# Food DIve a Food Delivery Web App

A full-stack food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

![Screenshot (10)](https://github.com/user-attachments/assets/cb5a9c94-17ba-43bb-8899-b63453869e90)

![Screenshot (11)](https://github.com/user-attachments/assets/a0651450-b697-4f23-8388-d44fccf2da18)


## Features

- User authentication and authorization
- Food item search and filtering
- Shopping cart functionality
- Order placement and tracking
- User profile management
- Responsive design for all devices

## Tech Stack

- **Frontend:**

  - React.js
  - CSS for styling
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
```

4. Create a .env file in the backend directory:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the development servers:

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm start
```

## Project Structure

```
food-delivery-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── README.md
```

## API Endpoints

### User Authentication

- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login

### Food Management

- `POST /api/v1/food/add` - Add new food item (with image upload)
- `POST /api/v1/food/remove` - Remove food item
- `GET /api/v1/food/list` - Get all food items

### Cart Operations

- `POST /api/v1/cart/add/cart` - Add item to cart (requires authentication)
- `POST /api/v1/cart/remove/cart` - Remove item from cart (requires authentication)
- `GET /api/v1/cart/get/list` - Get cart items (requires authentication)

### Order Management

- `POST /api/v1/place/order` - Place new order (requires authentication)

### Static Files

- `/images/*` - Access uploaded food images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
