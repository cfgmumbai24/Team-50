const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD, // Use the correct environment variable name
    database: "urjacfg"
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.get('/students', (req, res) => {
    const sql = "SELECT stu_id,stu_name, category, class FROM student_tab"; // Fixed SQL syntax
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json('Error');
        res.json(data);
    });
});

app.post('/socio_test', (req, res) => {
    const id = req.body.id;
    const questions = req.body.questions;
    const sql = "INSERT INTO socio_test (class_id, ques) VALUES ?";
    const values = questions.map(question => [id, question]);

    db.query(sql, [values], (error, results) => {
        if (error) {
            console.error('Error inserting questions:', error);
            return res.status(500).send('Error inserting questions');
        }
        res.status(200).send('Questions added successfully');
    });
});

app.get('/socio_test/:ID', (req, res) => {
    const { ID } = req.params;
    const sql = "SELECT * FROM socio_test WHERE class_id = ?"; // Fixed SQL syntax
    db.query(sql, [ID], (err, data) => {
        if (err) return res.status(500).json('Error');
        res.json(data);
    });
});

app.post('/students/add', (req, res) => {
    const { stu_name, stu_category, class: stu_class } = req.body;
    const sql = 'INSERT INTO student_tab (stu_name, category, class) VALUES (?, ?, ?)'; // Fixed table name
    db.query(sql, [stu_name, stu_category, stu_class], (error, results) => {
        if (error) {
            console.error('Error adding student:', error);
            return res.status(500).send('Error adding student');
        }
        res.status(200).send({ stu_id: results.insertId, stu_name, stu_category, class: stu_class });
    });
});

app.post('/students/delete', (req, res) => {
    const { id } = req.body;
    const sql = 'DELETE FROM student_tab WHERE stu_id = ?'; // Fixed table name
    db.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error deleting student:', error);
            return res.status(500).send('Error deleting student');
        }
        res.status(200).send('Student deleted successfully');
    });
});

app.post('/students/edit', (req, res) => {
    const { id, stu_name, stu_category, class: stu_class } = req.body;
    const sql = 'UPDATE student_tab SET stu_name = ?, stu_category = ?, class = ? WHERE stu_id = ?'; // Fixed table name
    db.query(sql, [stu_name, stu_category, stu_class, id], (error, results) => {
        if (error) {
            console.error('Error updating student:', error);
            return res.status(500).send('Error updating student');
        }
        res.status(200).send('Student updated successfully');
    });
});

app.listen(5001, () => {
    console.log("Server is listening on port 5001");
});
