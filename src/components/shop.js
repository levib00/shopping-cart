import React, { useState } from 'react';
import { ShopItem } from './shop-item';
import { CartItem } from './cart-item';

export const Shop = (props) => {
  const {passedCartItems} = props
  const [cartItems,  setCartItems] = useState(passedCartItems)

  const items = [
    {
      name: 'Yellow Keycard',
      price: 1099.99,
      img: require('../images/yellow-card.jpg')
    },
    {
      name: 'Green Keycard',
      price: 1399.99,
      img: require('../images/green-card.jpg')
    },
    {
      name: 'Violet Keycard',
      price: 1499.99,
      img: require('../images/violet-card.jpg')
    },
    {
      name: 'Black Keycard',
      price: 999.99,
      img: require('../images/black-card.jpg'),
    },
    {
      name: 'Blue card',
      price: 1499.99,
      img: require('../images/blue-card.jpg'),
    },
    {
      name: 'Red Keycard',
      price: 2199.99,
      img: require('../images/red-card.jpg'),
    },
  ]

  const renderCart = () => {
    if (cartItems.length === 0) {
      return 'Your cart is empty!'
    } else {
      return cartItems.map(cartItem => <CartItem key={`cart-${cartItem.name}`} thisItem={cartItem} cartItems={cartItems} setCartItems={setCartItems} price={cartItem.price} img={cartItem.img} name={cartItem.name} quantity={cartItem.quantity} />)
    }
  }

  return (
    <div>
      <div>
        {items.map(item => <ShopItem cartItems={cartItems} setCartItems={setCartItems} key={item.name} price={item.price} img={item.img} name={item.name}/>)}
      </div>
      <div>
        {renderCart()}
      </div>
    </div>
  )
}