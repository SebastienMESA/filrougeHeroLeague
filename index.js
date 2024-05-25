require('dotenv/config');
const express = require('express');
const router = require('./app/router')
const app = express();

app.set('view engine', 'ejs');

app.set('views', 'app/views');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(router);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur started on http://localhost:${port}`);
});

