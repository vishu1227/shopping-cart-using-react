import React from "react";
import Cart from "./cart";
import './css/Product.css'

export default function Product(props) {
  return (
    <>
      <img src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className="add_to_cart">
        <p>&dollar;{props.price}</p>
        <button
          type="button"
          className="btn-add-to-cart"
          // data-name="${title}"
          // data-price="${price}"
          // onclick="addToCart(this)"
        >
          <Cart />
          Add to Cart
        </button>
      </div>
    </>
  );
}
