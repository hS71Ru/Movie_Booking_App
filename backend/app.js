//hs72ru
//Ud0DWBxIpfipEwVJ

const express=require('express');
const app = express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRouter=require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
dotenv.config();

//middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);



//created first API ,just for testing purpose.
// app.use("/",(req,res,next)  => {
//     res.end("<h1>Welcome Guys</h1>");    //method to fetch api routes
// } ) 

mongoose.connect('mongodb+srv://hs72ru:Ud0DWBxIpfipEwVJ@cluster1.ndekvys.mongodb.net/Movies?retryWrites=true&w=majority')

app.listen(3500, ()=>{
    console.log('Connected to localhost post ${3500}');
})

