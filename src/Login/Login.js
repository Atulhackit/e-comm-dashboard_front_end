import React, { useState } from 'react'
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import "./Login.scss"
import { useNavigate ,Link, json} from 'react-router-dom'

const LogIn = () => {

  const [name, setName] =useState(" ")
  const [email,setEmail]= useState("")
  const [password, setPassword] = useState("")
  // const navigate =useNavigate()
  const collectFormData=async()=>{
    let result = await fetch("https://enchanting-jade-toga.cyclic.app/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type" : "application/json"
      },
    })
    result = await result.json()
    
    if(result.name){
      localStorage.setItem("user", JSON.stringify(result))
      console.log(result)
      window.location.href="/"
      // navigate("/") 
    }else{
      alert("enter correct Details")
    }

  }
  return (
    <div className='loginContainer'>
      <div className='mainContainer'> 
        <header className='loginHead'>
          <p> LogIn</p>
        </header>
        <section className='loginForm'>
            {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/> */}
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
            <button onClick={collectFormData} className='loginBtn'>LogIn</button>
        </section>
        <div className='signupBottom'>
          <p>or</p>
          {/* <Link to="/signUp">Sign Up</Link> */}
        </div>
      </div>
    </div>
  )
}

export default LogIn