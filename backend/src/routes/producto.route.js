const { Router } = require("express");
const productoCtrl = require('../controllers/producto.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/listar', productoCtrl.listar);                                     
//route.get('/listid/:id', productoCtrl.listid);                                   
route.post('/add', productoCtrl.add);
route.put('/update/:id', productoCtrl.update);
route.delete('/delete/:id', productoCtrl.delete);

module.exports = route;