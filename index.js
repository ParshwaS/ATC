const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/api',require('./api'));
app.use(express.static('./public'));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, ()=>{
    console.log("Server is listening on port-"+PORT);
});