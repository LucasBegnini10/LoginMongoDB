const mongoose = require("mongoose");

function connectMongo(){
    mongoose.connect('mongodb://localhost/users')
    .then(() => console.log("Conexão estabelecida"))
    .catch((err) => console.error("ERRO", err))
}


module.exports = connectMongo