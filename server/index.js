const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Serve Frontend
app.use(express.static('client/public'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
