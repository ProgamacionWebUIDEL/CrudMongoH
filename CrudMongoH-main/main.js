const express=require("express");
const app=express();
const connection=require("./config/conexion");
const index_pelicula=require("./router/rutas_pelicula");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//ruteo de apis
app .use('/',index_pelicula);

app.get("/hola",(req,res)=>{
    var datos=req.query;
    res.json({mensaje:"hola " +datos.nombre});
});
app.get("/suma",(req,res)=>{
    var datos=req.query;
    var suma=Number(datos.n1)+Number(datos.n2)
    res.json({mensaje:"la respuesta es " +suma});
});
app.get("/resta",(req,res)=>{
    var datos=req.query;
    var resta=Number(datos.n1)-Number(datos.n2)
    res.json({mensaje:"la respuesta es " +resta});
});
app.get("/mul",(req,res)=>{
    var datos=req.query;
    var mul=Number(datos.n1)*Number(datos.n2)
    res.json({mensaje:"la respuesta es " +mul});
});
app.get("/div",(req,res)=>{
    var datos=req.query;
    var div=Number(datos.n1)/Number(datos.n2)
    res.json({mensaje:"la respuesta es " +div});
});


app.listen(3000,()=>{
    console.log("servidor iniciado")
});

