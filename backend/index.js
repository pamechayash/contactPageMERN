const bodyParser = require('body-parser')
const cors=require('cors');
const express=require('express')
const app=express();
const router=express.Router();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
require("dotenv").config();

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/contactInfo")
const schema=mongoose.Schema({
    email: String,
    name: String,
    subject: String,
    message: String,
    query: String,


})
// class setOfdata{
// constructor(){
//   this.email="",
//   this.name="",
//   this.message="",
//   this.query="",
//   this.subject=""
// }
// set(email,name,message,query,subject){
//   this.email=email,
//   this.name=name,
//   this.message=message,
//   this.query=query,
//   this.subject=subject
// }

// }
// let dt=new setOfdata();
const information=mongoose.model("information",schema);
app.listen(3001,(req,res)=>{
    
    console.log("running");
})



app.post('/contact',(request,response)=>{
let data=request.body;
 let email=data.email;
 let name=data.name;
 let subject=data.subject;
 let message=data.message;
 let query=data.query;

let content=  new information({
  
 email:email,
  name:name,
subject:subject,
 message:message,
  query:query,
})
content.save().then(async res=>{
  let retrievedData=await information.find({email:email,name:name,
    subject:subject,
     message:message,
      query:query})
  console.log(retrievedData)
response.send(retrievedData[0]);

  
})




})
// app.get("/get",(request,response)=>{
//   let data=information.find()
//   response.send(data);
// })








