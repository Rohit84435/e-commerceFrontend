import React, { useRef, useState } from "react";
import "./SubBar.css";
import box from "/Users/rohit/Desktop/e-commerce/src/components/Assets/box.svg";
import { Link } from "react-router-dom";
// import Select from "react-dropdown-select";
function SubBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  const options = [
    "Shop",
    "Men's Clothing",
    "Women's Clothing",
    "Kid's Clothing",
    "Electronic Devices",
  ];

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  // const [menu, setMenu] = useState("");
  return (
    <div className="subBar">
      <ul className="sub-menu">
        <div className="drop">
          <span ref={imgRef} onClick={() => setOpen(!open)} className="categ">
            <img src={box} alt="" />
            All category
          </span>
          {open && (
            <div ref={menuRef} className="list">
              <ul>
                {options.map((val) => (
                  <li onClick={() => setOpen(false)} key={val}>
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Shop
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/mens">
            Men's Clothing
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/womens">
            Women's Clothing
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/kids">
            Kid's Clothing
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SubBar;
