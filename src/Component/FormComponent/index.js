import { useState } from "react";
import { React } from "react";
import axios from "axios"


const Myform = () => {
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");

const handleSubmit=async (event)=>{
    event.preventDefault();
    try{
        await axios.post("https://jsonplaceholder.typicode.com/post/1",{name,email,password}
        )
        console.log(name,email,password)
    }catch(error){
        console.log("ignore it")
    }

   

}

const handleName=(event)=>{
    setname(event.target.value)
}
const handleEmail=(event)=>{
    setemail(event.target.value)
}
const handlePassword=(event)=>{
    setpassword(event.target.value)
}

return(
    <div>
    <h2>Normal Form</h2>
<form onSubmit={handleSubmit}>
<span>Name     : </span>
<input
    id="name"
    name="name"
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={handleName}

/><br></br>
<span>Email    : </span>
<input
    id="email"
    name="email"
    type="email"
    placeholder="Your Email"
    value={email}
    onChange={handleEmail}

/><br></br>
<span>Password : </span>
<input
    id="password"
    name="password"
    type="password"
    placeholder="Your Password"
    value={password}
    onChange={handlePassword}

/><br></br>
<input type="submit" value="submit"/>

</form>
        hello world
    </div>
)

}

export default Myform;