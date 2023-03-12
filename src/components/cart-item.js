import React from "react";
import { QuantityInput } from "./quantity-input";

export const CartItem = (props) => {
  return (
    <div>
      <div>
        <div>
          <img src={props.img} alt={props.name}></img>
        </div>
        <div>
          {props.name}
        </div>
        <QuantityInput thisItem={props.thisItem} cartItems={props.cartItems} setCartItems={props.setCartItems} price={props.price} quantity={props.quantity}/>
        <div>
          {(props.price * props.quantity).toFixed(2)}
        </div>
        <button>
          x
        </button>
      </div>
    </div>
  )
}
