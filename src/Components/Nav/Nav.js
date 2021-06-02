import React from 'react'
import {Link}from "react-router-dom"
const Nav = () => {
    return (
        <div>
    <nav>
    <ul className="nav-links">
    <li>
        <Link to ="/">
        <h1 style={{color:'white'}}>Home</h1>
        </Link>
        </li>
    <li>
    <Link to ="/products">
        <h1 style={{color:'white'}}>Products</h1>
       </Link>
        </li>
    <li>
    <Link to ="/category">
       <h1 style={{color:'white'}}>Category</h1>
        </Link>
    </li>
    <li>
    <Link to ="/login">
      <h1 style={{color:'white'}}>Admin Area</h1>
        </Link>
        </li>
    </ul>
</nav>
        </div>
    )
}

export default Nav
