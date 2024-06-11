import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.svg";
import you from "../Assets/you.svg";
import face from "../Assets/face.svg";
import inst from "../Assets/inst.svg";
import Huawei_en from "../Assets/Huawei_en.webp";
import store from "../Assets/appStore.svg";
import play from "../Assets/playStore.svg";
import master from "../Assets/master.webp";
import visa from "../Assets/visa.webp";
import payment from "../Assets/payment.webp";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footleft">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="social">
            <p>Finds us on Social Media</p>
            <img src={you} alt="" />
            <img src={face} alt="" />
            <img src={inst} alt="" />
          </div>
          <div className="app">
            <p>Download our moblie app</p>
            <img src={store} alt="" />
            <img style={{ marginLeft: "7px" }} src={play} alt="" />
            <img
              style={{
                width: "120px",
                height: "44px",
                marginBottom: "13px",
                marginLeft: "7px",
              }}
              src={Huawei_en}
              alt=""
            />
          </div>
        </div>
        <div className="footright">
          <ul>
            <li>About Us</li>
            <li>Privacy & Security Policy</li>
            <li>Return & Refund Policy</li>
            <li>Sell on Zood</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <hr style={{ marginLeft: "7%", marginRight: "7%" }} />
      <div className="footlast">
        <p>&#169; 2024 Zood shopping for happiness</p>
        <div className="footcon">
          <img src={payment} alt="" />
          <img src={master} alt="" />
          <img src={visa} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
