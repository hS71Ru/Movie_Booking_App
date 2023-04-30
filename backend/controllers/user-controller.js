const getAllUser= async(req, res, next)=>{
    let users;
    
    try{
            users= await User.find();
    }catch(err){
        return next(err);
    }
    if(!users){
        return res.status(500).json({message:"Unexceptrd error"})
    }

    return res.status(200).json({users})
}
module.exports={getAllUser}