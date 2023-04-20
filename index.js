const express = require('express')
const path = require('path')

const app = express()
const port = process.env.port || 8080


app.set('views', path.join(__dirname, 'public'))

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/public/homepage.html')
})


app.listen(port, () => {
    console.log(`app listening at PORT: ${port}`)
})

