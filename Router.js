const express=require('express')
const Router=express.Router()
const userController=require("./Modules/User/userController")
Router.post("/aduser",userController.aduser)
Router.get("/viewall",userController.viewallusers)
Router.post("/searchbyname",userController.searchuserbyname)
Router.post("/searchid",userController.searchbyid)
Router.post("/update",userController.update)
Router.post("/login",userController.loginuser)
Router.post("/reset",userController.resetpassword)

module.exports=Router