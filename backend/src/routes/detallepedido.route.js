const { Router } = require("express");
const detallepedidoCtrl =require ("../controllers/detallepedido.controller")
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/listar', detallepedidoCtrl.listar);                                     
//route.get('/listid/:id', detallepedidoCtrl.listid);                                   
route.post('/add', detallepedidoCtrl.add);
route.put('/update/:id', detallepedidoCtrl.update);
route.delete('/delete/:id', detallepedidoCtrl.delete);

module.exports = route;