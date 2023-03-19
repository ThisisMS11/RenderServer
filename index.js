const express = require('express');

const app = express();
const cors=require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world this is Mohit Saini")
})

app.get('/fetchdata', async (req, res) => {
    res.json("Hello Mohit good to see you client")
})

app.listen(8080, (req, res) => {
    console.log("Server listening at port no : ", 8080)
})