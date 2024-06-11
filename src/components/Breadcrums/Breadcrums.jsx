import React from "react";
import "./Breadcrums.css";
// import arrow_icon from "../Assets/arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      {console.log(product)}
      HOME &gt; SHOP &gt;
      {product.category}
      &gt;
      {product.name}
    </div>
  );
};

export default Breadcrums;
