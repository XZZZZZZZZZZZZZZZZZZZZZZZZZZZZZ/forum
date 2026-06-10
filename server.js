const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// הגדרה שמציגה את הפורום שלנו
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// הפעלת השרת
app.listen(port, () => {
    console.log(`🚀 שרת הפורום רץ באוויר על פורט ${port}`);
});
