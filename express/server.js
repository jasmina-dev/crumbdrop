import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2';
import { dbConfig } from './config.js';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())

//el connectiono
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Connection failed: ', err);
        return;
    }
    console.log('Connected to crumbdrop db');
});

// serve dist folder
app.use(express.static("dist"));

// db query !!
app.get('/api/posts', (req, res) => {
    const query = 'SELECT * FROM posts'; 
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        res.json(results);
    });
});

app.post('/api/posts', (req, res) => {
    const query = 'INSERT INTO posts (title, school, description) VALUES (?)';
    const values = [req.body.title, req.body.school, req.body.description];
    connection.query(query, [values], (error, results) => {
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
