const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const clientesSchema = new Schema({  
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
        
    },
    segundonombre: {
        type: String,
    
    },
    primerapellido:{
        type: String,
       
    },
    segundoapellido:{
        type: String,
        
    },
    correoelectronico:{
        type: String,
        require: true,
        unique: true,
    },
    direccion:{
        type: String,
       require: true,
    },
    telefono:{
        type: Number,
        default: 0,
        requier:true,
    },
    razonsocial: {
        type: String,
    },

    nombre: {
        type: String,
   
    }

},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

clientesSchema.plugin(mongoosePaginate)

module.exports = model('cliente', clientesSchema);