const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../views/index.html');
});
app.use('/api', routes);

const PORT = process.env.PORT || 3001; // Changed port to 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
