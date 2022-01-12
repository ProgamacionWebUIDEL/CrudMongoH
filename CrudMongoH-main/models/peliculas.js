var mongoose=require('mongoose');
Schema=mongoose.Schema;

var peliculasSchema= new mongoose.Schema({
    nombre:{type:String},
    autor:{type:String},
    anio_estreno:{type:Number},
    idioma:{type:String},
    duracion_pelicula:{type:Number},
    genero:{type:String}

});

var pelicula=mongoose.model('pelicula',peliculasSchema);
module.exports=pelicula;