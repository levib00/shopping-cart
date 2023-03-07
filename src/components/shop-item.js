import React, {useEffect, useState} from "react";

export const ShopItem = (props) => {
  const [quantity, setQuantity] = useState('')
  const [total, setTotal] = useState(quantity * props.price)

  const incrementQuantity = () => {
    let newQuantity = 0
    if (quantity !== '') {
      newQuantity = parseInt(quantity.valueOf())
    }    
    setQuantity(newQuantity + 1)
  }

  const decrementQuantity = () => {
    let newQuantity = 0
    if (quantity !== '') {
      newQuantity = parseInt(quantity.valueOf())
    }    
    setQuantity(newQuantity - 1)
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
      <div>quantity:</div>
      <input
      value={quantity}
      onChange={(e) => {
        console.log(e.target.value)
        const re = /^[0-9\b]+$/;
        if ( re.test(e.target.value)) {
           setQuantity(parseInt(e.target.value))
        } else if (e.target.value === '') {
          setQuantity(e.target.value)
        }
      }}
      />
      <button onClick={incrementQuantity}>+</button>
      <button onClick={decrementQuantity}>-</button>
      <div>{`Total :$${total}`}</div>
      <span>
        <button>Add To Cart</button>
        <button>Checkout</button>
        </span>
    </div>
  )
}