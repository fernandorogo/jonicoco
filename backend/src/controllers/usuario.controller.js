const usuarioCtrl ={}
const usuarioModel= require(`../models/usuario.model`)

usuarioCtrl.listar= async (req,res) => {
    try {
        const usuario = await usuarioModel.find();
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
        const { tipodocumento, numerodocumento, primernombre , segundonombre, primerapellido, segundoapellido, telefono, contraseña, rolusuario} = req.body
        const newUsuario = new usuarioModel({
            tipodocumento,
            numerodocumento,
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            telefono,
            contraseña,
            rolusuario
          
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
                message:"El usuario no esta registrado en la base de datos"

            })
        }
        
        const tipodocumento = req.body.tipodocumento || usuario.tipodocumento
        const numerodocumento = req.body.numerodocumento || usuario.numerodocumento
        const primernombre = req.body.primernombre || usuario.primernombre
        const segundonombre = req.body.segundonombre || usuario.segundonombre
        const primerapellido = req.body.primerapellido || usuario.primerapellido
        const segundoapellido = req.body.segundoapellido || usuario.segundoapellido
        const telefono = req.body.telefono || usuario.telefono
        const contraseña = req.body.contraseña || usuario.contraseña
        const rolusuario = req.body.rolusuario || usuario.rolusuario



        const usuarioUpdate = {
            tipodocumento,
            numerodocumento,
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            telefono,
            contraseña,
            rolusuario
        }
        await usuario.updateOne(usuarioUpdate)
        res.json({
            ok: true,
            message: 'El usuario fue actualizado'
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
                message:"El usuario no existe"
            })
        }

        await usuario.deleteOne()
        res.json({
            ok:true,
            message:"El usuario fue eliminado de todas partes"
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

module.exports = usuarioCtrl;