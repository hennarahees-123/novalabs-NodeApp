const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellerSchema = new Schema ({
        firstname : { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type : Number, required: true },
});

module.exports = mongoose.model('sellers', sellerSchema)