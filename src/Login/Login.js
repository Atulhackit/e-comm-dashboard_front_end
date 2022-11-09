import React, { Fragment, useState } from 'react'
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import "./Login.scss"
const Login = () => {

  const [formData, setFormData] =useState(
    {
      name:"",
      email:"",
      password:""
    }
  )
  const collectFormData =()=>{
    console.log(formData)
  }
  return (
    <div className='loginContainer'>
      <div className='mainContainer'> 
        <header className='loginHead'>
          <p> Register</p>
        </header>
        <section className='loginForm'>
            <input type="text" value={formData.name} onChange={(e)=>setFormData({name:e.target.value})} placeholder="Enter Your Name"/>
            <input type="text" value={formData.email} onChange={(e)=>setFormData({email:e.target.value})} placeholder="Enter Your Email"/>
            <input type="password" value={formData.password} onChange={(e)=>setFormData({password:e.target.value})} placeholder="Enter Password"/>
            <button onClick={collectFormData} className='loginBtn'>Sign Up</button>
        </section>
      </div>
    </div>
  )
}

export default Login