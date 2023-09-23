const clienteCtrl ={}
const clienteModel= require(`../models/cliente.model`)

clienteCtrl.listar= async (req,res) => {
    try {
        const cliente = await clienteModel.find();
        res.json({
            ok: true,
            cliente,
        });
    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

clienteCtrl.add= async (req,res) => {
    try {
        const { n_documento , tipodedocumento, primernombre, segundonombre, primerapellido, segundoapellido,correoelectronico, direccion, telefono, razonsocial } = req.body
        const newCliente = new clienteModel({
            n_documento,
            tipodedocumento,
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            correoelectronico,
            direccion,
            telefono,
            razonsocial
            
        });
        await newCliente.save();
        res.json({
            ok: true,
            newCliente

        })

    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

clienteCtrl.update=async (req,res)=>{
    try {
        const { id }=req.params
        const cliente=await clienteModel.findById({_id:id})
        if (!cliente){
            return res.status(400).json({
                ok:false,
                message:"El cliente no esta registrado en la base de datos"

            })
        }

        const n_documento = req.body.n_documento || cliente.n_documento
        const tipodedocumento = req.body.tipodedocumento || cliente.tipodedocumento
        const primernombre = req.body.primernombre || cliente.primernombre
        const segundonombre = req.body.segundonombre || cliente.segundonombre
        const primerapellido = req.body.primerapellido || cliente.primerapellido
        const segundoapellido = req.body.segundoapellido || cliente.segundoapellido
        const correoelectronico = req.body.correoelectronico || cliente.correoelectronico
        const direccion = req.body.direccion || cliente.direccion
        const telefono = req.body.telefono || cliente.telefono
        const razonsocial = req.body.razonsocial || cliente.razonsocial
       



        const clienteUpdate = {
            n_documento,
            tipodedocumento,
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            correoelectronico,
            direccion,
            telefono,
            razonsocial
            
        }
        await cliente.updateOne(clienteUpdate)
        res.json({
            ok: true,
            message: 'El cliente fue actualizado'
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

clienteCtrl.delete= async(req,res)=>{
    try {
        const{id}=req.params;
        const cliente=await clienteModel.findById({_id:id})
        if (!cliente){
            return res.status(404).json({
                ok:false,
                message:"El cliente no existe"
            })
        }

        await cliente.deleteOne()
        res.json({
            ok:true,
            message:"El cliente fue eliminado de todas partes"
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

module.exports = clienteCtrl;