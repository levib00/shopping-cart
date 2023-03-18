import React from 'react';

export const QuantityInput = (props) => {
  let setQuantity = null;
   if (props.cartItems) {
     // sets quantity if QuantityInput is placed cartItem
     setQuantity = (newQuantity) => {
       const thisItemIndex = props.cartItems.indexOf(props.thisItem)
       const cartCopy = [...props.cartItems]
       cartCopy[thisItemIndex].quantity = newQuantity
       props.setCartItems(cartCopy)
     }
   } else {
    //sets Quantity if Quantity input is in item card
    setQuantity = props.setQuantity
  }
  
  const incrementQuantity = () => { 
    //increments input value on button press
    let newQuantity = parseInt(props.quantity + 1)
    if (newQuantity <= 25) {
      setQuantity(newQuantity) ;
    } else {
      setQuantity(25)
    }
  }

  const decrementQuantity = () => { 
    //decrements input value on button press
    const newQuantity = parseInt(props.quantity - 1)
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity(0)
    }
  }

  return (
    <div className='quantity-container'>
      <label className='quantity-label' htmlFor='quantity'>Quantity:</label>
      <input
        className='quantity-input'
        id="quantity"
        value={props.quantity}
        onChange={(e) => { 
          /*disallows non-numbers in input, and ensures that input is 0 or more, but less than 25.*/
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
      <div className='button-container'>
        <button className='quantity-button' onClick={incrementQuantity}>⌃</button>
        <button className='quantity-button' onClick={decrementQuantity}>⌄</button>
      </div>
    </div>
  )
}