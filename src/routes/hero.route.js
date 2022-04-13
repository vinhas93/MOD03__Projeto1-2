const route = require('express').Router();
const hero__controller = require('../controllers/hero.controller');

route.get('/lista-herois', hero__controller.find__all__H__cont);
route.get('/heroi/:id', hero__controller.find__H__by__id__cont);
// route.get('/heroi/:class', hero__controller.find__H__by__class__cont);

route.post('/heroi/create', hero__controller.create__H__cont);
route.put('/heroi/update/:id', hero__controller.update__H__cont);
route.delete('/heroi/delete/:id', hero__controller.delete__H__cont);

module.exports = route;
