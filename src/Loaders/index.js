const startDb = require('./mongodb');

class Loaders{
    start (){
        startDb();
    }
}

module.exports = new Loaders();