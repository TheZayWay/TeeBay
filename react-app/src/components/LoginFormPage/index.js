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
      <p>Tell us what you think</p>
      <h1>Hello</h1>
      <p>Sign in to TeeBay or <span><Link to='/signup'>create an account</Link></span></p>
      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
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

export default LoginFormPage;
