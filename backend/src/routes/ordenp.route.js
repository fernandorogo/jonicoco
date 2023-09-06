const { Router } = require("express");
const ordenpCtrl = require('../controllers/ordenp.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/listar', ordenpCtrl.listar);                                     
//route.get('/listid/:id', ordenpCtrl.listid);                                   
route.post('/add', ordenpCtrl.add);
route.put('/update/:id', ordenpCtrl.update);
route.delete('/delete/:id', ordenpCtrl.delete);

module.exports = route;





