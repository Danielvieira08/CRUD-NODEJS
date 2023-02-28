const mongoose = require("mongoose");

const EstoSchema = new mongoose.Schema({
    book: { type: String, required: true },  
    author: { type: String, required: true }, 
    category: {type: String, required: true }, 
    amount: {type: Number, default: 0}
});

module.exports = mongoose.model("Dados", EstoSchema);