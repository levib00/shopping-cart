import React, {useEffect, useState} from "react";
import { QuantityInput } from "./quantity-input";

export const ShopItem = (props) => {
  const [quantity, setQuantity] = useState('')
  const [total, setTotal] = useState(quantity * props.price)

  const addToCart = () => { // TODO: allow this to update values/ add more items to the same cart item.
    const newObject = {
      name: props.name,
      price: props.price,
      img: props.img,
      quantity: quantity
    }
    props.setCartItems([...props.cartItems, newObject])
  }

  useEffect(() => {
    let newTotal = quantity * props.price
    setTotal(newTotal.toFixed(2))
  }, [quantity, props.price]);
  
  return (
    <div>
      <img src={props.img} alt={props.name}/>
      <span>
        <h2>{props.name}</h2>
        <h2>{props.price}</h2>
      </span>
      <label htmlFor='quantity'>quantity:</label>
      <QuantityInput setQuantity={setQuantity} quantity={quantity}/>
      <div>{`Total :$${total}`}</div>
      <span>
        <button onClick={addToCart}>Add To Cart</button>
      </span>
    </div>
  )
}