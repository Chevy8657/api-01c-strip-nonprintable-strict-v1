const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.post('/v1/clean', (req, res) => {
    const { text } = req.body;
    if (text === undefined || text === null) return res.status(400).json({ error: "Missing text" });
    
    // This logic removes characters that aren't standard letters, numbers, or symbols
    const result = text.replace(/[^\x20-\x7E]/g, ''); 
    res.json({ result });
});

app.listen(process.env.PORT || 3000);
