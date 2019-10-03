const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/', function(req, res) {
    res.send('Got a POST request')
})

app.listen(3000, () => {
    console.log('Express webapp is listening on 3000.')
})