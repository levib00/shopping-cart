import React from 'react';

export const QuantityInput = (props) => {
  let setQuantity = null;
  if (props.cartItems) {
    setQuantity = (newQuantity) => {
      const thisItemIndex = props.cartItems.indexOf(props.thisItem)
      const cartCopy = [...props.cartItems]
      cartCopy[thisItemIndex].quantity = newQuantity
      props.setCartItems(cartCopy)
    }
  } else {
    setQuantity = props.setQuantity
  }
  

  const incrementQuantity = () => {
    let newQuantity = parseInt(props.quantity + 1)
    if (newQuantity <= 25) {
      setQuantity(newQuantity) ;
    } else {
      setQuantity(25)
    }
  }

  const decrementQuantity = () => {  
    const newQuantity = parseInt(props.quantity - 1)
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity (0)
    }
  }

  return (
    <div>
      <input
        id="quantity"
        value={props.quantity}
        onChange={(e) => {
          const re = /^[0-9\b]+$/;
          if ( re.test(e.target.value)) {
            if (parseInt(e.target.value) > 26) {
              setQuantity(25)
            } else if (parseInt(e.target.value) < 0) {
              setQuantity(0)
            } else {
              setQuantity(parseInt(e.target.value))
            }
          } else if (e.target.value === '') {
            setQuantity(e.target.value)
          }
        }}
      />
      <button onClick={incrementQuantity}>+</button>
      <button onClick={decrementQuantity}>-</button>
    </div>
  )
}