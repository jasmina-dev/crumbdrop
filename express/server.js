// server/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../build')));

// API endpoint
app.get('/api/test', (req, res) => {
    var bruh = ["piza"];
    res.json(bruh);
    console.log('success');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
