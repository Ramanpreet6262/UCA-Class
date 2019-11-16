const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const books = require("./bookList");

const app = express();

dotenv.config();

app.use(bodyParser.json());

var id = 5;

// Sample middleware
app.use("*", (req, res, next) => {
  console.log("Middleware is called");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "*");
  // res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  console.log(req);
  res.send("Library Portal");
});

app.get("/booklist", (req, res) => {
  res.send(books.bookList);
});

app.post("/addBook", (req, res) => {
  id = id + 1;
  let book = req.body;
  book.id = id;
  books.bookList.push(req.body);
  res.status(200);
  res.send(book);
});

app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;

  // Filter method to delete

  books.bookList = books.bookList.filter((book)=>{
    if(book.id != id)
    {
      return 1;
    }
    return 0;
  });
  
  // for each loop method to delete 
  
  // var newBookList = [];
  // books.bookList.forEach((book) => {
  //   if(book.id != id){
  //     newBookList.push(book);
  //   }
  // })
  // books.bookList = newBookList;

  // map method to delete

  // books.bookList = books.bookList.map((book) => {
  //   if(book.id != id){
  //     return book;
  //   }
  //   return null;
  // });

  res.send('Deleted Successfully');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
