// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Import path module
const helmet = require('helmet'); // Security middleware
const morgan = require('morgan'); // Logging middleware
const rateLimit = require('express-rate-limit'); // Rate limiting

require('dotenv').config();

// Import Routes
const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservations');

const app = express();

// Middleware
app.use(helmet()); // Set security-related HTTP headers
app.use(cors());
app.use(express.json());
app.use(morgan('combined')); // Log HTTP requests

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// API Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');

    // Define PORT here
    const PORT = process.env.PORT || 5000;

    // Start Server
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Serve Frontend in Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
