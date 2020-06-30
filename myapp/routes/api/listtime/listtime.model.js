const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listtimeSchema = new Schema ({
        
        timeslot_id: { type : mongoose.Schema.Types.ObjectId, ref: 'listtimes'},
        time: { type: String, required: true },
        
});

module.exports = mongoose.model('listtimes', listtimeSchema)