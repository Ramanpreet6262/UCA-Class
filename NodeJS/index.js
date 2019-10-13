const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    console.log('HI');
    res.send('<h1>kiddan</h1>')
})

const port = 5000 || process.env.PORT; 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});