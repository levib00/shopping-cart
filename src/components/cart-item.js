import React from "react";
import { QuantityInput } from "./quantity-input";

export const CartItem = (props) => {
  return (
    <div className='cart-item'>
      <img className='cart-img' src={props.img} alt={props.name}></img>
      <div>
        {props.name}
      </div>
      <QuantityInput thisItem={props.thisItem} cartItems={props.cartItems} setCartItems={props.setCartItems} price={props.price} quantity={props.quantity}/>
      <div className='cart-price'>
        $ {(props.price * props.quantity).toFixed(2)}
      </div>
      <button className='remove-btn' onClick={() => props.remove(props.name)}>
        x
      </button>
    </div>
  )
}
