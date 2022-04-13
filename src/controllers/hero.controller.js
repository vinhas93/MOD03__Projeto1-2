const res = require('express/lib/response');
const hero__service = require('../services/hero.service');

const find__all__H__cont = (req, res) => {
  res.send(hero__service.find__all__H__serv());
};
const find__H__by__id__cont = (req, res) => {
  res.send(hero__service.find__H__by__id__serv(+req.params.id));
};
// const find__H__by__class__cont = (req, res) => {

// };

const create__H__cont = (req, res) => {
  res.send(hero__service.create__H__serv(req.body));
};
const update__H__cont = (req, res) => {
  res.send(hero__service.update__H__serv(+req.params.id, req.body));
};
const delete__H__cont = (req, res) => {
  hero__service.delete__H__serv(+req.params.id);
  res.send({ message: 'Você apagou a existência desse... O que era mesmo?' });
};

module.exports = {
  find__all__H__cont,
  find__H__by__id__cont,
  // find__H__by__class__cont,
  create__H__cont,
  update__H__cont,
  delete__H__cont,
};
