import React from "react"
import { Link } from "react-router-dom"
import wallet from '../assets/images/wallet.svg'
import '../styles/styles.css'

export const Nav = (props) => {
  return (
    <header className='header'>
      <Link className="route-link" to='/'>
        <span className='hero'>
          <img className='hero-img' src={require("../assets/images/logo.png")} alt='Terragroup logo'></img> 
          <div>Terragroup Access</div> 
        </span>
      </Link>
      <ul className='route-link-container'>
        <li className="route-listing">
          <Link className="route-link" to='/'><button className="route-button">Home</button></Link>
        </li>
        <li className="route-listing">
          <Link className="route-link" to='/shop'><button className="route-button">Shop</button></Link>
        </li>
        <li className="route-listing">
        <Link className="route-link" to='/shop'>
          <button className="route-button wallet-button">
            <img className='wallet' src={wallet} alt='cart'></img>
            <div className='circle'>{props.cartQuantity}</div>
          </button>
        </Link>
        </li>
      </ul>
      </header>
  )
}