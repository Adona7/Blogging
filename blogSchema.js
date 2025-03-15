const mongoose=require("./mongoose")
const blogSchema=new mongoose.schema({})
module.exports=new mongoose.model("blog",blogSchema)