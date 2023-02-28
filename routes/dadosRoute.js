const express = require("express"); 
const router = express.Router(); 
const Dados = require("../models/Dados");
const dadosController = require("../controllers/dadosController");
var methodOverride = require('method-override');


router.use(methodOverride('_method'));


router.get("/", dadosController.allDados);

router.get("/add", (req, res) => res.render("add", { error: false, body: {} }));

router.get("/edit/:id", dadosController.loadDados);

router.post("/", express.urlencoded({extended: true}), dadosController.addDados);
router.post("/edit/:id", express.urlencoded({extended: true}), dadosController.editDados);


router.delete("/:id", dadosController.deleteDados);
router.delete("/", express.urlencoded({extended: true}), dadosController.deleteDados);

module.exports = router; 