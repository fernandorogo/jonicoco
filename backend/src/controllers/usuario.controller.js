const usuarioCtrl ={}
const usuarioModel= require(`../models/usuario.model`)

usuarioCtrl.listar= async (req,res) => {
    try {
        const usuario = await usuarioModel.find().populate("detallepedido").populate("ordenp").populate("factura");
        res.json({
            ok: true,
            usuario,
        });
    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

usuarioCtrl.add= async (req,res) => {
    try {
        const { primernombre , segundonombre, primerapellido, segundoapellido, tipodocumento, numerodocumento,correoelectronico, direccion,telefono,contrasena,email, ordenp,detallepedido,factura} = req.body
        const newUsuario = new usuarioModel({
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            tipodocumento,
            numerodocumento,
            correoelectronico,
            direccion,
            telefono,
            contrasena,
            email,
            
            ordenp,
            detallepedido,
            factura
        });
        await newUsuario.save();
        res.json({
            ok: true,
            newUsuario

        })

    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

usuarioCtrl.update=async (req,res)=>{
    try {
        const { id }=req.params
        const usuario=await usuarioModel.findById({_id:id})
        if (!usuario){
            return res.status(400).json({
                ok:false,
                message:"el usuario no esta registrado en la base de datos"

            })
        }

        const primernombre = req.body.primernombre || usuario.primernombre
        const segundonombre = req.body.segundonombre || usuario.segundonombre
        const primerapellido = req.body.primerapellido || usuario.primerapellido
        const segundoapellido = req.body.segundoapellido || usuario.segundoapellido
        const tipodocumento = req.body.tipodocumento || usuario.tipodocumento
        const numerodocumento = req.body.numerodocumento || usuario.numerodocumento
        const correoelectronico = req.body.correoelectronico || usuario.correoelectronico
        const direccion = req.body.direccion || usuario.direccion
        const telefono = req.body.telefono || usuario.telefono
        const contrasena = req.body.contrasena || usuario.contrasena
        const email = req.body.email || usuario.email
        const ordenp= req.body.ordenp   || usuario.ordenp
        const detallepedido= req.body.detallepedido  || usuario.detallepedido
        const factura = req.body.factura  || usuario.factura



        const usuarioUpdate = {
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            tipodocumento,
            numerodocumento,
            correoelectronico,
            direccion,
            telefono,
            contrasena,
            email,
            ordenp,
            detallepedido,
            factura

        }
        await usuario.updateOne(usuarioUpdate)
        res.json({
            ok: true,
            message: 'Elusuario fue actualizado'
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

usuarioCtrl.delete= async(req,res)=>{
    try {
        const{id}=req.params;
        const usuario=await usuarioModel.findById({_id:id})
        if (!usuario){
            return res.status(404).json({
                ok:false,
                message:"el usuario no existe"
            })
        }

        await usuario.deleteOne()
        res.json({
            ok:true,
            message:"el usuario fue eliminado de todas partes"
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

module.exports = usuarioCtrl;