const { Router } = require("express");
const clientesCtrl = require('../controllers/clientes.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/listar', clientesCtrl.listar);                                     
//route.get('/listid/:id', clienteCtrl.listid);                                   
route.post('/add', clientesCtrl.add);
route.put('/update/:id', clientesCtrl.update);
route.delete('/delete/:id', clientesCtrl.delete);

module.exports = route;