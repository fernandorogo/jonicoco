const facturaCtrl = {}
const facturaModel= require(`../models/factura.model`)

facturaCtrl.listar = async (req, res) => {
    try {
        const factura = await facturaModel.find() 
        res.json({
            ok: true,
            factura,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

facturaCtrl.add = async (req, res) => {
    try {
        const { codigofactura, metododepago, fecha, total} = req.body
        const newFactura = new facturaModel({
            codigofactura,
            metododepago,
            fecha,
            total,
            
        })
        await newFactura.save()
        res.json({
            ok: true,
            newFactura,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

facturaCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const factura = await facturaModel.findById({ _id: id })
        if (!factura) {
            return res.status(400).json({
                ok: false,
                message: "La factura no está registrada en la base de datos",
            })
        }

        const codigofactura = req.body.codigofactura || factura.codigofactura
        const metododepago = req.body.metododepago || factura.metododepago
        const fecha = req.body.fecha || factura.fecha
       const total = req.body.total || factura.total

        const facturaUpdate = {
            codigofactura,
            metododepago,
            fecha,
            total
        }
        await factura.updateOne(facturaUpdate)
        res.json({
            ok: true,
            message: 'La factura fue actualizada',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

facturaCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params
        const factura = await facturaModel.findById({ _id: id })
        if (!factura) {
            return res.status(404).json({
                ok: false,
                message: "La factura no existe",
            })
        }

        await factura.deleteOne()
        res.json({
            ok: true,
            message: "La factura fue eliminada de todas partes",
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

module.exports = facturaCtrl
