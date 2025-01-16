const express = require('express');
const path = require('path');
const TimestampAPI = require('./api.js');
const cors = require('cors');
const mongoose = require('mongoose'); // Add Mongoose

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/timestamp';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Timestamp API Route
app.get('/api/:date?', (req, res) => {
  try {
    const dateParam = req.params.date;
    
    // Convert date using API utility
    const result = TimestampAPI.convertDate(dateParam);
    
    // Format and send response
    res.json(TimestampAPI.formatTimestamp(result));
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({ 
      error: "Internal Server Error", 
      details: error.message 
    });
  }
});

// Root route with documentation
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested endpoint does not exist"
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Server Error",
    message: err.message || "Something went wrong!"
  });
});

// Configure port
const PORT = process.env.PORT || 3000;

// Start server
const server = app.listen(PORT, () => {
  console.log(`
    ┌─────────────────────────────────────┐
    │ 🚀 Timestamp Microservice           │
    │ Port: ${PORT}                       │
    │ Status: Running                     │
    │ Environment: ${process.env.NODE_ENV || 'development'}  │
    └─────────────────────────────────────┘
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
});

module.exports = app; // For testing purposes