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

// show
app.get('/pokemon/:id',(req,res)=>{
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id]
    })
})


app.listen(3000, ()=>{
    console.log('Server running');
})