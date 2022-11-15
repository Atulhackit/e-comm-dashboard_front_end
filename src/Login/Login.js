import React, { Fragment, useState } from 'react'
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import "./Login.scss"
import { useNavigate ,Link, json} from 'react-router-dom'

const LogIn = () => {

  const [name, setName] =useState("")
  const [email,setEmail]= useState("")
  const [password, setPassword] = useState("")
  const navigate =useNavigate()
  const collectFormData=async()=>{
    let result = await fetch("http://localhost:5000/login",{
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
      navigate("/") 
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
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button onClick={collectFormData} className='loginBtn'>LogIn</button>
        </section>
        <div className='signupBottom'>
          <p>or</p>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default LogIn