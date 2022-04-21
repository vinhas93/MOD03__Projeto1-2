const heroes = require('../models/Hero');

const find__all__H__serv = async () => {
  return await heroes.find();
};
const find__H__by__id__serv = async (param__id) => {
  return await heroes.findById(param__id);
};

const find__H__by__class__serv = async (param__class) => {
  return await heroes.find({ class: param__class });
};

const create__H__serv = async (new__hero) => {
  return await heroes.create(new__hero);
};
const update__H__serv = async (id, hero__edit) => {
  return await heroes.findByIdAndUpdate(id, hero__edit);
};
const delete__H__serv = async (id) => {
  return await heroes.findByIdAndDelete(id);
};

module.exports = {
  find__all__H__serv,
  find__H__by__id__serv,
  find__H__by__class__serv,
  create__H__serv,
  update__H__serv,
  delete__H__serv,
};
