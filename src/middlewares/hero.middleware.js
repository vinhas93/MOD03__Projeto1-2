const mongoose = require('mongoose');

const check__id = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'Id inválido' });
  }

  next();
};

const check__object__body = (req, res, next) => {
  const new__hero = req.body;

  new__hero.class = check__entry(new__hero.class);

  if (
    !new__hero.name ||
    !new__hero.class ||
    !new__hero.skill ||
    !new__hero.story
  ) {
    return res.status(400).send({
      message: 'Faltam requisitos para que isso seja um Herói de verdade.',
    });
  }

  next();
};

const check__entry = (nome) => {
  return nome.trim().toLowerCase();
};

module.exports = {
  check__id,
  check__object__body,
};
