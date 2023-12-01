import React, { useState } from "react";
import { login } from "../../store/session";
import Footer from '../Footer'
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
      <p className='deadlinks' style={{position: "absolute", top:0, right: 0, color: "#0654ba", fontSize:"14px", fontWeight: 300, fontFamily: '"Market Sans", Arial, sans-serif'}}>Tell us what you think</p>
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
            <div className="errors">
              {errors.map((error, idx) => (
                <div key={idx}>{error}</div>
              ))}
            </div>
            <label>
              <input
                style={{marginTop: "1rem"}}
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
            <button 
              style={{marginTop: "1.2rem",backgroundColor: "#3665F3", color: "white", border: "none"}} 
              className="login-form-btns" type="submit"
              onClick={() => {
                setEmail('demo@aa.io');
                setPassword('password')
              }}>
                Demo User</button>
          </form>
        </div>  
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div className="login-or-line">
        <hr style={{width: "150px", border: "none", borderTop: "1px solid lightgray"}}></hr>
        <span style={{fontSize: "14px"}}>or</span>
        <hr style={{width: "150px", border: "none", borderTop: "1px solid lightgray"}}></hr>
      </div>
      </div>
      <div className="other-login-form-btns-container">
        <button style={{backgroundColor: "#4267b2", color: "white", border: "none", marginTop: "20px",marginBottom: "20px"}} className="login-form-btns1">
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
      <Footer />
    </>
  );
}

export default LoginFormPage;
