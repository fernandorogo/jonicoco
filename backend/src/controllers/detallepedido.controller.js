const detallepedidoCtrl = {}
const detallepedidoModel= require(`../models/detallepedido.model`)

detallepedidoCtrl.listar = async (req, res) => {
    try {
        const detallepedido = await detallepedidoModel.find().populate("producto").populate("ordenp")
        res.json({
            ok: true,
            detallepedido,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

detallepedidoCtrl.add = async (req, res) => {
    try {
        const { preciounitario, cantidad, total, producto, ordenp } = req.body
        const newDetallesPedido = new detallepedidoModel({
            preciounitario,
            cantidad,
            total,
            producto,
            ordenp
        })
        await newDetallesPedido.save()
        res.json({
            ok: true,
            newDetallesPedido,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

detallepedidoCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const detallepedido = await detallepedidoModel.findById({ _id: id })
        if (!detallepedido) {
            return res.status(400).json({
                ok: false,
                message: "Los detalles del pedido no están registrados en la base de datos",
            })
        }

        const preciounitario= req.body.preciounitario || detallepedido.preciounitario
        const cantidad = req.body.cantidad || detallepedido.cantidad
        const total = req.body.total || detallepedido.total
        const producto= req.body.producto || detallepedido.producto
        const ordenp = req.body.ordenp || detallepedido.ordenp

        const detallepedidoUpdate = {
            preciounitario,
            cantidad,
            total,
            producto,
            ordenp
        }
        await detallepedido.updateOne(detallepedidoUpdate)
        res.json({
            ok: true,
            message: 'Los detalles del pedido fueron actualizados',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

detallepedidoCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params
        const detallepedido = await detallepedidoModel.findById({ _id: id })
        if (!detallepedido) {
            return res.status(404).json({
                ok: false,
                message: "Los detalles del pedido no existen",
            })
        }

        await detallepedido.deleteOne()
        res.json({
            ok: true,
            message: "Los detalles del pedido fueron eliminados de todas partes",
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

module.exports = detallepedidoCtrl
