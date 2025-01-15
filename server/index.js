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

// 3. Backend - server/routes/api.js
const express = require('express');
const router = express.Router();

// Utility function to format date to UTC
const formatToUTC = (date) => date.toUTCString();

router.get('/:date?', (req, res) => {
  const { date } = req.params;

  let parsedDate;

  // Handle empty date parameter (current time)
  if (!date) {
    parsedDate = new Date();
  } else if (!isNaN(date)) {
    // Handle timestamp input
    parsedDate = new Date(Number(date));
  } else {
    // Handle string input
    parsedDate = new Date(date);
  }

  if (isNaN(parsedDate.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: parsedDate.getTime(),
    utc: formatToUTC(parsedDate),
  });
});

module.exports = router;