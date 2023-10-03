const clientesCtrl ={}
const clientesModel= require(`../models/clientes.model`)

clientesCtrl.listar= async (req,res) => {
    try {
        const clientes = await clientesModel.find();
        res.json({
            ok: true,
            clientes,
        });
    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

clientesCtrl.add= async (req,res) => {
    try {
        const { n_documento , tipodedocumento, primernombre, segundonombre, primerapellido, segundoapellido,correoelectronico, direccion, telefono, razonsocial,nombre } = req.body
        const newclientes = new clientesModel({
            n_documento,
            tipodedocumento,
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            correoelectronico,
            direccion,
            telefono,
            razonsocial,
            nombre
            
        });
        await newclientes.save();
        res.json({
            ok: true,
            newclientes

        })

    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

clientesCtrl.update=async (req,res)=>{
    try {
        const { id }=req.params
        const clientes=await clientesModel.findById({_id:id})
        if (!clientes){
            return res.status(400).json({
                ok:false,
                message:"El clientes no esta registrado en la base de datos"

            })
        }

        const n_documento = req.body.n_documento || clientes.n_documento
        const tipodedocumento = req.body.tipodedocumento || clientes.tipodedocumento
        const primernombre = req.body.primernombre || clientes.primernombre
        const segundonombre = req.body.segundonombre || clientes.segundonombre
        const primerapellido = req.body.primerapellido || clientes.primerapellido
        const segundoapellido = req.body.segundoapellido || clientes.segundoapellido
        const correoelectronico = req.body.correoelectronico || clientes.correoelectronico
        const direccion = req.body.direccion || clientes.direccion
        const telefono = req.body.telefono || clientes.telefono
        const razonsocial = req.body.razonsocial || clientes.razonsocial
        const nombre = req.body.nombre || clientes.nombre
       
       

        
        const clientesUpdate = {
            n_documento,
            tipodedocumento,
            primernombre,
            segundonombre,
            primerapellido,
            segundoapellido,
            correoelectronico,
            direccion,
            telefono,
            razonsocial,
            nombre
            
        }
        await clientes.updateOne(clientesUpdate)
        res.json({
            ok: true,
            message: 'El clientes fue actualizado'
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

clientesCtrl.delete= async(req,res)=>{
    try {
        const{id}=req.params;
        const clientes=await clientesModel.findById({_id:id})
        if (!clientes){
            return res.status(404).json({
                ok:false,
                message:"El clientes no existe"
            })
        }

        await clientes.deleteOne()
        res.json({
            ok:true,
            message:"El clientes fue eliminado de todas partes"
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

module.exports = clientesCtrl;