const req = require("express/lib/request")
const userschema = require("./userSchema")
const res = require("express/lib/response")

const aduser = ((req, res) => {
    let user = new userschema({
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        contact: req.body.contact,
        password: req.body.password,
        image:req.file
    })
    user.save()
        .then((result) => {
            res.json({
                msg: "saved"
            })
        })
        .catch((err) => {
            console.log(err);
        })

})
const viewallusers=((req,res)=>{
    userschema.find()
    .then((result)=>{
        res.json({
            msg:"found",
            data:result
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})
const searchuserbyname=((req,res)=>{
    userschema.findOne({username:req.body.username})
    .then((result)=>{
        res.json({
            msg:"successfully found",
            data:result
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})
const searchbyid=((req,res)=>{
userschema.findById({_id:req.body.id})
.then((result)=>{
    res.json({
        msg:"found",
        data:result
    })
})
.catch((err)=>{
    console.log(err);
})
})
const update=((req,res)=>{
    userschema.findOneAndUpdate({username:req.body.username})
    .then((result)=>{
        if(result==null){
            res.json({
                msg:"no user found"
            })
        }
            else{
                userschema.findOneAndUpdate({username:req.body.username},{email:req.body.email})
                .then((result)=>{
                    res.json({
                    msg:"reset details",
                    data:result
                })
            })
            .catch((err)=>{
                console.log(err);
                
            }) 
            }
        })

    .catch((err)=>{
        console.log(err);
        
    })
})
const loginuser=((req,res)=>{
    let username=req.body.username
    let password=req.body.password
    userschema.findOne({username})
   .then((result)=>{
    if(password==result.password){
           res.json({
        msg:"login has successfully done ",
        data:result
    })
  }
  else{
    res.json({
        msg:"login failed",
    })
  } 
}) 
  .catch((err)=>{
    console.log(err);
    res.json({
        msg:"Username Incorrect"
    })
  })
})
const resetpassword=((req,res)=>{
    userschema.findOne({username:req.body.username})
    .then((result)=>{
        if(result==null){
            res.json({
                msg:"no user found"
            })
        }
        else{
            userschema.findOneAndUpdate({username:req.body.username},{password:req.body.password})
            .then((result)=>{
                res.json({
                    msg:"reset password"
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports={aduser,viewallusers,searchuserbyname,searchbyid,update,loginuser,resetpassword}
   