# JustChat App

JustChat is a simple chat application built with Node.js, Express.js, MongoDB, and Socket.IO. It allows users to sign up, log in, send messages, and view online users.

## Features

- **User Authentication:** Users can sign up for a new account, log in to their existing account, and log out securely.
- **Real-time Messaging:** Utilizes Socket.IO for real-time bidirectional communication between the server and clients, enabling instant messaging.
- **Message History:** Users can view message history with other users.
- **User Presence:** Shows online users in the sidebar for easy access to start conversations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/justchat.git
  
2. Navigate to the project directory:
   ```bash
   cd justchat
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory and provide the following environment variables:
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

5. Build the frontend:
   ```bash
   npm run build
   ```
   
## API Routes

### Auth Routes

- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Log in to an existing account.
- `POST /api/auth/logout`: Log out from the current session.

### Message Routes

- `GET /api/messages/:id`: Get message history with a specific user.
- `POST /api/messages/send/:id`: Send a message to a specific user.

### User Routes

- `GET /api/users/`: Get online users for the sidebar.

## Folder Structure

- `db/`: Contains database related files.
- `middleware/`: Contains middleware functions.
- `routes/`: Contains route definitions.
- `controllers/`: Contains controller functions to handle requests.
- `socket/`: Contains Socket.IO configuration and events.
- `frontend/`: Contains frontend source code.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- React.js
- Socket.IO
