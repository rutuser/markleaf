const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/apiKey').mongoURI;

const coords = require('./routes/api/Coords');

const app = express();

//BodyParser middleware
app.use(bodyParser.json());

mongoose.connect(db, { useNewUrlParser: true })
    .then((() => console.log('Mongoose connected...')))
    .catch(err => console.log(err));

//Use routes
app.use('/api/coords', coords);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));