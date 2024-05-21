const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

const forgotPassword = require('./routes/email');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views' });
})


app.use('/smtp', forgotPassword);



app.listen(5000, () => {
    console.log("server Is started on port 5000");
})