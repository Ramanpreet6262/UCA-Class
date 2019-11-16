const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

var books = [
    {
        "id" : 1,
        "bookName" : "The Alchemist"
    }
]

app.get("/", (req, res) => {
    // console.log(req);
    res.send('Library Portal');
});

app.get("/booklist", (req, res) => {
    res.send(books);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
