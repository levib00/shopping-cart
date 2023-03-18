import React from "react"
import { Link } from "react-router-dom"
import  '../styles/styles.css'

export const Main = () => {
  return (
    <div className='main'>
      <div className='text-container'>
        <h2 className='tagline'>Gain Access To The Hidden Labs</h2>
        <p className='description'>You wont find colored keycards at a cheaper price anywhere else (unless someone messes up a flea market listing)</p>
        <Link className="shop-now" to='/shop'><button className='shop-button'>Shop Now</button></Link>
      </div>
    </div>
  )
}