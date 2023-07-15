import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {
        const data = await dispatch(signUp(first_name, last_name, email, password)); //username
        if (data) {
          setErrors(data)
        }
    // } else {
    //     setErrors(['Confirm Password field must be the same as the Password field']);
    // }
  };

  // const isDisabled = first_name.length < 1 || last_name.length < 1 || email.length < 6 || password.length < 6;

  return (
    <>
      <Link to="/">Home</Link>
      <h2 style={{fontSize: "16px", fontWeight: "300", fontFamily: '"Market Sans", Arial, sans-serif'}}>Already a member? <Link style={{color: "#0654ba"}} to="/login">Sign in</Link></h2>
      <h1 style={{textAlign: "center", fontFamily: '"Market Sans", Arial, sans-serif'}}>Create an account</h1>
      <div className="whole-signup-page">
        <div className="signup-form-container">
          <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className="signup-form-fullname">
              <label>
                <input 
                  type="text"
                  placeholder="First name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="signup-form-inputs1"
                />
              </label>
              <label>
                <input 
                  type="text"
                  placeholder="Last name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  className="signup-form-inputs1"
                />
              </label>
            </div>
            <label>
              <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="signup-form-inputs2"
              />
            </label>
            <label>
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="signup-form-inputs2"
              />
            </label>
            <button style={{backgroundColor: "#3665F3", color: "white", border: "none"}} className="signup-form-btns" type="submit">Create account</button> 
          </form>
        </div>
        or
        <div style={{display: "flex", flexDirection: "column"}} className="signup-socials-container">
          <button style={{backgroundColor: "#4267b2", color: "white", border: "none", marginBottom: "20px"}} className="signup-form-btns1">Continue with Google</button>
          <button style={{backgroundColor: "white", color: "#444", border: "1px solid grey", marginBottom: "20px"}} className="signup-form-btns1">Continue with Facebook</button>
          <button style={{backgroundColor: "white", color: "#444", border: "1px solid grey"}} className="signup-form-btns1">Continue with Apple</button>
        </div>
      </div>
      <hr></hr>
      <footer>Copyright © 2023 TeeBay All Rights Reserved. 
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

export default SignupFormPage;


    