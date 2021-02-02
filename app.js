const express = require('express')
const app = express()

// // route to handle the /home request
// app.get("/landing", (req, res) => {
//     res.send("Hiiii, welcome to Geogina's, Lisa's and Grumpy Cat's page")

// })

// route to handle the /about request
app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')

})

// route to handle the /about request
app.get("/works", (req, res) => {
    res.sendFile(__dirname + '/views/works.html')

})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/landing.html')
})

app.listen(3000)