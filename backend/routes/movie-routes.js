const express=require('express');
const{addMovie , getAllMovie ,getMovieById }=require('../controllers/movie-controller');

const movieRouter=express.Router();

movieRouter.post("/",addMovie); 
movieRouter.get("/",getAllMovie);
movieRouter.get("/:id",getMovieById);

module.exports=movieRouter;