import React from "react";
import { ShopItem } from "./shop-item";

export const Shop = () => {
  const items = [
    {
      name: 'Access Keycard',
      price: 129.99,
      img: require('../images/access-card.jpg')
    },
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
      img: require('../images/black-card.jpg')
    },
    {
      name: 'Blue card',
      price: 1499.99,
      img: require('../images/blue-card.jpg')
    },
    {
      name: 'Red Keycard',
      price: 2199.99,
      img: require('../images/red-card.jpg')
    },
  ]

  
  return (
    <div>
      <div>
        {items.map(item => <ShopItem key={item.name} price={item.price} img={item.img} name={item.name}/>)}
      </div>
    </div>
  )
}