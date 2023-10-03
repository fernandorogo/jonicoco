const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const ordenSchema = new Schema({  
    ordenpedido:{
        type: Number,
        default:0,
    },
    estadocompra: {
        type: String,
        
    },
    fechacreacion: {
        type: String,
        
    },
    fechadespacho: {
        type: String,
    },
    precio: {
        type: Number,
        
    },
    totalpedido: {
        type: Number,
        
    },
    
  
    //cliente: [{type:Schema.Types.ObjectId, ref: "cliente"}],
   // detallepedido: [{type:Schema.Types.ObjectId, ref: "detallepedido"}]
    // usuario: [{type:Schema.Types.ObjectId, ref: "usuario"}]
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

ordenSchema.plugin(mongoosePaginate)

module.exports = model('ordenp', ordenSchema);