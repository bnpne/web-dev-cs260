const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/messages', {
    useNewUrlParser: true
});

const messages = require('./messages.js');
app.use('/api/messages', messages);

app.listen(3000, () => console.log('Server listening on port 3000!'));