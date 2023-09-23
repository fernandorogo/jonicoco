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
        const {nombre, descripcion, presentacion, precio} = req.body
        const newProducto = new productoModel({
            
            nombre, 
            descripcion,
            presentacion,
            precio
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
        
       
        const nombre = req.body.nombre || producto.nombre
        const descripcion= req.body.descripcion || producto.descripcion
        const presentacion = req.body.presentacion || producto.presentacion
        const precio = req.body.precio ||  producto.precio
        


        const productoUpdate = {
            nombre, 
            descripcion,
            presentacion,
            precio

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