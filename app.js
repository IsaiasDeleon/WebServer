const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/Elemnts")
//Servir contenido estatico 
app.use(express.static('public/Page'))
app.get('/', (req, res) => {
    res.render('home',{
        Title: "Curso Node",
        Name: "Isaías De león"
    });
})
app.get('/generic', (req, res) => {
    res.render('generic',{
        Title: "Curso Node",
        Name: "Isaías De león"
    })
})
app.get('/elements', (req, res) => {
    res.render('elements',{
        Title: "Curso Node",
        Name: "Isaías De león"
    })
})
app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
})
app.listen(port)