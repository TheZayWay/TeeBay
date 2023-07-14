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
      <h2>Already a member? <Link to="/login">Sign in</Link></h2>
      <h1>Create an account</h1>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div></div>
          <label>
            <input 
              type="text"
              placeholder="First name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <input 
              type="text"
              placeholder="Last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {/* <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label> */}
          <label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {/* <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label> */}
          <button type="submit">Create account</button> 
          {/* isDisabled={isDisabled} */}
        </form>
        </div>
        or
        <div className="signup-socials-container">
          <button>Continue with Google</button>
          <button>Continue with Facebook</button>
          <button>Continue with Apple</button>
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


    