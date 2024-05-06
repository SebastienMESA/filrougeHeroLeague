//------------Express, importation et settings-----------------
const express = require('express');
const app = express();

//-------------FS, importation et settings--------------------
const fs = require('fs');

//--------------Path, Chalk et perso, importation et settings---------------
const path = require('path');
const chalk = require('chalk');

//------------------Constantes utiles----------------------------------
const PORT = 3000;
const mainHtmlPath = path.join(__dirname, "../frontend/public/html/index.html" );

app.use(express.static(path.join(__dirname, '../frontend/public')));

const domJSpath = path.join(__dirname, '../frontend/js');
console.log(domJSpath);

app.get('/', (req, res) => {
    res.sendFile(mainHtmlPath);
});


app.listen(PORT, () => {
    console.log(chalk.green(`Server up and running, listening on port : ${PORT}`));
} );