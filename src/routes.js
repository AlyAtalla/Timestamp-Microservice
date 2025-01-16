const express = require('express');
const router = express.Router();

router.get('/:date?', (req, res) => {
    let date;
    const dateString = req.params.date;

    console.log(`Received date string: ${dateString}`);

    if (!dateString) {
        date = new Date();
    } else if (!isNaN(dateString)) {
        date = new Date(parseInt(dateString));
    } else {
        date = new Date(dateString);
    }

    console.log(`Parsed date: ${date}`);

    if (date.toString() === 'Invalid Date') {
        res.json({ error: 'Invalid Date' });
    } else {
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    }
});

module.exports = router;
