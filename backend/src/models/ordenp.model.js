const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const ordenSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    codigopedido:{
        type: Number,
        default:0,
    },
    estadocompra: {
        type: String,
        required: true,
    },
    fechacreacion: {
        type: String,
        required: true,
    },
    preciototal: {
        type: Number,
        required: true,
    },
    
  
    cliente: [{type:Schema.Types.ObjectId, ref: "cliente"}],
    detallepedido: [{type:Schema.Types.ObjectId, ref: "detallepedido"}]
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

ordenSchema.plugin(mongoosePaginate)

module.exports = model('ordenp', ordenSchema);