const express = require('express');

const app = express();

// Single API endpoint
app.get('/api/demo', (req, res) => {
    res.json({
        message: 'Hello, this is your demo API!',
        status: 'success',
    });
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, this is your demo API!',
        status: 'success',
    });
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
