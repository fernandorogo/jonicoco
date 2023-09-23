const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const productoSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
  
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    presentacion: {
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true
    }
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

productoSchema.plugin(mongoosePaginate)

module.exports = model('producto', productoSchema);