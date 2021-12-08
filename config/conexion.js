var mongoose=require('mongoose');
var connection=mongoose.connect("mongodb+srv://henry:8MVafCd7992wLGuB@cluster0.lahem.mongodb.net/Sistema?retryWrites=true&w=majority");

mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongo")
});

module.exports=connection;