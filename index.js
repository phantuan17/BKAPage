const express = require('express')
const path = require('path')
var favicon = require('serve-favicon')

const app = express()
const port = process.env.port || 8080


app.set('views', path.join(__dirname, 'public'))

app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'logo.ico')))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/public/homepage.html')
})

app.get('/toan-hoc', (req, res) => {
    res.sendFile(path.join(__dirname) + '/public/toanhoc.html')
})
app.get('/lap-trinh', (req, res) => {
    res.sendFile(path.join(__dirname) + '/public/laptrinh.html')
})



app.listen(port, () => {
    console.log(`app listening at PORT: ${port}`)
})

