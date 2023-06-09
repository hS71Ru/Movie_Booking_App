//hs72ru
//Ud0DWBxIpfipEwVJ

const express=require('express');
const app = express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRouter=require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();


//Port Number
const PORT=process.env.PORT ||3500


const cors=require('cors');
app.use(cors());
app.use((req,res,next)=>{
    res.header('Acess-Control-Allow-Origin','*');
    res.header('Acess-Control-Allow-Methods','GET','POST','PUT','DELETE');
    res.header('Acess-Control-Allow-Headers','Content-Type,Authorization');
    next();
})
//middleware section
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);




//created first API ,just for testing purpose.
// app.use("/",(req,res,next)  => {
//     res.end("<h1>Welcome Guys</h1>");    //method to fetch api routes
// } ) 

// mongoose.connect('mongodb+srv://hs72ru:Ud0DWBxIpfipEwVJ@cluster1.ndekvys.mongodb.net/Movies?retryWrites=true&w=majority').then(()=>{console.log("DB Connected");
// })

mongoose.connect(`${process.env.DATABASE}`)

app.listen(PORT, ()=>{
    console.log(`Database Connected.`);
})

