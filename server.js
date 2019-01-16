const express = require('express');
const app = express();

const Pokemon = require('./models/pokemon.js');


app.get('/',(req,res)=>{
    res.send('YOU ARE HERE');
});

// index
app.get('/pokemon',(req,res)=>{
    res.send(JSON.stringify(Pokemon));
});


app.listen(3000, ()=>{
    console.log('Server running');
})