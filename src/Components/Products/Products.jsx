import React from "react";
import "./Products.css";
import Welcome from "../../assets/welcome.jpg";

const Products = (props) => {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Read more</button>
      </p>
    </div>
  );
};

export default Products;
