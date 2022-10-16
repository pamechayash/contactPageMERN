
import './App.css';
import Axios from 'axios'
import data1 from './data1.json'
import Lottie from 'react-lottie'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function LetsConnect() {
const [data,setdata]=useState({
email:"",
name:"",
subject:"",
message:"",
query:"",


})

const navigate=useNavigate();
const [Userdata,setUserdata]=useState({
  email:"",

name:"",
subject:"",
message:"",
query:"",

})
function navi(){
  
}
async function handleSubmit(){
  let Data={
    email:data.email,

name:data.name,
subject:data.subject,
message:data.message,
query:data.query,

  }
 
 await Axios.post('http://localhost:3001/contact',Data

 ).then(response=>{
   setUserdata({
email:response.data.email,
name:response.data.name,
message:response.data.message,
subject:response.data.subject,
query:response.data.query,
   })
   
  if(Userdata.email){
    navigate("/home",{state:{
      email:Userdata.email,
      name:Userdata.name,
      subject:Userdata.subject,
      query:Userdata.query,
      message:Userdata.message,
    }})
  }



 })







}


function handleChange(e){

e.preventDefault()

const { name, value } = e.target;
setdata(prevState => ({
    ...prevState,
    [name]: value
}));



}
const defaultOptions={
  loop:true,
  autoplay:true,
  animationData:data1,
  
  rendererSettings:{
      preserveAspectRatio: "xMidYMid slice",
  },
}



  return (
    <div className="App">
    

<div className="form">

<h1>Let's Connect</h1>
{<Lottie 
      options={defaultOptions}
     
      style={{transform:"scale(1)",
  margin:"0px 0px",
  padding:"0px 0px",

  }}
      height={300}
     width={300}/>
     

}
<input type='email' placeholder='please enter your email' onChange={handleChange} name='email' value={data.email}/>
<input type='text' placeholder='please enter your name' onChange={handleChange} name='name' value={data.name}/>
<input type='text' placeholder='please enter Subject' onChange={handleChange} name='subject' value={data.subject}/>
<textarea placeholder='please enter Message' onChange={handleChange} name='message' value={data.message}/>
<input type='text' placeholder='please enter your Query' onChange={handleChange} name='query' value={data.query}/>
<button type='submit' onClick={handleSubmit}>Submit</button>




</div>
{Userdata.email}
    </div>

  );
}

export default LetsConnect;
