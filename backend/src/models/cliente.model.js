const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const clienteSchema = new Schema({  
    n_documento: {
        type: Number,
        required: true,
    },
    tipodedocumento: {
        type: String,
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
    correoelectronico:{
        type: String,
        require: true,
        unique: true,
    },
    direccion:{
        type: String,
       
    },
    telefono:{
        type: Number,
        default: 0,
    },
    razonsocial: {
        type: String,
   
    }

},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

clienteSchema.plugin(mongoosePaginate)

module.exports = model('cliente', clienteSchema);