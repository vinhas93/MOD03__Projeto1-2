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
  res.status(200).send(hero__list);
};

const find__H__by__id__cont = async (req, res) => {
  const hero__choosen = await hero__service.find__H__by__id__serv(
    req.params.id
  );
  if (!hero__choosen) {
    return res
      .status(404)
      .send({ message: 'Não encontramos esse Herói em nossa lista.' });
  }
  res.status(200).send(hero__choosen);
};

const find__H__by__class__cont = async (req, res) => {
  const find__class = await hero__service.find__H__by__class__serv(
    req.params.class
  );
  if (find__class.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não há Heróis desta classe cadastrados nessa lista' });
  }
  res.status(200).send(find__class);
};

const create__H__cont = async (req, res) => {
  await hero__service.create__H__serv(req.body);
  res
    .status(201)
    .send({ message: 'Um herói foi criado! O mundo nunca mais será o mesmo.' });
};

const update__H__cont = async (req, res) => {
  res
    .status(200)
    .send(await hero__service.update__H__serv(req.params.id, req.body));
};

const delete__H__cont = async (req, res) => {
  await hero__service.delete__H__serv(req.params.id);
  res
    .status(200)
    .send({ message: 'Você apagou a existência desse... O que era mesmo?' });
};

module.exports = {
  find__all__H__cont,
  find__H__by__id__cont,
  find__H__by__class__cont,
  create__H__cont,
  update__H__cont,
  delete__H__cont,
};
