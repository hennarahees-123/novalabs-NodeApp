
const TimeSlot = require('./timeslot.model');
exports.listTimeSlots = async function (req,res) {
    try{
        let timeslots = await TimeSlot.find();
        let id = req.params.id;
        return res.json({status:true,timeslots}); 
}
catch (error) {
    console.log("error while listing sellers",error);
    return res.status(500).json({status : false,error});
}
};
exports.getTimeSlot = async function (req,res){
    try{
       
        let id = req.params.id;
        var ObjectId = require('mongoose').Types.ObjectId; 
        var query = { seller_id: new ObjectId(id) };
        let timeslots = await TimeSlot.find(query);
        return res.json({status:true,timeslots});
       
    }
    catch(error){
        // console.log("error while listing sellers",error);
    return res.status(500).json({status : false,error});
    }
    }

