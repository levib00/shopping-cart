import React from "react"
import { Link } from "react-router-dom"

export const Nav = (props) => {
  return (
    <header>
      <span> <img src={require("../assets/images/logo.png")} alt='Terragroup logo'></img>Terragroup Access </span>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
    </header>
  )
}