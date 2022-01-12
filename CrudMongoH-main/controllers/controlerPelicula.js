const { Router } = require('../config/conexion');

var Pelicula=require('../models/peliculas'),
    express=require('express'),
    router=express.Router();

router.get('/',(req, res)=>{
    
    Pelicula.find({},(err,docs)=>{
        if (err){
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});
//crearnueva
router.post('/crearpelicula',(req,res)=>{
    var body =req.body;

    Pelicula.insertMany({
        nombre: body.nombre,
        autor: body.autor,
        anio_estreno: body.anio_estreno,
        idioma: body.idioma,
        duracion_pelicula: body.duracion_pelicula,
        genero: body.genero

    }, (err, rest)=>{
        if (err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });

});
//eliminar PElicula
router.post('/eliminarPelicula', (req, res)=>{
    Pelicula.remove({
        nombre: req.body.nombre
    }, (err, rest)=>{
        if (err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});
//editar
router.post('/editarpelicula',(req,res)=>{
    var body =req.body;

    Pelicula.updateMany({
        nombre: body.nombre

    },  {
        $set:{
            nombre: body.nombre,
            autor: body.autor,
            anio_estreno: body.anio_estreno,
            idioma: body.idioma,
            duracion_pelicula: body.duracion_pelicula,
            genero: body.genero
        }
    },  (err, rest)=>{
        if (err){
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

module.exports=router;