const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.status(404);
    res.send('해당 경로에는 아무것도 없습니다.');
});

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});