import React from "react";
import "./CSS/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
