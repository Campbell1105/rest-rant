require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('methodOverride')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine)

app.use('places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
    res.render('home')
})



app.get('*', (req, res) => {
    res.render(error404)
})

app.listen(process.env.PORT)
