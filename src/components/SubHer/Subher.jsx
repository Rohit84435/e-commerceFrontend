import React from "react";
import "./Subher.css";
import con1 from "../Assets/con1.png";
import con2 from "../Assets/con2.png";
import con3 from "../Assets/con3.png";
import con4 from "../Assets/con4.png";
import con5 from "../Assets/con5.png";
import con6 from "../Assets/con6.png";
import con7 from "../Assets/con7.png";
import con8 from "../Assets/con8.png";
const Subher = () => {
  return (
    <div className="subher">
      <div className="part1">
        <span>
          <img src={con1} alt="" />
          <p>Pools</p>
        </span>
        <span>
          <img src={con2} alt="" />
          <p>Local Sellers</p>
        </span>
        <span>
          <img src={con3} alt="" />
          <p>Samsung Installments</p>
        </span>
        <span>
          <img src={con4} alt="" />
          <p>Smart Phone</p>
        </span>

        <span>
          <img src={con5} alt="" />
          <p>Laptop</p>
        </span>
        <span>
          <img src={con6} alt="" />
          <p>Comin Insurence</p>
        </span>
        <span>
          <img src={con8} alt="" />
          <p>TV</p>
        </span>
        <span>
          <img src={con7} alt="" />
          <p>Fan</p>
        </span>
      </div>
    </div>
  );
};

export default Subher;
