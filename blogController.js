const blogSchema=require("./blogSchema")
const addblog=((req,res)=>{
let blog=new blogSchema({
    title:req.body.title,
    content:req.body.content
})
blog.save()
.then((req,res)=>{
    res.json({
        msg:"saved"
    })
})
.catch((req,res)=>{
    console.log(err)
})
})
module.exports={addblog}