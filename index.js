const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/:date?', (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
