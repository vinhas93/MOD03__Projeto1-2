const res = require('express/lib/response');
const hero__service = require('../services/hero.service');
const mongoose = require('mongoose');

const find__all__H__cont = async (req, res) => {
  const hero__list = await hero__service.find__all__H__serv();

  if (hero__list.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não há Heróis cadastrados nessa lista' });
  }
  res.send(hero__list);
};

const find__H__by__id__cont = async (req, res) => {
  const hero__id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(hero__id)) {
    return res.status(400).send({ message: 'Id inválido' });
  }

  const hero__choosen = await hero__service.find__H__by__id__serv(hero__id);

  if (!hero__choosen) {
    return res
      .status(404)
      .send({ message: 'Não encontramos esse Herói em nossa lista.' });
  }
  res.send(hero__choosen);
};

const find__H__by__class__cont = async (req, res) => {
  const hero__class = req.params.class;
  const find__class = await hero__service.find__H__by__class__serv(hero__class);

  if (find__class.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não há Heróis desta classe cadastrados nessa lista' });
  }

  res.send(find__class);
};

const create__H__cont = async (req, res) => {
  const new__hero = req.body;

  new__hero.class = valida__entrada(new__hero.class);

  if (
    !new__hero.name ||
    !new__hero.class ||
    !new__hero.skill ||
    !new__hero.story
  ) {
    return res
      .status(400)
      .send({
        message: 'Faltam requisitos para que isso seja um Herói de verdade.',
      });
  }

  await hero__service.create__H__serv(new__hero);
  res
    .status(201)
    .send({ message: 'Um herói foi criado! O mundo nunca mais será o mesmo.' });
};

const update__H__cont = async (req, res) => {
  const hero__id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(hero__id)) {
    return res.status(400).send({ message: 'Id inválido' });
  }

  const update__hero = req.body;

  if (
    !update__hero.name ||
    !update__hero.class ||
    !update__hero.skill ||
    !update__hero.story
  ) {
    return res
      .status(400)
      .send({
        message: 'Faltam requisitos para que isso seja um Herói de verdade.',
      });
  }

  res.send(await hero__service.update__H__serv(hero__id, update__hero));
};

const delete__H__cont = async (req, res) => {
  const hero__id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(hero__id)) {
    return res.status(400).send({ message: 'Id inválido' });
  }

  await hero__service.delete__H__serv(hero__id);

  res.send({ message: 'Você apagou a existência desse... O que era mesmo?' });
};

const valida__entrada = (nome) => {
  return nome.trim().toLowerCase();
};

module.exports = {
  find__all__H__cont,
  find__H__by__id__cont,
  find__H__by__class__cont,
  create__H__cont,
  update__H__cont,
  delete__H__cont,
};
