const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/hero.route');

const port = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/heroi', routes);

app.listen(port, () => {
  console.log(`
   Servidor rodando em http://localhost:${port}`);
});
