import React from "react"

export const Nav = (props) => {
  return (
    <header>
      <span> <img src={require("../images/logo.png")} alt='Terragroup logo'></img>Terragroup Access </span>
      <ul>
        <li>Home</li>
        <li>Shop</li>
      </ul>
    </header>
  )
}