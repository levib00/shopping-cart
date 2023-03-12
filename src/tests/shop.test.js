import React from "react";
import { render, screen, act, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Shop } from "../components/shop";
import { CartItem } from "../components/cart-item";

describe ('cart properly renders', () => {
  it('cart Items are rendered when given', () => {
    const mockCartItem = {
      name: 'testName',
      price: 12,
      img: '',
      quantity: 1,
    }
    render(<Shop passedCartItems={[mockCartItem]}/>)
    expect(screen.getByText("testName")).toBeInTheDocument();
  });

  it('default message is rendered when no cart items are given', () => {
    render(<Shop passedCartItems={[]}/>)
    expect(screen.getByText("Your cart is empty!")).toBeInTheDocument();
  })
})
