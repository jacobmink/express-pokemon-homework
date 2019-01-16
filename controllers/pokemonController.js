const express = require('express');
const router = express.Router();

const Pokemon = require('../models/pokemon.js');

// ROUTES

// index
router.route('/')
    .get((req,res)=>{
        res.render('index.ejs', {
            pokemon: Pokemon
        })
    })
    // post
    .post((req,res)=>{
        Pokemon.push(req.body);
    res.redirect('/pokemon');
    });

// new
router.route('/new').get((req,res)=>{
    res.render('new.ejs');
});


// show
router.route('/:id')
    .get((req,res)=>{
        res.render('show.ejs', {
            pokemon: Pokemon[req.params.id],
            index: req.params.id
        })
    })
    .delete((req,res)=>{
        Pokemon.splice(req.params.id,1);
        res.redirect('/pokemon');
    })
    .put((req,res)=>{
        Pokemon[req.params.id] = req.body;
        res.redirect('/pokemon');
    });

// edit
router.route('/:id/edit')
    .get((req,res)=>{
        res.render('edit.ejs', {
            pokemon: Pokemon[req.params.id],
            index: req.params.id
        });
    });


module.exports = router;