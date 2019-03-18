const express = require('express');
const app = express();

//Middleware
app.use(express.json());
app.use(express.static(__dirname + '/client/build/'));

//Routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Magic happening on port  + ${PORT}`);
})