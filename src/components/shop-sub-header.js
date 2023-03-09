import React from "react";

export const ShopHeader = (props) => {
  return (
    <div>
      <div> image of shopping cart</div>
      <div>{props.NoOfItems}</div>
    </div>
  )
}