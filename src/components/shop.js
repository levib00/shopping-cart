import React, { useEffect } from 'react';
import { ShopItem } from './shop-item';
import { CartItem } from './cart-item';
import '../styles/styles.css'

export const Shop = (props) => {
  const {cartItems, setCartItems} = props
  
  const items = [
    {
      name: 'Access Keycard',
      price: 199.99,
      img: require('../assets/images/access-card.jpg')
    },
    {
      name: 'Yellow Keycard',
      price: 1099.99,
      img: require('../assets/images/yellow-card.jpg')
    },
    {
      name: 'Green Keycard',
      price: 1399.99,
      img: require('../assets/images/green-card.jpg')
    },
    {
      name: 'Violet Keycard',
      price: 1499.99,
      img: require('../assets/images/violet-card.jpg')
    },
    {
      name: 'Black Keycard',
      price: 999.99,
      img: require('../assets/images/black-card.jpg'),
    },
    {
      name: 'Blue card',
      price: 1499.99,
      img: require('../assets/images/blue-card.jpg'),
    },
    {
      name: 'Red Keycard',
      price: 2199.99,
      img: require('../assets/images/red-card.jpg'),
    },
  ]

  const calcTotal = () => {
    // Calculate the total of all items in the cart.
    let price = 0;
    for (let i = 0; i < cartItems.length; i++) {
      price = price + (cartItems[i].price * cartItems[i].quantity)
    }
    return price.toFixed(2)
  }

  const removeFromCart = (itemName) => {
    // Remove item from cart with a button press.
    const cartCopy = [...cartItems]
    const index = cartCopy.findIndex(item => item.name === itemName)
    cartCopy.splice(index, 1);
    setCartItems(cartCopy)
  }

  const renderCart = () => {
    if (cartItems.length === 0) {
      //If cart is empty, print a message to let the user know
      return <div className='cart-text'>Your cart is empty!</div>
    } else {
      // if cart has items, render the items.
      return (<div className='cart-item-container'>
        <div className='cart-text'>Total: $ {calcTotal()} <button className='checkout-btn' onClick={() => alert('Please provide your Terragroup employee number')}>Checkout</button></div>
        {cartItems.map(cartItem => <CartItem key={`cart-${cartItem.name}`} remove={removeFromCart} thisItem={cartItem} cartItems={cartItems} setCartItems={setCartItems} price={cartItem.price} img={cartItem.img} name={cartItem.name} quantity={cartItem.quantity} />)}
      </div>)
    }
  }

  useEffect(() => {
    //Calculates the total number of items in the cart.
    let cartQuantity = 0
    for (let i = 0; i < cartItems.length; i++) {
      cartQuantity = cartQuantity + cartItems[i].quantity
    }
    props.setCartQuantity(cartQuantity)
  })

  return (
    <div className='shop'>
      <div className='card-grid'>
        {items.map(item => <ShopItem cartItems={cartItems} setCartItems={setCartItems} key={item.name} price={item.price} img={item.img} name={item.name}/>)}
      </div>
      <div className='cart'>
        {renderCart()}
      </div>
    </div>
  )
}