const express = require('express');
const app = express();



const Pokemon = require('./models/pokemon.js');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('YOU ARE HERE');
});

// index
app.get('/pokemon',(req,res)=>{

    res.render('index.ejs', {
        pokemon: Pokemon
    })
    // res.send(JSON.stringify(Pokemon));
});


app.listen(3000, ()=>{
    console.log('Server running');
})