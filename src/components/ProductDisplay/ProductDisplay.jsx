import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import dull_star_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img"></div>
        <img className="productdisplay-main-img" src={product.image} alt="" />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={dull_star_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="product-display-right-prices-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-prices-new">
            ${product.old_price}
          </div>
        </div>
        <div className="productDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          impedit quae aliquid ipsam pariatur cumque dolor, numquam deleniti non
          sapiente, perspiciatis deserunt delectus accusantium eligendi aut
          incidunt iusto. Provident, earum? Laudantium in fuga voluptatibus
          expedita, ut sapiente optio corporis corrupti, iure esse officia
          blanditiis dolor et saepe itaque dolore, earum ipsam perspiciatis?
          Sint aut praesentium nesciunt fugiat officiis aspernatur quibusdam!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tag: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
