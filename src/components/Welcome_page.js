import React from "react";
import './css/Welcome_page.css'

export default function Welcome_page() {
  return (
    <section id="welcome_page">
      <div id="shop_now">
        <h1>Futniture Collection</h1>
        <button id="shopNow" type="button">
          <a href="#product_display">Shop Now</a>
        </button>
      </div>
    </section>
  );
}
