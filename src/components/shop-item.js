import React, { useState } from "react";
import { QuantityInput } from "./quantity-input";
import '../styles/styles.css'

export const ShopItem = (props) => {
  const [quantity, setQuantity] = useState('')

  const addToCart = () => {
    const newObject = {
      name: props.name,
      price: props.price,
      img: props.img,
      quantity: quantity
    }
    const index = props.cartItems.findIndex(item => item.name === props.name)
    if (index > -1) {
      const cartItemsCopy = [...props.cartItems]
      cartItemsCopy[index].quantity = parseInt(cartItemsCopy[index].quantity + quantity)
      if (cartItemsCopy[index].quantity > 25) {
        cartItemsCopy[index].quantity = 25;
      } 
      props.setCartItems(cartItemsCopy)
    } else {
      props.setCartItems([...props.cartItems, newObject])
    }
  }
  
  return (
    <div className='item-card'>
      <img className='item-img' src={props.img} alt={props.name}/>
      <div className='card-text'>
        <div>
          <h2>{props.name}</h2>
          <h2>{`$ ${props.price}`}</h2>
        </div>
        <QuantityInput setQuantity={setQuantity} quantity={quantity}/>
        <div className='position-cart-btn'>
          <button className='add-to-cart-btn' onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}