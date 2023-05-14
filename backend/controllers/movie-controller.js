//const mongoose=require('mongoose');
const jwt=require("jsonwebtoken");
const Movie=require("../models/Movies");
const admin=require("../models/Admin");

const addMovie=async(req,res,next)=>{
    const extractedToken=req.headers.authorization.split(" ")[1];

    if(!extractedToken && extractedToken.trim() === ""){
        return res.status(404).json({message:"Token not Found"}); 
    }
    console.log(extractedToken);

    let adminId;
    
    //verify Token
    jwt.verify(extractedToken, process.env.SECRET_KEY, (err,decrypted)=>{
        if(err){
            return res.status(400).json({message:"Invalid Token"})
        }else{
            adminId=decrypted.id;
            return;

        }
    })
    //create new Movie

    const { title, description, releaseDate, posterUrl, featured, actors }=req.body;
    if(!title && title.trim()==="" &&
    !description && description.trim()==="" &&
    !posterUrl && posterUrl.trim()==="" ){
    return res.status(422).json({message:"Invalid Inputs"})
    }

    let movie;
    try{
        movie=new Movie({
            title,
            description,
            releaseDate: new Date(`${releaseDate}`), 
            posterUrl, 
            featured,
            actors,
            admin:adminId});  
    movie= await movie.save()
    }catch(err){
        return console.log(err);
    }

    if(!movie){
        return res.status(500).json({message:"Request Failed "})
    }

    return res.status(201).json({movie})
};


module.exports={addMovie}