const mongoose = require('mongoose');

const connect__to__db = () => {
  mongoose
    .connect('mongodb://localhost:27017/hero-db', {
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
