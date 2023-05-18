const express= require('express');
const { getAllUser,signup,updateUser, deleteUser,login, getBookingofUser,getUserById} = require('../controllers/user-controller');

const userRouter= express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/signup",signup);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login);
userRouter.get("/booking/:id",getBookingofUser);
userRouter.get("/:id",getUserById);

module.exports= userRouter;