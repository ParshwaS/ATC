const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api',require('./api'));

app.listen(PORT, ()=>{
    console.log("Server is listening on port-"+PORT);
});