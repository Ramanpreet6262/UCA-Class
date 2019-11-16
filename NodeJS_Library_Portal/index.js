const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const books = require("./bookList");

const app = express();

dotenv.config();

app.use(bodyParser.json());

// Sample middleware
app.use("*", (req, res, next) => {
  console.log("Middleware is called");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  // res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  // console.log(req);
  res.send("Library Portal");
});

app.get("/booklist", (req, res) => {
  res.send(books.bookList);
});

app.post("/addBook", (req, res) => {
  let book = req.body;
  console.log("Add Book Method is called with books name :", book);
  books.bookList.push(req.body);
  res.send(book);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
