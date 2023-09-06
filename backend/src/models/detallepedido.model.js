const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const detallesSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    preciounitario: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    }, 

    producto: [{type:Schema.Types.ObjectId, ref: "producto"}],
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

detallesSchema.plugin(mongoosePaginate)

module.exports = model('detallepedido', detallesSchema);