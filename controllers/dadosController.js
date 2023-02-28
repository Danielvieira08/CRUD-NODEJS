const Dados = require("../models/Dados");


const addDados = async (req, res) => {

    let dados = new Dados(req.body); 

    try {
      let doc = await dados.save(); 
      res.redirect("/");
    } catch (error) {
        res.render("add", { error, body: req.body });
    }
} 

const allDados = async (req, res) => {

    try {
      let dados = await Dados.find({});
      res.render("all",  { dados })
    } catch (error) {
        res.send(error);
    }
}

const deleteDados = async (req, res) => {

    let id = req.params.id;
    if(!id) {
      id = req.body.id;
    }
    try {
       await Dados.findByIdAndDelete(id);
       res.redirect("/");
    } catch (error) {
      res.status(404).send(error);
    }
}

const loadDados = async (req, res) => {
    let id = req.params.id; 
    try {
      let doc = await Dados.findById(id);
      res.render("edit", { error: false, body: doc});
    } catch (error) {
      res.status(404).send(error);
    }
}

const editDados = async (req, res) => {
    let dados = {}; 
    dados.book = req.body.book;
    dados.author = req.body.author;
    dados.category = req.body.category; 
    dados.amount = req.body.amount; 

    let id = req.params.id; 
    if(!id) {
      req.body.id;
    }

    try {
      let doc = await Dados.updateOne({_id: id},  dados);
      res.redirect("/");
    } catch (error) {
      res.render('edit', {error, body: req.body});
    }
}



module.exports = { addDados, allDados, deleteDados, loadDados, editDados}; 