const mongoose = require('mongoose');

const connect__to__db = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`   MongoDb Atlas Connected`))
    .catch((error) =>
      console.log(`
      
      Erro ao conectar com o MongoDB, erro: ${error}`)
    );
};

module.exports = connect__to__db;
