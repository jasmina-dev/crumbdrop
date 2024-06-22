import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2';
import { dbConfig } from './config.js';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//el connectiono
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Connection failed: ', err);
        return;
    }
    console.log('Connected to crumbdrop db');
});

// what is this lmao
app.use(express.static(path.join(__dirname, '../src')));

// db query !!
app.get('/api/test', (req, res) => {
    const query = 'SELECT * FROM your_table_name'; 
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
