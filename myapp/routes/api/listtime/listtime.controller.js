
const ListTime = require('./listtime.model');
exports.listListTimes = async function (req,res) {
    try{
        let listtimes = await ListTime.find();
         console.log("henna",listtimes);
        return res.json({status:true,listtimes}); 
}
catch (error) {
    console.log("error while listing sellers",error);
    return res.status(500).json({status : false,error});
}
};
exports.getListTime = async function (req,res){
    try{
        let id = req.params.id;
        var ObjectId = require('mongoose').Types.ObjectId; 
        var query = { timeslot_id: new ObjectId(id) };
        let listtimes = await ListTime.find(query);
        return res.json({status:true,listtimes});
       
    }
    catch(error){
        // console.log("error while listing sellers",error);
    return res.status(500).json({status : false,error});
    }
    }

