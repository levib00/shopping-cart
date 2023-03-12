/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { QuantityInput } from '../components/quantity-input'
import { getValue } from "@testing-library/user-event/dist/utils";

describe('Test quantity input', () => {
  
  let mockItem = [{
    name: '',
    price: 1,
    img: require('../images/access-card.jpg'),
    quantity:1
  }]

  const mockSetCart = jest.fn()

  it('test increment button', () => {
    render(<QuantityInput thisItem={mockItem[0]} cartItems={mockItem} setCartItems={mockSetCart} quantity={mockItem[0].quantity} />)
    
    const incrementBtn = screen.getByRole('button', {name: '+'})
      for (let i = 0; i < 3; i++) {
        act(() => {
          userEvent.click(incrementBtn)
        });
      }
    expect(mockSetCart).toBeCalledTimes(3)
    
  })

  it('test decrement button', () => {
    render(<QuantityInput thisItem={mockItem[0]} cartItems={mockItem} setCartItems={mockSetCart} quantity={mockItem[0].quantity} />)

    const decrementBtn = screen.getByRole('button', {name: '+'})
      for (let i = 0; i < 3; i++) {
        act(() => {
          userEvent.click(decrementBtn)
        });
      }
    expect(mockSetCart).toBeCalledTimes(3)
  })
  
  it('prevent negative quantities.', () => {
    let mockItem = [{
      name: 'Access Keycard',
      price: 129.99,
      img: require('../images/access-card.jpg'),
      quantity:''
    }]
  
    const mockSetCart = (newArr) => {
      mockItem = newArr
    }
    const {rerender} = render (<QuantityInput thisItem={mockItem[0]} cartItems={mockItem} setCartItems={mockSetCart} quantity={mockItem[0].quantity}/>)
    const decrementBtn = screen.getByRole('button', {name: '-'})
    act(() => {
      userEvent.click(decrementBtn)
    });
    rerender(<QuantityInput thisItem={mockItem[0]} cartItems={mockItem} setCartItems={mockSetCart} quantity={mockItem[0].quantity}/>)
    const quantity = screen.getByRole('textbox', {name:'Quantity:'}).value
    expect(quantity).toBe('0')
  })

  it('prevents quantities more than 25.', () => {
    
    let mockItem = [{
      name: 'Access Keycard',
      price: 129.99,
      img: require('../images/access-card.jpg'),
      quantity: 25
    }]
  
    const mockSetCart = (newArr) => {
      mockItem = newArr
    }

    const {rerender} = render (<QuantityInput thisItem={mockItem[0]} cartItems={mockItem} setCartItems={mockSetCart} quantity={mockItem[0].quantity}/>)
    const incrementBtn = screen.getByRole('button', {name: '+'})
    act(() => {
      userEvent.click(incrementBtn)
    });
    rerender(<QuantityInput thisItem={mockItem[0]} cartItems={mockItem} setCartItems={mockSetCart} quantity={mockItem[0].quantity}/>)
    const quantity = screen.getByRole('textbox', {name:'Quantity:'}).value
    expect(quantity).toBe('25')
  })
})

