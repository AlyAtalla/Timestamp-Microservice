const express = require('express');
const router = express.Router();

const formatToUTC = (date) => date.toUTCString();

router.get('/:date?', (req, res) => {
  const { date } = req.params;

  let parsedDate;

  if (!date) {
    parsedDate = new Date();
  } else if (!isNaN(date)) {
    parsedDate = new Date(Number(date));
  } else {
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
