import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Header.scss"

const Header = () => {
  const auth = localStorage.getItem("user")
  const navigate = useNavigate()
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
            <li><Link className='item' to="/about">About</Link></li>
            {
            auth 
            ?<li> <Link  onClick={logOut} className='item' to="/">Log Out</Link> </li>
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