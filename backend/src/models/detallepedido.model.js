const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const detallesSchema = new Schema({ 

    preciounitario: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    }, 
    total: {
        type: Number,
        required: true,
    },

    producto: [{type:Schema.Types.ObjectId, ref: "producto"}],

    ordenp: [{type:Schema.Types.ObjectId, ref: "ordenp"}]
},
    {
        timestamps: true
    });

detallesSchema.plugin(mongoosePaginate)

module.exports = model('detallepedido', detallesSchema);