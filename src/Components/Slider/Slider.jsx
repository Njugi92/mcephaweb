import React from "react";
import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "../Products/Products";
import { productData, responsive } from "./data";

const Slider = () => {
  const product = productData.map((item) => (
    <Products
      name={item.name}
      url={item.imgUrl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div className="app">
      <h1>Our Services</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default Slider;
