const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const usuarioSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    tipodocumento: {
        type: String,
        required: true,
    },
    numerodocumento: {
        type: Number,
        required: true,
    },
    
    primernombre: {
        type: String,
        required: true,
    },
    segundonombre: {
        type: String,
      
    },
    primerapellido:{
        type: String,
        required: true
    },
    segundoapellido:{
        type: String,
        require: true,
    },
   
    telefono:{
        type: Number,
        default: 0,
    },
   contraseña:{
        type: String,
        require: true
    },
    rolusuario:{
        type: String,
        required: true
    }
 

   // ordenp: [{type:Schema.Types.ObjectId, ref: "ordenp"}],
   // detallepedido: [{type:Schema.Types.ObjectId, ref: "detallepedido"}],
    //factura: [{type:Schema.Types.ObjectId, ref: "factura"}]
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

usuarioSchema.plugin(mongoosePaginate)

module.exports = model('usuario', usuarioSchema);