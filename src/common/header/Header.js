import React from 'react'
import {Link,Router} from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return (
    <div className='headerWrapper'>
       <ul className='navItems'> 
            <li><Link className='item' to="/">Dashboard</Link></li>
            <li><Link className='item' to="/addPorduct">Add Product</Link></li>
            <li><Link className='item' to="/updateProduct">Update Product</Link></li>
            <li><Link className='item' to="/about">About</Link></li>
            <li><Link className='item' to="/signUp">Sign Up</Link></li>
       </ul>
    </div>
  )
}

export default Header