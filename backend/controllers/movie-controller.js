const addMovie=async(req,res,next)=>{
    const extractedToken=req.headers.authorization.split(" ")[1];

    if(!extractedToken && extractedToken.trim() === ""){
        return res.status(404).json({message:"Token not Found"}); 
    }

    console.log(extractedToken);
};

module.exports={addMovie}