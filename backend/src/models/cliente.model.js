const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const clienteSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
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
        required: true,
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
        default: 0,
    },
    telefono:{
        type: Number,
        default: 0,
    },

    
    


    

},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

clienteSchema.plugin(mongoosePaginate)

module.exports = model('cliente', clienteSchema);