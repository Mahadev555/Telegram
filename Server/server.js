const express = require('express');

const mongoose = require('mongoose');
const router = require('./Router/auth-r');
const connectDB = require('../Server/connection');
const UserModel = require('../Server/Models/usermodel');
const cors = require('cors');




const app = express();
app.use(cors()); 

app.use(express.json());
const port = process.env.PORT || 5000;

connectDB()
    .then(() => {
        console.log('Connected to MongoDB');
        app.use('/', router);

        

        app.post('/api', (req, res) => {
            console.log(req.body);
            res.send(req.body);
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
