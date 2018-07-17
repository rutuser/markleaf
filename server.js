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
/*
app.get('/api/locations', (req, res) => {
    const locations = [
        {lat: 20, lng: 40},
        {lat: 30, lng: 50},
        {lat: 40, lng: 60}
    ];
    res.json(locations);
}); */

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));