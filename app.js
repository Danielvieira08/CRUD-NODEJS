const express = require("express"); 
const app = express(); 
const port = 3000; 
const mongoose = require("mongoose");
const path = require("path");
const dadosRouter = require("./routes/dadosRoute");

mongoose.connect('mongodb://localhost/newEstoque'), {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}

let db = mongoose.connection; 

db.on("error", () => console.log("Falha ao conectar com o banco!"));
db.once("open", () => console.log("Banco carregado com sucesso!"));

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "templates"));


app.use("/", dadosRouter);

app.listen(port, () => console.log("Server on running ")); 
