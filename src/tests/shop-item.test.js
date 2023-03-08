/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { getByRole, render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ShopItem } from '../components/shop-item'
import { getValue } from "@testing-library/user-event/dist/utils";

describe("Favorite Input", () => {
  it('description', () => {
    const formatMock = 0;
    expect(formatMock).toBeFalsy();
  });
});

describe('Test quantity input', () => {
  
  it('test increment button', () => {
    render(<ShopItem />)
    const incrementBtn = screen.getByRole('button', {name: '+'})
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      for (let i = 0; i < 3; i++) {
        userEvent.click(incrementBtn)
      }
    });
    const quantity = screen.getByRole('textbox', {name:'quantity:'}).value
    expect(quantity).toBe('3')
    
  })

  it('test decrement button', () => {
    render(<ShopItem />)
    const incrementBtn = screen.getByRole('button', {name: '+'})
    act(() => {
      for (let i = 0; i < 3; i++) {
        userEvent.click(incrementBtn)
      }
    });
    const decrementBtn = screen.getByRole('button', {name: '-'})
    act(() => {
      for (let i = 0; i < 3; i++) {
        userEvent.click(decrementBtn)
      }
    });
    const quantity = screen.getByRole('textbox', {name:'quantity:'}).value
    expect(quantity).toBe('0')
  })
  
  it('prevent negative quantities.', () => {
    render (<ShopItem />)
    const decrementBtn = screen.getByRole('button', {name: '-'})
    act(() => {
      for (let i = 0; i < 3; i++) {
        userEvent.click(decrementBtn)
      }
    });
    const quantity = screen.getByRole('textbox', {name:'quantity:'}).value
    expect(quantity).toBe('0')
  })

  it('prevents quantities more than 25.', () => {
    render (<ShopItem />)
    const incrementBtn = screen.getByRole('button', {name: '+'})
    act(() => {
      for (let i = 0; i < 30; i++) {
        userEvent.click(incrementBtn)
      }
    });
    const quantity = screen.getByRole('textbox', {name:'quantity:'}).value
    expect(quantity).toBe('25')
  })
})

describe("Typed values", () => {
  it('max quantity works with typed values', () => {
    render (<ShopItem />)
    const quantity = screen.getByRole('textbox', {name:'quantity:'})
    act(() => {
      userEvent.type(quantity, '30')
    });
    expect(quantity.value).toBe('25')
  });

  it('min quantity works with typed values', () => {
    render (<ShopItem />)
    const quantity = screen.getByRole('textbox', {name:'quantity:'})
    act(() => {
        userEvent.type(quantity, '-30')
    });
    expect(parseInt(quantity.value)).toBeGreaterThan(-1)
  });

  it('input will not accept non-numbers', () => {
    render (<ShopItem />)
    const quantity = screen.getByRole('textbox', {name:'quantity:'})
    act(() => {
      userEvent.type(quantity, 'w];,-=+_9')
    });
    expect(quantity.value).toBe('9')
  });
});