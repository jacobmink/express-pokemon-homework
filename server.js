const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pokemonController = require('./controllers/pokemonController');
const methodOverride = require('method-override');


app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

const port = 3000;

app.use('/pokemon', pokemonController);
 

app.listen(port, ()=>{
    console.log(new Date());
});

module.exports = app;