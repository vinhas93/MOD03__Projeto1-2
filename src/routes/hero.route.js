const route = require('express').Router();
const hero__controller = require('../controllers/hero.controller');
const {
  check__id,
  check__object__body,
} = require('../middlewares/hero.middleware');

route.get('/lista-herois', hero__controller.find__all__H__cont);
route.get('/unico/:id', check__id, hero__controller.find__H__by__id__cont);
route.get('/filter/:class', hero__controller.find__H__by__class__cont);

route.post('/create', check__object__body, hero__controller.create__H__cont);
route.put(
  '/update/:id',
  check__id,
  check__object__body,
  hero__controller.update__H__cont
);
route.delete('/delete/:id', check__id, hero__controller.delete__H__cont);

module.exports = route;
