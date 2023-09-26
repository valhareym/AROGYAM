const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
const dbConfig = {
  host: process.env.DB_HOST || "brv4cveuxczuowlqcmu4-mysql.services.clever-cloud.com",
  user: process.env.DB_USER || "ugfyvb8dgrx9uox7",
  password: process.env.DB_PASSWORD || "132qS8lEtZx2b5FlEl2K",
  database: process.env.DB_NAME || "brv4cveuxczuowlqcmu4",
  port: process.env.DB_PORT || 3306,
};

const pool = mysql.createPool(dbConfig);
// Define a route to fetch doctors by hospital ID
app.get('/hospitals/:id/doctors', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM doctors WHERE H_ID = ?', [id]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/doctors', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM doctors');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/hospitals', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT DISTINCT Hospital FROM doctors');
    res.json(rows.map(row => row.Hospital));
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/hospitals/:hospitalName', async (req, res) => {
  try {
    const { hospitalName } = req.params;
    const [rows] = await pool.query('SELECT * FROM doctors WHERE Hospital = ?', [hospitalName]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
