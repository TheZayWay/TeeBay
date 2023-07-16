import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <>
      <p style={{position: "absolute", top:0, right: 0, color: "#0654ba", fontSize:"14px", fontWeight: 300, fontFamily: '"Market Sans", Arial, sans-serif'}}>Tell us what you think</p>
      <Link style={{paddingLeft: "20px", fontFamily: "Roboto, 'Courier New', monospace", textDecoration: "none", fontWeight: "bold", fontSize: "36px"}} to="/">
          <span style={{color: "#0064D2"}}>T</span>
          <span style={{color: "#FDB900"}}>e</span>
          <span style={{color: "#00B140"}}>e</span>
          <span style={{color: "#E53238"}}>B</span>
          <span style={{color: "#0064D2"}}>a</span>
          <span style={{color: "#FDB900"}}>y</span>
        </Link>
      <div className="login-form-container">
        <h1 className="login-header">Hello</h1>
        <span style={{fontSize: "14px", fontWeight: 550}}>Sign in to TeeBay or <span><Link style={{color: "#3665f3"}}to='/signup'>create an account</Link></span></span>
        <div>
          <form className="login-form-info" onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="login-form-inputs"
              />
            </label>
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="login-form-inputs"
              />
            </label>
            <button style={{backgroundColor: "#3665F3", color: "white", border: "none"}} className="login-form-btns" type="submit">Sign In</button>
          </form>
        </div>  
      </div>
      <div style={{marginLeft: "460px"}}>
      <div className="login-or-line">
        <hr style={{width: "150px", border: "none", borderTop: "1px solid lightgray"}}></hr>
          <span style={{fontSize: "14px"}}>or</span>
          <hr style={{width: "150px", border: "none", borderTop: "1px solid lightgray"}}></hr>
      </div>
      </div>
      <div className="other-login-form-btns-container">
        <button style={{backgroundColor: "#4267b2", color: "white", border: "none", marginBottom: "20px"}} className="login-form-btns1">
          <i className="fab fa-facebook-f"></i>
          <span style={{marginLeft: "20px"}}>Sign in with Facebook</span>
        </button>
        <button style={{backgroundColor: "white", color: "#444", border: "1px solid grey", marginBottom: "20px"}} className="login-form-btns1">
          <i className="fab fa-google"></i>
          <span style={{marginLeft: "20px", marginRight: "20px"}}>Sign in with Google</span>
        </button> 
        <button style={{backgroundColor: "white", color: "#444", border: "1px solid grey"}} className="login-form-btns1">
          <i className="fab fa-apple"></i>
          <span style={{marginLeft: "24px", marginRight: "26px"}}>Sign in with Apple</span>
        </button>         
      </div>
      <hr style={{marginTop: "50px"}}></hr>
      <footer className="login-form-footer-container">
        Copyright © 2023 TeeBay All Rights Reserved. 
        <span className="login-form-footer-span">Accessibility,</span>
        <span className="login-form-footer-span">User Agreement,</span>
        <span className="login-form-footer-span">Privacy,</span>
        <span className="login-form-footer-span">Payments</span>
        <span className="login-form-footer-span">Terms of Use,</span>
        <span className="login-form-footer-span">Cookies,</span>
        <span className="login-form-footer-span">Your Privacy Choices</span>
      </footer>
    </>
  );
}

export default LoginFormPage;
