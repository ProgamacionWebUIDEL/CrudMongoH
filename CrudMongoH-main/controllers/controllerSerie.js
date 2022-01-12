var Serie = require('../models/series'),
    express = require('express'),
    router = express.Router();



//creamos el metodo de post

router.post('/findSerie', (req, res) => {

    Serie.find({}, (err, docs) => {

        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)

    });
});


//creamos el metodo de crear serie

router.post('/crearSerie', (req, res) => {
    var body = req.body;
    Serie.insertMany({
        nombre: body.nombre,
        numTemporadas: body.numTemporadas,
        director: body.director,
        idioma: body.idioma,
        anioEstreno: body.anioEstreno,
        descripcion: body.descripcion

    }, (err, rest) => {

        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)

    });
});


//creamos el metodo de eliminar series

router.post('/eliminarSerie', (req, res) => {
    Serie.remove({
        nombre: req.body.nombre,
    }, (err, rest) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});


//creamos el metodo de editar series

router.post('/editarSerie', (req, res) => {
    var body = req.body;
    Serie.updateMany({
        nombre: body.nombre
    }, {
        $set: {

            nombre: body.nombre,
            numTemporadas: body.numTemporadas,
            director: body.director,
            idioma: body.idioma,
            anioEstreno: body.anioEstreno,
            descripcion: body.descripcion

        }

    }, (err, rest) => {

        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)

    });

});


module.exports = router;