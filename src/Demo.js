import React, { useState } from 'react'
import { useNavigate ,Link, json} from 'react-router-dom'

const Demo = () => {
    const [name, setName] =useState(" ")
  const [email,setEmail]= useState("")
  const [password, setPassword] = useState("")
//   const navigate =useNavigate()

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
    //   navigate("/") 
    }else{
      alert("enter correct Details")
    }

  }
  return (
    // <div>Demo
    //     <form>
    //         <input type={"email"} placeholder="Enter Email"/>
    //         <input type={"password"} placeholder="Enter password"/>
    //     <button>1</button>
    //     <button>2</button>
    //     </form>
    // </div>
    <div className='loginContainer'>
      <div className='mainContainer'> 
        <header className='loginHead'>
          <p> Demo</p>
        </header>
        <section className='loginForm'>
            {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/> */}
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
            <button  className='loginBtn'>LogIn</button>
        </section>
        <div className='signupBottom'>
          <p>or</p>
        </div>
      </div>
    </div>
  )
}

export default Demo