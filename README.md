# 🏗️ PGA Backend - Parking Garage App API

This is the backend service for **PGA (Parking Garage App)**, a real-time parking availability application. Built using **Node.js** and **Express.js**, this backend provides APIs to fetch available parking spots, manage user sessions, and store data efficiently.

## 🚀 Features

- 🅿️ **Real-Time Parking Availability API** - Fetch open parking spots dynamically.
- 📍 **Location-Based Search** - Get parking spots near a specific location.
- 🔐 **User Authentication** - Secure login and session management.
- 🔄 **Live Updates with WebSockets** - Get real-time parking changes.
- 🗄 **Database Integration** - Uses PostgreSQL/Firebase for storing parking data.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL / Firebase
- **Real-Time Communication:** WebSockets / Firebase Realtime Database
- **Authentication:** Azure AD B2C 
- **Hosting:** Azure

## 📦 Installation & Setup

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/pga-backend.git
   cd pga-backend
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` File:**
   ```env
   PORT=3000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```

4. **Run the Server:**
   ```sh
   npm run start
   ```
   or in development mode with hot-reloading:
   ```sh
   npm run dev
   ```

## 📌 Usage

1. Start the backend server.
2. Connect your React Native frontend to this backend by making API calls.
3. Retrieve and display real-time parking data in the app.

## 🤝 Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Added a new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request.


## 📞 Contact

For any questions or feedback, reach out or open an issue on GitHub.

Happy Parking! 🚗🅿️

