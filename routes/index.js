const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    let obj = {
        titulo: ['<strong>Projeto Com Rotas</strong>'],
        subtitulo: ['Felipe Maximo Colen - Desenvolvimento Web II - Fatec Diadema']
    }
    res.render('home', obj);
});

module.exports = router;