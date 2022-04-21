const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/hero.route');
const connect__to__db = require('./src/database/database');

const port = process.env.port || 3000;
const app = express();

connect__to__db();

app.use(express.json());
app.use(cors());
app.use('/heroi', routes);

app.listen(port, () => {
  console.log(`
   Servidor rodando em http://localhost:${port}`);
});
