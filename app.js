const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = 5000

// Static Files 
app.use(express.static('public'))
app.use('/css' , express.static(__dirname + 'public/assets/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout' ,  './layouts/main')
app.set('view engine' , 'ejs')

// Navigation
app.get('', (req, res) => {
    res.render('index' , { title: 'Home Page'})
})

app.get('/about', (req, res) => {
    res.render('about' , { title: 'About Page', layout: './layouts/sidebar' })
})

app.get('/edit-server-list', (req, res) => {
    res.render('edit-server-list' , { title: 'About Page'})
})

app.get('/server-list', (req, res) => {
    res.render('server-list' , { title: 'About Page'})
})

app.get('/index', (req, res) => {
    res.render('index' , { title: 'About Page'})
})


// Listen on Port 5000
app.listen(port , () => console.info(`App listening on port ${port}`))