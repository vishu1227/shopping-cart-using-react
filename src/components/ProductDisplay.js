import React from "react";
import './css/ProductDisplay.css';
// import productData from './ProductsData/products.json'
import Product from "./Product";

export default function ProductDisplay() {
  return (
    <>
      <section id="product_display">
        <h1>Our Products</h1>
        <Product imageUrl='./Images/hero-bcg.jpeg' title='Bed' price='200'/>
      </section>
    </>
  );
}