// expressing web app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

const path = require('path')


// making thedatabase global
global.thedatabase = path.join(__dirname, './data/thedatabase.json');

const web_route = require('./routes/web');
const api_route = require('./routes/api');


const app = express();

// setting the view engine for web routes
app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route); // api routes
app.use('/', web_route); // web routes

app.use((req, res) => {
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
