// const Seller = require("../../api/seller/seller.model");
const Seller = require('./seller.model');
exports.listSellers = async function (req,res) {
    try{
        let sellers = await Seller.find();
        console.log("lists",sellers);
        return res.json({status:true,sellers});  
}
catch (error) {
    console.log("error while listing sellers",error);
    return res.status(500).json({status : false,error});
}
};
exports.getSeller = async function (req,res){
    try{
        let seller =await Seller.findById(req.params.id);
        return res.json({status:true,seller});
    }
    catch(error){
        console.log("error while listing sellers",error);
    return res.status(500).json({status : false,error});
    }
    }

