const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
