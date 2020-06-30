const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeslotSchema = new Schema ({
        
        seller_id: { type : mongoose.Schema.Types.ObjectId, ref: 'sellers'},
        // date: { type: Date, required: true },
        date: { type: String, required: true },
        status: { type : String, required: true },
});

module.exports = mongoose.model('timeslots', timeslotSchema)