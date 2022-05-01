const mongoose = require('mongoose');

const connect__to__db = () => {
  mongoose
    .connect('mongodb+srv://vinhas93:12345@api-heroes.ucdgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`   MongoDb Connected`))
    .catch((error) =>
      console.log(`
      
      Erro ao conectar com o MongoDB, erro: ${error}`)
    );
};

module.exports = connect__to__db;
