import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Header.scss"

const Header = () => {
  let auth = localStorage.getItem("user")
  auth= JSON.parse(auth)
  const navigate = useNavigate()
  console.log(auth)
  const logOut = () =>{
    localStorage.clear()
    // navigate("/signUp")

  }
  return (
    <div className='headerWrapper'>
       <ul className='navItems'> 
            <li><Link className='item' to="/">Dashboard</Link></li>
            <li><Link className='item' to="/addPorduct">Add Product</Link></li>
            {/* <li><Link className='item' to="/updateProduct/:id">Update Product</Link></li> */}
            {/* <li><Link className='item' to="/about">About</Link></li> */}

            {
              auth 
              ?<li> <Link  onClick={logOut} className='item' to="/">Log Out <span>( {auth?.name} )</span> </Link> </li>
              : <>
              <li><Link className='item' to="/signUp">Sign Up </Link></li>
              <li><Link className='item' to="/login">Log In </Link></li>
            </>
            }
            
       </ul>
    </div>
  )
}

export default Header