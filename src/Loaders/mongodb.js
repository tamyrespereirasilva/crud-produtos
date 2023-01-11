const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://tamie:ZwaIEliXT3Asstqb@crud.aljwzqo.mongodb.net/test');
}

module.exports = startDB;