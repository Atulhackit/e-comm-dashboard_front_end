import React, { Fragment, useEffect, useState } from 'react'
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const collectFormData = async () => {
    let result = await fetch("https://enchanting-jade-toga.cyclic.app/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    result = await result.json()
    // console.log("result", result)

    localStorage.setItem("user", JSON.stringify(result))
    if (result) {
      navigate("/")
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    }
  })

  return (
    <div className='loginContainer'>
      <div className='mainContainer'>
        <header className='loginHead'>
          <p> Register</p>
        </header>
        <section className='loginForm'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          <button onClick={collectFormData} className='loginBtn'>Sign Up</button>

        </section>
        <div className='signupBottom'>
          <p>or</p>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp