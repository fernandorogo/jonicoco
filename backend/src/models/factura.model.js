const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const FacturaSchema = new Schema({

    codigofactura: {
        type: Number,
        required: true,
    },
    metododepago: {
        type: String,
        required: true,
    }, 
    fecha: {
        type: String,
        required: true,
    }, 
    total: {
        type: Number,
        required: true
    }



   //ordenp: [{type:Schema.Types.ObjectId, ref: "ordenp"}],
    //detallepedido: [{type:Schema.Types.ObjectId, ref: "detallepedido"}]

},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

FacturaSchema.plugin(mongoosePaginate)

module.exports = model('factura', FacturaSchema);