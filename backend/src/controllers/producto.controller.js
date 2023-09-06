const productoCtrl ={}
const productoModel = require(`../models/producto.model`)

productoCtrl.listar= async (req,res) => {
    try {
        const producto = await productoModel.find();
        res.json({
            ok: true,
            producto,
        });
    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

productoCtrl.add= async (req,res) => {
    try {
        const { codigo,nombre, descripcion, presentacion, preciobase } = req.body
        const newProducto = new productoModel({
            codigo,
            nombre, 
            descripcion,
            presentacion,
            preciobase
        });
        await newProducto.save();
        res.json({
            ok: true,
            newProducto

        })

    } catch (error) {
        res.status(500).json ({
            ok: false,
            message: error.message,
        });
    }
};

productoCtrl.update=async (req,res)=>{
    try {
        const { id }=req.params
        const producto=await productoModel.findById({_id:id})
        if (!producto){
            return res.status(400).json({
                ok:false,
                message:"el producto no esta registrado en la base de datos"

            })
        }
        const codigo = req.body.codigo || producto.codigo 
        const nombre = req.body.nombre || producto.nombre
        const descripcion= req.body.descripcion || producto.descripcion
        const presentacion = req.body.presentacion || producto.presentacion
        const preciobase = req.body.preciobase ||  producto.preciobase
        


        const productoUpdate = {
            codigo,
            nombre, 
            descripcion,
            presentacion,
            preciobase

        }
        await producto.updateOne(productoUpdate)
        res.json({
            ok: true,
            message: 'El producto fue actualizado'
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

productoCtrl.delete= async(req,res)=>{
    try {
        const{id}=req.params;
        const producto=await productoModel.findById({_id:id})
        if (!producto){
            return res.status(404).json({
                ok:false,
                message:"el producto no existe"
            })
        }

        await producto.deleteOne()
        res.json({
            ok:true,
            message:"el producto fue eliminado de todas partes"
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
}

module.exports = productoCtrl;