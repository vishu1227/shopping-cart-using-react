import React from "react";
import Cart from "./cart";

export default function Product(props) {
  return (
    <>
      <img src={props.imageUrl} alt="" />
      <p>${title}</p>
      <div className="add_to_cart">
        <p>&dollar;${price}</p>
        <button
          type="button"
          className="btn-add-to-cart"
          data-name="${title}"
          data-price="${price}"
          onclick="addToCart(this)"
        >
          <Cart />
          Add to Cart
        </button>
      </div>
    </>
  );
}
