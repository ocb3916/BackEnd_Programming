const express = require('express');
const app = express();

app.get('*', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});