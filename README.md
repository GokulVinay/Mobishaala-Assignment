

# Video Conferencing API with 100ms Integration

A robust backend service that integrates with the 100ms API to manage live video calls. This service provides REST APIs for room management and WebSocket functionality for real-time participant tracking.

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- 100ms API Integration

## 📋 Features
- User Authentication (Register/Login)
- Video Room Management
- Real-time Participant Tracking
- Secure Token Generation
- WebSocket Integration
- Database Integration

## Project Structure
```
project/
├── src/
│   ├── models/
│   │   ├── User.js         # User schema and model
│   │   ├── Room.js         # Room schema and model
│   │   └── Participant.js  # Participant schema and model
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── roomController.js    # Room management logic
│   │   └── participantController.js
│   ├── routes/
│   │   ├── authRoutes.js   # Authentication routes
│   │   └── roomRoutes.js   # Room management routes
│   ├── middleware/
│   │   ├── auth.js         # JWT authentication middleware
│   │   └── errorHandler.js # Global error handler
│   ├── config/
│   │   └── database.js     # Database configuration
│   ├── services/
│   │   └── websocket.js    # WebSocket service
│   └── app.js             # Express app configuration
├── .env                   # Environment variables
└── server.js             # Server entry point
```

## 🔧 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/video-conferencing-api.git
cd video-conferencing-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**
Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
HMS_ACCESS_KEY=your_100ms_access_key
HMS_SECRET=your_100ms_secret_key
JWT_SECRET=your_jwt_secret
PORT=3000
NODE_ENV=development
```

4. **Start the server**
```bash
npm start
```

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh-token
```

### Room Management
```
POST /api/rooms           # Create a new room
GET /api/rooms            # List all rooms
POST /api/rooms/:roomId/token  # Generate room token
```

##  Deployment

1. **Prerequisites**
   - Node.js installed on server
   - MongoDB instance
   - 100ms account and credentials

2. **Deployment Steps**
   ```bash
   # Clone repository
   git clone https://github.com/yourusername/video-conferencing-api.git

   # Install dependencies
   npm install --production

   # Set environment variables
   cp .env.example .env
   # Edit .env with production values

   # Start server
   npm start

## Acknowledgments
- [100ms Documentation](https://www.100ms.live/docs)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
```

