const { Router } = require("express");
const usuarioCtrl = require('../controllers/usuario.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/listar', usuarioCtrl.listar);                                     
//route.get('/listid/:id', usuarioCtrl.listid);                                   
route.post('/add', usuarioCtrl.add);
route.put('/update/:id', usuarioCtrl.update);
route.delete('/delete/:id', usuarioCtrl.delete);

module.exports = route;