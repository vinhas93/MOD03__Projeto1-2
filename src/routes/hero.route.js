const route = require('express').Router();
const hero__controller = require('../controllers/hero.controller');

route.get('/lista-herois', hero__controller.find__all__H__cont);
route.get('/:id', hero__controller.find__H__by__id__cont);
route.get('/filter/:classe', hero__controller.find__H__by__classe__cont);

route.post('/create', hero__controller.create__H__cont);
route.put('/update/:id', hero__controller.update__H__cont);
route.delete('/delete/:id', hero__controller.delete__H__cont);

module.exports = route;
